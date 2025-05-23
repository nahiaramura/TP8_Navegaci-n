import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles/sharedStyles';

export default function ScreenC1({ navigation }) {
  return (
    <View style={styles.screenC}>
      <Text style={styles.text}>Pantalla C1</Text>
      <Button title="Ir a C2" onPress={() => navigation.navigate('ScreenC2')} />
    </View>
  );
}
