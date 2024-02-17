const fs = require('fs-extra');
const path = require('path');

const projectPath = process.cwd();

console.log(`Creating new React Native project in directory: ${projectPath}`);

const directories = [
  'src/assets/images',
  'src/assets/fonts',
  'src/components/Auth',
  'src/components/Common',
  'src/constants',
  'src/hooks',
  'src/navigation',
  'src/screens',
  'src/services',
  'src/store/slices',
  'src/styles',
  'src/utils',
  'src/contexts',
];

directories.forEach(dir => {
  const fullPath = path.join(projectPath, dir);
  fs.mkdirSync(fullPath, {recursive: true});
  console.log(`Created directory: ${fullPath}`);
});

const filesToCreate = [
  [
    'src/assets',
    'colors.js',
    `export default {\n  primary: '#008080',\n  secondary: '#FF6347',\n};\n`,
  ],
  [
    'src/assets',
    'fonts.js',
    `export default {\n  regular: 'Roboto-Regular',\n  bold: 'Roboto-Bold',\n};\n`,
  ],
  [
    'src/components/Auth',
    'Login.js',
    `import React from 'react';\nimport { View, Text } from 'react-native';\n\nconst Login = () => {\n  return (\n    <View>\n      <Text>Login Screen</Text>\n    </View>\n  );\n};\n\nexport default Login;\n`,
  ],
  [
    'src/components/Auth',
    'Signup.js',
    `import React from 'react';\nimport { View, Text } from 'react-native';\n\nconst Signup = () => {\n  return (\n    <View>\n      <Text>Signup Screen</Text>\n    </View>\n  );\n};\n\nexport default Signup;\n`,
  ],
  [
    'src/components/Common',
    'Button.js',
    `import React from 'react';\nimport { TouchableOpacity, Text } from 'react-native';\n\nconst Button = ({ title, onPress }) => {\n  return (\n    <TouchableOpacity onPress={onPress}>\n      <Text>{title}</Text>\n    </TouchableOpacity>\n  );\n};\n\nexport default Button;\n`,
  ],
  [
    'src/components/Common',
    'TextInput.js',
    `import React from 'react';\nimport { TextInput as RNTextInput } from 'react-native';\n\nconst TextInput = ({ placeholder, ...props }) => {\n  return (\n    <RNTextInput placeholder={placeholder} {...props} />\n  );\n};\n\nexport default TextInput;\n`,
  ],
  [
    'src/navigation',
    'BottomTabNavigator.js',
    `import React from 'react';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\nimport HomeScreen from '../screens/HomeScreen';\nimport SettingsScreen from '../screens/SettingsScreen';\n\nconst Tab = createBottomTabNavigator();\n\nconst BottomTabNavigator = () => {\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name="Home" component={HomeScreen} />\n      <Tab.Screen name="Settings" component={SettingsScreen} />\n    </Tab.Navigator>\n  );\n};\n\nexport default BottomTabNavigator;\n`,
  ],
  [
    'src/screens',
    'HomeScreen.js',
    `import React from 'react';\nimport { View, Text } from 'react-native';\n\nconst HomeScreen = () => {\n  return (\n    <View>\n      <Text>Home Screen</Text>\n    </View>\n  );\n};\n\nexport default HomeScreen;\n`,
  ],
  [
    'src/screens',
    'SettingsScreen.js',
    `import React from 'react';\nimport { View, Text } from 'react-native';\n\nconst SettingsScreen = () => {\n  return (\n    <View>\n      <Text>Settings Screen</Text>\n    </View>\n  );\n};\n\nexport default SettingsScreen;\n`,
  ],
  [
    'src/screens',
    'StartupScreen.js',
    `import React, { useContext, useEffect } from 'react';\nimport { View, ActivityIndicator } from 'react-native';\nimport AuthContext from '../contexts/AuthContext';\nimport AppNavigator from '../navigation/AppNavigator';\n\nconst StartupScreen = () => {\n  const { checkAuth } = useContext(AuthContext);\n\n  useEffect(() => {\n    const bootstrapAsync = async () => {\n      await checkAuth();\n    };\n\n    bootstrapAsync();\n  }, []);\n\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <ActivityIndicator size="large" color="#0000ff" />\n    </View>\n  );\n};\n\nexport default StartupScreen;\n`,
  ],
  [
    'src/screens',
    'AuthLoadingScreen.js',
    `import React, { useContext, useEffect } from 'react';\nimport { View, ActivityIndicator } from 'react-native';\nimport AuthContext from '../contexts/AuthContext';\n\nconst AuthLoadingScreen = () => {\n  const { user, checkAuth } = useContext(AuthContext);\n\n  useEffect(() => {\n    const bootstrapAsync = async () => {\n      await checkAuth();\n    };\n\n    bootstrapAsync();\n  }, []);\n\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <ActivityIndicator size="large" color="#0000ff" />\n    </View>\n  );\n};\n\nexport default AuthLoadingScreen;\n`,
  ],
  [
    'src/navigation',
    'AppNavigator.js',
    `import React from 'react';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createStackNavigator } from '@react-navigation/stack';\nimport { useSelector } from 'react-redux';\nimport BottomTabNavigator from './BottomTabNavigator';\nimport AuthNavigator from './AuthNavigator';\nimport AuthLoadingScreen from '../screens/AuthLoadingScreen';\n\nconst Stack = createStackNavigator();\nconst Tab = createBottomTabNavigator();\n\nconst AppNavigator = () => {\n  const { isLoggedIn } = useSelector(state => state.auth);\n\n  return (\n    <NavigationContainer>\n      <Stack.Navigator>\n        {isLoggedIn ? (\n          <Stack.Screen name="Main" component={BottomTabNavigator} options={{ headerShown: false }} />\n        ) : (\n          <Stack.Screen name="Auth" component={AuthNavigator} options={{ headerShown: false }} />\n        )}\n        <Stack.Screen name="AuthLoading" component={AuthLoadingScreen} options={{ headerShown: false }} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n};\n\nexport default AppNavigator;\n`,
  ],
  [
    'src/store/slices',
    'authSlice.js',
    `import { createSlice } from '@reduxjs/toolkit';\n\nconst initialState = {\n  isLoggedIn: false,\n  user: null,\n};\n\nexport const authSlice = createSlice({\n  name: 'auth',\n  initialState,\n  reducers: {\n    login: (state, action) => {\n      state.isLoggedIn = true;\n      state.user = action.payload;\n    },\n    logout: (state) => {\n      state.isLoggedIn = false;\n      state.user = null;\n    },\n  },\n});\n\nexport const { login, logout } = authSlice.actions;\n\nexport default authSlice.reducer;\n`,
  ],
  [
    'src/store/slices',
    'jobSlice.js',
    `import { createSlice } from '@reduxjs/toolkit';\n\nconst initialState = {\n  jobs: [],\n  loading: false,\n  error: null,\n};\n\nexport const jobSlice = createSlice({\n  name: 'job',\n  initialState,\n  reducers: {\n    fetchJobsStart: (state) => {\n      state.loading = true;\n    },\n    fetchJobsSuccess: (state, action) => {\n      state.loading = false;\n      state.jobs = action.payload;\n    },\n    fetchJobsFailure: (state, action) => {\n      state.loading = false;\n      state.error = action.payload;\n    },\n  },\n});\n\nexport const { fetchJobsStart, fetchJobsSuccess, fetchJobsFailure } = jobSlice.actions;\n\nexport default jobSlice.reducer;\n`,
  ],
  [
    'src/styles',
    'globalStyles.js',
    `import { StyleSheet } from 'react-native';\nimport colors from '../assets/colors';\nimport fonts from '../assets/fonts';\n\nexport const globalStyles = StyleSheet.create({\n  container: {\n    flex: 1,\n    padding: 20,\n  },\n  text: {\n    fontFamily: fonts.regular,\n    fontSize: 16,\n    color: colors.primary,\n  },\n});\n`,
  ],
  [
    'src/utils',
    'api.js',
    `export const fetchJobs = async () => {\n  // Implement your API call logic\n  const response = await fetch('https://api.example.com/jobs');\n  const data = await response.json();\n  return data;\n};\n`,
  ],
  [
    'src/utils',
    'storage.js',
    `import AsyncStorage from '@react-native-async-storage/async-storage';\n\nexport const saveData = async (key, value) => {\n  try {\n    await AsyncStorage.setItem(key, JSON.stringify(value));\n  } catch (error) {\n    console.error('Error saving data:', error);\n  }\n};\n\nexport const getData = async (key) => {\n  try {\n    const value = await AsyncStorage.getItem(key);\n    if (value !== null) {\n      return JSON.parse(value);\n    }\n  } catch (error) {\n    console.error('Error getting data:', error);\n  }\n};\n`,
  ],
  [
    'src/hooks',
    'useOrientation.js',
    `import { useEffect, useState } from 'react';\nimport { Dimensions } from 'react-native';\n\nconst useOrientation = () => {\n  const [orientation, setOrientation] = useState(Dimensions.get('window').height > Dimensions.get('window').width ? 'portrait' : 'landscape');\n\n  useEffect(() => {\n    const onChange = ({ window: { width, height } }) => {\n      setOrientation(height > width ? 'portrait' : 'landscape');\n    };\n\n    Dimensions.addEventListener('change', onChange);\n    return () => Dimensions.removeEventListener('change', onChange);\n  }, []);\n\n  return orientation;\n};\n\nexport default useOrientation;\n`,
  ],
  [
    'src/hooks',
    'useAPI.js',
    `import { useState } from 'react';\nimport { fetchJobs } from '../utils/api';\n\nconst useAPI = () => {\n  const [jobs, setJobs] = useState([]);\n  const [loading, setLoading] = useState(false);\n  const [error, setError] = useState(null);\n\n  const fetchJobsData = async () => {\n    setLoading(true);\n    try {\n      const data = await fetchJobs();\n      setJobs(data);\n    } catch (error) {\n      setError(error);\n    } finally {\n      setLoading(false);\n    }\n  };\n\n  return { jobs, loading, error, fetchJobsData };\n};\n\nexport default useAPI;\n`,
  ],
];

