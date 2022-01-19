import * as React from 'react';
import {HOME_SCREEN, BORROW_SCREEN, BOOKS_SCREEN} from 'src/constants/screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeIcon from 'src/assets/icons/home.svg';
import HomeActiveIcon from 'src/assets/icons/home-active.svg';

import colors from 'src/utils/colors';
import HomeStack from './HomeStack';
import BorrowBookStack from './BorrowBookStack';
import BooksStack from './BooksStack';

const Tab = createBottomTabNavigator();

const getTabIcon = (name: string): any => {
  let comps = {
    HOME_SCREEN: <HomeIcon />,
    HOME_SCREEN_ACTIVE: <HomeActiveIcon />,
    BOOKS_SCREEN: <HomeActiveIcon />,
    BOOKS_SCREEN_ACTIVE: <HomeActiveIcon />,
    BORROW_SCREEN: <HomeActiveIcon />,
    BORROW_SCREEN_ACTIVE: <HomeActiveIcon />,
  };

  return comps[name];
};

function StackNavigation() {
  return (
    <Tab.Navigator initialRouteName={HOME_SCREEN}>
      <Tab.Screen
        key={HOME_SCREEN}
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) =>
            focused
              ? getTabIcon(`${HOME_SCREEN}_ACTIVE`)
              : getTabIcon(HOME_SCREEN),
          tabBarActiveTintColor: colors.primary,
          tabBarStyle: {paddingTop: 10},
          tabBarIconStyle: {marginBottom: 5},
          headerShown: false,
        }}
      />
      <Tab.Screen
        key={BOOKS_SCREEN}
        name="Books"
        component={BooksStack}
        options={{
          tabBarIcon: ({focused}) =>
            focused
              ? getTabIcon(`${HOME_SCREEN}_ACTIVE`)
              : getTabIcon(HOME_SCREEN),
          tabBarActiveTintColor: colors.primary,
          tabBarStyle: {paddingTop: 10},
          tabBarIconStyle: {marginBottom: 5},
          headerShown: false,
        }}
      />
      <Tab.Screen
        key={BORROW_SCREEN}
        name="Borrow"
        component={BorrowBookStack}
        options={{
          tabBarIcon: ({focused}) =>
            focused
              ? getTabIcon(`${HOME_SCREEN}_ACTIVE`)
              : getTabIcon(HOME_SCREEN),
          tabBarActiveTintColor: colors.primary,
          tabBarStyle: {paddingTop: 10},
          tabBarIconStyle: {marginBottom: 5},
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default StackNavigation;
