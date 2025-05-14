//@ts-nocheck
const { exit } = require('process');
const { deflateRawSync } = require('zlib');
const { exec } = require('node:child_process');
const { Download, SafeDownloadContent } = require('./download.js');
const os = require('os');
const { promises, existsSync, readdirSync } = require('fs');
const path = require('path');
const { ScriptModule } = require('./d.tsGenerator.js');
const { writeFile } = require('fs/promises');

const bds_versions_link = 'https://raw.githubusercontent.com/Bedrock-OSS/BDS-Versions/main/versions.json';
const exist_link = branch => `https://raw.githubusercontent.com/Bedrock-APIs/bds-docs/${branch}/exist.json`;
const github_notfound = '404: Not Found';
const bin = './bin';
const test_config = 'test_config.json';
const DEBUG = false;
const test_config_data = JSON.stringify({
   generate_documentation: true,
});
const docs_generated = [bin, 'docs'].join('/');
const docs_cleaned = './docs';
const declarations = './script_types';
const version_registred = {
   'build-version': '1.0.0.0',
   'version': '1.0.0.0',
   'flags': ['generated_types', 'script_module_list', 'module_mapping', 'block_data2'],
   'script_modules': [],
   'script_modules_mapping': {},
};
const git_ignore = `
bin/
bds/
node_modules/
private/
test/
`;
const OSSYSTEM = os.platform() === 'win32' ? 'win' : 'linux';

CompareLatestVersions();
//runDocs("preview","1.21.30.23");

async function Preload(v) {
   if (DEBUG) return;
   console.log("Loggin as 'Meta Generator Bot'");
   await System('git config --global user.name "Meta Generator Bot"');
   await System('git config --global user.email "meta_generator@lmao.com"');
   console.log("Logged as 'Meta Generator Bot'");
   await System(`git fetch`);
   await System(`git checkout ${v} -f`);
   await writeFile('.gitignore', git_ignore);
   console.log('GIT INGORE WRITTEN!');
}

