import { StyleSheet } from 'react-native';

const welcomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    welcomeText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    getStartedButton: {
        fontSize: 16,
    },
});

export default welcomeStyles;