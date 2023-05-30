/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator  } from "@react-navigation/native-stack";
import Welcome from "./pages/Welcome/Welcome";
import UserSign from "./pages/UserSign/UserSign";
import UserResult from "./pages/UserResult/UserResult";

const Stack = createNativeStackNavigator();

const App = () =>
{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Welcome"  component={Welcome}
                options={{
                    headerShown:false
                }}
                />
                 <Stack.Screen name="UserSign"  component={UserSign}/>
                 <Stack.Screen name="UserResult"  component={UserResult}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;
