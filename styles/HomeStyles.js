import { StyleSheet } from 'react-native';

const homeStyles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        backgroundColor: '#E5E8E1',
    },
    container: {
        padding: 20,
    },
    scrollView: {
        flexGrow: 1,
    },
    headerIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    greetingText: {
        fontSize: 18,
    },
    categoryText: {
        fontSize: 16,
    },
    categoriesContainer: {
        flexDirection: 'row',
        justifyContent: 'center', // Center the icons
        alignItems: 'center',
        marginBottom: 20,
    },
    categoryButton: {
        marginRight: 15,
        alignItems: 'center',
    },
    categoryIconContainer: {
        backgroundColor: '#BB8A52',
        borderRadius: 25, // Adjust the value based on your preference
        padding: 10,
        marginBottom: 5,
    },
    categoryIcon: {
        color: '#FFFFFF',
        fontSize: 24,
    },
    viewAllText: {
        fontSize: 16,
        color: '#BB8A52',
        textAlign: 'center', // Center the text
    },
    recommendedRecipesText: {
        fontSize: 18,
        marginBottom: 10,
    },
    recipeContainer: {
        marginBottom: 20,
        backgroundColor: 'white',
    },
    recipeImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    recipeDetailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    recipeName: {
        fontSize: 16,
    },
    recipeInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    recipeTime: {
        fontSize: 14,
        marginRight: 10,
    },
    recipeCalories: {
        fontSize: 14,
        marginRight: 10,
    },
    heartIcon: {
        fontSize: 35,
        color: '#BB8A52',
    },
});

export default homeStyles;
