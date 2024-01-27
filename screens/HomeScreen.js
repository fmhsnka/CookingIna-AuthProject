import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import homeStyles from '../styles/HomeStyles';
import { Ionicons } from 'react-native-vector-icons';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getFirestore, getDoc } from 'firebase/firestore';

const HomeScreen = () => {
    const navigation = useNavigation();
    const auth = getAuth();
    const db = getFirestore();

    const [firstName, setFirstName] = useState('');
    const [currentSet, setCurrentSet] = useState(1);
    const [pressedRecipes, setPressedRecipes] = useState([]); // New state

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

    const categoriesSets = [
        [
            { name: 'Breakfast', icon: require('../img/categories/croissant.png') },
            { name: 'Dinner', icon: require('../img/categories/cover.png') },
            { name: 'Lunch', icon: require('../img/categories/tom-yum.png') },
            { name: 'Appetizer', icon: require('../img/categories/appetizer.png') },
        ],
        [
            { name: 'Dessert', icon: require('../img/categories/cake.png') },
            { name: 'Bread', icon: require('../img/categories/bread.png') },
        ],
    ];

    const recommendedRecipes = [
        { name: 'Chicken Adobo', time: '35 min', calories: 608, image: require('../img/recipes/adobo.jpg') },
        { name: 'Lumpiang Shanghai', time: '8 min', calories: 619, image: require('../img/recipes/lumpia.jpg') },
        { name: 'Filipino Style Beef Steak', time: '1 hr', calories: 729, image: require('../img/recipes/bistek.jpg') },
        { name: 'Tortang Talong', time: '12 min', calories: 187, image: require('../img/recipes/talong.png') },
        { name: 'Sweet Macaroni Salad', time: '10 min', calories: 738, image: require('../img/recipes/macaroni.jpg') },
        { name: 'Pandesal', time: '15 min', calories: 73, image: require('../img/recipes/pandesal.jpg') },

    ];


    const handleNextSet = () => {
        setCurrentSet((prevSet) => (prevSet === categoriesSets.length ? 1 : prevSet + 1));
    };

    const handlePrevSet = () => {
        setCurrentSet((prevSet) => (prevSet === 1 ? categoriesSets.length : prevSet - 1));
    };

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

    const handleCategoryPress = (categoryName) => {
        // Navigate to the corresponding screen based on the category name
        switch (categoryName) {
            case 'Breakfast':
                // navigation.navigate('BreakfastScreen');
                console.log('BREAKFAST WORKING')
                break;
            case 'Dinner':
                // navigation.navigate('DinnerScreen');
                console.log('DINNER WORKING')
                break;
            case 'Lunch':
                // navigation.navigate('DinnerScreen');
                console.log('LUNCH WORKING')
                break;
            case 'Appetizer':
                // navigation.navigate('DinnerScreen');
                console.log('APPETIZER WORKING')
                break;
            case 'Dessert':
                // navigation.navigate('DinnerScreen');
                console.log('DESSERT WORKING')
                break;
            case 'Bread':
                // navigation.navigate('DinnerScreen');
                console.log('BREAD WORKING')
                break;
            default:
                break;
        }
    };

    const handleRecipePress = (recipeName) => {
        switch (recipeName) {
            case 'Chicken Adobo':
                navigation.navigate('AdoboScreen');
                // console.log('WORKING')
                break;
            case 'Lumpiang Shanghai':
                navigation.navigate('LumpiaShanghaiScreen');
                // console.log('WORKING')
                break;
            case 'Filipino Style Beef Steak':
                navigation.navigate('BistekScreen');
                // console.log('WORKING')
                break;
            case 'Tortang Talong':
                navigation.navigate('TortalongScreen');
                // console.log('WORKING')
                break;
            case 'Sweet Macaroni Salad':
                navigation.navigate('MacaroniScreen');
                // console.log('WORKING')
                break;
            case 'Pandesal':
                navigation.navigate('PandesalScreen');
                // console.log('WORKING')
                break;
            default:
                break;
        }
    };

    return (
        <View style={homeStyles.backgroundContainer}>
            <ScrollView contentContainerStyle={homeStyles.scrollView}>
                <View style={homeStyles.container}>
                    <View style={homeStyles.headerIcons}>
                        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                            <Ionicons
                                name="menu"
                                size={35}
                                color="black"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons name="search" size={35} color="#1E1E1E" />
                        </TouchableOpacity>
                    </View>
                    <Text style={homeStyles.greetingText}>Hello, {firstName}!</Text>
                    <Text style={[homeStyles.whatdoyou]}>What do you want to cook today?</Text>
                    <View style={homeStyles.categoriesContainer}>
                        <Text style={homeStyles.categoriesTitle}>Categories</Text>
                        <TouchableOpacity onPress={handlePrevSet}>
                            <Ionicons name="arrow-back" size={25} color="#1E1E1E" style={homeStyles.arrowButton} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleNextSet}>
                            <Ionicons name="arrow-forward" size={25} color="#1E1E1E" />
                        </TouchableOpacity>
                    </View>
                    <View style={homeStyles.categories1Container}>
                        {categoriesSets[currentSet - 1].map((category) => (
                            <TouchableOpacity
                                key={category.name}
                                style={homeStyles.categoryButton}
                                onPress={() => handleCategoryPress(category.name)}  // Pass the category name to the handler
                            >
                                <View style={homeStyles.categoryIconContainer}>
                                    <Image source={category.icon} style={{ width: 42, height: 42, tintColor: 'white' }} />
                                </View>
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
                        <TouchableOpacity
                            key={recipe.name}
                            style={homeStyles.recipeContainer}
                            onPress={() => handleRecipePress(recipe.name)}  // Pass the recipe name to the handler
                        >
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
                                            <Text style={homeStyles.recipeCalories}>{recipe.calories}kcal</Text>
                                        </View>
                                    </View>
                                </View>
                                <TouchableOpacity onPress={() => handleHeartPress(recipe.name)}>
                                    <Ionicons
                                        name={pressedRecipes.includes(recipe.name) ? 'heart' : 'heart-outline'}
                                        style={[homeStyles.recipeIcon, homeStyles.heartIcon]}
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

export default HomeScreen;