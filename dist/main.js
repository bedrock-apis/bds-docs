import { spawn } from "node:child_process";
import { platform, stderr, stdout } from "node:process";
import { createWriteStream, existsSync } from "node:fs";
import { chmod, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { Writable } from "node:stream";

//#region modules/constants.ts
const ENV = Deno.env;
const GIT_IS_GITHUB_ACTION = ENV.get("GITHUB_ACTIONS")?.toLocaleLowerCase() === "true";
const GIT_LOGIN_AS_NAME = "BAPI The Dog";
const GIT_LOGIN_AS_EMAIL = "thedog@bedrockapis.com";
const GIT_REPO = ENV.get("GITHUB_REPOSITORY");
const GIT_TOKEN = ENV.get("GITHUB_TOKEN") ?? ENV.get("GH_TOKEN");
const INSTALLATION_FOLDER = "__installation__";
const BRANCH_TO_UPDATE = Deno.env.get("BRANCH_TO_UPDATE") ?? null;
const UNKNOWN_ERROR_CODE = -1;
var DumperError = class extends Error {
	CODE;
	constructor(code, message) {
		super(message);
		this.CODE = code;
	}
};
let ErrorCodes = /* @__PURE__ */ function(ErrorCodes$1) {
	ErrorCodes$1[ErrorCodes$1["UnsupportedPlatform"] = 1] = "UnsupportedPlatform";
	ErrorCodes$1[ErrorCodes$1["UnavailableInstallationLink"] = 2] = "UnavailableInstallationLink";
	ErrorCodes$1[ErrorCodes$1["BedrockServerProcessCriticalExit"] = 17] = "BedrockServerProcessCriticalExit";
	ErrorCodes$1[ErrorCodes$1["BedrockServerProcessExitedWithErrorCode"] = 18] = "BedrockServerProcessExitedWithErrorCode";
	ErrorCodes$1[ErrorCodes$1["SubModuleFailed"] = 32] = "SubModuleFailed";
	return ErrorCodes$1;
}({});

//#endregion
//#region node_modules/.pnpm/@bedrock-apis+bds-utils@1.0.0-alpha.4/node_modules/@bedrock-apis/bds-utils/dist/process-Dld4Rerl.js
var BedrockDedicatedServerProcess = class BedrockDedicatedServerProcess$1 {
	stopTimeout = 3e3;
	process;
	promise;
	_timeout_ref = null;
	_was_redirected = false;
	constructor(prc) {
		this.process = prc;
		const { promise, resolve: resolve$1 } = Promise.withResolvers();
		this.promise = promise;
		this.process.on("exit", (e) => {
			if (this._timeout_ref !== null) clearTimeout(this._timeout_ref);
			this._timeout_ref = null;
			resolve$1(e);
		});
	}
	static async "from"(process) {
		return new BedrockDedicatedServerProcess$1(process);
	}
	static async run(executable, args, cwd) {
		const process = spawn(executable, args ?? [], {
			cwd,
			stdio: ["pipe"]
		});
		return this.from(process);
	}
	enabledOutputRedirection() {
		if (this._was_redirected) return;
		this.process.stdout.pipe(stdout);
		this.process.stderr.pipe(stderr);
		this._was_redirected = true;
	}
	stop(force, timeout = this.stopTimeout) {
		if (this.process.exitCode !== null) return this.wait();
		this.process.stdin.write("stop\n");
		if (force && this._timeout_ref === null) this._timeout_ref = setTimeout(() => void this.kill(), timeout ?? this.stopTimeout);
		return this.wait();
	}
	kill() {
		this.process.kill("SIGKILL");
		return this.wait();
	}
	runCommand(cmd) {
		cmd = cmd.trim();
		if (cmd.toLowerCase() === "stop") this.stop(false);
		else this.process.stdin.write(cmd + "\n");
	}
	wait() {
		return this.promise;
	}
};

//#endregion
//#region node_modules/.pnpm/unzip-web-stream@0.0.0-alpha.1/node_modules/unzip-web-stream/dist/index.js
let MagicNumber = /* @__PURE__ */ function(MagicNumber$1) {
	MagicNumber$1[MagicNumber$1["LocalFileHeader"] = 67324752] = "LocalFileHeader";
	MagicNumber$1[MagicNumber$1["CentralDirectoryHeader"] = 33639248] = "CentralDirectoryHeader";
	MagicNumber$1[MagicNumber$1["DataDescriptor"] = 134695760] = "DataDescriptor";
	MagicNumber$1[MagicNumber$1["EndOfCentralDirectory"] = 101010256] = "EndOfCentralDirectory";
	MagicNumber$1[MagicNumber$1["ZIP64EndOfCentralDirectory"] = 101075792] = "ZIP64EndOfCentralDirectory";
	MagicNumber$1[MagicNumber$1["ZIP64EndOfCentralDirectoryLocator"] = 117853008] = "ZIP64EndOfCentralDirectoryLocator";
	return MagicNumber$1;
}({});
let ExtraFieldId = /* @__PURE__ */ function(ExtraFieldId$1) {
	ExtraFieldId$1[ExtraFieldId$1["Zip64"] = 1] = "Zip64";
	ExtraFieldId$1[ExtraFieldId$1["ExtendedTimestamp"] = 21589] = "ExtendedTimestamp";
	ExtraFieldId$1[ExtraFieldId$1["NTFS"] = 10] = "NTFS";
	ExtraFieldId$1[ExtraFieldId$1["StrongEncryption"] = 23] = "StrongEncryption";
	ExtraFieldId$1[ExtraFieldId$1["UnixUIDGID"] = 30805] = "UnixUIDGID";
	ExtraFieldId$1[ExtraFieldId$1["UnicodeFileName"] = 30062] = "UnicodeFileName";
	ExtraFieldId$1[ExtraFieldId$1["UnicodeComment"] = 25461] = "UnicodeComment";
	ExtraFieldId$1[ExtraFieldId$1["UTF8FileName"] = 28789] = "UTF8FileName";
	ExtraFieldId$1[ExtraFieldId$1["AES"] = 39169] = "AES";
	ExtraFieldId$1[ExtraFieldId$1["OS2ExtendedAttributes"] = 20300] = "OS2ExtendedAttributes";
	ExtraFieldId$1[ExtraFieldId$1["MacOSXMetadata"] = 1992] = "MacOSXMetadata";
	ExtraFieldId$1[ExtraFieldId$1["CentralDirectoryProtection"] = 17217] = "CentralDirectoryProtection";
	ExtraFieldId$1[ExtraFieldId$1["X509CertificatePKCS7"] = 20] = "X509CertificatePKCS7";
	ExtraFieldId$1[ExtraFieldId$1["X509CertificatePKCS7Attributes"] = 21] = "X509CertificatePKCS7Attributes";
	ExtraFieldId$1[ExtraFieldId$1["X509CertificatePKCS1RSA"] = 22] = "X509CertificatePKCS1RSA";
	ExtraFieldId$1[ExtraFieldId$1["WavPack"] = 256] = "WavPack";
	ExtraFieldId$1[ExtraFieldId$1["PPMdVersionI"] = 257] = "PPMdVersionI";
	ExtraFieldId$1[ExtraFieldId$1["IBMTERSE"] = 24] = "IBMTERSE";
	return ExtraFieldId$1;
}({});
let CompressionMethod = /* @__PURE__ */ function(CompressionMethod$1) {
	CompressionMethod$1[CompressionMethod$1["Store"] = 0] = "Store";
	CompressionMethod$1[CompressionMethod$1["Shrink"] = 1] = "Shrink";
	CompressionMethod$1[CompressionMethod$1["Reduce1"] = 2] = "Reduce1";
	CompressionMethod$1[CompressionMethod$1["Reduce2"] = 3] = "Reduce2";
	CompressionMethod$1[CompressionMethod$1["Reduce3"] = 4] = "Reduce3";
	CompressionMethod$1[CompressionMethod$1["Reduce4"] = 5] = "Reduce4";
	CompressionMethod$1[CompressionMethod$1["Implode"] = 6] = "Implode";
	CompressionMethod$1[CompressionMethod$1["Deflate"] = 8] = "Deflate";
	CompressionMethod$1[CompressionMethod$1["Deflate64"] = 9] = "Deflate64";
	CompressionMethod$1[CompressionMethod$1["PKWareImplode"] = 10] = "PKWareImplode";
	CompressionMethod$1[CompressionMethod$1["BZIP2"] = 12] = "BZIP2";
	CompressionMethod$1[CompressionMethod$1["LZMA"] = 14] = "LZMA";
	CompressionMethod$1[CompressionMethod$1["IBMTERSE_Old"] = 16] = "IBMTERSE_Old";
	CompressionMethod$1[CompressionMethod$1["IBMLZ77"] = 17] = "IBMLZ77";
	CompressionMethod$1[CompressionMethod$1["PPMd"] = 18] = "PPMd";
	CompressionMethod$1[CompressionMethod$1["IBMTERSE_New"] = 19] = "IBMTERSE_New";
	CompressionMethod$1[CompressionMethod$1["ZStandard"] = 93] = "ZStandard";
	CompressionMethod$1[CompressionMethod$1["XZ"] = 98] = "XZ";
	CompressionMethod$1[CompressionMethod$1["JPEG"] = 99] = "JPEG";
	CompressionMethod$1[CompressionMethod$1["WavPack"] = 100] = "WavPack";
	CompressionMethod$1[CompressionMethod$1["PPMdVersionI"] = 101] = "PPMdVersionI";
	CompressionMethod$1[CompressionMethod$1["AES"] = 102] = "AES";
	return CompressionMethod$1;
}({});
var StreamDataProvider = class StreamDataProvider$1 {
	static ReaderConstructor = class Readable {
		constructor(dataProvider) {
			this.dataProvider = dataProvider;
		}
		createStreamController() {
			let controller;
			const readable = new ReadableStream({ start(c) {
				controller = c;
			} });
			return {
				controller,
				readable
			};
		}
		*bufferUpController(controller, length, close = true) {
			let offset = 0;
			while (offset < length) {
				const available = yield 1;
				let toRead = Math.min(available, length - offset);
				if (toRead === 0) break;
				controller.enqueue(this.rentSlice(toRead));
				offset += toRead;
			}
			if (close) controller.close();
		}
		createReadable(length) {
			const { controller, readable } = this.createStreamController();
			const generator = this.bufferUpController(controller, length);
			generator.readable = readable;
			return generator;
		}
		*bufferUp(buffer) {
			let offset = 0;
			while (offset < buffer.length) {
				const available = yield 1;
				let toRead = Math.min(available, buffer.length - offset);
				if (toRead === 0) return buffer;
				buffer.set(this.rentSlice(toRead), offset);
				offset += toRead;
			}
			return buffer;
		}
		*batchSkip(length) {
			let offset = 0;
			while (offset < length) {
				const available = yield 1;
				let toRead = Math.min(available, length - offset);
				if (toRead === 0) return;
				this.movePointer(toRead);
				offset += toRead;
			}
		}
		movePointer(length) {
			this.dataProvider.moveActivePointer(length);
		}
		rentSlice(length) {
			const _ = this.dataProvider.u8Array.slice(this.dataProvider.activePointer, this.dataProvider.activePointer + length);
			this.movePointer(length);
			return _;
		}
		readUint8() {
			const _ = this.dataProvider.view.getUint8(this.dataProvider.activePointer);
			this.movePointer(1);
			return _;
		}
		readUint16() {
			const _ = this.dataProvider.view.getUint16(this.dataProvider.activePointer, true);
			this.movePointer(2);
			return _;
		}
		readUint32() {
			const _ = this.dataProvider.view.getUint32(this.dataProvider.activePointer, true);
			this.movePointer(4);
			return _;
		}
		readBigUint64() {
			const _ = this.dataProvider.view.getBigUint64(this.dataProvider.activePointer, true);
			this.movePointer(8);
			return _;
		}
		rentDataView(length) {
			const _ = new DataView(this.dataProvider.buffer, this.dataProvider.view.byteOffset + this.dataProvider.activePointer, length);
			this.movePointer(length);
			return _;
		}
	};
	reader = new StreamDataProvider$1.ReaderConstructor(this);
	view;
	u8Array;
	absoluteOffset = 0;
	_activePointer = 0;
	get activePointer() {
		return this._activePointer;
	}
	moveActivePointer(offset) {
		this._activePointer += offset;
		this.absoluteOffset += offset;
	}
	activeLength = 0;
	maxSubChunkSize;
	isRunning = false;
	constructor(maxRequestedSize, buffer) {
		this.maxRequestedSize = maxRequestedSize;
		this.buffer = buffer;
		this.view = new DataView(this.buffer);
		this.u8Array = new Uint8Array(this.buffer);
		this.maxSubChunkSize = buffer.byteLength - maxRequestedSize;
	}
	async consume(readable) {
		if (this.isRunning) throw new ReferenceError("Each consumer instance can run only one task at the time. You can reset this instance and run next task once current task quits.");
		await this.process(readable).finally(() => this.isRunning = false);
	}
	async process(_readable) {
		this.isRunning = true;
		const program = this.getProgram();
		let requested = 0;
		let endRequested = false;
		for await (const raw_chunk of _readable) for (const chunk of StreamDataProvider$1.getChunkIterator(raw_chunk, this.maxSubChunkSize)) {
			if (endRequested) continue;
			this.flush();
			this.set(chunk);
			while (requested <= this.activeLength - this.activePointer) {
				const { done, value } = program.next(this.activeLength - this.activePointer);
				if (done) return;
				if ((requested = value) === -1) {
					requested = this.activeLength = this._activePointer = 0;
					endRequested = true;
					break;
				}
			}
		}
		let nextValue = program.next(this.activeLength - this.activePointer);
		while (!nextValue.done) nextValue = program.next(this.activeLength - this.activePointer);
	}
	set(u8) {
		if (this.activeLength + u8.length > this.buffer.byteLength) throw new Error(`Buffer overflow error, ${this.activeLength}, ${this.buffer.byteLength}, ${u8.length}`);
		this.u8Array.set(u8, this.activeLength);
		this.activeLength += u8.length;
	}
	flush() {
		if (this.activePointer <= 0 || this.activeLength <= 0) return;
		this.u8Array.set(this.u8Array.subarray(this.activePointer, this.activeLength), 0);
		this.activeLength -= this.activePointer;
		this._activePointer = 0;
	}
	reset() {
		if (this.isRunning) throw new ReferenceError("Instance is locked, you can reset only instance with no tasks running.");
		this.activeLength = 0;
		this._activePointer = 0;
	}
	static *getChunkIterator(buffer, chunkLength) {
		let start = 0;
		while (start < buffer.length) yield buffer.subarray(start, start += chunkLength);
	}
};
const MAX_FILENAME_SIZE = 256 * 2;
const MAX_REQUESTED_SIZE = 256;
const BUFFER_SIZE = 16384 + MAX_REQUESTED_SIZE;
const UTF8_DECODER = new TextDecoder("utf-8");
const LOCAL_FILE_HEADER_SIZE = 26;
const CENTRAL_DIRECTORY_HEADER_SIZE = 42;
const END_OF_CENTRAL_DIRECTORY_HEADER_SIZE = 18;
var ExtraDataParser = class {
	parsers;
	constructor() {
		this.parsers = Object.create(DEFAULT_PARSERS);
	}
	registryParser(id, parser) {
		this.parsers[id] = parser;
		return this;
	}
};
const DEFAULT_PARSERS = {
	*[ExtraFieldId.UnicodeFileName](reader, info) {
		yield 1;
		if (reader.readUint8() != 1) return;
		yield 4;
		reader.readUint32();
		const fileNameSize = info.size - 5;
		if (fileNameSize > MAX_FILENAME_SIZE) throw new Error("File name too long, bytes: " + fileNameSize);
		const textBuffer = yield* reader.bufferUp(new Uint8Array(fileNameSize));
		return { path: UTF8_DECODER.decode(textBuffer) };
	},
	*[ExtraFieldId.UTF8FileName](reader, info) {
		yield 1;
		if (reader.readUint8() != 1) return;
		const fileNameSize = info.size - 1;
		if (fileNameSize > MAX_FILENAME_SIZE) throw new Error("File name too long, bytes: " + fileNameSize);
		const textBuffer = yield* reader.bufferUp(new Uint8Array(fileNameSize));
		return { path: UTF8_DECODER.decode(textBuffer) };
	},
	*[ExtraFieldId.Zip64](reader) {
		console.log("Zip64");
		yield 8;
		return {
			uncompressedSize: Number(reader.readBigUint64()),
			compressedSize: Number(reader.readBigUint64())
		};
	},
	*[ExtraFieldId.ExtendedTimestamp](reader) {
		yield 1;
		const flags = reader.readUint8();
		const _ = {};
		if (flags & 1) {
			yield 4;
			_.modificationTime = reader.readUint32();
		}
		if (flags & 2) {
			yield 4;
			_.accessTime = reader.readUint32();
		}
		if (flags & 4) {
			yield 4;
			_.creationTime = reader.readUint32();
		}
		return _;
	}
};
let ZipBitFlags = /* @__PURE__ */ function(ZipBitFlags$1) {
	ZipBitFlags$1[ZipBitFlags$1["Encrypted"] = 1] = "Encrypted";
	ZipBitFlags$1[ZipBitFlags$1["CompressionOption1"] = 2] = "CompressionOption1";
	ZipBitFlags$1[ZipBitFlags$1["CompressionOption2"] = 4] = "CompressionOption2";
	ZipBitFlags$1[ZipBitFlags$1["HasDataDescriptor"] = 8] = "HasDataDescriptor";
	ZipBitFlags$1[ZipBitFlags$1["ReservedPkware1"] = 16] = "ReservedPkware1";
	ZipBitFlags$1[ZipBitFlags$1["StrongEncryption"] = 32] = "StrongEncryption";
	ZipBitFlags$1[ZipBitFlags$1["UTF8Encoding"] = 2048] = "UTF8Encoding";
	ZipBitFlags$1[ZipBitFlags$1["MaskHeaderValues"] = 8192] = "MaskHeaderValues";
	return ZipBitFlags$1;
}({});
var ZipStreamExtractor = class extends StreamDataProvider {
	static textDecoder = new TextDecoder();
	onFileRead;
	onDirectoryInfo;
	constructor(parser = new ExtraDataParser(), buffer = new ArrayBuffer(BUFFER_SIZE)) {
		super(MAX_REQUESTED_SIZE, buffer);
		this.parser = parser;
		this.buffer = buffer;
	}
	*getProgram() {
		while (true) {
			if ((yield 4) < 4) throw new SyntaxError("Unexpected end of input");
			const magic = this.getMagic();
			this.reader.movePointer(4);
			if (typeof this[magic] !== "function") throw new Error("Unexpected magic number: " + magic.toString(16) + " " + MagicNumber[magic]);
			if (yield* this[magic]()) {
				yield -1;
				return;
			}
		}
	}
	*[101010256]() {
		const headerSize = yield END_OF_CENTRAL_DIRECTORY_HEADER_SIZE;
		if (headerSize < END_OF_CENTRAL_DIRECTORY_HEADER_SIZE) throw new Error("Invalid EndOfCentralDirectoryHeader size: " + headerSize);
		const header = BatchReadHelpers.readEndOfCentralDirectoryHeader(this.reader);
		yield* this.reader.batchSkip(header.commentLength);
		return true;
	}
	*[33639248]() {
		const headerSize = yield CENTRAL_DIRECTORY_HEADER_SIZE;
		if (headerSize < CENTRAL_DIRECTORY_HEADER_SIZE) throw new Error("Invalid CentralDirectoryHeader size: " + headerSize);
		const header = BatchReadHelpers.readCentralDirectoryHeader(this.reader);
		yield* this.reader.batchSkip(header.nameLength);
		yield* this.reader.batchSkip(header.extraDataLength);
		yield* this.reader.batchSkip(header.commentLength);
	}
	*[67324752]() {
		if ((yield LOCAL_FILE_HEADER_SIZE) < LOCAL_FILE_HEADER_SIZE) return void console.error("Invalid header size");
		const header = BatchReadHelpers.readLocalFileHeader(this.reader);
		if (header.nameLength > MAX_FILENAME_SIZE) throw new Error("File name path is too long: " + header.nameLength);
		if ((yield header.nameLength) < header.nameLength) throw new Error("Unexpected end of input");
		const path = UTF8_DECODER.decode(this.reader.rentSlice(header.nameLength));
		const report = {
			time: header.time,
			date: header.date,
			compressionMethod: header.compressionMethod,
			bits: header.bitFlags,
			isZIP64: false,
			isStreamSized: (header.bitFlags & ZipBitFlags.HasDataDescriptor) === ZipBitFlags.HasDataDescriptor,
			compressedSize: header.compressedSize,
			uncompressedSize: header.uncompressedSize,
			path,
			crc: header.crc
		};
		let startingOffset = this.absoluteOffset;
		while (this.absoluteOffset - startingOffset < header.extraDataLength) {
			const { id, size } = yield* this.readExtraDataHeader();
			const parser = this.parser.parsers[id];
			if (parser) {
				const data = yield* parser(this.reader, {
					id,
					size
				});
				if (typeof data === "object") Object.assign(report, data);
			} else yield* this.reader.batchSkip(size);
		}
		if (report.uncompressedSize === 0 && !report.isStreamSized && report.path.match(/^.*[\\/]{1}$/)) return void this.onDirectoryInfo?.(report);
		let readable;
		let generator;
		if (report.isStreamSized) {
			const data = this.reader.createStreamController();
			readable = data.readable;
			generator = this.streamReadData(data.controller, report.isZIP64);
		} else readable = (generator = this.reader.createReadable(report.compressedSize)).readable;
		this.onFileRead?.(report, readable);
		yield* generator;
	}
	*streamReadData(controller, isZIP64) {
		const descriptorSize = isZIP64 ? 24 : 16;
		const readSize = isZIP64 ? (offset$1) => Number(this.view.getBigUint64(offset$1, true)) : (offset$1) => this.view.getUint32(offset$1, true);
		let offset = 0;
		while (true) {
			const toRead = (yield descriptorSize + 1) - descriptorSize;
			const startingOffset = this.activePointer;
			let i = 0;
			for (; i <= toRead; i++, offset++) if (this.view.getUint32(startingOffset + i, true) === MagicNumber.DataDescriptor && readSize(startingOffset + i + 8) === offset) {
				controller.enqueue(this.reader.rentSlice(i));
				this.reader.movePointer(isZIP64 ? 24 : 16);
				controller.close();
				return;
			}
			controller.enqueue(this.reader.rentSlice(i));
		}
	}
	getMagic() {
		return this.view.getUint32(this.activePointer, true);
	}
	*readExtraDataHeader() {
		if ((yield 4) < 4) throw new Error("Unexpected end of input");
		return {
			id: this.reader.readUint16(),
			size: this.reader.readUint16()
		};
	}
};
let BatchReadHelpers;
(function(_BatchReadHelpers) {
	function readLocalFileHeader(reader) {
		return {
			version: reader.readUint16(),
			bitFlags: reader.readUint16(),
			compressionMethod: reader.readUint16(),
			time: reader.readUint16(),
			date: reader.readUint16(),
			crc: reader.readUint32(),
			compressedSize: reader.readUint32(),
			uncompressedSize: reader.readUint32(),
			nameLength: reader.readUint16(),
			extraDataLength: reader.readUint16()
		};
	}
	_BatchReadHelpers.readLocalFileHeader = readLocalFileHeader;
	function readCentralDirectoryHeader(reader) {
		return {
			versionMadeBy: reader.readUint16(),
			versionNeeded: reader.readUint16(),
			bitFlags: reader.readUint16(),
			compressionMethod: reader.readUint16(),
			time: reader.readUint16(),
			date: reader.readUint16(),
			crc: reader.readUint32(),
			compressedSize: reader.readUint32(),
			uncompressedSize: reader.readUint32(),
			nameLength: reader.readUint16(),
			extraDataLength: reader.readUint16(),
			commentLength: reader.readUint16(),
			diskNumberStart: reader.readUint16(),
			internalAttributes: reader.readUint16(),
			externalAttributes: reader.readUint32(),
			offsetLocalHeader: reader.readUint32()
		};
	}
	_BatchReadHelpers.readCentralDirectoryHeader = readCentralDirectoryHeader;
	function readEndOfCentralDirectoryHeader(reader) {
		return {
			diskNumber: reader.readUint16(),
			centralDirectoryDisk: reader.readUint16(),
			centralDirectoryRecordsOnDisk: reader.readUint16(),
			totalCentralDirectoryRecords: reader.readUint16(),
			centralDirectorySize: reader.readUint32(),
			centralDirectoryOffset: reader.readUint32(),
			commentLength: reader.readUint16()
		};
	}
	_BatchReadHelpers.readEndOfCentralDirectoryHeader = readEndOfCentralDirectoryHeader;
	function readZIP64CentralDirectoryHeader(reader) {
		return {
			versionMadeBy: reader.readUint16(),
			versionNeeded: reader.readUint16(),
			bitFlags: reader.readUint16(),
			compressionMethod: reader.readUint16(),
			time: reader.readUint16(),
			date: reader.readUint16(),
			crc: reader.readUint32(),
			compressedSize: Number(reader.readBigUint64()),
			uncompressedSize: Number(reader.readBigUint64()),
			nameLength: reader.readUint16(),
			extraDataLength: reader.readUint16(),
			commentLength: reader.readUint16(),
			diskNumberStart: reader.readUint32(),
			internalAttributes: reader.readUint16(),
			externalAttributes: reader.readUint32(),
			offsetLocalHeader: Number(reader.readBigUint64())
		};
	}
	_BatchReadHelpers.readZIP64CentralDirectoryHeader = readZIP64CentralDirectoryHeader;
	function readZip64EndOfCentralDirectoryLocator(reader) {
		return {
			diskWithEOCD: reader.readUint32(),
			offsetEOCD: reader.readBigUint64(),
			totalDisks: reader.readUint32()
		};
	}
	_BatchReadHelpers.readZip64EndOfCentralDirectoryLocator = readZip64EndOfCentralDirectoryLocator;
})(BatchReadHelpers || (BatchReadHelpers = {}));
var UnzipStreamConsumer = class extends WritableStream {
	unzipExtractor;
	transformer = new TransformStream();
	constructor(options) {
		super({
			abort: (e) => writer.abort(e),
			close: () => writer.close(),
			write: (chunk) => writer.write(chunk)
		});
		this.unzipExtractor = options?.zipExtractor ?? new ZipStreamExtractor();
		const writer = this.transformer.writable.getWriter();
		this.unzipExtractor.consume(this.transformer.readable).catch((e) => {
			console.error("Abort:", e);
			writer.abort(e);
		});
		this.unzipExtractor.onFileRead = (r, s) => options?.onFile?.(r, options?.pipeThrough?.(r, s) ?? fallbackPipeThrough(r, s));
		this.unzipExtractor.onDirectoryInfo = (r) => options?.onDirectory?.(r);
		const fallbackPipeThrough = (report, readable) => {
			if (report.compressionMethod === CompressionMethod.Deflate) return readable.pipeThrough(new DecompressionStream("deflate-raw"));
			return readable;
		};
	}
};

//#endregion
//#region node_modules/.pnpm/@bedrock-apis+bds-utils@1.0.0-alpha.4/node_modules/@bedrock-apis/bds-utils/dist/install-BlU8hABz.js
var ServerProperties = class extends Map {
	constructor(path) {
		super();
		this.path = path;
	}
	async load(clean = false) {
		try {
			if (clean) this.clear();
			const file = (await readFile(this.path)).toString("utf8");
			for (const line of file.split(/\n|\r\n|\r/).map((e) => e.trim())) {
				if (line.startsWith("#")) continue;
				if (line === "") continue;
				const indexOfEqual = line.indexOf("=");
				const name = line.substring(0, indexOfEqual);
				let data = line.substring(indexOfEqual + 1);
				if (data === "true" || data === "false") data = data === "true";
				else if (isFinite(Number(data))) data = Number(data);
				if (!this.has(name)) this.set(name, data);
			}
		} catch {}
		return this;
	}
	async save() {
		await mkdir(dirname(this.path)).catch((_) => null);
		await writeFile(this.path, this.entries().map(([k, v]) => `${k}=${v}`).toArray().join("\n"));
		return this;
	}
	merge(record) {
		for (const key of Object.keys(record)) this.set(key, record[key]);
		return this;
	}
};
var ConfigPermissions = class {
	constructor(path) {
		this.path = path;
	}
	raw = {};
	async load() {
		try {
			const theText = (await readFile(this.path)).toString("utf8");
			this.raw = JSON.parse(theText);
		} catch {}
		return this;
	}
	getAllowedModules() {
		return Array.prototype.values.call(this.raw.allowed_modules ??= []);
	}
	addAllowedModules(...moduleNames) {
		this.raw.allowed_modules = new Set([...moduleNames, ...this.raw.allowed_modules ?? []]).values().toArray();
	}
	removeAllowedModules(...modulesNames) {
		const base = new Set(this.raw.allowed_modules ?? []);
		this.raw.allowed_modules = base.difference(new Set(modulesNames)).values().toArray();
	}
	async save() {
		await mkdir(dirname(this.path)).catch((_) => null);
		await writeFile(this.path, JSON.stringify(this.raw, null, 3));
		return this;
	}
};
const TEST_CONFIG_FILE_NAME = "test_config.json";
const SERVER_PROPERTIES_FILE_NAME = "server.properties";
const CONFIG_PERMISSIONS_FILE_NAME = "permissions.json";
const DEFAULT_CONFIG_DIR_PATH = join("config", "default");
const WORLD_BEHAVIOR_PACKS_FILE_NAME = "world_behavior_packs.json";
const WORLD_RESOURCE_PACKS_FILE_NAME = "world_resource_packs.json";
const WORLDS_DIR_NAME = "worlds";
var WorldLevel = class {
	properties = {};
	constructor(name) {
		this.name = name;
	}
	name;
};
var WorldsFolderOptions = class {
	directory;
	worlds = /* @__PURE__ */ new Map();
	constructor(worlds) {
		this.directory = worlds;
	}
	async create(world) {
		world.options ??= {};
		const folderName = join(this.directory, world.options["level-name"] ??= crypto.randomUUID());
		const ww = new WorldLevel(world.options["level-name"]);
		Object.assign(ww.properties, world.options);
		if (!existsSync(folderName)) await mkdir(folderName);
		if (world.behaviorPacks) await writeFile(join(folderName, WORLD_BEHAVIOR_PACKS_FILE_NAME), JSON.stringify(world.behaviorPacks.map(({ version, uuid }) => ({
			version,
			pack_id: uuid
		}))));
		if (world.resourcePacks) await writeFile(join(folderName, WORLD_RESOURCE_PACKS_FILE_NAME), JSON.stringify(world.resourcePacks.map(({ version, uuid }) => ({
			version,
			pack_id: uuid
		}))));
		return ww;
	}
};
var Installation = class {
	/** Installation directory */
	directory;
	/** Server Properties, file referenced */
	properties;
	configPermissions;
	worlds;
	constructor(installationDirectory) {
		this.directory = resolve(installationDirectory);
		this.properties = new ServerProperties(resolve(this.directory, SERVER_PROPERTIES_FILE_NAME));
		this.configPermissions = new ConfigPermissions(resolve(this.directory, DEFAULT_CONFIG_DIR_PATH, CONFIG_PERMISSIONS_FILE_NAME));
		this.worlds = new WorldsFolderOptions(resolve(this.directory, WORLDS_DIR_NAME));
	}
	async include(dataPacks) {}
	async install(stream) {
		const tasks = /* @__PURE__ */ new Set();
		await stream.pipeTo(new UnzipStreamConsumer({ onFile: async (report, readable) => {
			const path = resolve(this.directory, report.path);
			if (!path.startsWith(this.directory)) throw new ReferenceError("Security critical path provided: " + report.path);
			if (!existsSync(dirname(path))) await mkdir(dirname(path), { recursive: true });
			const task = readable.pipeTo(Writable.toWeb(createWriteStream(path))).then((_) => report.path === "bedrock_server" ? chmod(path, 493) : null).then((_) => void tasks.delete(task), (_) => void 0);
			tasks.add(task);
		} }));
		await Promise.all(tasks);
		return this.load();
	}
	async installFromURL(url) {
		const response = await fetch(url).catch((_) => null);
		if (!response || !response.ok) throw new ReferenceError("Failed to fetch resource from: " + url);
		const body = response.body;
		if (!body) throw new ReferenceError("Failed to fetch resource data: " + url);
		return this.install(body);
	}
	async load() {
		await this.properties.load();
		await this.configPermissions.load();
		return this;
	}
	async runWithTestConfig(config, args) {
		await writeFile(join(this.directory, TEST_CONFIG_FILE_NAME), JSON.stringify(config));
		return await this.runInternal(args);
	}
	async run(args) {
		await rm(join(this.directory, TEST_CONFIG_FILE_NAME)).catch((_) => null);
		return this.runInternal(args);
	}
	getExecutableFile() {
		const exePath = join(this.directory, "bedrock_server");
		if (existsSync(exePath)) return exePath;
		if (existsSync(exePath + ".exe")) return exePath + ".exe";
		return null;
	}
	async runInternal(args) {
		const exe = this.getExecutableFile();
		if (!exe) throw new ReferenceError("Corrupted installation, failed to found executable");
		await this.properties.save();
		await this.configPermissions.save();
		return BedrockDedicatedServerProcess.run(exe, args ?? [], this.directory);
	}
	/**
	* @deprecated
	*/
	async runWorld(world) {
		this.properties.merge(world.properties);
		return this.run([]);
	}
};

//#endregion
//#region node_modules/.pnpm/@bedrock-apis+bds-utils@1.0.0-alpha.4/node_modules/@bedrock-apis/bds-utils/dist/links-BdkFQIGc.js
const SERVICES_LATEST_DOWNLOAD_LINK = "https://net-secondary.web.minecraft-services.net/api/v1.0/download/links";
const OSS_GIT_VERSIONS_ROOT = "https://raw.githubusercontent.com/Bedrock-OSS/BDS-Versions/main";
const OSS_GIT_VERSIONS_FILE = `${OSS_GIT_VERSIONS_ROOT}/versions.json`;
async function getLatestDownloadLinkFromServices(options) {
	let DOWNLOAD_TYPE = "serverBedrock";
	if (options.is_preview) DOWNLOAD_TYPE += "Preview";
	switch (options.platform) {
		case "win32":
			DOWNLOAD_TYPE += "Windows";
			break;
		case "linux":
			DOWNLOAD_TYPE += "Linux";
			break;
		default: return null;
	}
	const response = await fetch(SERVICES_LATEST_DOWNLOAD_LINK).catch((_) => null);
	if (!response || !response.ok) return null;
	const DATA = await response.json().catch((_) => null);
	if (!DATA) return null;
	if (!DATA.result) return null;
	if (!Array.isArray(DATA.result.links)) return null;
	return DATA.result.links.find((e) => e?.downloadType === DOWNLOAD_TYPE)?.downloadUrl ?? null;
}
async function getLatestDownloadLinkFromOSSGit(options) {
	let platform$1 = options.platform === "win32" ? "windows" : options.platform;
	let response = await fetch(OSS_GIT_VERSIONS_FILE).catch((_) => null);
	if (!response || !response.ok) return null;
	let data = await response.json().catch((_) => null);
	if (!data) return null;
	const version_set = data[platform$1];
	if (!version_set) return null;
	const version = version_set[options.is_preview ? "preview" : "stable"];
	if (!version) return null;
	response = await fetch(`${OSS_GIT_VERSIONS_ROOT}/${platform$1}${options.is_preview ? "_preview" : ""}/${version}.json`);
	if (!response || !response.ok) return null;
	data = await response.json().catch((_) => null);
	if (!data) return null;
	return data.download_url ?? null;
}
function getLatestDownloadLink(options) {
	return getLatestDownloadLinkFromOSSGit(options).then((_) => _ ?? getLatestDownloadLinkFromServices(options));
}

//#endregion
//#region modules/utils/io.ts
async function* getFilesRecursiveIterator(base, src) {
	for await (const { name, isFile, isDirectory } of Deno.readDir(join(base, src ?? ""))) {
		let path = join(src ?? "", name);
		if (isFile) yield path;
		if (isDirectory) yield* getFilesRecursiveIterator(base, path);
	}
}

//#endregion
//#region modules/utils/general.ts
function getEngineVersion(fullVersion) {
	return fullVersion.split(".").slice(0, 3).join(".");
}

//#endregion
//#region modules/utils/github.ts
let IS_LOGGED_IN = false;
var GithubUtils = class {
	static async cmd(command, args = []) {
		const awaiter = Promise.withResolvers();
		spawn(command, args, {
			stdio: "inherit",
			shell: true
		}).on("close", (code) => awaiter.resolve(code ?? 1));
		return awaiter.promise;
	}
	static async initRepo() {
		if (!GIT_IS_GITHUB_ACTION) return 0;
		let failed = 0;
		if (!IS_LOGGED_IN) {
			if (failed = await this.login()) return failed;
		}
		if (!GIT_REPO || !GIT_TOKEN) {
			console.error("Missing GITHUB_REPOSITORY or GITHUB_TOKEN.");
			return 1;
		}
		const remoteUrl = `https://x-access-token:${GIT_TOKEN}@github.com/${GIT_REPO}.git`;
		failed = await this.cmd("git", ["init"]);
		if (failed) return failed;
		failed = await this.cmd("git", [
			"remote",
			"add",
			"origin",
			remoteUrl
		]);
		if (failed) return failed;
		return await this.cmd("git", [
			"fetch",
			"--depth=0",
			"origin"
		]);
	}
	static async login(name, email) {
		if (!GIT_IS_GITHUB_ACTION || IS_LOGGED_IN) return 0;
		let failed = await this.cmd("git", [
			"config",
			"--global",
			"user.name",
			`"${name ?? GIT_LOGIN_AS_NAME}"`
		]);
		if (failed) return failed;
		failed = await this.cmd("git", [
			"config",
			"--global",
			"user.email",
			`"${email ?? GIT_LOGIN_AS_EMAIL}"`
		]);
		if (failed) return failed;
		IS_LOGGED_IN = true;
		console.log("LOGGED IN");
		return 0;
	}
	static async postNewBranch(branch) {
		if (!GIT_IS_GITHUB_ACTION) return 0;
		let failed = 0;
		if (!IS_LOGGED_IN) {
			if (failed = await this.login()) return failed;
		}
		failed = await this.cmd("git", [
			"checkout",
			"-b",
			branch
		]);
		if (failed) return failed;
		return failed = await this.cmd("git", [
			"push",
			"-u",
			"origin",
			branch
		]);
	}
	static async checkoutBranch(branch, force = false) {
		if (!GIT_IS_GITHUB_ACTION) return 0;
		let failed = 0;
		if (!IS_LOGGED_IN) {
			if (failed = await this.login()) return failed;
		}
		failed = await this.cmd("git", ["fetch"]);
		if (failed) return failed;
		return failed = await this.cmd("git", [
			"checkout",
			branch,
			...force ? ["-f"] : []
		]);
	}
	static async commitAndPush(branch, version, isPreview) {
		if (!GIT_IS_GITHUB_ACTION) return 0;
		let failed = 0;
		if (!IS_LOGGED_IN) {
			if (failed = await this.login()) return failed;
		}
		failed = await this.cmd("git", ["add", "."]);
		if (failed) return failed;
		const message = `New ${branch} v${isPreview ? version : getEngineVersion(version)}`;
		failed = await this.cmd("git", [
			"commit",
			"-m",
			`"${message}"`
		]);
		if (failed) return failed;
		return failed = await this.cmd("git", [
			"push",
			"--force",
			"origin",
			branch
		]);
	}
};

//#endregion
//#region modules/dump-metadata/index.ts
const BDS_PROCESS_MAX_LIFE_TIME = 15e3;
const BDS_DOCS_FOLDER_NAME = "docs";
const OUTPUT_FOLDER = "metadata";
var Metadata = class {
	static DESCRIPTION = `METADATA DESCRIPTION`;
	static async Init(installation) {
		await Deno.remove(installation.worlds.directory, { recursive: true }).catch((_) => null);
		const process = await installation.runWithTestConfig({
			generate_api_metadata: true,
			generate_documentation: true
		}, null);
		process.enabledOutputRedirection();
		process.stop(true, BDS_PROCESS_MAX_LIFE_TIME);
		const result = await process.wait().catch((_) => (console.error(_), null));
		if (result === null) return -1;
		return result;
	}
	static *GetTasks(installation) {
		yield this.CopyDocsTask(join(installation.directory, BDS_DOCS_FOLDER_NAME), OUTPUT_FOLDER);
	}
	static async CopyDocsTask(source, destination) {
		const contents = [];
		const action = async (fileName) => {
			contents.push(fileName);
			let data = await Deno.readFile(join(source, fileName));
			if (fileName.endsWith(".json")) try {
				let object = JSON.parse(new TextDecoder().decode(data));
				delete object["minecraft_version"];
				delete object["x-minecraft-version"];
				data = new TextEncoder().encode(JSON.stringify(object, null, 3));
			} finally {}
			let dest = join(destination, fileName);
			await Deno.mkdir(dirname(dest), { recursive: true }).catch((_) => null);
			await Deno.writeFile(dest, data);
		};
		const tasks = [];
		for await (const file of getFilesRecursiveIterator(source)) tasks.push(action(file));
		await Promise.all(tasks);
		await Deno.writeTextFile(join(destination, "contents.json"), JSON.stringify(contents, null, 3));
		return 0;
	}
};

//#endregion
//#region modules/main.ts
async function main() {
	if (platform !== "win32" && platform !== "linux") throw new DumperError(ErrorCodes.UnsupportedPlatform, `Unknown OS platform: ${platform}`);
	await GithubUtils.login();
	await GithubUtils.checkoutBranch("stable");
	const link = await getLatestDownloadLink({
		is_preview: BRANCH_TO_UPDATE === "preview",
		platform
	});
	if (!link) throw new DumperError(ErrorCodes.UnavailableInstallationLink, `Link not available branch:${BRANCH_TO_UPDATE} platform:${platform}`);
	console.info("Link found: " + link);
	const installation = new Installation(INSTALLATION_FOLDER);
	if (!installation.getExecutableFile()) {
		console.info("No executable installing");
		await installation.installFromURL(link);
	} else await installation.load();
	let failed = await Metadata.Init(installation);
	if (failed) throw new DumperError(ErrorCodes.SubModuleFailed, "Submodule failed with error code: " + failed);
	for (const promise of Metadata.GetTasks(installation)) await promise;
	await Deno.writeFile(".gitignore", new TextEncoder().encode(`__*__`));
	return 0;
}
main().catch((e) => (console.error(e), e.CODE ?? UNKNOWN_ERROR_CODE)).then(Deno.exit);

//#endregion