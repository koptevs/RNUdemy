import 'react-native-gesture-handler';
import { useCallback, useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { themePalette } from './theme';

import inAppUsedFonts from './assets/fonts/inAppUsedFonts';
import ChatListScreen from './screens/ChatListScreen';
import ChatSettingsScreen from './screens/ChatSettingsScreen';
import SettingsScreen from './screens/SettingsScreen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerTitle: '' }}>
      <Tab.Screen
        name="ChatList"
        component={ChatListScreen}
        options={{
          title: 'Chat List',
          headerTitleStyle: {
            fontFamily: 'Roboto-Light',
            fontSize: 16,
          },
          tabBarLabel: 'Chats',
          tabBarActiveTintColor: themePalette.tabIconsActiveColor,
          tabBarInactiveTintColor: themePalette.tabIconsInactiveColor,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            iconName = focused ? 'chatbubble-sharp' : 'chatbubble-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Settings',
          headerTitleStyle: {
            fontFamily: 'Roboto-Light',
            fontSize: 16,
          },
          tabBarLabel: 'Settings',
          tabBarActiveTintColor: themePalette.tabIconsActiveColor,
          tabBarInactiveTintColor: themePalette.tabIconsInactiveColor,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            iconName = focused ? 'build-sharp' : 'build-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

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
            component={TabNavigator}
            options={{
              headerShown: false,
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
