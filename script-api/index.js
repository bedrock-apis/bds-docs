import * as mc from "@minecraft/server";
import * as net from "@minecraft/server-net";
import { IP_ADDRESS, PORT } from "../shared/consts";

console.log("Hello World from Script API");
console.log(IP_ADDRESS, PORT);
/*const overworld = mc.world.getDimension("overworld");

Main().catch((e) => console.error(e));
*/
async function Main() {
	overworld.runCommand("tickingarea add circle 0 0 0 4 load true");

	await new Promise((resolve) => {
		const interval = mc.system.runInterval(() => {
			if (overworld.getBlock({ x: 0, y: 0, z: 0 })) {
				resolve(undefined);
				mc.system.clearRun(interval);
			}
		}, 10);
	});

	await GenerateTypesRegistry();
	await GenerateItemComponentsRegistry();
	await GenerateBlockComponentsRegistry();
	await GenerateEntityComponentRegistry();
}

async function GenerateBlockComponentsRegistry() {
	/** @type {Record<string, unknown>} */
	const blocksMetadata = {};
	for (const blockType of mc.BlockTypes.getAll()) {
		overworld.setBlockType({ x: 0, y: 0, z: 0 }, blockType);
		const block = overworld.getBlock({ x: 0, y: 0, z: 0 });
		if (!block) return null; // Or throw?

		/** @type {Partial<Record<mc.BlockComponentTypes, unknown>>} */
		const components = {};
		for (const componentId of Object.values(mc.BlockComponentTypes)) {
			const component = block.getComponent(componentId);
			components[componentId] = ClassToJson(component);
		}

		const blockMetadata = {
			...Pick(block, ["isAir", "isLiquid", "isSolid"]),
			tags: block.getTags(),
			itemStack: block.getItemStack()?.typeId,
			components,
		};

		blocksMetadata[blockType.id] = blockMetadata;
	}
	await UploadMetadata(`blocks_metadata`, blocksMetadata);
}

function GenerateItemComponentsRegistry() {
	/** @type {Record<string, Record<string, unknown>>} >} */
	const itemsMetadata = {};
	for (const itemType of mc.ItemTypes.getAll()) {
		const itemStack = new mc.ItemStack(itemType);
		if (itemType.id === "minecraft:air") continue; // crashes mc lol

		itemsMetadata[itemType.id] = {
			...Pick(itemStack, ["maxAmount", "isStackable"]),
			tags: itemStack.getTags(),
			components: ClassToJson(itemStack.getComponents()),
		};
	}
	return UploadMetadata("items_metadata", itemsMetadata);
}

function GenerateEntityComponentRegistry() {
	/** @type {Record<string, Record<string, unknown>>} */
	const entityMetadata = {};
	for (const entityType of mc.EntityTypes.getAll()) {
		try {
			const entity = overworld.spawnEntity(entityType.id, { x: 0, y: 0, z: 0 });

			entityMetadata[entityType.id] = {
				spawnable: true,
				components: entity.getComponents().map(ClassToJson),
				head: entity.getHeadLocation(),
			};

			entity.remove();
		} catch (e) {
			entityMetadata[entityType.id] = { spawnable: false };
		}
	}
	return UploadMetadata("entity_metadata", entityMetadata);
}

function GenerateTypesRegistry() {
	/** @type {Record<string, unknown>} */
	const typesRegistry = {};
	for (const [name, types] of Object.entries(mc)) {
		if (
			name.endsWith("Types") &&
			typeof types === "function" &&
			"getAll" in types
		) {
			typesRegistry[name] = types.getAll();
		}
	}
	return UploadMetadata("types_registry", typesRegistry);
}

/**
 * @param {string} metadataKey
 * @param {object} object
 */
async function UploadMetadata(metadataKey, object) {
	console.log(metadataKey + ":", Object.keys(object).length);
	return net.http.request(
		new net.HttpRequest("http://localhost:9595/" + metadataKey).setBody(
			JSON.stringify(object)
		)
	);
}

/** @param {unknown} object */
function ClassToJson(object) {
	if (typeof object !== "object" || !object) return object;
	if (object instanceof mc.Block || object instanceof mc.Entity) return null;
	if (object instanceof mc.ItemStack) return Pick(object, ["typeId"]);

	/** @type {Record<string, unknown>} */
	const record = object;
	/** @type {Record<string, unknown>} */
	const newObject = {};
	for (const property in object) {
		const value = record[property];
		if (value && typeof value === "object") {
			if (Array.isArray(value)) {
				newObject[property] = value.map(ClassToJson);
			} else newObject[property] = ClassToJson(value);
		} else {
			newObject[property] = value;
		}
	}
	return newObject;
}

/**
 * @template {object} T
 * @param {T} object
 * @param {(keyof { [K in keyof T]: T[K] extends CallableFunction ? never : T[K] })[]} keys
 */
function Pick(object, keys) {
	return Object.fromEntries(keys.map((e) => [e, object[e]]));
}
