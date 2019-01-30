import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, ScrollView } from 'react-native';


class HomeScreen extends React.Component {
  state = {
    catagorys: []
  }
  static navigationOptions = {
    headerTitle: "Categories"
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch("https://jbakke.dk/FitnessApp/api/workouts/catagorys");
    const json = await response.json();
    this.setState({ catagorys: json });
  }


  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          




            {this.state.catagorys.map((w, i) => (
                        <TouchableOpacity key={i} onPress={() => this.props.navigation.navigate('Workout', { catagory: w})}>
                            {i % 2 == 0 ? (
                                <View style={styles.listItem}>
                                    <Text style={styles.name}>{w.catagory}</Text>
                                </View>
                                
                            ) : (
                                    <View style={styles.listItem2}>
                                        <Text style={styles.name}>{w.catagory}</Text>
                                    </View>
                                )}

                        </TouchableOpacity>
                    ))}

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
  listItem: {
    backgroundColor: '#EEEEEE',
    padding: 12,
    marginBottom: 1,
    flexDirection: 'row',
    alignItems: "center",
    height: 80
},
listItem2: {
    backgroundColor: '#dbd6d6',
    padding: 12,
    marginBottom: 1,
    flexDirection: 'row',
    alignItems: "center",
    height: 80
},
  fileImage: {
      width: 50,
      height: 50
  },
  name: {
      paddingLeft: 12,
      color: '#666',
      fontWeight: 'bold',
      fontSize: 20
  }
});
export default HomeScreen;