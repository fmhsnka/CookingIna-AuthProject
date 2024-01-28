import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import Category Screens
import AppetizerScreen from "../Categories/Appetizer";
import BeverageScreen from "../Categories/Beverage";
import BreadScreen from "../Categories/Bread";
import BreakfastScreen from "../Categories/Breakfast";
import DessertsScreen from "../Categories/Dessert";
import DinnerScreen from "../Categories/Dinner";
import LunchScreen from "../Categories/Lunch";
import MainCourseScreen from "../Categories/MainCourse";


const Stack = createNativeStackNavigator();

const CategoriesScreen = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="Breakfast"
                component={BreakfastScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Lunch"
                component={LunchScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Dinner"
                component={DinnerScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Appetizer"
                component={AppetizerScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Desserts"
                component={DessertsScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Bread"
                component={BreadScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Main"
                component={MainCourseScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Beverage"
                component={BeverageScreen}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    );
};

export default CategoriesScreen;
