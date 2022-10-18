import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.item,styles.itemPurple]}>
          <Text style={styles.text}>Purple: #C9C9FF</Text>
        </View>
        <View style={[styles.item,styles.itemBlue]}>
          <Text style={styles.text}>Blue: #3D85C6</Text>
        </View>
        <View style={[styles.item,styles.itemGreen]}>
          <Text style={styles.text}>Green: #96CC96</Text>
        </View>
        <View style={[styles.item,styles.itemYellow]}>
          <Text style={styles.text}>Yellow: #F4B940</Text>
        </View>
      </View>
    )
  }
}

 const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding:10
  },
  item:{
    flex:1,
    margin:10,
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center"
  },
  itemPurple:{
    backgroundColor:"#C9C9FF"
  },
  itemBlue:{
    backgroundColor:"#3D85C6"
  },
  itemGreen:{
    backgroundColor:"#96CC96"
  },
  itemYellow:{
    backgroundColor:"#F4B940"
  },
  text:{
    fontSize:16,
    color:"black",
    fontWeight:"700"
  }
 })