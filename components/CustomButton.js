import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const CustomButton = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  button: {
    backgroundColor: 'blue', // Default background color
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width: 250,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white', // Default text color
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
};

export default CustomButton;
