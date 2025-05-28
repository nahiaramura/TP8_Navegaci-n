import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenA1 from '../src/screens/ScreenA1';
import ScreenA2 from '../src/screens/ScreenA2';

const Stack = createNativeStackNavigator();

export default function StackANavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen A1" component={ScreenA1} />
      <Stack.Screen name="Screen A2" component={ScreenA2} />
    </Stack.Navigator>
  );
}
