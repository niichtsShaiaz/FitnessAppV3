import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import HomeScreen from './screens/HomeScreen';
import ExerciseScreen from './screens/ExerciseScreen';
import WorkoutScreen from './screens/WorkoutScreen';
import WorkingoutScreen from './screens/WorkingoutScreen';


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Workout: props => <WorkoutScreen {...props}/>,
    Exercise: props => <ExerciseScreen {...props}/>,
    Workingout: props => <WorkingoutScreen {...props}/>,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.setWorkout = this.setWorkout.bind(this);

    this.state = {
      workoutId: null
    };
  }

  setWorkout(workoutId) {
    this.setState({
      workoutId
    })
  }

  render() {
    return <RootStack />;
  }
}
