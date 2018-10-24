import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, Image } from 'react-native';


class WorkoutScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            catagory: this.props.navigation.state.params.catagory.catagory,
            workouts: []
        }
    }
    
    
    componentDidMount() {
        this.fetchData();
    }
    
    fetchData = async () => {
        const response = await fetch("https://jbakke.dk/FitnessApp/api/workouts");
        const json = await response.json();
        const json2 = json.filter(item => item.catagory.catagory == this.state.catagory)
        this.setState({ workouts: json2 });
    }
    static navigationOptions = {
        headerTitle: "Workout Screen",
      };
    
    render() {
        return (
            <View>
                <ScrollView>
                    {this.state.workouts.map(w => (
                        <TouchableOpacity key={w.id} onPress={() => this.props.navigation.navigate('Exercise', { workout: w })}>
                            <View style={styles.listItem}>

                                <Image style={styles.fileImage} source={{
                                    uri: w.image
                                }} />
                                <Text style={styles.name}>{w.name}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    listItem: {
        backgroundColor: '#EEEEEE',
        padding: 12,
        marginBottom: 1,
        flexDirection: 'row',
        alignItems: "center"
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
export default WorkoutScreen;