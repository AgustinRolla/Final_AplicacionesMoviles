import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./Screens/homeScreen";
import CardScreen from "./Screens/card";
import CardRnd from "./Screens/cardrnd";

function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CardScreen" component={CardScreen} />
        <Stack.Screen name="CardRnd" component={CardRnd} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
