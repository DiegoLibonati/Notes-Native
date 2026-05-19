import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { enableScreens, enableFreeze } from "react-native-screens";

import type { JSX } from "react";

import { store } from "@/app/store";

enableScreens(true);
enableFreeze(true);

export default function RootLayout(): JSX.Element {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <StatusBar style="auto" />
        <Slot />
      </Provider>
    </SafeAreaProvider>
  );
}
