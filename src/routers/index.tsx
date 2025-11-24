import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackRouters } from './stack';
import { AuthProvider } from '../Auth/useAuth';
import React from 'react';

const Stack = createStackNavigator();

export const Routers = () => {

  return (
    <NavigationContainer>
      <AuthProvider>
        <StackRouters />
      </AuthProvider>
    </NavigationContainer>
  )
}