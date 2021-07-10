import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class MeteorScreen extends Component {
    render() {
        return (
            <View
                style = {styles.container}>
                <Text style = {styles.title}>Meteor Screen!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    title: {
        marginTop: 20,
    }
  });
  