import React from 'react';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen/HomeScreen'
import MapScreen from './src/screens/MapScreen/MapScreen'

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Map: {
      screen: MapScreen,
    }
  }, {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#000',
      },
    }
  },
);

export default createAppContainer(AppNavigator);
