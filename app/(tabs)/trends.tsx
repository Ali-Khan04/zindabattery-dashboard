import DashboardHeader from '@/components/DashboardHeader';
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import VoltageTrendChart from '../../components/battery/VoltageTrendChart';
import { C } from '../../constants/batteryTheme';

export default function TrendsScreen() {
  return (
    <View style={s.root}>
      <StatusBar barStyle="dark-content" backgroundColor={C.bg} />
      <DashboardHeader />
      <ScrollView
        contentContainerStyle={s.scroll}
        showsVerticalScrollIndicator={false}
      >
        <VoltageTrendChart />
        <View style={{ height: 24 }} />
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.bg },
  scroll: { paddingTop: 10 },
});
