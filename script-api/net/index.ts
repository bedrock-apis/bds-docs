import {
	http,
	HttpRequest,
	HttpRequestMethod,
	HttpResponse,
} from "@minecraft/server-net";
import { IP_ADDRESS, IPacket, PacketBodyType, PORT } from "../../shared";
export * from "../../shared";

const URL = `http://${IP_ADDRESS}:${PORT}/`;
const DEFAULT_TIMEOUT = 5;
let orderId = 0;

export async function SendPayload<K extends keyof PacketBodyType>(
	packetId: K,
	packet: PacketBodyType[K]
): Promise<HttpResponse> {
	const request = new HttpRequest(URL);
	request.setMethod(HttpRequestMethod.Post);
	request.setBody(
		JSON.stringify({ type: packetId, body: packet } satisfies IPacket<K>)
	);
	request.addHeader("index", String(orderId++));
	request.setTimeout(DEFAULT_TIMEOUT);
	return http.request(request);
}
export function getNumberOfPosts(): number {
	return orderId;
}
