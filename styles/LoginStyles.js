import { StyleSheet } from 'react-native';

const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    logo: {
        width: 250,
        height: 120,
        marginBottom: 20,
    },
    input: {
        width: 300,
        height: 40,
        borderBottomWidth: 1,
        marginBottom: 15,
        padding: 10,
    },
    button: {
        backgroundColor: 'blue',
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    pressableText: {
        color: 'blue',
        marginTop: 10,
    },
    text: {
        marginTop: 10,
    }
});

export default loginStyles;