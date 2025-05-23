import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/sharedStyles';

export default function ScreenC2() {
  return (
    <View style={styles.screenC}>
      <Text style={styles.text}>Pantalla C2 con imagen</Text>
      <Image
        source={{ uri: 'https://placekitten.com/300/200' }}
        style={{ width: 300, height: 200, marginTop: 20, borderRadius: 10 }}
      />
    </View>
  );
}
