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

      <Text>Texto</Text>
<TextInput placeholder="Ingresá algo" />
<Button title="Presioname" onPress={() => {}} />
<Image source={require('../assets/icon.png')} style={{ width: 100, height: 100 }} />

    </Stack.Navigator>

    
  );
}
