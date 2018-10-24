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
        currentExercise: this.props.navigation.state.params.workout.exercises[0],
        currentID: 0,
      }

  }
  compo

  Next() {

    this.setState({ currentExercise: this.state.workout.exercises[this.state.currentID++] })
  }


  render() {
    return (
      <View>
        <ScrollView>
          <Text style={styles.title}>{this.state.currentExercise.name}</Text>
          <Image style={styles.fileImage} source={{ uri: this.state.currentExercise.image }} />

          <Button
            title="Next"
            height="40"
            onPress={this.Next()}
          />
          <Button
            title="Go to home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
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
    width: 500,
    height: 500
  }
});
export default WorkingoutScreen;