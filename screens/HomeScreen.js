import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import homeStyles from '../styles/HomeStyles';
import { Ionicons } from 'react-native-vector-icons';


const HomeScreen = ({ navigation }) => {
    // Mock data for illustration
    const categories = [
        { name: 'Breakfast', icon: 'ios-sunny' },
        { name: 'Dinner', icon: 'ios-restaurant' },
        { name: 'Lunch', icon: 'ios-pizza' },
        { name: 'Appetizer', icon: 'ios-egg' },
    ];

    const recommendedRecipes = [
        { name: 'Recipe 1', time: '30 min', calories: 200, image: require('../img/recipes/adobo.jpg') },
        { name: 'Recipe 2', time: '45 min', calories: 300, image: require('../img/recipes/lumpia.jpg') },
        // Add more recipes as needed
    ];

    return (
        <View style={homeStyles.backgroundContainer}>
            <ScrollView contentContainerStyle={homeStyles.scrollView}>
                <View style={homeStyles.container}>
                    <View style={homeStyles.headerIcons}>
                        {/* ... */}
                        <Ionicons name="search" size={24} color="#BB8A52" />
                    </View>
                    <Text style={homeStyles.greetingText}>Hello, (firstName)!</Text>
                    <Text style={homeStyles.greetingText}>What do you want to cook today?</Text>
                    <View style={homeStyles.categoriesContainer}>
                        {categories.map(category => (
                            <TouchableOpacity key={category.name} style={homeStyles.categoryButton}>
                                <Ionicons name={category.icon} size={24} color="#BB8A52" />
                                <Text style={homeStyles.categoryText}>{category.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('ViewAllCategories')}>
                        <Text style={homeStyles.viewAllText}>View All</Text>
                    </TouchableOpacity>
                    <View style={homeStyles.recommendedRecipesContainer}>
                        <Text style={homeStyles.recommendedRecipesText}>Recommended Recipes</Text>
                        {recommendedRecipes.map(recipe => (
                            <TouchableOpacity key={recipe.name} style={homeStyles.recipeContainer}>
                                <Image source={recipe.image} style={homeStyles.recipeImage} />
                                <View style={homeStyles.recipeDetailsContainer}>
                                    <Text style={homeStyles.recipeName}>{recipe.name}</Text>
                                    <View style={homeStyles.recipeInfo}>
                                        <Text style={homeStyles.recipeTime}>{recipe.time}</Text>
                                        <Text style={homeStyles.recipeCalories}>{recipe.calories} cal</Text>
                                        <Ionicons name="heart-outline" style={homeStyles.heartIcon} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default HomeScreen;