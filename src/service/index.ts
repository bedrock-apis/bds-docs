import { createServer } from 'node:http';
import { PORT, IP_ADDRESS, IPacket, PacketBodyType } from '../../shared';

export class WebServer implements AsyncIterableIterator<string> {
   public readonly server;
   private responses: string[] = [];
   private resolvers: ((data?: string) => void)[] = [];
   private task;
   private isClosed = false;
   public constructor(port: number, timeout: number) {
      this.server = createServer(async (res, resp) => {
         let data = [];
         for await (const chunk of res) data.push(chunk);
         let resolver = this.resolvers.shift();
         if (resolver) resolver(data.join(''));
         else this.responses.push(data.join(''));
         resp.statusCode = 200;
         resp.end();
      });
      this.server.listen(port, IP_ADDRESS);
      this.task = setTimeout(() => {
         this.return();
         this.task === null;
      }, timeout);
   }
   public wasTerminatedByTimeout() {
      return this.task === null;
   }
   async next(): Promise<IteratorResult<string, unknown>> {
      if (this.isClosed) return { value: undefined, done: true };
      const v = this.responses.shift();
      if (v) return { value: v, done: false };
      return new Promise(res => {
         this.resolvers.push(s => res(s ? { value: s, done: false } : { value: undefined, done: true }));
      });
   }
   async return(): Promise<IteratorResult<string, any>> {
      if (this.isClosed) throw new ReferenceError('This web server is already closed');
      this.isClosed = true;
      let v = null;
      while ((v = this.resolvers.shift())) v();
      this.responses = [];
      this.server.close();
      clearTimeout(this.task);
      return { value: undefined, done: true };
   }
   public [Symbol.asyncIterator](): this {
      return this;
   }
}
