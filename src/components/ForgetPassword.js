import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ImageBackground,
} from 'react-native';
import axios from 'axios';
import {Icon} from 'react-native-elements';

{
  /* {---------------Redux Imports------------} */
}
import {connect} from 'react-redux';
import * as userActions from '../../src/redux/actions/user';
import {bindActionCreators} from 'redux';
import {ScrollView} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const ForgetPassword = props => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = async () => {
    if (email.trim() === '') {
      Alert.alert('Error', 'Email is required');
      return;
    }
    try {
      const response = await axios.post(
        'http://192.168.1.115:3000/forgot-password',
        {
          email: email,
        },
      );

      if (response.status === 200) {
        Alert.alert(
          'Success',
          'Password reset instructions sent to your email.',
        );
        props.navigation.navigate('Reset-Password-Screen');
      } else {
        Alert.alert('Error', 'Failed to initiate password reset process.');
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        Alert.alert('Error', 'User not found. Please check your email.');
      } else {
        Alert.alert('Error', 'User not exist.');
      }
    }
  };
  return (
    <ScrollView contentContainerStyle={{paddingBottom: '20%'}}>
      <View style={styles.container}>
        <View style={{marginTop: 100}}>
          <Image
            source={require('../../src/Assets/images/launch_screen.jpg')}
            style={{height: 150, width: 200}}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.headText}>Forget Password</Text>
        <Text style={styles.headText1}>
          Enter your email below to reset your password.
        </Text>
        <View style={styles.textInputContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon
              type="material"
              name="mail"
              color={'black'}
              size={28}
              iconStyle={{marginRight: 10}}
            />
            <TextInput
              placeholder="Email"
              style={styles.textInput1}
              placeholderTextColor={'black'}
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            alignSelf: 'flex-end',
            marginTop: 20,
            marginRight: 10,
          }}>
          <TouchableOpacity
            style={[styles.buttonContainer]}
            onPress={() => handleForgotPassword()}>
            <Text style={styles.button1}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword);

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    width: width,
  },
  headText: {
    fontWeight: '700',
    fontSize: 30,
    letterSpacing: 1,
    color: 'black',
    marginTop: 35,
  },
  headText1: {
    fontSize: 15,
    letterSpacing: 1,
    color: 'black',
    marginBottom: 25,
    marginTop: 10,
  },
  textInput1: {
    borderColor: 'black',
    borderWidth: 1,
    width: 330,
    borderRadius: 5,
    padding: 10,
    fontWeight: '400',
    marginRight: 10,
    color: 'black',
  },
  textInput2: {
    borderColor: 'black',
    borderWidth: 1,
    width: 330,
    borderRadius: 5,
    padding: 10,
    marginTop: 25,
    marginBottom: 25,
    fontWeight: '300',
    marginRight: 10,
  },
  buttonContainer: {
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 10,
    marginRight: 15,
    width: 100,
  },
  button1: {
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: '400',
    color: 'white',
  },
  text1: {
    alignSelf: 'flex-start',
    marginLeft: 30,
    backgroundColor: '#EE5C25',
    borderWidth: 1,
    padding: 10,
    width: 350,
    marginBottom: 50,
    marginTop: 75,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 15,
  },
  createBtn: {
    color: 'white',
    padding: 10,
    borderRadius: 10,
    width: 135,
    backgroundColor: 'black',
    marginLeft: 10,
    fontWeight: '600',
    // borderWidth:1
  },
  text2: {
    fontWeight: '300',
    color: 'white',
    fontSize: 16,
    // letterSpacing: 1,
  },
});
