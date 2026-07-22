import { C } from '@/constants/batteryTheme';
import { BATTERY } from '@/constants/mockBatteryData';
import { Gauge } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function InfoStrip() {
  return (
    <View style={info.card}>
      <View style={info.iconWrap}>
        <Gauge size={18} color={C.blue} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={info.value}>
          {BATTERY.voltage.toFixed(2)}
          <Text style={info.unit}> V</Text>
        </Text>
        <Text style={info.sub}>{BATTERY.type}</Text>
      </View>
      <Text style={info.status}>{BATTERY.status}</Text>
    </View>
  );
}

const info = StyleSheet.create({
  card: {
    marginHorizontal: 20,
    marginTop: 12,
    backgroundColor: C.surface,
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrap: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: C.blueDim,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  value: {
    fontSize: 22,
    fontWeight: '800',
    color: C.ink,
    fontVariant: ['tabular-nums'],
  },
  unit: { fontSize: 13, fontWeight: '700', color: C.muted },
  sub: { fontSize: 11, color: C.muted, marginTop: 2 },
  status: { fontSize: 11, color: C.muted, fontWeight: '600' },
});
