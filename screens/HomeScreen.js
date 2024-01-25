// HomeScreen.jsx

import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import homeStyles from '../styles/HomeStyles';
import { Ionicons } from 'react-native-vector-icons';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getFirestore, getDoc } from 'firebase/firestore';

const HomeScreen = ({ navigation }) => {
    const auth = getAuth();
    const db = getFirestore();

    const [firstName, setFirstName] = useState('');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                loadUserData(user.uid);
            } else {
                setFirstName('No user logged');
            }
        });

        return () => unsubscribe();
    }, []);

    const loadUserData = async (uid) => {
        const userDocRef = doc(db, 'users', uid);

        try {
            const docSnapshot = await getDoc(userDocRef);
            if (docSnapshot.exists()) {
                const userData = docSnapshot.data();
                setFirstName(userData.firstName);
            }
        } catch (error) {
            console.error('Error loading user data:', error);
        }
    };

    const categories = [
        { name: 'Breakfast', icon: 'ios-sunny' },
        { name: 'Dinner', icon: 'ios-restaurant' },
        { name: 'Lunch', icon: 'ios-pizza' },
        { name: 'Appetizer', icon: 'ios-egg' },
    ];

    const recommendedRecipes = [
        { name: 'Chicken Adobo', time: '30 min', calories: 200, image: require('../img/recipes/adobo.jpg') },
        { name: 'Lumpiang Shanghai', time: '45 min', calories: 300, image: require('../img/recipes/lumpia.jpg') },
        // Add more recipes as needed
    ];

    return (
        <View style={homeStyles.backgroundContainer}>
            <ScrollView contentContainerStyle={homeStyles.scrollView}>
                <View style={homeStyles.container}>
                    <View style={homeStyles.headerIcons}>
                        <Ionicons
                            name="menu"
                            size={35}
                            color="#BB8A52"
                            onPress={() => navigation.openDrawer()}
                        />
                        <Ionicons name="search" size={35} color="#BB8A52" />
                    </View>
                    <Text style={homeStyles.greetingText}>Hello, {firstName}!</Text>
                    <Text style={[homeStyles.whatdoyou]}>What do you want to cook today?</Text>
                    <View style={homeStyles.categoriesContainer}>
                        <Text style={homeStyles.categoriesTitle}>Categories</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('ViewAllCategories')}>
                            <Text style={homeStyles.viewAllText}>View All ></Text>
                        </TouchableOpacity>
                    </View>
                    <View style={homeStyles.categoriesContainer}>
                        {categories.map((category) => (
                            <TouchableOpacity key={category.name} style={homeStyles.categoryButton}>
                                <Ionicons name={category.icon} size={24} color="#BB8A52" />
                                <Text style={homeStyles.categoryText}>{category.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={homeStyles.recommendedRecipesContainer}>
                        <Text style={homeStyles.recommendedRecipesTitle}>Recommended Recipes</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('ViewAllRecipes')}>
                            <Text style={homeStyles.viewAllText}>View All ></Text>
                        </TouchableOpacity>
                    </View>
                    {recommendedRecipes.map((recipe) => (
                        <TouchableOpacity key={recipe.name} style={homeStyles.recipeContainer}>
                            <Image source={recipe.image} style={homeStyles.recipeImage} />
                            <View style={homeStyles.recipeDetailsContainer}>
                                <View style={homeStyles.recipeInfoContainer}>
                                    <Text style={homeStyles.recipeName}>{recipe.name}</Text>
                                    <View style={homeStyles.recipeInfo}>
                                        <View style={homeStyles.recipeInfoItem}>
                                            <Ionicons name="timer-outline" style={homeStyles.recipeIcon} />
                                            <Text style={homeStyles.recipeTime}>{recipe.time}</Text>
                                            <Text style={homeStyles.bulletIcon}>•</Text>
                                        </View>
                                        <View style={homeStyles.recipeInfoItem}>
                                            <Ionicons name="flame-outline" style={homeStyles.recipeIcon} />
                                            <Text style={homeStyles.recipeCalories}>{recipe.calories} cal</Text>
                                        </View>
                                    </View>
                                </View>
                                <Ionicons name="heart-outline" style={[homeStyles.recipeIcon, homeStyles.heartIcon]} />
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default HomeScreen;
