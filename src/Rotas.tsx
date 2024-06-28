import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Cadastro from "./Cadastro";
import Login from "./Login";

import Tabs from "./Tabs";

const Tap = createNativeStackNavigator(); 

export default function Rotas() { 
    return (
            <Tap.Navigator>
                <Tap.Screen name="Login" component={Login} options={{ headerShown: false }}/>
                <Tap.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
            
                <Tap.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
            </Tap.Navigator>
    )
}