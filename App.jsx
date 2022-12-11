import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import DisplayScreen from './screens/DisplayScreen';
import LoginScreen from './screens/LoginScreen';
import LogoutScreen from './screens/LogoutScreen';
 
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Search" component={SearchScreen} /> 
      <Stack.Screen name="Home" component={HomeScreen} /> 
        <Stack.Screen name="Login" component={LoginScreen}/>
        
        <Stack.Screen name="Display" component={DisplayScreen}/>
        <Stack.Screen name="Logout" component={LogoutScreen}/>
        
      </Stack.Navigator>
    </NavigationContainer>
   </TailwindProvider>
  );
}


 