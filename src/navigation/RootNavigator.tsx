import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { FormScreen } from "../screens/FormScreen";
import { PixelTestScreen } from "../screens/PixelTestScreen";

export type RootStackParamList = {
  Home: undefined;
  Form: undefined;
  PixelTest: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="PixelTest"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="PixelTest"
        component={PixelTestScreen}
        options={{
          headerShown: true,
          headerTitle: "Pixel Test",
        }}
      />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Form"
        component={FormScreen}
        options={{
          presentation: "modal",
          headerShown: true,
          headerTitle: "Pré-Inscrição",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
};
