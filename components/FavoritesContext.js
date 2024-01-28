export const FavoritesProvider = ({ children }) => {
    const [pressedRecipes, setPressedRecipes] = useState([]);

    const toggleFavorite = async (recipeName) => {
        setPressedRecipes((prevPressedRecipes) => {
            const isPressed = prevPressedRecipes.includes(recipeName);
            const updatedRecipes = isPressed
                ? prevPressedRecipes.filter((name) => name !== recipeName)
                : [...prevPressedRecipes, recipeName];

            // Update Firestore collection
            firestore().collection('userFavorites').doc('userId').set({ recipes: updatedRecipes });

            return updatedRecipes;
        });
    };

    return (
        <FavoritesContext.Provider value={{ pressedRecipes, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};