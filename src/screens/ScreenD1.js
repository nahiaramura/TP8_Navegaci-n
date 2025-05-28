import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { sharedStyles } from '../styles/sharedStyles';

export default function ScreenD1() {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const navigation = useNavigation();

  return (
    <View style={[sharedStyles.container, { backgroundColor: '#e6f2ff' }]}>
      <Text style={sharedStyles.text}>Ingrese sus datos</Text>
      <TextInput
        style={sharedStyles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={sharedStyles.input}
        placeholder="Teléfono"
        value={telefono}
        onChangeText={setTelefono}
        keyboardType="phone-pad"
      />
      <Button
        title="Enviar"
        onPress={() => navigation.navigate('ScreenD2', { nombre, telefono })}
      />
    </View>
  );
}
