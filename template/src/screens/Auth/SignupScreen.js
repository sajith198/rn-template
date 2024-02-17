import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';

const LoginScreen = () => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [isLogin, setIsLogin] = useState(true);

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
    <Animated.View style={[styles.container, {opacity: fadeAnim}]}>
      <Text style={styles.header}>{isLogin ? 'Login' : 'Sign Up'}</Text>
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      {!isLogin && (
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
        />
      )}
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{isLogin ? 'Login' : 'Sign Up'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleAuthMode}>
        <Text style={styles.toggleText}>
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
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    width: '80%',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  toggleText: {
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
