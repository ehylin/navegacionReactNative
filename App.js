import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Provider } from "react-redux";
import store from "./src/store"
import ShopNavigate from './src/navigation/ShopNavigate';
import BottomTabNavigator from "./src/navigation/BottomTabNavigator"

export default function App() {

  const [fontsLouded] = useFonts({
    Kanit: require('./src/assets/fonts/Kanit-Black.ttf')
  })

  if (!fontsLouded) {
    return null;
  }

  return (
    <Provider store={store}>
      <BottomTabNavigator />
    </Provider>
  );
}

