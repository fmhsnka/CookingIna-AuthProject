import { StyleSheet } from 'react-native';

const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    input: {
        width: 300,
        height: 40,
        borderBottomWidth: 1,
        marginBottom: 10,
        padding: 10,
    },
    button: {
        backgroundColor: 'blue',
        width: 300,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    pressableText: {
        marginTop: 10,
        color: 'blue', // Set the color to your desired hyperlink color
    },
});

export default loginStyles;