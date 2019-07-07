import React, { Component } from 'react';
import {
  View,
  Text,
  requireNativeComponent,
} from 'react-native';

const MapViewSwift = requireNativeComponent('MapView');

class MapScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      error: null,
    };
  }

  render() {
    const { navigation } = this.props;
    const geoData = navigation.getParam('geoData', null);
    const geoString = JSON.stringify(geoData);
    const name = navigation.getParam('name', '');

    this.state = {
      loading: true,
      error: null,
    };

    return (
      <View style={styles.container}>
        <MapViewSwift
          style={ styles.wrapper }
          geoData={geoString}
        />
        <Text style={styles.title}>
          {name}
        </Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1, alignItems: 'stretch',
  },
  wrapper: {
    flex: 1, alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 50,
    textAlign: 'center'
  }
};

export default MapScreen;