import React, { Component } from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import { getMapsList } from '../../services/DataService';

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.arrayholder = getMapsList();

    this.state = {
      loading: false,
      data: this.arrayholder,
      error: null,
    };
  }

  static navigationOptions = {
    title: 'Fatmap Testing Maps',
  };

  renderSeparator = () => {
    return (
      <View style={styles.line} />
    );
  };

  searchFilterFunction = text => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter(item => {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  onPressItem(id, geoData, name)  {
    if (geoData === null) {
      Alert.alert('No GeoData available');
    } else {
      this.props.navigation.navigate('Map',{
        itemId: id,
        geoData,
        name,
      });
    }
  }

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Search by name..."
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
      />
    );
  };

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
              title={item.name}
              titleStyle={styles.title}
              subtitle={item.description}
              onPress={() => this.onPressItem(item.id, item.geo_data, item.name)}
            />
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
  line: {
    height: 1,
    width: '90%',
    backgroundColor: '#CED0CE',
    marginLeft: '10%',
  },
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 20,
  }
};

export default HomeScreen;
