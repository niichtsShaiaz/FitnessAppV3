import React from 'react';
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
import { ExpoLinksView } from '@expo/samples';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Workout History'
    
  };
  constructor(props) {
    super(props);
    this.state =
    {
        history: []
    }
}

  componentDidMount() {
    this.fetchData();
}

fetchData = async () => {
    const response = await fetch("https://jbakke.dk/FitnessApp/api/users/" + currentUser.id);
    const json = await response.json();
    this.setState({history: json.workoutHistory})
}

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.history.map(w => (
                        <TouchableOpacity key={w.id}>
                            <View style={styles.listItem}>
                                <Text style={styles.name}>{"Date: "+ w.timeEnded+ "\nWorkout: " +w.workoutName}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
      </ScrollView>
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
    marginTop: 30
  },
  listItem: {
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
    backgroundColor:'#EEEEEE',
    borderRadius:20,
    borderWidth: 1,
    borderColor: '#fff'
  },
  Logout: {
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
    backgroundColor:'#f44259',
    borderRadius:20,
    borderWidth: 1,
    borderColor: '#fff',
    marginBottom: 100
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
  },
  logoutText: {
    paddingLeft: 12,
    color: '#666',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: "center"
  }
});
