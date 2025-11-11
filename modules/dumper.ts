import { Installation } from "@bedrock-apis/bds-utils/install";

export interface TheDumper {
    output?: string;
    dependencies?: Set<TheDumper>;
    description?: string;
    name?: string;
    init?(installation: Installation): Promise<number>
    run?(installation: Installation): Promise<number>;
}