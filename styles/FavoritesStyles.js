import { StyleSheet } from 'react-native';

const favoriteStyles = StyleSheet.create({
    circle: {
        position: 'absolute',
        backgroundColor: 'rgba(255, 0, 0, 1)',
        borderRadius: 50,
        width: 100,
        height: 100,
    },
    circle1: {
        top: 100,
        right: -10,
        backgroundColor: '#FFBA00',
    },
    circle2: {
        top: 150,
        right: -40,
        backgroundColor: '#0C3B2E',
    },
    circle4: {
        top: 400,
        left: -10,
        backgroundColor: '#0C3B2E',
    },
    circle3: {
        top: 350,
        left: -30,
        backgroundColor: '#FFBA00',
    },
    circle5: {
        bottom: 300,
        right: -50,
        backgroundColor: '#0C3B2E',
        height: 180,
        width: 180,
        borderRadius: 140,
    },
    circle6: {
        bottom: 100,
        left: -70,
        backgroundColor: '#FFBA00',
        height: 180,
        width: 180,
        borderRadius: 140,
    },
});

export default favoriteStyles;
