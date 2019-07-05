import React, { Component } from 'react';
import {
  View,
  requireNativeComponent,
} from 'react-native';

const MapViewSwift = requireNativeComponent('MapView');

class MapScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    const geoData = navigation.getParam('geoData', null);
    const geoString = JSON.stringify(geoData);
    console.log('GEO ->', geoString);

    return (
      <View style={styles.container}>
        <MapViewSwift
          style={ styles.wrapper }
          count={3}
          geoData={geoString}
        />
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
};

export default MapScreen;