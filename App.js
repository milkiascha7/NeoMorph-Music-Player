import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstScreen from './screens/FirstScreen';
import PlayScreen from './screens/PlayScreen';
import MainScreen from './screens/MainScreen';



const gray="#91A1BD"
const Stack = createNativeStackNavigator()


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FirstScreen" component={FirstScreen} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="MainScreen" component={MainScreen} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="PlayScreen" component={PlayScreen} options={{
          headerShown: false,
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE9F7',
    alignItems: 'center',
  },
});
