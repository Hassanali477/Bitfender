import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  NativeModules,
  StatusBar,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

{
  /* {---------------Redux Imports------------} */
}
import {connect} from 'react-redux';
import * as userActions from '../../redux/actions/user';
import {bindActionCreators} from 'redux';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const {
  StatusBarManager: {HEIGHT},
} = NativeModules;

const SplashScreen = props => {
  const checkCredentials = async () => {
    let credentials = await AsyncStorage.getItem('@usercredentials');
    console.log(credentials);
    if (credentials == null) {
      setTimeout(() => {
        setTimeout(() => {
          props.navigation.navigate('Login');
        }, 10);
      }, 2000);
    } else {
      login(credentials);
    }
  };
  const login = async credentials => {
    const response = await axios.post(
      'http://192.168.1.115:3000/login',
      JSON.parse(credentials),
    );
    if (response.status === 200) {
      console.log('Login successful', response.data);
      const token = response.data.token;
      const user = response.data.userData;

      var {actions} = props;
      actions.userToken(token);
      actions.user(user);
      props.navigation.navigate('Home');
    } else {
      console.error(
        'Login failed: Unexpected response status',
        response.status,
      );
      props.navigation.navigate('Login');
      Alert.alert('Error', 'Unexpected response from server');
    }
  };
  useEffect(() => {
    checkCredentials();
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require('../../Assets/images/b2.png')}
        resizeMode="contain"
        style={{width: 250, height: 200}}
      />
      <Text
        style={{
          fontSize: 26,
          alignSelf: 'center',
          fontWeight: 'bold',
          marginTop: 20,
          color: '#fff',
          letterSpacing: 2.5,
        }}>
        BITDEFENDER
      </Text>
    </View>
  );
};

{
  /* {---------------redux State ------------} */
}
const mapStateToProps = state => ({
  userData: state.userData,
});
{
  /* {---------------redux Actions ------------} */
}
const ActionCreators = Object.assign({}, userActions);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
});
