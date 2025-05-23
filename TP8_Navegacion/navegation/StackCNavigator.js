import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenC1 from '../screens/ScreenC1';
import ScreenC2 from '../screens/ScreenC2';

const Stack = createNativeStackNavigator();

export default function StackCNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ScreenC1" component={ScreenC1} />
      <Stack.Screen name="ScreenC2" component={ScreenC2} />
    </Stack.Navigator>
  );
}
