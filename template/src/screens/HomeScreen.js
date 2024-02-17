// HomeScreen.js
import React from 'react';
import Box from '../components/Common/Box';
import Text from '../components/Common/Text';
import {Pressable, Touchable, TouchableOpacity} from 'react-native';
import {useTheme} from '../contexts/ThemeContext';
import Button from '../components/Common/Button';

const HomeScreen = () => {
  return (
    <Box padding={'m'}>
      <Text>Hello this is a themed text</Text>
      <TouchableOpacity>
        <Text>Hey</Text>
        <Button title={'This is a themed Button'} />
      </TouchableOpacity>
    </Box>
  );
};

export default HomeScreen;
