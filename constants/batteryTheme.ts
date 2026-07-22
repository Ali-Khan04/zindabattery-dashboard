export const C = {
  bg: '#FFFFFF',
  surface: '#F6F8FB',
  ink: '#0B0C0E',
  blue: '#2568EC',
  blueDim: '#E9EFFD',
  amber: '#C6720A',
  amberBg: '#FBEEDD',
  red: '#C0362C',
  green: '#1C8A5B',
  greenDim: '#E7F5EE',
  muted: '#6E7787',
  faint: '#D8DEE6',
};

export function socColor(v: number) {
  if (v > 60) return C.green;
  if (v > 30) return C.amber;
  return C.red;
}

export function sohColor(v: number) {
  if (v >= 80) return C.green;
  if (v >= 60) return C.amber;
  return C.red;
}
