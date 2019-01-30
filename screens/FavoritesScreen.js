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
  Button
} from 'react-native';

export default class FavoritesScreen extends React.Component {
  static navigationOptions = {
    title: 'Favorites',
  };
  constructor(props) {
    super(props);
    this.state =
        {
            workouts: []
        }
}

componentDidMount() {
  this.fetchData();
}
fetchData = async () => {
  const response = await fetch("https://jbakke.dk/FitnessApp/api/users/" + currentUser.id);
  const json = await response.json();

  this.setState({ workouts: json.favorites });
}
 
  render() {
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity onPress={()=> this.fetchData()
        }>
          <View style={styles.refresh}>
            <Text style={styles.refreshText}>Refresh</Text>
          </View>
        </TouchableOpacity>
                    {this.state.workouts.map((w, i) => (
                        <TouchableOpacity key={w.id} onPress={() => this.props.navigation.navigate('Exercise', { workout: w })}>
                            {i % 2 == 0 ? (
                                <View style={styles.listItem}>
                                    <Image style={styles.fileImage} source={{
                                        uri: w.image
                                    }} />
                                    <Text style={styles.name}>{w.name}</Text>
                                </View>
                                
                            ) : (
                                    <View style={styles.listItem2}>
                                        <Image style={styles.fileImage} source={{
                                            uri: w.image
                                        }} />
                                        <Text style={styles.name}>{w.name}</Text>
                                    </View>
                                )}

                        </TouchableOpacity>
                    ))}
                </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#464947',
      },
  refreshText: {
    paddingLeft: 12,
    color: '#666',
    fontWeight: 'bold',
    fontSize: 20, textAlign: 'center'
  }, 
  refresh: {
    backgroundColor: '#72C64B',
    padding: 12,
    marginBottom: 1,
    flexDirection: 'row',
    alignItems: "center"
},
  listItem: {
      backgroundColor: '#EEEEEE',
      padding: 12,
      marginBottom: 1,
      flexDirection: 'row',
      alignItems: "center",
      height: 80
  },
  listItem2: {
      backgroundColor: '#dbd6d6',
      padding: 12,
      marginBottom: 1,
      flexDirection: 'row',
      alignItems: "center",
      height: 80
  },
  fileImage: {
      width: 50,
      height: 50
  },
  name: {
      paddingLeft: 12,
      color: '#666',
      fontWeight: 'bold',
      fontSize: 20
  }
  ,
  firstView :{
      width: '70%',
  },
  secoundView: {
      width: '30%'
  }
});
