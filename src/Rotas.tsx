import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Cadastro from "./Cadastro";
import Login from "./Login";

const Tap = createNativeStackNavigator(); 

export default function Rotas() { 
    return (
        <NavigationContainer>
            <Tap.Navigator>
                <Tap.Screen name="Login" component={Login} options={{ headerShown: false }}/>
                <Tap.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }}/>
            </Tap.Navigator>
        </NavigationContainer>
    )
}