async function Finish(v, version) {
   console.log('Versions registred');
   await promises.writeFile('exist.json', JSON.stringify(version_registred, null, '  '));
   if (DEBUG) return;
   console.log("Loggin as 'Documentation Manager Bot'");
   await System('git config --global user.name "Documentation Manager Bot"');
   await System('git config --global user.email "conmaster2112@gmail.com"');
   await System(`git checkout ${v}`);
   console.log('Commit');
   await System('git add .');
   await System(`git commit -m \"New ${v} v${v === 'stable' ? GetEngine(version) : version}\"`);
   console.log('Push');
   await System('git push --force origin ' + v);
   if (v === 'stable') {
      console.log('New Branch stable-' + GetEngine(version));
      await System('git checkout -b stable-' + GetEngine(version));
      await System('git push -u origin stable-' + GetEngine(version));
   }
   console.log('Done...');
}
async function Generate(v, version) {
   if (!DEBUG) {
      globalThis.console.log('Moving from main branch to ' + v);
      await System(`git checkout ${v} || git checkout -b ${v}`);
   }
   const console = Logger('[BDS Downloader]');
   console.log('Downloading started. . .');
   await Download('bin', version, OSSYSTEM, v.toLowerCase() === 'preview').catch(er => {
      console.error(er.message);
      console.error('Fails to download bds: ' + version);
      exit(1);
   });
   console.log('Successfully Downloaded: ' + OSSYSTEM);
   await runDocs(v, version).catch(er => {
      globalThis.console.error(er.message);
      exit(1);
   });
}
async function runDocs(v, version) {
   const console = Logger('[Docs Generator]');
   console.log('Writing test_config.json');
   await promises.writeFile([bin, test_config].join('/'), test_config_data);
   console.log('Executing BDS in ' + OSSYSTEM);
   globalThis.console.log('///////////////////////// Bedrock Dedicated Server ///////////////////////////');
   const time = Date.now();
   if (OSSYSTEM === 'win') {
      await System('call bedrock_server.exe', bin, 60_000, '   ').catch(er => {
         console.error(er.message);
         exit(1);
      });
   } else {
      await System('chmod +x ./bin/bedrock_server', '.', 5_000)
         .catch()
         .catch(er => {
            console.error(er.message);
            exit(1);
         });
      await System('LD_LIBRARY_PATH=. ./bedrock_server', bin, 60_000, '    ').catch(er => {
         console.error(er.message);
         exit(1);
      });
   }
   globalThis.console.log('///////////////////////// Bedrock Dedicated Server ///////////////////////////');
   if (existsSync(docs_generated)) {
      console.log('Successfully Generated in ' + (Date.now() - time) + 'ms');
      await CopyFiles(v, version).catch(er => {
         global.console.error(er.message);
         exit(1);
      });
      await DoFiles(docs_generated + '/script_modules', declarations, (file, data) => {
         const Json = JSON.parse(data.toString());
         const script_module = new ScriptModule(Json);
         const { name, uuid, version } = script_module;
         const ddd = (version_registred.script_modules_mapping[name] = version_registred.script_modules_mapping[
            name
         ] ?? { versions: [] });
         ddd.uuid = uuid;
         ddd.versions.push(version);
         version_registred.script_modules.push(file);
         return [file.replace('.json', '.d.ts'), script_module.toString()];
      }).catch(er => {
         global.console.error(er.message);
         exit(1);
      });
      await DoFiles(docs_generated + '/vanilladata_modules', 'data', (file, data, createFile) => {
         switch (file) {
            case 'mojang-blocks.json':
               const source = JSON.parse(data.toString());
               const result = { states: {}, blocks: {} };
               source.block_properties.forEach(e => {
                  e.values = e.values.map(e => e.value);
                  result.states[e.name] = e;
               });
               const stream = new Stream(Buffer.allocUnsafe(255), 0);
               source.data_items.forEach(e => {
                  const { name, raw_id, serialization_id, properties } = e;
                  const data = (result.blocks[e.name] = Object.assign({ name, serialization_id, raw_id }, e));
                  data.properties = properties.map(e => e.name);
                  const permutations = (data.permutations = []);
                  if (!data.properties.length) {
                     stream.writeCompoudTag({ name, states: {} }, '');
                     const buffer = stream.getWritenBytes();
                     data.key = buffer.toString('base64');
                     data.hash = HashPermutation(buffer);
                     stream.offset = 0;
                  } else {
                     for (const s of RecursivePermutations(
                        ...data.properties
                           .map(e => result.states[e].values.map(s => ({ value: s, name: e })))
                           .reverse(),
                     )) {
                        const states = MapToObject(s, (n, o) => (o[n.name] = n.value));
                        stream.writeCompoudTag({ name, states: states }, '');
                        const buffer = stream.getWritenBytes();
                        const key = buffer.toString('base64');
                        const hash = HashPermutation(buffer);
                        permutations.push({ states, key, hash });
                        stream.offset = 0;
                     }
                     data.key = permutations[0].key;
                     data.hash = permutations[0].hash;
                  }
               });
               const rawData = JSON.stringify(result, null, '   ');
               createFile(file + '.raw_deflate', deflateRawSync(Buffer.from(rawData, 'utf-8')));
               return [file, rawData];
         }
      }).catch(er => {
         global.console.error(er.message);
         exit(1);
      });
      await Finish(v, version);
   } else {
      console.error("Generating Docs doesn't success, folder not found './bin/docs'");
      exit(1);
   }
   //console.log((await promises.readFile(".\\bin\\docs\\script_modules\\@minecraft\\server-ui_1.0.0.json")).toString());
}
async function CopyFiles(v, version) {
   const console = Logger('[Moving Files]');
   try {
      for (let file of FileTree(docs_cleaned)) {
         console.log('REMOVED', docs_cleaned + '/' + file);
         await promises.rm(docs_cleaned + '/' + file);
      }
   } catch (error) {}
   for (let file of FileTree(docs_generated)) {
      console.log(file);
      const data = await promises.readFile([docs_generated, file].join('/'));
      const makedir = await promises.mkdir(path.dirname([docs_cleaned, file].join('/')), { recursive: true });
      await promises.writeFile([docs_cleaned, file].join('/'), data);
   }
}
async function DoFiles(fr, to, changeMethod) {
   const tasks = [];
   const write = (file, data) => {
      tasks.push(
         (async () => {
            await promises.writeFile([to, file].join('/'), data);
         })().catch(console.error),
      );
   };
   const console = Logger('[Generating Docs Files]');
   for (let file of FileTree(fr)) {
      const data = await promises.readFile([fr, file].join('/'));
      const makedir = await promises.mkdir(path.dirname([to, file].join('/')), { recursive: true });
      const changed = changeMethod(file, data, write);
      if (!changed) continue;
      //const makedir = await promises.mkdir(path.dirname([to,file].join("/")),{recursive:true});
      const [newF, newData] = changed;
      console.log('Generated -> ' + newF);
      await promises.writeFile([to, newF].join('/'), newData);
   }
   await Promise.all(tasks);
}
async function CompareLatestVersions() {
   const console = Logger('[Checking Versions]');
   console.log('Checking for Updates . . .');

   //----------------------------------------------------------------------------------

   console.log('Getting versions');
   let response = (await SafeDownload(bds_versions_link, console)).toString();
   if (response == github_notfound) {
      console.error('File not found: ' + bds_versions_link);
      process.exit(1);
   }
   const {
      linux: { stable, preview },
   } = SafeParse(response);
   const engine = GetEngine(stable);
   console.log('Stable Version: ' + engine);
   console.log('Preview Version: ' + preview);

   //----------------------------------------------------------------------------------
   if (!(await CheckForExist('stable', engine, console))) {
      Object.assign(version_registred, {
         'build-version': stable,
         'version': engine,
      });
      _preview = false;
      console.log('New Stable Version Found: ' + engine);
      await Preload('stable');
      Generate('stable', stable);
      return;
   }
   if (DEBUG || !(await CheckForExist('preview', preview, console))) {
      Object.assign(version_registred, {
         'build-version': preview,
         'version': preview,
      });
      _preview = true;
      console.log('New Preview Version Found: ' + preview);
      await Preload('preview');
      Generate('preview', preview);
      return;
   }
   console.log('Docs are up to date');
}
async function System(cmd, cwd = '.', timeout = undefined, prefix = '') {
   return new Promise((resolve, reject) => {
      const child = exec(cmd, { cwd, windowsHide: true, timeout }, function () {});
      process.stdout.write(prefix);
      child.stdout.on('data', data => {
         process.stdout.write(data.replaceAll('\n', '\n' + prefix));
      });

      child.stderr.on('data', data => {
         process.stderr.write(data.replaceAll('\n', '\n' + prefix));
      });

      child.on('error', error => {
         console.error(`exec error: ${error.message}`);
         reject(error);
      });

      child.on('exit', (code, signal) => {
         if (code !== 0) {
            reject(new Error(`Command "${cmd}" exited with code ${code} and signal ${signal}`));
         } else {
            resolve();
         }
      });
   }).then(() => process.stdout.write('\n'));
}
async function CheckForExist(v, version, console) {
   try {
      console.log('Checking for ' + v);
      let versionLink = exist_link(v);
      let response = (await SafeDownload(versionLink, console)).toString();
      if (response === github_notfound) {
         console.error(`Can't target to ${v} -> exist.json`);
         return false;
      }
      const { 'build-version': bv, 'version': vv } = JSON.parse(response, console);
      console.log(`Version compare: ${vv} === ${version}`);
      return version == vv;
   } catch (error) {
      return false;
   }
}
function GetEngine(v) {
   const [major, minor, base] = v.split('.');
   return [major, minor, StableVersion(base)].join('.');
}
function SafeParse(data, console = globalThis.console) {
   try {
      return JSON.parse(data);
   } catch (error) {
      console.error(error.message);
   }
}
async function SafeDownload(link, console = globalThis.console) {
   const { error, data } = await SafeDownloadContent(link);
   if (error) {
      console.error(error.message);
      exit(1);
   }
   return data;
}
function StableVersion(num) {
   if (num.length === 1) return '0';
   else {
      return num[0] + '0'.repeat(num.length - 1);
   }
}
function Logger(text, console = globalThis.console) {
   const { log, error, warn } = console;
   return Object.assign(
      {},
      {
         log: log.bind(console, text),
         error: error.bind(console, text),
         warn: warn.bind(console, text),
      },
   );
}
function* FileTree(base, paths = []) {
   for (const entry of readdirSync([base, ...paths].join('/'), { withFileTypes: true })) {
      if (entry.isFile()) yield [...paths, entry.name].join('/');
      else if (entry.isDirectory()) yield* FileTree(base, [...paths, entry.name]);
   }
}

