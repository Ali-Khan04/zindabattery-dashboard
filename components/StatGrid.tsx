import { C, socColor, sohColor } from "@/constants/batteryTheme";
import { BATTERY } from "@/constants/mockBatteryData";
import { Battery, Cog, Gauge, HeartPulse } from "lucide-react-native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function StatGrid() {
  const items = [
    {
      icon: <Battery size={16} color={socColor(BATTERY.soc)} />,
      value: `${BATTERY.soc}%`,
      label: "State of Charge",
    },
    {
      icon: <HeartPulse size={16} color={sohColor(BATTERY.soh)} />,
      value: `${BATTERY.soh}%`,
      label: "State of Health",
    },
    {
      icon: <Cog size={16} color={C.blue} />,
      value: `${BATTERY.current} A`,
      label: "Net Current",
    },
    {
      icon: <Gauge size={16} color={C.blue} />,
      value: `${BATTERY.voltage.toFixed(2)} V`,
      label: "Voltage",
    },
  ];
  return (
    <View style={grid.wrap}>
      {items.map((it, i) => (
        <View key={i} style={grid.cell}>
          {it.icon}
          <Text style={grid.value}>{it.value}</Text>
          <Text style={grid.label}>{it.label}</Text>
        </View>
      ))}
    </View>
  );
}

const grid = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 20,
    marginTop: 12,
    gap: 10,
  },
  cell: {
    width: "47%",
    backgroundColor: C.surface,
    borderRadius: 14,
    padding: 14,
    alignItems: "center",
  },
  value: {
    fontSize: 18,
    fontWeight: "800",
    color: C.ink,
    marginTop: 10,
    fontVariant: ["tabular-nums"],
  },
  label: { fontSize: 11, color: C.muted, marginTop: 3 },
});
