export type BatteryChemistry = 'Flooded' | 'AGM' | 'Gel';

export const DEFAULT_SETTINGS = {
  chemistry: 'AGM' as BatteryChemistry,
  cellCount: 6, // 6 x 2V cells = 12V lead-acid
  chargeVoltageMax: 14.4, // float/bulk cutoff
  lowVoltageCutoff: 11.8,
  socLowAlert: 30,
  overcurrentCutoff: 60,
  voltageDeviationFault: 150, // mV
  // only capacity is used in the mock app, but we can add more settings later
  capacityAh: 100,
};

export const VOLTAGE_MAX_RANGE = { min: 13.2, max: 14.8 };
export const VOLTAGE_MIN_RANGE = { min: 10.5, max: 11.8 };
