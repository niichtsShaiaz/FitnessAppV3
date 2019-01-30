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
      <View style={styles.logo}>
      <Text style={styles.header}>Lifter</Text>
      <Image style={styles.fileImage}
          source={require('../assets/icon.png')}
        />
      </View>
      
      <TextInput autoCorrect={false} style={styles.listItem} value={this.state.username} onChangeText={(username) => this.setState({username})}></TextInput>
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
  logo: {
    flexDirection: 'row',
    marginTop: 100,
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    paddingTop: 12,
    backgroundColor: '#464947',
  },
  fileImage: {
    width: 50,
    height: 50,
    marginLeft: 5
},
  login: {
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
    backgroundColor: '#56BDC9',
    borderRadius:20,
    borderWidth: 1,
    borderColor: '#56BDC9'
  },
  listItem: {
    textAlign: 'center',
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#E2E4E7',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E2E4E7',
    
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
    
    color: "#56BDC9",
}
});