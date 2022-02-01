import React from 'react';
import storage from 'src/utils/mmkvStorage';

import {
  NavigationContainer,
  DefaultTheme,
  Theme,
} from '@react-navigation/native';

import StackNavigation from './StackNavigation';
import TabNavigation from './TabNavigation';

import colors from 'src/utils/colors';

const AppTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.white as string,
  },
};
const token = storage.getString('token');
console.log('token', token);

// const isAuth = (token && true) || false;
const isAuth = false;

export default function App() {
  return (
    <NavigationContainer theme={AppTheme}>
      {(isAuth && <TabNavigation />) || <StackNavigation />}
    </NavigationContainer>
  );
}
