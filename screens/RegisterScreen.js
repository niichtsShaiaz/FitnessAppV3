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

export default class RegisterScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            firstName: "",
            lastName: ""
        }
    }


    _tryToLogin = async () => {
        if(this.state.username == "" && this.state.password == "" &&this.state.firstName == ""&& this.state.lastName =="")
        {
            Alert.alert(
                'Missing input',
                'All fields need to be filled',
                [
                    { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false }
            )
        }
        else{
            const response = await fetch("https://jbakke.dk/FitnessApp/api/users/register", {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
    
                    username: this.state.username,
                    password: this.state.password,
                    firstName: this.state.firstName,
                    lastName: this.state.lastName
    
                })
            })
            const json = await response.json();
            if (json.error == false) {
                global.currentUser = {username: this.state.username, password: this.state.password }
                this.props.navigation.navigate('Login');
            }
            else {
                Alert.alert(
                    'Username in use',
                    'Username in use',
                    [
                        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ],
                    { cancelable: false }
                )
            }
        }
        

    }

    render() {
        return (
            <View style={styles.container}>
            <ScrollView>
                <Text style={styles.header}>New User</Text>
                <Text>Username</Text>
                <TextInput style={styles.listItem} value={this.state.username} onChangeText={(username) => this.setState({ username })}></TextInput>
                <Text>First name</Text>
                <TextInput style={styles.listItem} value={this.state.firstName} onChangeText={(firstName) => this.setState({ firstName })}></TextInput>
                <Text>Last name</Text>
                <TextInput style={styles.listItem} value={this.state.lastName} onChangeText={(lastName) => this.setState({ lastName })}></TextInput>
                <Text>Password</Text>
                <TextInput style={styles.listItem} secureTextEntry={true} value={this.state.password} onChangeText={(password) => this.setState({ password })}></TextInput>
                <TouchableOpacity onPress={this._tryToLogin}>
                    <View style={styles.login}>
                        <Text style={styles.name}>Create</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Login')}>
                    <View style={styles.login}>
                        <Text style={styles.name}>Back</Text>
                    </View>
                </TouchableOpacity>
                </ScrollView>
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
        marginTop: 10,
        paddingTop: 15,
        paddingBottom: 15,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#6495ed',
        borderRadius: 20,
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
        marginTop: 20
    }
});