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
    title: 'My Profile'
    
  };
  constructor(props) {
    super(props);
    this.state =
    {
        firstname: "",
        lastname: ""
    }
}

  componentDidMount() {
    this.fetchData();
}

fetchData = async () => {
    const response = await fetch("https://jbakke.dk/FitnessApp/api/users/" + currentUser.id);
    const json = await response.json();
    this.setState({history: json.workoutHistory})
    this.setState({firstname: json.firstName})
    this.setState({lastname: json.lastName})
}

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.headerStyle}>{this.state.firstname + " " + this.state.lastname}</Text>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('History')}>
                            <View style={styles.listItem}>
                                <Text style={styles.logoutText}>{"Workout History"}</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                            <View style={styles.Logout}>
                                <Text style={styles.logoutText}>Logout</Text>
                            </View>
                        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#464947',
  },
  headerStyle: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: '100',
    marginBottom: 24,
    color: "#E2E4E7"
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
    backgroundColor:'#56BDC9',
    borderRadius:20,
    borderWidth: 1,
    borderColor: '#56BDC9'
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
    borderColor: '#f44259',
    marginBottom: 100,
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
    color: '#E2E4E7',
    fontWeight: 'bold',
    fontSize: 20
  },
  logoutText: {
    paddingLeft: 12,
    color: '#464947',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: "center"
  }
});
