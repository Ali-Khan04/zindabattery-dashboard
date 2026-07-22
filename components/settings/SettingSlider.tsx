import { C } from '@/constants/batteryTheme';
import Slider from '@react-native-community/slider';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SettingSlider({
  label,
  value,
  unit,
  min,
  max,
  step = 0.1,
  onChange,
}: {
  label: string;
  value: number;
  unit: string;
  min: number;
  max: number;
  step?: number;
  onChange: (v: number) => void;
}) {
  return (
    <View style={s.card}>
      <View style={s.headerRow}>
        <Text style={s.label}>{label}</Text>
        <Text style={s.value}>
          {value.toFixed(step < 1 ? 2 : 0)} {unit}
        </Text>
      </View>
      <Slider
        style={s.slider}
        minimumValue={min}
        maximumValue={max}
        step={step}
        value={value}
        onValueChange={onChange}
        minimumTrackTintColor={C.blue}
        maximumTrackTintColor={C.faint}
        thumbTintColor={C.blue}
      />
      <View style={s.rangeRow}>
        <Text style={s.rangeText}>
          {min} {unit}
        </Text>
        <Text style={s.rangeText}>
          {max} {unit}
        </Text>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  card: {
    marginHorizontal: 20,
    marginTop: 14,
    backgroundColor: C.surface,
    borderRadius: 14,
    padding: 14,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: { fontSize: 13, color: C.ink, fontWeight: '600' },
  value: { fontSize: 13, color: C.blue, fontWeight: '800' },
  slider: { width: '100%', height: 32, marginTop: 6 },
  rangeRow: { flexDirection: 'row', justifyContent: 'space-between' },
  rangeText: { fontSize: 10, color: C.muted, fontWeight: '600' },
});
