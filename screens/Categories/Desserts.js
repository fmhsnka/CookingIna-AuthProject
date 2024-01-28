import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, AntDesign } from 'react-native-vector-icons';
import RecipeCategory from '../../styles/RecipeCategoryStyles';

const DessertsScreen = () => {
    const navigation = useNavigation();
    const [pressedRecipes, setPressedRecipes] = useState([]); // New state


    const recommendedRecipes = [
        { name: 'Sweet Macaroni Salad', time: '12 min', calories: 442, image: require('../../img/category-recipe/DESSERT/macaroni.jpg') },
        { name: 'Bibingka', time: '35 min', calories: 734, image: require('../../img/category-recipe/DESSERT/Bibingka.png') },
        { name: 'Banana Bread', time: '1 hr', calories: 359, image: require('../../img/category-recipe/DESSERT/BananaBread.png') },
        { name: 'Buko Pandan', time: '10 min', calories: 613, image: require('../../img/category-recipe/DESSERT/BukoPandan.png') },
        { name: 'Fruit Cocktail Float', time: '1 min', calories: 307, image: require('../../img/category-recipe/DESSERT/FruitCocktailFloat.png') },
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
            case 'Sweet Macaroni Salad':
                // navigateToRecipe('AdoboScreen');
                console.log('WORKING')
                break;
            case 'Bibingka':
                // navigateToRecipe('LumpiaShanghaiScreen');
                console.log('WORKING')
                break;
            case 'Banana Bread':
                // navigateToRecipe('BistekScreen');
                console.log('WORKING')
                break;
            case 'Buko Pandan':
                // navigateToRecipe('TortalongScreen');
                console.log('WORKING')
                break;
            case 'Fruit Cocktail Float':
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
                        <Text style={RecipeCategory.screenTitle}>Desserts</Text>
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

export default DessertsScreen;