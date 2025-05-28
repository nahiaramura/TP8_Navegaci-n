import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { sharedStyles } from '../styles/sharedStyles';

export default function ScreenD2() {
  const route = useRoute();
  const { nombre, telefono } = route.params;

  return (
    <View style={[sharedStyles.container, { backgroundColor: '#e6f2ff' }]}>
      <Text style={sharedStyles.text}>Datos recibidos:</Text>
      <Text style={sharedStyles.text}>Nombre: {nombre}</Text>
      <Text style={sharedStyles.text}>Teléfono: {telefono}</Text>
    </View>
  );
}
