import React from "react";
import { useTheme } from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Register } from "../screens/Register";
import { Dashboard } from "../screens/Dashboard";
import { Platform } from "react-native";

export type AppRoutesParamList = {
  Listagem: undefined;
  Cadastrar: undefined;
  Resumo: undefined;
};
const { Navigator, Screen } = createBottomTabNavigator<AppRoutesParamList>();

export function AppRoutes() {
  const theme = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: "beside-icon",
        tabBarStyle: {
          paddingHorizontal: Platform.OS === "ios" ? 20 : 0,
          height: Platform.OS === "ios" ? 88 : 60,
        },
      }}
    >
      <Screen
        name="Listagem"
        component={Dashboard}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Screen
        name="Cadastrar"
        component={Register}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="attach-money" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Resumo"
        component={Register}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="pie-chart" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
