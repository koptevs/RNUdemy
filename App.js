import 'react-native-gesture-handler';
import { useCallback, useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import inAppUsedFonts from './assets/fonts/inAppUsedFonts';
import ChatListScreen from './screens/ChatListScreen';
import ChatSettingsScreen from './screens/ChatSettingsScreen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();
const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts(inAppUsedFonts);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <NavigationContainer>
        {/* <SafeAreaView> */}
        <Stack.Navigator>
          <Stack.Screen
            name="ChatListScreen"
            component={ChatListScreen}
            options={{
              headerTitle: 'Chat List',
              headerTitleStyle: {
                fontFamily: 'Roboto-Light',
                fontSize: 16,
              },
              headerShadowVisible: true,
              // title: 'Chat List',
              // headerShown: false,
            }}
          />
          <Stack.Screen
            name="ChatSettingsScreen"
            component={ChatSettingsScreen}
            options={{
              gestureEnabled: true,
              animationEnabled: true,
              title: 'Chat Settings',
              headerTitleStyle: {
                fontFamily: 'Roboto-Light',
                fontSize: 16,
              },
            }}
          />
        </Stack.Navigator>
        {/* <StatusBar style="dark" /> */}
        {/* </SafeAreaView> */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
