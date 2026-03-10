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
export class ColorGrading {
   public resetHighlightsContrast(biomeIdentifier: server.BiomeType): void;
   public resetHighlightsGain(biomeIdentifier: server.BiomeType): void;
   public resetHighlightsGamma(biomeIdentifier: server.BiomeType): void;
   public resetHighlightsMin(biomeIdentifier: server.BiomeType): void;
   public resetHighlightsOffset(biomeIdentifier: server.BiomeType): void;
   public resetHighlightsSaturation(biomeIdentifier: server.BiomeType): void;
   public resetMidtonesContrast(biomeIdentifier: server.BiomeType): void;
   public resetMidtonesGain(biomeIdentifier: server.BiomeType): void;
   public resetMidtonesGamma(biomeIdentifier: server.BiomeType): void;
   public resetMidtonesOffset(biomeIdentifier: server.BiomeType): void;
   public resetMidtonesSaturation(biomeIdentifier: server.BiomeType): void;
   public resetShadowsContrast(biomeIdentifier: server.BiomeType): void;
   public resetShadowsGain(biomeIdentifier: server.BiomeType): void;
   public resetShadowsGamma(biomeIdentifier: server.BiomeType): void;
   public resetShadowsMax(biomeIdentifier: server.BiomeType): void;
   public resetShadowsOffset(biomeIdentifier: server.BiomeType): void;
   public resetShadowsSaturation(biomeIdentifier: server.BiomeType): void;
   public resetTemperature(biomeIdentifier: server.BiomeType): void;
   public setHighlightsContrast(highlightsContrast: server.Vector3, biomeIdentifier: server.BiomeType): void;
   public setHighlightsGain(highlightsGain: server.Vector3, biomeIdentifier: server.BiomeType): void;
   public setHighlightsGamma(highlightsGamma: server.Vector3, biomeIdentifier: server.BiomeType): void;
   public setHighlightsMin(highlightsMin: number, biomeIdentifier: server.BiomeType): void;
   public setHighlightsOffset(highlightsOffset: server.Vector3, biomeIdentifier: server.BiomeType): void;
   public setHighlightsSaturation(highlightsSaturation: server.Vector3, biomeIdentifier: server.BiomeType): void;
   public setMidtonesContrast(midtonesContrast: server.Vector3, biomeIdentifier: server.BiomeType): void;
   public setMidtonesGain(midtonesGain: server.Vector3, biomeIdentifier: server.BiomeType): void;
   public setMidtonesGamma(midtonesGamma: server.Vector3, biomeIdentifier: server.BiomeType): void;
   public setMidtonesOffset(midtonesOffset: server.Vector3, biomeIdentifier: server.BiomeType): void;
   public setMidtonesSaturation(midtonesSaturation: server.Vector3, biomeIdentifier: server.BiomeType): void;
   public setShadowsContrast(shadowsContrast: server.Vector3, biomeIdentifier: server.BiomeType): void;
   public setShadowsGain(shadowsGain: server.Vector3, biomeIdentifier: server.BiomeType): void;
   public setShadowsGamma(shadowsGamma: server.Vector3, biomeIdentifier: server.BiomeType): void;
   public setShadowsMax(shadowsMax: number, biomeIdentifier: server.BiomeType): void;
   public setShadowsOffset(shadowsOffset: server.Vector3, biomeIdentifier: server.BiomeType): void;
   public setShadowsSaturation(shadowsSaturation: server.Vector3, biomeIdentifier: server.BiomeType): void;
   public setTemperature(temperature: number, biomeIdentifier: server.BiomeType): void;
   private constructor();
}
export class Lighting {
   public resetAmbientColor(biomeIdentifier: server.BiomeType): void;
   public resetAmbientIlluminance(biomeIdentifier: server.BiomeType): void;
   public resetEmissiveDesaturation(biomeIdentifier: server.BiomeType): void;
   public resetFlashColor(biomeIdentifier: server.BiomeType): void;
   public resetFlashIlluminance(biomeIdentifier: server.BiomeType): void;
   public resetMoonColor(biomeIdentifier: server.BiomeType): void;
   public resetMoonIlluminance(biomeIdentifier: server.BiomeType): void;
   public resetOrbitalOffsetDegrees(biomeIdentifier: server.BiomeType): void;
   public resetSkyIntensity(biomeIdentifier: server.BiomeType): void;
   public resetSunColor(biomeIdentifier: server.BiomeType): void;
   public resetSunIlluminance(biomeIdentifier: server.BiomeType): void;
   public setAmbientColor(color: Record<number,server.RGB> | server.RGB, biomeIdentifier: server.BiomeType): void;
   public setAmbientIlluminance(illuminance: number | Record<number,number>, biomeIdentifier: server.BiomeType): void;
   public setEmissiveDesaturation(value: number, biomeIdentifier: server.BiomeType): void;
   public setFlashColor(color: Record<number,server.RGB> | server.RGB, biomeIdentifier: server.BiomeType): void;
   public setFlashIlluminance(illuminance: number | Record<number,number>, biomeIdentifier: server.BiomeType): void;
   public setMoonColor(color: Record<number,server.RGB> | server.RGB, biomeIdentifier: server.BiomeType): void;
   public setMoonIlluminance(illuminance: number | Record<number,number>, biomeIdentifier: server.BiomeType): void;
   public setOrbitalOffsetDegrees(degrees: number | Record<number,number>, biomeIdentifier: server.BiomeType): void;
   public setSkyIntensity(intensity: number | Record<number,number>, biomeIdentifier: server.BiomeType): void;
   public setSunColor(color: Record<number,server.RGB> | server.RGB, biomeIdentifier: server.BiomeType): void;
   public setSunIlluminance(illuminance: number | Record<number,number>, biomeIdentifier: server.BiomeType): void;
   private constructor();
}
export class Water {
   public resetCDOM(biomeIdentifier: server.BiomeType): void;
   public resetChlorophyll(biomeIdentifier: server.BiomeType): void;
   public resetSuspendedSediment(biomeIdentifier: server.BiomeType): void;
   public resetWavesDepth(biomeIdentifier: server.BiomeType): void;
   public resetWavesDirectionIncrement(biomeIdentifier: server.BiomeType): void;
   public resetWavesFrequency(biomeIdentifier: server.BiomeType): void;
   public resetWavesFrequencyScaling(biomeIdentifier: server.BiomeType): void;
   public resetWavesMix(biomeIdentifier: server.BiomeType): void;
   public resetWavesOctaves(biomeIdentifier: server.BiomeType): void;
   public resetWavesPull(biomeIdentifier: server.BiomeType): void;
   public resetWavesShape(biomeIdentifier: server.BiomeType): void;
   public resetWavesSpeed(biomeIdentifier: server.BiomeType): void;
   public resetWavesSpeedScaling(biomeIdentifier: server.BiomeType): void;
   public setCDOM(cdom: number, biomeIdentifier: server.BiomeType): void;
   public setChlorophyll(chlorophyll: number, biomeIdentifier: server.BiomeType): void;
   public setSuspendedSediment(suspendedSediment: number, biomeIdentifier: server.BiomeType): void;
   public setWavesDepth(wavesDepth: number, biomeIdentifier: server.BiomeType): void;
   public setWavesDirectionIncrement(wavesDirectionIncrement: number, biomeIdentifier: server.BiomeType): void;
   public setWavesFrequency(wavesFrequency: number, biomeIdentifier: server.BiomeType): void;
   public setWavesFrequencyScaling(wavesFrequencyScaling: number, biomeIdentifier: server.BiomeType): void;
   public setWavesMix(wavesMix: number, biomeIdentifier: server.BiomeType): void;
   public setWavesOctaves(wavesOctaves: number, biomeIdentifier: server.BiomeType): void;
   public setWavesPull(wavesPull: number, biomeIdentifier: server.BiomeType): void;
   public setWavesShape(wavesShape: number, biomeIdentifier: server.BiomeType): void;
   public setWavesSpeed(wavesSpeed: number, biomeIdentifier: server.BiomeType): void;
   public setWavesSpeedScaling(wavesSpeedScaling: number, biomeIdentifier: server.BiomeType): void;
   private constructor();
}

export const InternalConstant = 1;

export const atmosphere: Atmospherics;
export const colorGrading: ColorGrading;
export const lighting: Lighting;
export const water: Water;