filesToCreate.forEach(([dir, fileName, content]) => {
  const filePath = path.join(projectPath, dir, fileName);
  fs.writeFileSync(filePath, content);
  console.log(`Created file: ${filePath}`);
});

const createContextFile = (contextName, contextContent) => {
  const contextPath = path.join(
    projectPath,
    'src',
    'contexts',
    `${contextName}.js`,
  );
  fs.writeFileSync(contextPath, contextContent);
  console.log(`Created context file: ${contextPath}`);
};

const authContextContent = `import React, { createContext, useState } from 'react';
import { saveData, getData } from '../utils/storage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (userData) => {
    setUser(userData);
    await saveData('user', userData);
  };

  const logout = async () => {
    setUser(null);
    await saveData('user', null);
  };

  const checkAuth = async () => {
    const userData = await getData('user');
    setUser(userData);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
`;

createContextFile('AuthContext', authContextContent);

const themeContextContent = `import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
`;

createContextFile('ThemeContext', themeContextContent);

// const packageJsonPath = path.join(projectPath, 'package.json');
// const packageJson = require(packageJsonPath);

// // Add additional packages here
// packageJson.dependencies = {
//   ...packageJson.dependencies,
//   // Add your additional dependencies here
//   '@react-navigation/bottom-tabs': '^6.0.9',
//   '@react-navigation/native': '^6.0.6',
//   '@react-navigation/stack': '^6.0.11',
//   'react-native-gesture-handler': '^2.2.0',
//   'react-native-reanimated': '^2.3.1',
//   'react-native-safe-area-context': '^3.3.2',
//   'react-native-screens': '^3.8.0',
//   '@reduxjs/toolkit': '^1.7.1',
//   '@react-native-async-storage/async-storage': '^1.15.5',
// };

// // Add your additional devDependencies here
// packageJson.devDependencies = {
//   ...packageJson.devDependencies,
//   // Add your additional devDependencies here
// };

// fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
// console.log('Updated package.json');

const appTsContent = `import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { AuthProvider } from './src/contexts/AuthContext';
import { ThemeProvider } from './src/contexts/ThemeContext';

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
`;

fs.writeFileSync(path.join(projectPath, 'App.tsx'), appTsContent);
console.log('Updated App.tsx');

console.log('Project structure created successfully!');
