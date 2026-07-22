import { C } from '@/constants/batteryTheme';
import { BATTERY } from '@/constants/mockBatteryData';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import ZindaLogo from '../assets/images/logo.png';

export default function DashboardHeader() {
  return (
    <View style={s.header}>
      <View style={s.headerTop}>
        <Image source={ZindaLogo} style={s.logo} resizeMode="contain" />
        <View style={s.idBadge}>
          <Text style={s.idText}>{BATTERY.id}</Text>
        </View>
      </View>
      <Text style={s.headerSub}>Battery Monitoring</Text>
    </View>
  );
}

const s = StyleSheet.create({
  header: { paddingHorizontal: 20, paddingTop: 56, paddingBottom: 16 },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: { width: 128, height: 32 },
  headerSub: { fontSize: 12, color: C.muted, marginTop: 10, fontWeight: '500' },
  idBadge: {
    backgroundColor: C.blue,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  idText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '800',
    letterSpacing: 1,
  },
});
