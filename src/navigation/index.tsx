import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  Theme,
} from '@react-navigation/native';

import TabNavigation from './TabNavigation';

import colors from 'src/utils/colors';

const AppTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.white as string,
  },
};

export default function App() {
  return (
    <NavigationContainer theme={AppTheme}>
      {/* <StackNavigation /> */}
      <TabNavigation />
    </NavigationContainer>
  );
}
