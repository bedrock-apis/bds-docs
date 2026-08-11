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
export class BiomeColorGrading {
   public resetHighlightsContrast(): void;
   public resetHighlightsGain(): void;
   public resetHighlightsGamma(): void;
   public resetHighlightsMin(): void;
   public resetHighlightsOffset(): void;
   public resetHighlightsSaturation(): void;
   public resetMidtonesContrast(): void;
   public resetMidtonesGain(): void;
   public resetMidtonesGamma(): void;
   public resetMidtonesOffset(): void;
   public resetMidtonesSaturation(): void;
   public resetShadowsContrast(): void;
   public resetShadowsGain(): void;
   public resetShadowsGamma(): void;
   public resetShadowsMax(): void;
   public resetShadowsOffset(): void;
   public resetShadowsSaturation(): void;
   public resetTemperature(): void;
   public setHighlightsContrast(highlightsContrast: server.Vector3): void;
   public setHighlightsGain(highlightsGain: server.Vector3): void;
   public setHighlightsGamma(highlightsGamma: server.Vector3): void;
   public setHighlightsMin(highlightsMin: number): void;
   public setHighlightsOffset(highlightsOffset: server.Vector3): void;
   public setHighlightsSaturation(highlightsSaturation: server.Vector3): void;
   public setMidtonesContrast(midtonesContrast: server.Vector3): void;
   public setMidtonesGain(midtonesGain: server.Vector3): void;
   public setMidtonesGamma(midtonesGamma: server.Vector3): void;
   public setMidtonesOffset(midtonesOffset: server.Vector3): void;
   public setMidtonesSaturation(midtonesSaturation: server.Vector3): void;
   public setShadowsContrast(shadowsContrast: server.Vector3): void;
   public setShadowsGain(shadowsGain: server.Vector3): void;
   public setShadowsGamma(shadowsGamma: server.Vector3): void;
   public setShadowsMax(shadowsMax: number): void;
   public setShadowsOffset(shadowsOffset: server.Vector3): void;
   public setShadowsSaturation(shadowsSaturation: server.Vector3): void;
   public setTemperature(temperature: number): void;
   private constructor();
}
export class BiomeLighting {
   public resetAmbientColor(): void;
   public resetAmbientIlluminance(): void;
   public resetEmissiveDesaturation(): void;
   public resetFlashColor(): void;
   public resetFlashIlluminance(): void;
   public resetMoonColor(): void;
   public resetMoonIlluminance(): void;
   public resetOrbitalOffsetDegrees(): void;
   public resetSkyIntensity(): void;
   public resetSunColor(): void;
   public resetSunIlluminance(): void;
   public setAmbientColor(color: Record<number,server.RGB> | server.RGB): void;
   public setAmbientIlluminance(illuminance: number | Record<number,number>): void;
   public setEmissiveDesaturation(value: number): void;
   public setFlashColor(color: Record<number,server.RGB> | server.RGB): void;
   public setFlashIlluminance(illuminance: number | Record<number,number>): void;
   public setMoonColor(color: Record<number,server.RGB> | server.RGB): void;
   public setMoonIlluminance(illuminance: number | Record<number,number>): void;
   public setOrbitalOffsetDegrees(degrees: number | Record<number,number>): void;
   public setSkyIntensity(intensity: number | Record<number,number>): void;
   public setSunColor(color: Record<number,server.RGB> | server.RGB): void;
   public setSunIlluminance(illuminance: number | Record<number,number>): void;
   private constructor();
}
export class BiomeWater {
   public resetCDOM(): void;
   public resetChlorophyll(): void;
   public resetSuspendedSediment(): void;
   public resetWavesDepth(): void;
   public resetWavesDirectionIncrement(): void;
   public resetWavesFrequency(): void;
   public resetWavesFrequencyScaling(): void;
   public resetWavesMix(): void;
   public resetWavesOctaves(): void;
   public resetWavesPull(): void;
   public resetWavesShape(): void;
   public resetWavesSpeed(): void;
   public resetWavesSpeedScaling(): void;
   public setCDOM(cdom: number): void;
   public setChlorophyll(chlorophyll: number): void;
   public setSuspendedSediment(suspendedSediment: number): void;
   public setWavesDepth(wavesDepth: number): void;
   public setWavesDirectionIncrement(wavesDirectionIncrement: number): void;
   public setWavesFrequency(wavesFrequency: number): void;
   public setWavesFrequencyScaling(wavesFrequencyScaling: number): void;
   public setWavesMix(wavesMix: number): void;
   public setWavesOctaves(wavesOctaves: number): void;
   public setWavesPull(wavesPull: number): void;
   public setWavesShape(wavesShape: number): void;
   public setWavesSpeed(wavesSpeed: number): void;
   public setWavesSpeedScaling(wavesSpeedScaling: number): void;
   private constructor();
}

export const InternalConstant = 1;


export function getBiomeAtmospherics(biome: server.BiomeType): BiomeAtmospherics;
export function getBiomeColorGrading(biome: server.BiomeType): BiomeColorGrading;
export function getBiomeLighting(biome: server.BiomeType): BiomeLighting;
export function getBiomeWater(biome: server.BiomeType): BiomeWater;
export function getPlayerAtmospherics(biome: server.BiomeType, player: server.Player): BiomeAtmospherics;
export function getPlayerColorGrading(biome: server.BiomeType, player: server.Player): BiomeColorGrading;
export function getPlayerLighting(biome: server.BiomeType, player: server.Player): BiomeLighting;
export function getPlayerWater(biome: server.BiomeType, player: server.Player): BiomeWater;
