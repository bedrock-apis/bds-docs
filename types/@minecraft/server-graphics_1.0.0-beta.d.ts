import * as common from "@minecraft/common";
import * as server from "@minecraft/server";



export class BiomeAtmospherics {
   public resetHorizonBlendMax(): void;
   public resetHorizonBlendMieStart(): void;
   public resetHorizonBlendMin(): void;
   public resetHorizonBlendStart(): void;
   public resetMoonMieStrength(): void;
   public resetRayleighStrength(): void;
   public resetSkyHorizonColor(): void;
   public resetSkyZenithColor(): void;
   public resetSunGlareShape(): void;
   public resetSunMieStrength(): void;
   public setHorizonBlendMax(blendMax: number | Record<number,number>): void;
   public setHorizonBlendMieStart(blendMieStart: number | Record<number,number>): void;
   public setHorizonBlendMin(blendMin: number | Record<number,number>): void;
   public setHorizonBlendStart(blendStart: number | Record<number,number>): void;
   public setMoonMieStrength(moonMieStrength: number | Record<number,number>): void;
   public setRayleighStrength(rayleighStrength: number | Record<number,number>): void;
   public setSkyHorizonColor(color: Record<number,server.RGB> | server.RGB): void;
   public setSkyZenithColor(color: Record<number,server.RGB> | server.RGB): void;
   public setSunGlareShape(sunGlareShape: number | Record<number,number>): void;
   public setSunMieStrength(sunMieStrength: number | Record<number,number>): void;
   private constructor();
}



export function getBiomeAtmospherics(biome: server.BiomeType): BiomeAtmospherics;
