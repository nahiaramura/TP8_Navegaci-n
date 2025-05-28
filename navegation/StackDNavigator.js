import Noticias1 from './screens/Noticias1';
import Noticias2 from './screens/Noticias2';

const StackD = createNativeStackNavigator();

function StackDNavigator() {
  return (
    <StackD.Navigator>
      <StackD.Screen name="Noticias1" component={Noticias1} />
      <StackD.Screen name="Noticias2" component={Noticias2} />
    </StackD.Navigator>
  );
}

export default StackDNavigator;