import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  NativeModules,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const {
  StatusBarManager: {HEIGHT},
} = NativeModules;

const SplashScreen = props => {
  useEffect(() => {
    setTimeout(() => {
      setTimeout(() => {
        props.navigation.navigate('Login');
      }, 10);
    }, 2000);
  });
  return (
    <View style={styles.container}>
      <Image
        source={require('../../Assets/images/launch_screen.jpg')}
        resizeMode="contain"
        style={{width: 250, height: 200}}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EE5C25',
  },
});
