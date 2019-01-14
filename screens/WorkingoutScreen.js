import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity, Image } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { Constants } from 'expo';
//import TestWatch from "./testWatch";

class WorkingoutScreen extends React.Component {
  static navigationOptions = {
    headerTitle: "Doing a workout",
  };
  constructor(props) {
    super(props);
    this.state =
      {
        workout: this.props.navigation.state.params.workout,
        currentID: 0,
        buttonTitle: "Next!",
        isFinished: false
      }

  }
  /*
  componentWillMount() {
    this.setState({ currentExercise: this.state.workout.exercises[0] })
  }



  <Text style={styles.title}>{this.state.currentExercise.name}</Text>
  
  */
  checkExercise() {
    if (this.state.currentID = this.state.workout.exercises.length() - 1) {

      this.setState((state) => {
        // Important: read `state` instead of `this.state` when updating.
        return { buttonTitle: "Finished!" }
      });
    }
    else
      return "Next!"

  }

  nextExercise() {
    if (this.state.currentID == this.state.workout.exercises.length-1) {
      this.setState((state) => {
        return { isFinished: true }
      });
    }
    else {
      this.setState((state) => {
        return { currentID: state.currentID + 1 }
      });
    }
  }

  updateWorkoutHistory = async () =>{
    var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
    const response = await fetch("https://jbakke.dk/FitnessApp/api/users/" + currentUser.id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      
        workoutName: this.state.workout.name,
        timeEnded: dd + '/' + mm + '/' + yyyy,
      
    })
  })
  
}


  render() {
    return (
      <View>
        <ScrollView>
          <Text style={styles.title}>{this.state.currentID+1} / {this.state.workout.exercises.length}</Text>
          <Text style={styles.title}>{this.state.workout.exercises[this.state.currentID].name}</Text>
          <Image style={styles.fileImage} source={{ uri: this.state.workout.exercises[this.state.currentID].image }} />
          <Text style={styles.headerText}>{this.state.workout.exercises[this.state.currentID].description}</Text>

          {this.state.isFinished ? (
            <TouchableOpacity
              onPress={() => {
                this.updateWorkoutHistory();
                this.props.navigation.navigate('Home')}
              }
            >
            <View style={styles.login}>
          <Text style={styles.name}>Finish</Text>
          </View>
          </TouchableOpacity>

          ) : (
            <TouchableOpacity
                height="70"
                onPress={() => { this.nextExercise() }}
              >
              <View style={styles.listItem}>
          <Text style={styles.name}>Next</Text>
          </View>
          </TouchableOpacity>
            )}
        </ScrollView>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#EEEEEE',
    padding: 12,
    marginBottom: 1,
    flexDirection: 'row',
    alignItems: "center"
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
  },
  fileImage: {
    width: '100%',
    height: 300,
    alignItems: "center",
  },
  login: {
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
    backgroundColor: '#25dd97',
    borderRadius:20,
    borderWidth: 1,
    borderColor: '#fff'
  },
  listItem: {
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
name: {
  paddingLeft: 12,
  color: '#666',
  fontWeight: 'bold',
  fontSize: 20, textAlign: 'center'
}
});
export default WorkingoutScreen;