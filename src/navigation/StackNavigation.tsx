import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ONBOARDING_SCREEN} from 'src/constants/screens';
import routes from 'src/routes';

import headerStyles from 'src/assets/styles/headerStyles';
import colors from 'src/utils/colors';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={ONBOARDING_SCREEN}>
      {routes.map(({name, title, component, headerShown}) => {
        return (
          <Stack.Screen
            key={name}
            name={name}
            component={component}
            options={{
              title,
              headerShown,
              ...headerStyles,
              headerTintColor: colors.black,
            }}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default StackNavigation;
