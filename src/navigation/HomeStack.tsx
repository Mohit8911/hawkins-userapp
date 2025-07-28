import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home2, ProductDetail, SubCategories, ProductList } from '@/screens';
import { HomeStackParamList } from './types';

const Stack = createNativeStackNavigator<HomeStackParamList>();

/**
 * HomeStack navigator containing Home2 and ProductDetail screens
 */
const HomeStack = () => {
  return (
    <Stack.Navigator 
      screenOptions={{ 
        headerShown: false 
      }}
    >
      <Stack.Screen name="Home2" component={Home2} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="SubCategories" component={SubCategories} />
      <Stack.Screen name="ProductList" component={ProductList} />
    </Stack.Navigator>
  );
};

export default HomeStack;