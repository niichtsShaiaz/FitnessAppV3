import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


class WorkoutScreen extends React.Component {
    static navigationOptions = {
        headerTitle: "Workout Screen",
    };

    render() {
        return (
            <View style={{
                flexDirection: 'column',
                flex: 1,
                //justifyContent: 'center',
                //alignItems: 'stretch',
            }}>

                <View>
                    <Text style={styles.title}>Workout 1</Text>

                </View>
                <View>
                        <Text style={styles.text}>Exercise Juan</Text>

                </View>
                <View style={{ height: 400, width: 400, }}>

                    <Button
                        title="Workout"
                        onPress={() => this.props.navigation.navigate('Exercise')}
                    />
                </View>
                <View>
                    <Text style={styles.title}>Workout 2</Text>

                </View>
                <View>
                        <Text style={styles.text}>Exercise Juan</Text>

                </View>
                <View style={{ height: 400, width: 400, }}>

                    <Button
                        title="Workout"
                        onPress={() => this.props.navigation.navigate('Exercise')}
                    />
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    title: {
        paddingLeft: 12,
        color: '#666',
        fontWeight: 'bold',
        fontSize: 18
    },
    text: {
        paddingLeft: 12,
        color: '#666',
        fontSize: 14

    }
});
export default WorkoutScreen;