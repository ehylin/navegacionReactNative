import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import ShopNavigate from './src/navigation/ShopNavigate';
import BottomTabNavigator from "./src/navigation/BottomTabNavigator"

export default function App() {

  const [fontsLouded] = useFonts({
    Kanit: require('./src/assets/fonts/Kanit-Black.ttf')
  })

  if (!fontsLouded) {
    return null;
  }

  return <BottomTabNavigator />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
