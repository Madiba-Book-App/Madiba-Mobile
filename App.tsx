import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import Home from './src/screens/Home';
import Onboarding from './src/screens/Onbording';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Home" component={Onboarding} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
