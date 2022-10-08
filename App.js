import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Screens/Home";
import Test from "./Screens/test";

export default function App() {
  const stack = createStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="home" component={Home} />
        <stack.Screen name="test" component={Test} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
