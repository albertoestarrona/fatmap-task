import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

class MapScreen extends Component {
  constructor(props) {
    super(props);

    const { navigation } = props;
    const itemId = navigation.getParam('itemId', null);
    const geoData = navigation.getParam('geoData', null);
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Map Screen</Text>
      </View>
    );
  }
}

export default MapScreen;