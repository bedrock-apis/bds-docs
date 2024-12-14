import fs from "fs/promises";
import http from "http";
import path from "path";

const metadataFolder = "metadata/script-api";
await fs.rm(metadataFolder, { recursive: true, force: true });
await fs.mkdir(metadataFolder);

/** @type {string[]} */
const folders = [];

const port = 9595;
http
	.createServer(async (req, res) => {
		const urlPath = req.url?.replace(/^\//, "") ?? "";
		console.log(urlPath);
		const body = await new Promise((resolve) => {
			let body = "";
			req
				.on("data", (c) => (body += c.toString()))
				.on("end", () => resolve(body));
		});

		const fullPath = path.join(metadataFolder, urlPath + ".json");
		const folder = path.parse(fullPath).dir;
		if (!folders.includes(folder)) {
			await fs.mkdir(folder, { recursive: true });
			folders.push(folder);
			console.log("Created folder", folder);
		}
		await fs.writeFile(fullPath, body);

		return res
			.writeHead(200, { "content-type": "text/plain" }) // Minecraft does not support other content types
			.end();
	})
	.once("listening", () => {
		console.log(`Listening on http://localhost:${port}`);
	})
	.listen(port);
