/** Represents JSON-compatible primitive type */
type JsonPrimative = string | number | boolean | null | undefined;

/** Represents JSON-compatible object type */
type JsonObject = { [key: string]: Json };

/** Represents JSON-compatible array type */
type JsonArray = Json[];

/** Represents JSON-compatible object or primitive type */
export type Json = JsonPrimative | JsonArray | JsonObject;
