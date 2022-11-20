import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "../screen/Categories";
import CategoryBread from "../screen/CategoryBread";
import BreadDetails from "../screen/BreadDetails";
import About from "../screen/About";
import Home from "../screen/Home";

const Stack = createNativeStackNavigator();


export default ShopNavigate = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Categories" component={Categories} />
                <Stack.Screen name="Bread" component={CategoryBread} />
                <Stack.Screen name="Details" component={BreadDetails} />
                <Stack.Screen name="About" component={About} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


