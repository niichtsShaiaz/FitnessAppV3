import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity, Image } from 'react-native';
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
        <Text style={styles.headerText}>{section.description}</Text>
        
      </View>
    );
  };

  _updateSections = activeSections => {
    this.setState({ activeSections });
  };

  render() {
    return (
      <View>
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
          <Button
            title="Start"
            onPress={() => this.props.navigation.navigate('Workingout', {workout: this.state.workout})}
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
    width: 50,
    height: 50
}
});
export default ExerciseScreen;