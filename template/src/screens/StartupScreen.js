import React, {useContext, useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import AuthContext from '../contexts/AuthContext';
import AppNavigator from '../navigation/AppNavigator';

const StartupScreen = () => {
  const {checkAuth} = useContext(AuthContext);

  useEffect(() => {
    // const bootstrapAsync = async () => {
    //   await checkAuth();
    // };
    // bootstrapAsync();
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default StartupScreen;
