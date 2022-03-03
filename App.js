import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import BottomComponent from './src/components/BottomComponent';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <BottomComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'pink'
  }
})


export default App;
