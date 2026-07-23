export const BATTERY = {
  id: 'BATT-01',
  type: 'Lead-Acid · 12V',
  voltage: 12.74,
  current: -4.2,
  power: 53.5,
  soc: 72,
  soh: 84,
  status: 'Engine Running',
  engineOn: true,
  alertActive: false,
};

export const VOLTAGE_TREND = [
  12.1, 12.0, 11.95, 11.9, 12.4, 12.9, 13.6, 14.1, 14.3, 14.2, 14.0, 13.8, 13.6,
  13.9, 14.1, 14.2, 14.0, 13.7, 13.3, 12.9, 12.6, 12.4, 12.3, 12.74,
];

const todayMin = Math.min(...VOLTAGE_TREND);
const todayMax = Math.max(...VOLTAGE_TREND);

export const HISTORY = [
  { date: 'Today', min: todayMin, max: todayMax, flag: false },
  { date: 'Yesterday', min: 11.8, max: 14.61, flag: false },
  { date: 'Tue 21 July', min: 9.13, max: 14.56, flag: true },
  { date: 'Mon 20 July', min: 11.1, max: 14.75, flag: false },
  { date: 'Sun 19 July', min: 9.21, max: 14.7, flag: true },
  { date: 'Sat 18 July', min: 11.94, max: 14.89, flag: false },
];
