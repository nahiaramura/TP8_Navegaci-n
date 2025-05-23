import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import StackANavigator from './StackANavigator';
import StackBNavigator from './StackBNavigator';
import StackCNavigator from './StackCNavigator';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Inicio" component={StackANavigator} options={{ tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} /> }} />
      <Tab.Screen name="Buscar" component={StackBNavigator} options={{ tabBarIcon: ({ color }) => <Ionicons name="search" size={24} color={color} /> }} />
      <Tab.Screen name="Perfil" component={StackCNavigator} options={{ tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} /> }} />
    </Tab.Navigator>
  );
}
