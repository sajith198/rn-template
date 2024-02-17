import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {AuthProvider} from './src/contexts/AuthContext';
import {ThemeProvider} from './src/contexts/ThemeContext';
import {Provider} from 'react-redux';
import store from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <ThemeProvider>
          <AppNavigator />
        </ThemeProvider>
      </AuthProvider>
    </Provider>
  );
};

export default App;
