import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
  useColorScheme,
} from 'react-native';
import {useTheme} from '../../contexts/ThemeContext';

const LoginScreen = () => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [isLogin, setIsLogin] = useState(true);
  const {isDarkMode, colors, setColorScheme} = useTheme();

  useEffect(() => {
    // Animate the login screen on mount
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, []);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {opacity: fadeAnim},
        isDarkMode && styles.darkContainer,
      ]}>
      <Text style={[styles.header, isDarkMode && styles.darkHeader]}>
        {isLogin ? 'Login' : 'Sign Up'}
      </Text>
      <TextInput
        style={[styles.input, isDarkMode && styles.darkInput]}
        placeholder="Username"
      />
      <TextInput
        style={[styles.input, isDarkMode && styles.darkInput]}
        placeholder="Password"
        secureTextEntry={true}
      />
      {!isLogin && (
        <TextInput
          style={[styles.input, isDarkMode && styles.darkInput]}
          placeholder="Confirm Password"
          secureTextEntry={true}
        />
      )}
      <TouchableOpacity
        style={[
          styles.buttonContainer,
          isDarkMode && styles.darkButtonContainer,
        ]}>
        <Text style={[styles.buttonText, isDarkMode && styles.darkButtonText]}>
          {isLogin ? 'Login' : 'Sign Up'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleAuthMode}>
        <Text style={[styles.toggleText, isDarkMode && styles.darkToggleText]}>
          {isLogin
            ? 'New user? Sign up here.'
            : 'Already have an account? Login here.'}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Light mode background color
  },
  darkContainer: {
    backgroundColor: '#121212', // Dark mode background color
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    color: '#000000', // Light mode text color
  },
  darkHeader: {
    color: '#ffffff', // Dark mode text color
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#000000', // Light mode text color
  },
  darkInput: {
    color: '#ffffff', // Dark mode text color
  },
  buttonContainer: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    width: '80%',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  darkButtonContainer: {
    backgroundColor: '#1565C0', // Dark mode button background color
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  darkButtonText: {
    color: '#ffffff', // Dark mode button text color
  },
  toggleText: {
    marginTop: 10,
    textDecorationLine: 'underline',
    color: '#000000', // Light mode text color
  },
  darkToggleText: {
    color: '#ffffff', // Dark mode text color
  },
});

export default LoginScreen;
