import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EVENT_SCREEN} from 'src/constants/screens';
import routes from 'src/routes';
import colors from 'src/utils/colors';
import headerStyles from 'src/assets/styles/headerStyles';
const Stack = createNativeStackNavigator();
const tabStacks = routes.filter(item => item.tabName === 'Events');

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName={EVENT_SCREEN}>
      {tabStacks.map(
        ({name, title, headerShown, component, gestureEnabled}) => (
          <Stack.Screen
            key={name}
            name={name}
            component={component}
            options={{
              title,
              headerShown,
              gestureEnabled,
              ...headerStyles,
              headerTintColor: colors.black,
            }}
          />
        ),
      )}
    </Stack.Navigator>
  );
}

export default HomeStack;
