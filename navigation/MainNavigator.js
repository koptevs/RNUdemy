import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { themePalette } from '../theme';

import ChatListScreen from '../screens/ChatListScreen';
import ChatSettingsScreen from '../screens/ChatSettingsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ChatScreen from '../screens/ChatScreen';

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

const MainNavigator = () => {
  return (
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
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          headerTitle: '',
          gestureEnabled: true,
          animationEnabled: true,
          title: 'Chat Screen',
          headerTitleStyle: {
            fontFamily: 'Roboto-Light',
            fontSize: 16,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
