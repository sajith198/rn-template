import React, {createContext, useState, useContext} from 'react';
import {saveData, getData} from '../utils/storage';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const login = async userData => {
    setUser(userData);
    await saveData('user', userData);
  };

  const logout = async () => {
    setUser(null);
    await saveData('user', null);
  };

  const checkAuth = async () => {
    // const userData = await getData('user');
    // setUser(userData);
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider value={{user, login, logout, checkAuth, isLoggedIn}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
