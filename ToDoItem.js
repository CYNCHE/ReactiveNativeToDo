import React from 'react';
import { Text, View, CheckBox, TextInput, StyleSheet } from 'react-native';
//import CheckBox from 'react-native-check-box'


const styles = StyleSheet.create({
  toDoItem: {
    //flex: 1,
    width: 360,
    height: 50,
    flexDirection: 'row',
    borderStyle	: 'solid',
    borderRadius: 20,
    borderWidth: 1,
    borderColor:'powderblue',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'powderblue',
  },
  textInput: {
    flex: 5
  },
  checkBox: {
    flex: 1
  }
})





export default class ToDoItem extends React.Component {
  render() {
    return (
      <View style={styles.toDoItem}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your Event here"
          onChangeText={(text) => this.setState({text})}
        />
        <CheckBox style={styles.checkBox}></CheckBox>
      </View>
    )
  }
}