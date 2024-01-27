import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// SCREENS
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import UserProfileScreen from "./screens/UserProfile";
import Menu from "./screens/Menu";
import AboutScreen from "./screens/About";
import SettingsScreen from "./screens/Settings";
import HomeScreen from "./screens/HomeScreen";

import Chicken_Adobo from "./screens/RECIPE SCREENS/1-Chicken_Adobo";
import Lumpiang_Shanghai from "./screens/RECIPE SCREENS/2-Lumpiang_Shanghai";
import BISTEK from "./screens/RECIPE SCREENS/3-Filipino_style_beef_steak";
import Tortalong from "./screens/RECIPE SCREENS/4-Tortang_talong";
import Ronimaca from "./screens/RECIPE SCREENS/5-Sweet_macaroni_salad";
import Pandesal from "./screens/RECIPE SCREENS/6-Pandesal";


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Forgot"
          component={ForgotPasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserProfile"
          component={UserProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AdoboScreen"
          component={Chicken_Adobo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LumpiaShanghaiScreen"
          component={Lumpiang_Shanghai}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BistekScreen"
          component={BISTEK}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TortalongScreen"
          component={Tortalong}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MacaroniScreen"
          component={Ronimaca}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PandesalScreen"
          component={Pandesal}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
