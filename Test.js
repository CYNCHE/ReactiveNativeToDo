import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';



export class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}