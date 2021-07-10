import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar, TouchableOpacity, } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View
            style = {styles.container}>
                <SafeAreaView style = {styles.AndroidSafeArea}/>
            <Text style = {styles.title}>ISS Tracker App</Text>
            <TouchableOpacity
              style={styles.scanButton}>
              <Text style={styles.buttonText}>ISS Location</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.scanButton}>
              <Text style={styles.buttonText}>Meteors</Text>
            </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },

    title: {
        
        flex: 0.15,
    },
    
    buttonText: {
        fontSize: 20,
        marginTop: 10,
      },

    AndroidSafeArea: {

        marginTop: Platform.OS === "android" ?
        StatusBar.currentHeight : 10,
    },
    scanButton: {
        backgroundColor: '#2196F3',
        padding: 10,
        margin: 10,
        borderRadius: 15,
        height: 75,
        width: 125,
        alignSelf: 'center',
        alignItems: 'center',
      },
  });