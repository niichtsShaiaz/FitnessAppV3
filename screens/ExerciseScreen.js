import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity, Image , Alert} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { Constants } from 'expo';

class ExerciseScreen extends React.Component {
  static navigationOptions = {
    headerTitle: "Exercise Screen",
  };
  constructor(props) {
    super(props);
    this.state =
      {
        workout: this.props.navigation.state.params.workout,
        activeSections: []
      }

  }

  _renderSectionTitle = section => {
    return (
      <View style={styles.content}>
        <Text>{section.content} </Text>
      </View>
    );
  };

  _renderHeader = section => {
    return (
      <View style={styles.header}>
      <Image style={styles.fileImage} source={{uri: section.image}} />
        <Text style={styles.headerText}>{section.name}</Text>
      </View>
    );
  };

  _renderContent = section => {
    return (
      <View style={styles.content}>
        <Text style={styles.deText}>{section.description}</Text>
        
      </View>
    );
  };

  _updateSections = activeSections => {
    this.setState({ activeSections });
  };

  _addToFavorite = async() => {
    const response = await fetch("https://jbakke.dk/FitnessApp/api/users/" + currentUser.id + "/favorites/" + this.state.workout.id);
        const json = await response.json();
        if(json.error == true)
        {
          Alert.alert(
            'Workout is on favorites',
            'Is in favorites',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          )
        }
  }

  _removefromFavorite = async() => {
    const response = await fetch("https://jbakke.dk/FitnessApp/api/users/" + currentUser.id + "/removefavorites/" + this.state.workout.id);
        const json = await response.json();
        if(json.error == true)
        {
          Alert.alert(
            'Workout is not in favorites',
            'Is not in favorites',
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
        <ScrollView>
          <Text style={styles.title}>{this.state.workout.name}</Text>
          <Accordion
            sections={this.state.workout.exercises}
            activeSections={this.state.activeSections}
            renderSectionTitle={this._renderSectionTitle}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
            onChange={this._updateSections}
          />
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Workingout', {workout: this.state.workout})}>
          <View style={styles.login}>
          <Text style={styles.name}>Start</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._addToFavorite()}>
          <View style={styles.listItem}>
          <Text style={styles.name}>Add to favorites</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._removefromFavorite()}>
          <View style={styles.listItem}>
          <Text style={styles.name}>Remove from favorites</Text>
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
    backgroundColor: '#464947',
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
    color : "#E2E4E7",
    fontWeight: "bold"
  },
  header: {
    backgroundColor: '#E2E4E7',
        padding: 12,
        marginBottom: 1,
        flexDirection: 'row',
        alignItems: "center"
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: "#464947"
  },
  deText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: "#E2E4E7"
  },
  content: {
  },
  fileImage: {
    width: 50,
    height: 50
},
login: {
  marginTop:10,
  paddingTop:15,
  paddingBottom:15,
  marginLeft:30,
  marginRight:30,
  backgroundColor: '#72C64B',
  borderRadius:20,
  borderWidth: 1,
  borderColor: '#72C64B'
},
listItem: {
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
name: {
paddingLeft: 12,
color: '#666',
fontWeight: 'bold',
fontSize: 20, textAlign: 'center'
}, 
});
export default ExerciseScreen;