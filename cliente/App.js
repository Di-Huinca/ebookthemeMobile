import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Importacion de screens
import HomeScreen from "./screens/HomeScreen";
import ClaseFormScreen from "./screens/ClaseFormScreen";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Clase" component={ClaseFormScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
