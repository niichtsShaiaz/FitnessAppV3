import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


class mainscreen extends React.Component{

    render(){
        return (
            <View style={styles.container}>
              <Text>Second screen</Text>
              <Button 
              title="Go to details"
              onPress={()=> this.props.AppNavigator.navigate  ('RouteOne')}
              />
            </View>
          );

    }
}
export default mainscreen;