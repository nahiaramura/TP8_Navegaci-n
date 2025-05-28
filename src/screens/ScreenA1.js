import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../../styles/sharedStyles';

export default function ScreenA1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla A1</Text>
      <Button title="Ir a A2" onPress={() => navigation.navigate('Screen A2')} />
    </View>
  );
}