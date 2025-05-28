import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenB1 from '../src/screens/ScreenB1';

const Stack = createNativeStackNavigator();

export default function StackBNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen B1" component={ScreenB1} />
    </Stack.Navigator>
  );
}
