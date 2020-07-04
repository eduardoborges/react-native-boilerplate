import 'react-native-gesture-handler';

import React, { useState, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

import { Home, Login } from '~/screens';

const Stack = createStackNavigator();

declare const global: { HermesInternal: null | {} };

const App: React.FC = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User>();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((currUser) => {
      if (currUser) setUser(currUser);
      if (initializing) setInitializing(false);
    });
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!user
          ? <Stack.Screen name="Login" component={Login} />
          : (
            <>
              <Stack.Screen name="Home" component={Home} />
            </>
          )}

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
