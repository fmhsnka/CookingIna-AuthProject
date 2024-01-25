// AppNavigator.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import Menu from './Menu';
import UserProfileScreen from './UserProfile';
import SettingsScreen from './Settings';
import AboutScreen from './About';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
    <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Menu" component={MenuStack} />
    </Drawer.Navigator>
);

const MenuStack = () => (
    <Drawer.Navigator>
        <Drawer.Screen name="UserProfile" component={UserProfileScreen} />
        {/* <Drawer.Screen name="Favorites" component={FavoritesScreen} /> */}
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
);

const AppNavigator = () => (
    <NavigationContainer>
        <DrawerNavigator />
    </NavigationContainer>
);

export default AppNavigator;
