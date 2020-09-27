import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Platform } from 'react-native'

export default class Basic extends Component {
  render() {
    return (
      <>
        <View style={styles.top}>
          <Text style = {styles.topText} >世上无难事</Text>
        </View>
        <View style={styles.footer}>
          {/* <Text style = {{fontSize: 20,fontWeight: 'bold'}} >只要肯放弃</Text> */}
          <Text style = {styles.topText} >只要肯放弃</Text>
          <Text 
            style = {styles.topText} 
            numberOfLines={1}
            // ellipsizeMode="clip"
            onPress={(a)=>console.log(a)}
          >
            不想学习不想学习不想学习不想学习不想学习不想学习不想学习不想学习不想学习不想学习不想学习不想学习不想学习
          </Text>
        </View>
        <View style={{backgroundColor:'gray'}}>
          <Text style = {styles.topText} >
            当前设备屏幕的宽度是：{Dimensions.get('screen').width}
          </Text>
          <Text style = {styles.topText} >
            当前设备屏幕的宽度是：{Dimensions.get('screen').height}
          </Text>
          <Text style = {styles.topText} >
            当前设备的系统平台是：{Platform.OS}
          </Text>
          <Text style = {styles.topText}>
            当前设备的版本是：{Platform.Version}
          </Text>
          <Text style = {styles.topText}>
            当前设备是：{Platform.isPad}
          </Text>
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  top:{
    backgroundColor:'pink',
    height:50,
    padding:5
  },
  topText:{
    fontSize: 20,
    fontWeight:'bold',
    lineHeight: 40
  },
  footer:{
    backgroundColor:'skyblue',
    // height:50,
    padding:5
  }
});
