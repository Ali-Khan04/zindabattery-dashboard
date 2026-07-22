import React, { useState } from 'react';
import {
  Alert,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import DashboardHeader from '../../components/DashboardHeader';
import SendToControllerButton from '../../components/settings/SendToControllerButton';
import SettingSlider from '../../components/settings/SettingSlider';
import { C } from '../../constants/batteryTheme';
import { DEFAULT_SETTINGS } from '../../constants/mockSettingsData';

export default function SettingsScreen() {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);

  const update = (key: keyof typeof settings) => (v: number) =>
    setSettings((prev) => ({ ...prev, [key]: v }));

  return (
    <View style={s.root}>
      <StatusBar barStyle="dark-content" backgroundColor={C.bg} />
      <DashboardHeader />
      <ScrollView
        contentContainerStyle={s.scroll}
        showsVerticalScrollIndicator={false}
      >
        <Text style={s.sectionTitle}>Battery Info</Text>
        <SettingSlider
          label="Capacity"
          value={settings.capacityAh}
          unit="Ah"
          min={20}
          max={300}
          step={5}
          onChange={update('capacityAh')}
        />

        <SendToControllerButton
          onPress={() =>
            Alert.alert(
              'Settings sent',
              'Configuration sent to controller (mock).',
            )
          }
        />
        <View style={{ height: 24 }} />
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.bg },
  scroll: { paddingTop: 10 },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: C.muted,
    marginHorizontal: 20,
    marginTop: 18,
    marginBottom: 4,
    letterSpacing: 0.5,
  },
});
