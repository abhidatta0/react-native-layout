import React from 'react';
import {
  View,
  Text,
  StyleSheet,
}from 'react-native';

const BottomComponent = ()=>{
  {/*  try using  style.relativeContainer instead  */}
  return <View style={style.relativeContainer}> 
      <Text>BottomComponent</Text>
  </View>
}

const style = StyleSheet.create({
  absoluteContainer:{
    position: 'absolute',
    borderWidth: 1,
    bottom: 1,
    top: 1,
    left:5,
  },
  relativeContainer:{
    position: 'relative',
    borderWidth: 1,
    // bottom: 10,
    top: 10,
    left:5,
  }
})

export default BottomComponent;