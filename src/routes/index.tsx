import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../pages/Login';
import Onboarding from '../pages/onboarding';
import Register from '../pages/Register';
import Home from '../pages/Home';
import TicTacToe from '../pages/Games/TicTacToe';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TicTacToe" component={TicTacToe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
