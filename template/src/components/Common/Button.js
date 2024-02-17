import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
// import {FontAwesome} from '@expo/vector-icons'; // Assuming FontAwesome is used for icons
import {useTheme} from '../../contexts/ThemeContext';

const Button = ({title, onPress, icon, outline}) => {
  const {colors} = useTheme();
  const buttonStyle = outline
    ? [styles.button, {borderColor: colors.primary, borderWidth: 1}]
    : [styles.button, {backgroundColor: colors.primary}];
  const textStyle = outline
    ? [styles.text, {color: colors.primary}]
    : [styles.text, {color: colors.white}];

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      {/* {icon && (
        <FontAwesome
          name={icon}
          size={20}
          color={outline ? colors.primary : colors.white}
        />
      )} */}
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    // borderWidth: 1,
  },
  text: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;
