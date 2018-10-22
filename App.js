import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Ready to work?</Text>
        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate('Workout')}
        />
      </View>
    );
  }
}

class WorkoutScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This is the workout screen</Text>
        <Button
          title="Workout"
          onPress={() => this.props.navigation.navigate('Exercise')}
          />
      </View>
    );
  }
}
class ExerciseScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This is the exercise screen</Text>
        <Button
          title="Back"
          onPress={() => this.props.navigation.goBack()}
          />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Workout: WorkoutScreen,
    Exercise: ExerciseScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
