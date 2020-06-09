import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home, Login } from '~/screens';

const Stack = createStackNavigator();

// eslint-disable-next-line no-unused-vars
declare const global: { HermesInternal: null | {} };

const App: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
