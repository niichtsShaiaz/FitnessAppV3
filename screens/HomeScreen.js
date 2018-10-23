import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: "Home Screen",
  };

    render() {
      return (  
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.title}>Ready to work?</Text>
          <Button
            title="Home"
            onPress={() => this.props.navigation.navigate('Workout')}
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
        fontSize: 24
    }
});
export default HomeScreen;