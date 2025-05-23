import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from '../styles/sharedStyles';

export default function ScreenA1({ navigation }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <View style={styles.screenA}>
      <Text style={styles.text}>Pantalla A1</Text>
      <TextInput style={styles.input} placeholder="Nombre" onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Teléfono" onChangeText={setPhone} keyboardType="phone-pad" />
      <Button title="Enviar datos" onPress={() => navigation.navigate('ScreenA2', { name, phone })} />
    </View>
  );
}
