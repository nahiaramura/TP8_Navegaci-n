// screens/Noticias2.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Noticias2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Noticias 2</Text>
      <Image source={require('../../assets/News.png')} style={{ width: 150, height: 150 }} />
    </View>
  );
};

export default Noticias2;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e0f7fa' },
  text: { fontSize: 20 },
});
