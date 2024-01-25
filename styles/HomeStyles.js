// HomeStyles.jsx

import { StyleSheet } from 'react-native';

const homeStyles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        backgroundColor: '#E5E8E1',
    },
    container: {
        padding: 20,
        marginTop: 30,
    },
    scrollView: {
        flexGrow: 1,
    },
    headerIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 26,
    },
    greetingText: {
        fontSize: 27,
        marginBottom: 8,
        fontFamily: 'Poppins_600SemiBold',
    },
    whatdoyou:{
        fontSize: 16,
        marginBottom: 26,
        fontFamily: 'Poppins_400Regular',
    },
    categoryText: {
        fontSize: 16,
    },
    categoriesTitle: {
        fontSize: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        fontFamily: 'Poppins_600SemiBold'
    },
    recommendedRecipesTitle: {
        fontSize: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        fontFamily: 'Poppins_600SemiBold'
    },
    viewAllText: {
        fontSize: 16,
        color: '#BB8A52',
        fontFamily: 'Poppins_600SemiBold'
    },
    categoriesContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    recommendedRecipesContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    categoryButton: {
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#294B29',
        width: 70,
        height: 70,
    },
    categoryIconContainer: {
        backgroundColor: '#BB8A52',
        borderRadius: 25,
        padding: 10,
        marginBottom: 5,
    },
    recommendedRecipesText: {
        fontSize: 18,
        marginBottom: 10,
    },
    recipeContainer: {
        marginBottom: 20,
        backgroundColor: '#d9bea0',
        borderRadius: 10,
    },
    recipeImage: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    recipeDetailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    recipeInfoContainer: {
        width: '60%',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 10,
        marginLeft: 15,
    },
    recipeInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
    },
    recipeInfoItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    recipeName: {
        fontSize: 20,
        fontFamily: 'Poppins_600SemiBold'
    },
    recipeTime: {
        fontSize: 14,
        marginLeft: 5,
        fontFamily: 'Poppins_400Regular',
    },
    recipeCalories: {
        fontSize: 14,
        marginLeft: 5,
        flexDirection: 'row',
        alignItems: 'center',
        fontFamily: 'Poppins_400Regular',
    },
    bulletIcon: {
        fontSize: 15,
        marginHorizontal: 5,
        color: '#BB8A52',
    },
    recipeIcon: {
        fontSize: 22,
        color: 'black',
        opacity: .6,
        marginRight: 0,
    },
    heartIcon: {
        position: 'absolute',
        fontSize: 30,
        color: 'black',
        right: 15,
        top: 8,
        opacity: .6,
    },
});

export default homeStyles;
