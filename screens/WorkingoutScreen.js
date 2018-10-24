import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity, Image } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { Constants } from 'expo';

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
  render() {
    return (
      <View>
        <ScrollView>
          <Text style={styles.title}>{this.state.currentID+1} / {this.state.workout.exercises.length}</Text>
          <Text style={styles.title}>{this.state.workout.exercises[this.state.currentID].name}</Text>
          <Image style={styles.fileImage} source={{ uri: this.state.workout.exercises[this.state.currentID].image }} />
          <Text style={styles.headerText}>{this.state.workout.exercises[this.state.currentID].description}</Text>

          {this.state.isFinished ? (
            <Button
              title="Finish!"
              onPress={() => this.props.navigation.navigate('Home')}
            />

          ) : (
              <Button
                title="Next!"
                height="70"
                onPress={() => { this.nextExercise() }}
              />
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
    width: 200,
    height: 200,
    alignItems: "center",
  }
});
export default WorkingoutScreen;