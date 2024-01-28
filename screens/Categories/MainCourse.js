import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, AntDesign } from 'react-native-vector-icons';
import RecipeCategory from '../../styles/RecipeCategoryStyles';

const MainCourseScreen = () => {
    const navigation = useNavigation();
    const [pressedRecipes, setPressedRecipes] = useState([]); // New state


    const recommendedRecipes = [
        { name: 'Baby Back Ribs', time: '2 hr', calories: 317, image: require('../../img/category-recipe/MAIN/BabyBackRibs.png') },
        { name: 'Lumpiang Shanghai', time: '6 min', calories: 619, image: require('../../img/category-recipe/MAIN/lumpia.jpg') },
        { name: 'Rellenong Manok', time: '1 hr', calories: 558, image: require('../../img/category-recipe/MAIN/RellenongManok.png') },
        { name: 'Grilled Tuna Belly', time: '10 min', calories: 287, image: require('../../img/category-recipe/MAIN/GrilledTunaBelly.png') },
        { name: 'Chicken Adobo', time: '35 min', calories: 607, image: require('../../img/category-recipe/MAIN/adobo.jpg') },
    ];

    const handleHeartPress = (recipeName) => {
        setPressedRecipes((prevPressedRecipes) => {
            if (prevPressedRecipes.includes(recipeName)) {
                // Recipe is already pressed, remove it
                return prevPressedRecipes.filter((name) => name !== recipeName);
            } else {
                // Recipe is not pressed, add it
                return [...prevPressedRecipes, recipeName];
            }
        });
    };

    const navigateToRecipe = (recipeName) => {
        navigation.navigate('HomeRecipeNavigator', {
            screen: `${recipeName}`,
        });
    };

    const handleRecipePress = (recipeName) => {
        switch (recipeName) {
            case 'Baby Back Ribs':
                // navigateToRecipe('AdoboScreen');
                console.log('WORKING')
                break;
            case 'Lumpiang Shanghai':
                // navigateToRecipe('LumpiaShanghaiScreen');
                console.log('WORKING')
                break;
            case 'Rellenong Manok':
                // navigateToRecipe('BistekScreen');
                console.log('WORKING')
                break;
            case 'Grilled Tuna Belly':
                // navigateToRecipe('TortalongScreen');
                console.log('WORKING')
                break;
            case 'Chicken Adobo':
                // navigateToRecipe('MacaroniScreen');
                console.log('WORKING')
                break;
            default:
                break;
        }
    };

    return (
        <View style={RecipeCategory.backgroundContainer}>
            <ScrollView contentContainerStyle={RecipeCategory.scrollView}>

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
                                <TouchableOpacity onPress={() => handleHeartPress(recipe.name)}>
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

export default MainCourseScreen;