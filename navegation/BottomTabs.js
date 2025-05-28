import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackANavigator from './StackANavigator';
import StackBNavigator from './StackBNavigator';
import StackCNavigator from './StackCNavigator';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Stack A" component={StackANavigator} />
      <Tab.Screen name="Stack B" component={StackBNavigator} />
      <Tab.Screen name="Stack C" component={StackCNavigator} />
    </Tab.Navigator>
  );
}
