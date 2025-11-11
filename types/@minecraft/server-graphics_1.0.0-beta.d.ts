import * as common from "@minecraft/common";
import * as server from "@minecraft/server";



export class Atmospherics {
   public resetHorizonBlendMax(biomeIdentifier: server.BiomeType): void;
   public resetHorizonBlendMieStart(biomeIdentifier: server.BiomeType): void;
   public resetHorizonBlendMin(biomeIdentifier: server.BiomeType): void;
   public resetHorizonBlendStart(biomeIdentifier: server.BiomeType): void;
   public resetMoonMieStrength(biomeIdentifier: server.BiomeType): void;
   public resetRayleighStrength(biomeIdentifier: server.BiomeType): void;
   public resetSkyHorizonColor(biomeIdentifier: server.BiomeType): void;
   public resetSkyZenithColor(biomeIdentifier: server.BiomeType): void;
   public resetSunGlareShape(biomeIdentifier: server.BiomeType): void;
   public resetSunMieStrength(biomeIdentifier: server.BiomeType): void;
   public setHorizonBlendMax(blendMax: number | Record<number,number>, biomeIdentifier: server.BiomeType): void;
   public setHorizonBlendMieStart(blendMieStart: number | Record<number,number>, biomeIdentifier: server.BiomeType): void;
   public setHorizonBlendMin(blendMin: number | Record<number,number>, biomeIdentifier: server.BiomeType): void;
   public setHorizonBlendStart(blendStart: number | Record<number,number>, biomeIdentifier: server.BiomeType): void;
   public setMoonMieStrength(moonMieStrength: number | Record<number,number>, biomeIdentifier: server.BiomeType): void;
   public setRayleighStrength(rayleighStrength: number | Record<number,number>, biomeIdentifier: server.BiomeType): void;
   public setSkyHorizonColor(color: Record<number,server.RGB> | server.RGB, biomeIdentifier: server.BiomeType): void;
   public setSkyZenithColor(color: Record<number,server.RGB> | server.RGB, biomeIdentifier: server.BiomeType): void;
   public setSunGlareShape(sunGlareShape: number | Record<number,number>, biomeIdentifier: server.BiomeType): void;
   public setSunMieStrength(sunMieStrength: number | Record<number,number>, biomeIdentifier: server.BiomeType): void;
   private constructor();
}


export const atmosphere: Atmospherics;

