import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


class ExerciseScreen extends React.Component {
    static navigationOptions = {
        headerTitle: "Exercise Screen",
      };
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.title}>This is the exercise screen</Text>
          <Button
            title="Back"
            onPress={() => this.props.navigation.goBack()}
            />
        </View>
      );
    }
  }

  
  const styles = StyleSheet.create({
    title: {
    paddingLeft: 12,
    color: '#666',
    fontWeight: 'bold',
    fontSize: 36
}
});
export default ExerciseScreen;