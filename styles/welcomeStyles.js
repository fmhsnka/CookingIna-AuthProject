import { StyleSheet } from 'react-native';

const welcomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    welcomeText: {
        fontSize: 45,
        marginBottom: 50,
    },
    logo: {
        width: 350,
        height: 180,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 10,
        margin: 12,
        borderRadius: 20,
        width: 300,
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'black',
        fontSize: 22,
        textAlign: 'center',
    },
});

export default welcomeStyles;