function* RecursivePermutations(...loop) {
   if (loop.length <= 1) return yield* loop[0].map(e => [e]);
   for (const l of loop[0]) {
      for (const s of RecursivePermutations(...loop.slice(1))) yield [l, ...s];
   }
}
const NBTTag = {
   EndOfCompoud: 0,
   Byte: 1,
   Int16: 2,
   Int32: 3,
   Int64: 4,
   Float: 5,
   Double: 6,
   ByteArray: 7,
   String: 8,
   TypedList: 9,
   Compoud: 10,
};
class Stream {
   offset;
   buffer;
   constructor(buffer, offset) {
      this.buffer = buffer;
      this.offset = offset ?? 0;
   }
   readByte() {
      return this.buffer.readUInt8(this.offset++);
   }
   readInt16LE() {
      const value = this.buffer.readInt16LE(this.offset);
      this.offset += 2;
      return value;
   }
   readInt32LE() {
      const value = this.buffer.readInt32LE(this.offset);
      this.offset += 4;
      return value;
   }
   readInt64LE() {
      const value = this.buffer.readBigInt64LE(this.offset);
      this.offset += 8;
      return value;
   }
   readUInt16LE() {
      const value = this.buffer.readUInt16LE(this.offset);
      this.offset += 2;
      return value;
   }
   readUInt32LE() {
      const value = this.buffer.readUInt32LE(this.offset);
      this.offset += 4;
      return value;
   }
   readUInt64LE() {
      const value = this.buffer.readBigUInt64LE(this.offset);
      this.offset += 8;
      return value;
   }
   readFloatLE() {
      const value = this.buffer.readFloatLE(this.offset);
      this.offset += 4;
      return value;
   }
   readDoubleLE() {
      const value = this.buffer.readDoubleLE(this.offset);
      this.offset += 8;
      return value;
   }
   writeByte(value) {
      this.buffer.writeUInt8(value, this.offset++);
   }
   writeInt16LE(value) {
      const length = this.buffer.writeInt16LE(value, this.offset);
      this.offset += 2;
      return length;
   }
   writeInt32LE(value) {
      const length = this.buffer.writeInt32LE(value, this.offset);
      this.offset += 4;
      return length;
   }
   writeInt64LE(value) {
      const length = this.buffer.writeBigInt64LE(value, this.offset);
      this.offset += 8;
      return length;
   }
   writeUInt16LE(value) {
      const length = this.buffer.writeUInt16LE(value, this.offset);
      this.offset += 2;
      return length;
   }
   writeUInt32LE(value) {
      const length = this.buffer.writeUInt32LE(value, this.offset);
      this.offset += 4;
      return length;
   }
   writeUInt64LE(value) {
      const length = this.buffer.writeBigUInt64LE(value, this.offset);
      this.offset += 8;
      return length;
   }
   writeFloatLE(value) {
      const length = this.buffer.writeFloatLE(value, this.offset);
      this.offset += 4;
      return length;
   }
   writeDoubleLE(value) {
      const length = this.buffer.writeDoubleLE(value, this.offset);
      this.offset += 8;
      return length;
   }
   writeString(value) {
      const length = this.buffer.write(value, this.offset + 2, 'utf8');
      this.writeInt16LE(length);
      this.offset += length;
   }
   writeCompoudTag(compoud, root) {
      this.writeByte(NBTTag.Compoud);
      if (typeof root === 'string') this.writeString(root);
      this.writeCompoud(compoud);
   }
   writeCompoud(compoud) {
      for (const [key, v] of Object.entries(compoud)) {
         const type = typeof v;
         switch (type) {
            case 'string':
               this.writeByte(NBTTag.String);
               this.writeString(key);
               this.writeString(v);
               break;
            case 'boolean':
               this.writeByte(NBTTag.Byte);
               this.writeString(key);
               this.writeByte(v ? 1 : 0);
               break;
            case 'number':
               this.writeByte(NBTTag.Int32);
               this.writeString(key);
               this.writeInt32LE(v);
               break;
            case 'object':
               this.writeByte(NBTTag.Compoud);
               this.writeString(key);
               this.writeCompoud(v);
               break;
         }
      }
      this.writeByte(NBTTag.EndOfCompoud);
   }
   /** @returns {Buffer} */
   getWritenBytes() {
      return this.buffer.slice(0, this.offset);
   }
}
function MapToObject(arr, mapper) {
   const obj = {};
   arr.forEach(e => mapper(e, obj));
   return obj;
}

const HASH_OFFSET = 0x81_1c_9d_c5;
function HashPermutation(buffer) {
   let hash = HASH_OFFSET;
   for (const element of buffer) {
      // Set the hash to the XOR of the hash and the element.
      hash ^= element & 0xff;

      // Apply the hash algorithm.
      hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);

      // Convert the hash to a signed 32-bit integer.
      hash = hash | 0;
   }
   return hash;
}
