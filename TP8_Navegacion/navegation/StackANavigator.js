import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenA1 from '../screens/ScreenA1';
import ScreenA2 from '../screens/ScreenA2';

const Stack = createNativeStackNavigator();

export default function StackANavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ScreenA1" component={ScreenA1} />
      <Stack.Screen name="ScreenA2" component={ScreenA2} />
    </Stack.Navigator>
  );
}
