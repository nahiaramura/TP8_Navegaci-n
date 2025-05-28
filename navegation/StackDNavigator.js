import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenD1 from '../src/screens/ScreenD1';
import ScreenD2 from '../src/screens/ScreenD2';

const Stack = createNativeStackNavigator();

export default function StackDNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ScreenD1" component={ScreenD1} options={{ title: 'Formulario' }} />
      <Stack.Screen name="ScreenD2" component={ScreenD2} options={{ title: 'Datos Ingresados' }} />
    </Stack.Navigator>
  );
}
