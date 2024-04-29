import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import {connect} from 'react-redux';
import * as userActions from '../../src/redux/actions/user';
import {bindActionCreators} from 'redux';
import {Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import API_BASE_URL from '../../config';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {BackHandler} from 'react-native';
import CustomAlert from './CustomAlert';
import AsyncStorage from '@react-native-async-storage/async-storage';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const ForgetPassword = props => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State to manage error message
  const [showAlert, setShowAlert] = useState(false);
  const handleForgotPassword = async () => {
    if (email.trim() === '') {
      setErrorMessage('Email is required');
      setShowAlert(true);
      return;
    }
    try {
      const response = await axios.post(
        `${API_BASE_URL}/nodeapp/forgot-password`,
        {
          email: email,
        },
      );

      if (response.status === 200) {
        AsyncStorage.clear();
        setErrorMessage('Password reset instructions sent to your email');
        setShowAlert(true);
      } else {
        // Alert.alert('Error', 'Failed to initiate password reset process.');
        setErrorMessage(
          'Success',
          'Failed to initiate password reset process.',
        );
        setShowAlert(true);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        // Alert.alert('Error', 'User not found. Please check your email.');
        setErrorMessage('User not found. Please check your email.');
        setShowAlert(true);
      } else {
        // Alert.alert('Error', 'User not exist.');
        setErrorMessage('User not exist.');
        setShowAlert(true);
      }
    }
  };
  useEffect(() => {
    const backAction = () => {
      props.navigation.goBack(); // Navigate back when the back button is pressed
      return true; // Prevent default behavior
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [navigation]);
  return (
    <View style={styles.container}>
      <CustomAlert
        visible={showAlert}
        message={errorMessage}
        onClose={() => setShowAlert(false)}
        type={
          errorMessage.startsWith(
            'Password reset instructions sent to your email',
          )
            ? 'success'
            : 'error'
        }
      />
      <Image
        source={require('../Assets/images/launch_screen.jpg')}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.formContainer}>
        <Text style={styles.headText1}>
          Enter your email below to reset your password.
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            style={styles.textInput}
            placeholderTextColor={'black'}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <TouchableOpacity
          onPress={handleForgotPassword}
          style={[styles.buttonContainer]}>
          <LinearGradient
            colors={['#EE5C25', '#000']} // Adjust the second color to a lighter shade of black
            locations={[0.1, 0.9]} // Adjust the gradient position as needed
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={[styles.button, {borderRadius: 50}]}>
            <Text style={[styles.buttonText, {color: 'white'}]}>Continue</Text>
          </LinearGradient>
        </TouchableOpacity>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              marginRight: 6,
              marginTop: 55,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 14,
                fontWeight: '400',
              }}>
              Back to Login?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={{
              marginTop: 55,
            }}>
            <Text
              style={{
                color: '#EE5C25',
                fontSize: 14,
                fontWeight: '500',
                textDecorationLine: 'underline',
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  userData: state.userData,
});

const ActionCreators = Object.assign({}, userActions);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  logo: {
    height: 180,
    width: 180,
    marginBottom: 20,
  },
  headText: {
    fontWeight: '700',
    fontSize: 30,
    letterSpacing: 1,
    color: 'black',
  },
  headText1: {
    fontSize: 16,
    letterSpacing: 1,
    color: 'black',
    marginBottom: 15,
    marginTop: 20,
    textAlign: 'center',
  },
  formContainer: {
    backgroundColor: '#f2f2f2',
    borderRadius: 15,
    padding: 20,
    marginBottom: 40,
    alignItems: 'center',
    marginHorizontal: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 50,
    marginBottom: 20,
    marginTop: 30,
  },
  inputLabel: {
    color: 'black',
    fontWeight: 'bold',
  },
  textInput: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    color: 'black',
  },
  button: {
    borderRadius: 50,
    padding: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: width / 2.7,
    alignSelf: 'flex-end',
    marginRight: 5,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
