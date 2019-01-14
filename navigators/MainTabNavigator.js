import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from '@expo/vector-icons/FontAwesome';
import HomeScreen from '../screens/HomeScreen';
import ExerciseScreen from '../screens/ExerciseScreen';
import WorkoutScreen from '../screens/WorkoutScreen';
import WorkingoutScreen from '../screens/WorkingoutScreen';
import ProfileScreen from '../screens/ProfileScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import WorkoutHistoryScreen from '../screens/WorkoutHistoryScreen'

const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Workout: props => <WorkoutScreen {...props}/>,
    Exercise: props => <ExerciseScreen {...props}/>,
    Workingout: props => <WorkingoutScreen {...props}/>,
},
{
  initialRouteName: 'Home',
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Workouts',
  tabBarIcon: ({tintColor}) => (
    <Icon
        name="child"
        color={tintColor}
        size={24}
    />
)
};

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
  History: WorkoutHistoryScreen
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'My Profile',
  tabBarIcon: ({tintColor}) => (
    <Icon
        name="user"
        color={tintColor}
        size={24}
    />
)
};

const FavoritesStack = createStackNavigator({
  Favorites: FavoritesScreen,
});

FavoritesStack.navigationOptions = {
  tabBarLabel: 'Favorites',
  tabBarIcon: ({tintColor}) => (
    <Icon
        name="star"
        color={tintColor}
        size={24}
    />
)
};

export default createBottomTabNavigator({
  HomeStack,
  ProfileStack,
  FavoritesStack,
});
