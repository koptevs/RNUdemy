import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './MainNavigator';

const AppNavigator = (props) => {
  // const isSignedIn = checkIsSignedIn();
  return (
    <NavigationContainer>
      <MainNavigator />
      {/* { isSignedIn && <MainNavigator />} */}
      {/* { !isSignedIn && <SignInNavigator />} */}
    </NavigationContainer>
  );
};

export default AppNavigator;
