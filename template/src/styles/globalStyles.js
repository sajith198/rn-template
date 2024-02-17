import {StyleSheet} from 'react-native';
import colors from './colors';
import fonts from './fonts';

export const globalStyleSheet = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontFamily: fonts.regular,
    fontSize: 16,
    color: colors.primary,
  },
});

export const globalStyles = {
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    smallPhone: 0,
    phone: 321,
    tablet: 768,
  },
  textVariants: {
    header: {
      fontFamily: 'Raleway',
      fontSize: 36,
      fontWeight: 'bold',
    },
    body: {
      fontFamily: 'Merriweather',
      fontSize: 16,
    },
  },
};
