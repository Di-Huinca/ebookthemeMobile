import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, TouchableOpacity } from "react-native";
//Importacion de screens
import HomeScreen from "./screens/HomeScreen";
import ClaseFormScreen from "./screens/ClaseFormScreen";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: "Inicio",
            headerStyle: {
              backgroundColor: "#b2b2b2",
            },
            headerTitleStyle: {
              color: "#ffffff",
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("ClaseForm")}
              >
                <Text
                  style={{ color: "#fffff", marginRight: 20, fontSize: 15 }}
                >
                  Apretame
                </Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Tab.Screen
          name="ClaseForm"
          component={ClaseFormScreen}
          options={{
            title: "Nueva Clase",
            headerStyle: {
              backgroundColor: "#b2b2b2",
            },
            headerTitleStyle: {
              color: "#ffffff",
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
