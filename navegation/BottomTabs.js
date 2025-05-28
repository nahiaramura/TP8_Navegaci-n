import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import StackANavigator from './StackANavigator';
import StackBNavigator from './StackBNavigator';
import StackCNavigator from './StackCNavigator';
import StackDNavigator from './StackDNavigator';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Stack A"
        component={StackANavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Stack B"
        component={StackBNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Stack C"
        component={StackCNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Stack D"
        component={StackDNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="planet" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
