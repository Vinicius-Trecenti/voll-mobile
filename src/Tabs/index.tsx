import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Principal from "./Principal";
import Consultas from "./Consultas";

import Ionicons from 'react-native-vector-icons/Ionicons';  


const Tab = createBottomTabNavigator();

export default function Tabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Principal" component={Principal} options={{ 
                headerShown: false, tabBarIcon: () => ( 
                    <Ionicons name="home"/> 
                )
            }}/>
            <Tab.Screen name="Consultas" component={Consultas} options={{ 
                headerShown: false, tabBarIcon: () => ( 
                    <Ionicons name="calendar"/> 
                )
            }} />
        </Tab.Navigator>
    ) 
}