import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput, 
  Alert
} from 'react-native';

export default class LoginScreen extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }


    _tryToLogin = async () =>{
      const response = await fetch("https://jbakke.dk/FitnessApp/api/users/login", {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
        
          username: this.state.username,
				  password: this.state.password,
        
			})
		})
    const json = await response.json();
    console.log("------------------: " + json.error)
    if(json.error == undefined)
    {
      global.currentUser = {id: json.id,username: this.state.username, password: this.state.password}
      this.props.navigation.navigate('Home');
    }
    else
    {
      Alert.alert(
        'Invalid Login',
        'Wrong Login',
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
    }
    
    }
  
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.header}>Fitness Starter</Text>
      <TextInput style={styles.listItem} value={this.state.username} onChangeText={(username) => this.setState({username})}></TextInput>
      <TextInput style={styles.listItem} secureTextEntry={true} value={this.state.password} onChangeText={(password) => this.setState({password})}></TextInput>
        <TouchableOpacity onPress={this._tryToLogin}>
          <View style={styles.login}>
          <Text style={styles.name}>Login</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
          <View style={styles.login}>
          <Text style={styles.name}>Register</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
    backgroundColor: '#fff',
  },
  login: {
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
    backgroundColor: '#6495ed',
    borderRadius:20,
    borderWidth: 1,
    borderColor: '#fff'
  },
  listItem: {
    textAlign: 'center',
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#EEEEEE',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff'
},
name: {
  paddingLeft: 12,
  color: '#666',
  fontWeight: 'bold',
  fontSize: 20, textAlign: 'center'
}, 
header: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: "center",
    marginTop: 100
}
});