// screens/Noticias1.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Noticias1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Noticias 1</Text>
      <Button title="Ir a Noticias 2" onPress={() => navigation.navigate('Noticias2')} />
    </View>
  );
};

export default Noticias1;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e0f7fa' },
  text: { fontSize: 20 },
});
