import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BookListScreen from '../screens/BookListScreen';
import BookDetailsScreen from '../screens/BookDetailsScreen';
import BorrowedBooksScreen from '../screens/BorrowedBooksScreen';
import { BorrowedBooksProvider } from '../../src/contexts/BorrowedBooksContext';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <BorrowedBooksProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="BookList">
          <Stack.Screen name="BookList" component={BookListScreen} />
          <Stack.Screen name="BookDetails" component={BookDetailsScreen} />
          <Stack.Screen name="BorrowedBooks" component={BorrowedBooksScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BorrowedBooksProvider>
  );
}
