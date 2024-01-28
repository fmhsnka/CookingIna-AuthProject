import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons, AntDesign } from 'react-native-vector-icons';
import RecipeCategory from '../styles/RecipeCategoryStyles';
import favoriteStyles from '../styles/FavoritesStyles';
import { useFavorites } from '../components/FavoritesContext'; // Adjust the path
import firestore from '@react-native-firebase/firestore';

const FavoritesScreen = () => {
    const navigation = useNavigation();
    const { pressedRecipes, toggleFavorite } = useFavorites();
    const [recommendedRecipes, setRecommendedRecipes] = useState([]);

    useEffect(() => {
        // Fetch recommended recipes from Firestore
        const fetchRecipes = async () => {
            try {
                const querySnapshot = await firestore().collection('recommendedRecipes').get();
                const recipes = querySnapshot.docs.map((doc) => doc.data());
                setRecommendedRecipes(recipes);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };

        fetchRecipes();
    }, []);

    const navigateToRecipe = (recipeName) => {
        navigation.navigate('MainCourseNav', {
            screen: recipeName,
        });
    };

    const handleRecipePress = (recipeName) => {
        switch (recipeName) {

        }
    };

    return (
        <View style={RecipeCategory.backgroundContainer}>
            <ScrollView contentContainerStyle={RecipeCategory.scrollView}>
                <View style={[favoriteStyles.circle, favoriteStyles.circle1]}></View>
                <View style={[favoriteStyles.circle, favoriteStyles.circle2]}></View>
                <View style={[favoriteStyles.circle, favoriteStyles.circle3]}></View>
                <View style={[favoriteStyles.circle, favoriteStyles.circle4]}></View>
                <View style={[favoriteStyles.circle, favoriteStyles.circle5]}></View>
                <View style={[favoriteStyles.circle, favoriteStyles.circle6]}></View>

                <View style={RecipeCategory.container}>

                    <View style={RecipeCategory.titleContainer}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={RecipeCategory.goBackButton}>
                            <AntDesign name="leftcircle" size={46} color="#6D9773" />
                        </TouchableOpacity>
                        <Text style={RecipeCategory.screenTitle}>Main Course</Text>
                    </View>


                    {recommendedRecipes.map((recipe) => (
                        <TouchableOpacity
                            key={recipe.name}
                            style={RecipeCategory.recipeContainer}
                            onPress={() => handleRecipePress(recipe.name)}  // Pass the recipe name to the handler
                        >
                            <Image source={recipe.image} style={RecipeCategory.recipeImage} />
                            <View style={RecipeCategory.recipeDetailsContainer}>
                                <View style={RecipeCategory.recipeInfoContainer}>
                                    <Text style={RecipeCategory.recipeName}>{recipe.name}</Text>
                                    <View style={RecipeCategory.recipeInfo}>
                                        <View style={RecipeCategory.recipeInfoItem}>
                                            <Ionicons name="timer-outline" style={RecipeCategory.recipeIcon} />
                                            <Text style={RecipeCategory.recipeTime}>{recipe.time}</Text>
                                            <Text style={RecipeCategory.bulletIcon}>•</Text>
                                        </View>
                                        <View style={RecipeCategory.recipeInfoItem}>
                                            <Ionicons name="flame-outline" style={RecipeCategory.recipeIcon} />
                                            <Text style={RecipeCategory.recipeCalories}>{recipe.calories}kcal</Text>
                                        </View>
                                    </View>
                                </View>
                                <TouchableOpacity onPress={() => toggleFavorite(recipe.name)}>
                                    <Ionicons
                                        name={pressedRecipes.includes(recipe.name) ? 'heart' : 'heart-outline'}
                                        style={[RecipeCategory.recipeIcon, RecipeCategory.heartIcon]}
                                        color={pressedRecipes.includes(recipe.name) ? '#FFBA00' : 'black'}
                                    />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default FavoritesScreen;