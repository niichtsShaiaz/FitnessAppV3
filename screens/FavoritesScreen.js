import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class FavoritesScreen extends React.Component {
  static navigationOptions = {
    title: 'Notifications',
  };

 
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerStyle}>0 Notifications</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  headerStyle: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: '100',
    marginBottom: 24
  },
  headerStyle2: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '100',
    marginBottom: 24
  },
  listItem: {
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
    backgroundColor:'#EEEEEE',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  fileImage: {
    alignSelf: 'center',
    height: 200,
    width: 200,
    borderWidth: 1,
    borderRadius: 100
  },
  name: {
    paddingLeft: 12,
    color: '#666',
    fontWeight: 'bold',
    fontSize: 20
  }
});
