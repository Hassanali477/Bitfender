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
import API_BASE_URL from '../../../config';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const {
  StatusBarManager: {HEIGHT},
} = NativeModules;

const SplashScreen = props => {
  // const checkCredentials = async () => {
  //   let credentials = await AsyncStorage.getItem('@usercredentials');
  //   console.log(credentials, 'credentials');
  //   if (credentials == null) {
  //     setTimeout(() => {
  //       setTimeout(() => {
  //         props.navigation.navigate('Login');
  //       }, 10);
  //     }, 2000);
  //   } else {
  //     login(credentials);
  //   }
  // };
  // const login = async credentials => {
  //   const response = await axios.post(
  //     `${API_BASE_URL}/nodeapp/login`,
  //     JSON.parse(credentials),
  //   );
  //   if (response.status === 200) {
  //     console.log('Login successful', response.data);
  //     const token = response.data.token;
  //     const user = response.data.userData;
  //     var {actions} = props;
  //     actions.userToken(token);
  //     actions.user(user);
  //     props.navigation.navigate('Home');
  //   } else {
  //     console.error(
  //       'Login failed: Unexpected response status',
  //       response.status,
  //     );
  //     props.navigation.navigate('Login');
  //     Alert.alert('Error', 'Unexpected response from server');
  //   }
  // };
  useEffect(() => {
    props.navigation.navigate('Login');
    // checkCredentials();
  }, []);
  return (
    <ImageBackground
      style={styles.container}
      source={require('../../Assets/images/background.jpg')}
      resizeMode="cover">
      <Image
        source={require('../../Assets/images/launch_screen.jpg')}
        resizeMode="contain"
        style={{width: 250, height: 200}}
      />
    </ImageBackground>
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
  },
});
