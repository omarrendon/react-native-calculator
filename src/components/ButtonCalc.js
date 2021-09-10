import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';

const ButtonCalc = (props) => {
  const {
    text,
    color,
    width,
    action,
  } = props;

  return (
    <TouchableOpacity 
      onPress={() => action(text)}
    >
      <View style={{
        ...styles.button,
        backgroundColor: color,
        width: width ? 180 : 80
      }}>
        <Text style={{
          ...styles.textButton,
          color: `${color === '#9B9B9B' ? 'black' : 'white'}`
        }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default ButtonCalc
