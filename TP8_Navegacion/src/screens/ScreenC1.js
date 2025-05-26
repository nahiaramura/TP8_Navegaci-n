import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../../styles/sharedStyles';

export default function ScreenC1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla C1</Text>
      <Button title="Ir a C2" onPress={() => navigation.navigate('Screen C2')} />
    </View>
  );
}
