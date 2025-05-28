import * as React from 'react';
import { Button, TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Noticias1 from './src/screens/Noticias1';
import Noticias2 from './src/screens/Noticias2';
import { Ionicons } from '@expo/vector-icons';

function ScreenA1() {
  const navigation = useNavigation();
  return (
    <View style={styles.homeScreen}>
      <Text style={styles.text}>HOME</Text>
      <Button title="Ir a Home 2" onPress={() => navigation.navigate('ScreenA2')} />
    </View>
  );
}
const StackD = createNativeStackNavigator();

function StackDNavigator() {
  return (
    <StackD.Navigator>
      <StackD.Screen name="Noticias1" component={Noticias1} />
      <StackD.Screen name="Noticias2" component={Noticias2} />
    </StackD.Navigator>
  );
}
function ScreenA2() {
  const navigation = useNavigation();
  return (
    <View style={styles.homeScreen}>
      <Text style={styles.text}>HOME 2</Text>
      <Button title="Volver a Home" onPress={() => navigation.goBack()} />
    </View>
  );
}


function ScreenB1() {
  const navigation = useNavigation();
  return (
    <View style={[styles.homeScreen, {backgroundColor: '#0000ff'}]}>
      <Text style={styles.text}>BUSCADOR</Text>
      <Button title="Ir a Buscador 2" onPress={() => navigation.navigate('ScreenB2')} />
    </View>
  );
}

function ScreenB2() {
  const navigation = useNavigation();
  return (
    <View style={[styles.homeScreen, {backgroundColor: '#000099'}]}>
      <Text style={styles.text}>BUSCADOR 2</Text>
      <Button title="Volver a Buscador" onPress={() => navigation.goBack()} />
    </View>
  );
}


function ScreenC1() {
  const [nombre, setNombre] = React.useState('');
  const [telefono, setTelefono] = React.useState('');
  const navigation = useNavigation();

  return (
    <View style={[styles.homeScreen, {backgroundColor: '#009900'}]}>
      <Text style={styles.text}>Ingrese su nombre:</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <Text style={styles.text}>Ingrese su teléfono:</Text>
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        value={telefono}
        onChangeText={setTelefono}
        keyboardType="phone-pad"
      />
      <Button
        title="Enviar datos"
        onPress={() =>
          navigation.navigate('ScreenC2', { nombre, telefono })
        }
      />
    </View>
  );
}

function ScreenC2({ route }) {
  const navigation = useNavigation();
  const { nombre, telefono } = route.params || {};

  return (
    <View style={[styles.homeScreen, {backgroundColor: '#006600'}]}>
      <Text style={styles.text}>Nombre: {nombre}</Text>
      <Text style={styles.text}>Teléfono: {telefono}</Text>
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
}

const StackA = createNativeStackNavigator();
const StackB = createNativeStackNavigator();
const StackC = createNativeStackNavigator();

function StackANavigator() {
  return (
    <StackA.Navigator>
      <StackA.Screen name="ScreenA1" component={ScreenA1} options={{ title: 'Home' }} />
      <StackA.Screen name="ScreenA2" component={ScreenA2} options={{ title: 'Home 2' }} />
    </StackA.Navigator>
  );
}

function StackBNavigator() {
  return (
    <StackB.Navigator>
      <StackB.Screen name="ScreenB1" component={ScreenB1} options={{ title: 'Buscador' }} />
      <StackB.Screen name="ScreenB2" component={ScreenB2} options={{ title: 'Buscador 2' }} />
    </StackB.Navigator>
  );
}

function StackCNavigator() {
  return (
    <StackC.Navigator>
      <StackC.Screen name="ScreenC1" component={ScreenC1} options={{ title: 'Perfil' }} />
      <StackC.Screen name="ScreenC2" component={ScreenC2} options={{ title: 'Perfil 2' }} />
    </StackC.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Buscador') {
            iconName = 'search';
          } else if (route.name === 'Perfil') {
            iconName = 'person';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={StackANavigator} />
      <Tab.Screen name="Buscador" component={StackBNavigator} />
      <Tab.Screen name="Perfil" component={StackCNavigator} />
      <Tab.Screen name="Noticias" component={StackDNavigator} options={{tabBarIcon: ({ color, size }) => (<Ionicons name="newspaper" size={size} color={color} />),}}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  homeScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '80%',
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
});
