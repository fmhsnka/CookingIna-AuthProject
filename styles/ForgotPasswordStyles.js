import { StyleSheet } from 'react-native';

const forgotPasswordStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#ffffff',
    },
    logo: {
        width: 250,
        height: 120,
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        marginHorizontal: 20,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        width: 300,
        height: 40,
        borderBottomWidth: 1,
        marginBottom: 15,
        padding: 10,
    },
    resetButton: {
        backgroundColor: '#007bff',
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    resetButtonText: {
        color: 'white',
        fontSize: 20,
    },
    goBack: {
        fontSize: 20,
        color: '#FF4732',
        marginTop: 10,
    },
});

export default forgotPasswordStyles;