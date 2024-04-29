import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  Dimensions,
  Alert,
  BackHandler,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ResetPasswordHeaderScreen from './ResetPasswordHeaderScreen';
import axios from 'axios';
import API_BASE_URL from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';

{
  /* {---------------Redux Imports------------} */
}
import {connect} from 'react-redux';
import * as userActions from '../redux/actions/user';
import {bindActionCreators} from 'redux';
import {useNavigation} from '@react-navigation/native';
import CustomAlert from './CustomAlert';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const ResetPasswordScreen = props => {
  const navigation = useNavigation();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State to manage error message
  const [showAlert, setShowAlert] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const {
    userData: {
      user: {email},
    },
  } = props;
  const handleResetPassword = async () => {
    try {
      if (!oldPassword || !newPassword || !confirmPassword) {
        setErrorMessage('Please fill in all fields.');
        setShowAlert(true);
        return;
      }
      // Add validation for password and confirmPassword
      if (newPassword !== confirmPassword) {
        setErrorMessage('Passwords do not match.');
        setShowAlert(true);
        return;
      }

      const response = await axios.post(
        `${API_BASE_URL}/nodeapp/resetPasswordWithCheck`,
        {
          oldPassword: oldPassword,
          newPassword: newPassword,
          confirmPassword: confirmPassword,
          email: email,
        },
      );

      if (response.data.success) {
        AsyncStorage.clear();
        props.navigation.navigate('Login');
        setErrorMessage('Password reset successfully');
        setShowAlert(true);
      }
    } catch (error) {
      // Alert.alert('Error', error.response.data.message);
      setErrorMessage(error.response.data.message);
      setShowAlert(true);
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
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <View style={styles.container}>
      <CustomAlert
        visible={showAlert}
        message={errorMessage}
        onClose={() => setShowAlert(false)}
        type={
          errorMessage.startsWith('Password reset successfully')
            ? 'success'
            : 'error'
        }
      />
      <Image
        source={require('../Assets/images/launch_screen.jpg')}
        resizeMode="contain"
        style={{height: 180, width: 180}}
      />
      <View style={{alignItems: 'center'}}>
        <Text style={styles.label}>Reset Password Here!</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Old Password"
          placeholderTextColor={'black'}
          value={oldPassword}
          onChangeText={setOldPassword}
          secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.visibilityIcon}>
          <Icon
            name={isConfirmPasswordVisible ? 'visibility-off' : 'visibility'}
            type="material"
            color={'black'}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="New Password"
          placeholderTextColor={'black'}
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.visibilityIcon}>
          <Icon
            name={isConfirmPasswordVisible ? 'visibility-off' : 'visibility'}
            type="material"
            color={'black'}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Confirm Password"
          placeholderTextColor={'black'}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.visibilityIcon}>
          <Icon
            name={isConfirmPasswordVisible ? 'visibility-off' : 'visibility'}
            type="material"
            color={'black'}
          />
        </TouchableOpacity>
      </View>
      <LinearGradient
        colors={['#EE5C25', '#000']} // Adjust the second color to a lighter shade of black
        locations={[0.1, 0.9]} // Adjust the gradient position as needed
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={{borderRadius: 50, alignSelf: 'flex-end', marginRight: 45}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleResetPassword(props.token)}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </LinearGradient>
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
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResetPasswordScreen);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: '100%',
  },
  label: {
    fontSize: 28,
    marginBottom: 20,
    color: 'black',
    fontWeight: 'bold',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 50,
    marginBottom: 20,
    width: width / 1.2,
    paddingHorizontal: 5,
  },
  textInput: {
    flex: 1,
    paddingVertical: 0,
    paddingHorizontal: 5,
    color: 'black',
  },
  visibilityIcon: {
    padding: 15,
  },
  button: {
    alignSelf: 'flex-end',
    padding: 10,
    borderRadius: 10,
    width: 100,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: '500',
  },
});
