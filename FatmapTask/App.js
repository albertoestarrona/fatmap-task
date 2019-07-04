import React from 'react';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen/HomeScreen'
import MapScreen from './src/screens/MapScreen/MapScreen'

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Map: {
    screen: MapScreen,
  }
});

export default createAppContainer(AppNavigator);
