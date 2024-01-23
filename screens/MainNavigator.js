import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import your screen components
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import OtherScreen1 from './OtherScreen1';
import OtherScreen2 from './OtherScreen2';
import UserProfileScreen from "./screens/UserProfile";

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
            <Tab.Screen name="AddRecipe" component={AddRecipeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Favorites" component={FaveScreen} options={{ headerShown: false }} />
            <Tab.Screen name="UserProfile" component={UserProfileScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
};

export default MainNavigator;