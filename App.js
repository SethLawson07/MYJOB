import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/Authenticate/loginScreen';
import RegisterScreen from './src/Authenticate/RegisterScreen';
import HomeScreen from './src/Home';
import DetailScreen from './src/DetailScreen';
import PublishScreen from './src/PublishScreen';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
   
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerShown: false,       
        }}
        >
       <Stack.Screen name="Home" component={HomeScreen} />
       <Stack.Screen name="Details" component={DetailScreen} />
       <Stack.Screen name="Publish" component={PublishScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
   
         
        </Stack.Navigator>
      </NavigationContainer>
     
   
  );
}


