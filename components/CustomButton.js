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
    backgroundColor: 'blue',
    padding: 10,
    margin: 10,
    borderRadius: 30,
    width: 250,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },
};

export default CustomButton;
