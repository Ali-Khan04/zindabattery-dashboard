import { C } from "@/constants/batteryTheme";
import { BATTERY } from "@/constants/mockBatteryData";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function AlertBanner() {
  if (!BATTERY.alertActive) return null;
  return (
    <View style={al.banner}>
      <Text style={al.text}>
        Voltage dropped below 11.8 V threshold at 07:14 AM
      </Text>
    </View>
  );
}

const al = StyleSheet.create({
  banner: {
    marginHorizontal: 20,
    marginTop: 12,
    backgroundColor: C.amberBg,
    borderRadius: 12,
    padding: 12,
  },
  text: { fontSize: 12, color: C.amber, fontWeight: "600", lineHeight: 17 },
});
