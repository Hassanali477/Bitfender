import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
  ImageBackground,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import {Icon} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect} from 'react-redux';
import * as userActions from '../../redux/actions/user';
import {bindActionCreators} from 'redux';
import CheckBox from '@react-native-community/checkbox';
import {BackHandler} from 'react-native';
import API_BASE_URL from '../../../config';
import {useFocusEffect} from '@react-navigation/native';
import CustomAlert from '../../components/CustomAlert';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // State to manage error message
  const [showAlert, setShowAlert] = useState(false);
  // const toggleRememberMe = () => {
  //   console.log('Remember me checkbox pressed');
  //   setRememberMe(!rememberMe);
  // };
  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      // Alert.alert('Error', 'Please fill in all fields');
      setErrorMessage('Please fill in all fields');
      setShowAlert(true);
      return;
    }
    if (password.length < 8) {
      // Alert.alert('Error', 'Password must be at least 8 characters');
      setErrorMessage('Password must be at least 8 characters');
      setShowAlert(true);
      return;
    }
    try {
      const userData = {
        email: email,
        password: password,
      };
      setIsLoading(true);
      const response = await axios.post(
        `${API_BASE_URL}/nodeapp/login`,
        userData,
      );
      setIsLoading(false);

      if (response.status === 200) {
        console.log('Login successful', response.data);
        const token = response.data.token;
        const user = response.data.userData;
        if (user && user.name) {
          var {actions} = props;
          AsyncStorage.setItem(
            '@usercredentials',
            JSON.stringify({
              email: email,
              password: password,
            }),
          );
          actions.userToken(token);
          actions.user(user);
          props.navigation.navigate('Home');
        } else {
          console.error('Login failed: User data incomplete');
          // Alert.alert('Error', 'Invalid user data received');
          setErrorMessage('Invalid user data received');
          setShowAlert(true);
          setIsLoading(false);
        }
      } else {
        console.error(
          'Login failed: Unexpected response status',
          response.status,
        );
        // Alert.alert('Error', 'Unexpected response from server');
        setErrorMessage('Unexpected response from server');
        setShowAlert(true);
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Login failed', error);
      // Alert.alert('Incorrect password', 'Incorrect email and password.');
      setErrorMessage('Incorrect email and password.');
      setShowAlert(true);
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  useEffect(() => {
    // Effect to handle back button press
    const backAction = () => {
      return true; // Prevent default behavior
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove(); // Cleanup the event listener
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <CustomAlert
        visible={showAlert}
        message={errorMessage}
        onClose={() => setShowAlert(false)}
        type={errorMessage.startsWith('Success') ? 'success' : 'error'}
      />
      <View style={styles.background}>
        <Image
          source={require('../../Assets/images/launch_screen.jpg')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            style={styles.textInput}
            placeholderTextColor={'black'}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Password"
            style={styles.textInput}
            placeholderTextColor={'black'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!isPasswordVisible}
          />
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.visibilityIcon}>
            <Icon
              name={isPasswordVisible ? 'visibility-off' : 'visibility'}
              type="material"
              color={'black'}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.forgetPasswordContainer}>
          <View style={styles.checkboxContainer}>
            {/* <CheckBox
              checked={rememberMe}
              checkedIcon={'dot-circle-o'}
              uncheckedColor="circle-o"
              onPress={toggleRememberMe}
              checkedColor="black"
              containerStyle={styles.checkbox}
            /> */}
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              style={styles.checkbox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <Text style={styles.checkboxText}>Remember me</Text>
          </View>
          <TouchableOpacity
            style={styles.forgetPassword}
            onPress={() => props.navigation.navigate('ForgetPassword')}>
            <Text style={styles.forgetText}>Forget password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={handleLogin}
          style={[
            styles.buttonContainer,
            {borderBottomWidth: 1, borderBottomColor: 'black'},
          ]}>
          <LinearGradient
            colors={['#EE5C25', '#000']} // Adjust the second color to a lighter shade of black
            locations={[0.1, 0.9]} // Adjust the gradient position as needed
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={[styles.button, {borderRadius: 50}]}>
            <Text style={[styles.buttonText, {color: 'white'}]}>Login</Text>
          </LinearGradient>
        </TouchableOpacity>
        <View style={styles.bottomContainer}>
          <Text style={styles.signUpText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
            <Text style={styles.createBtn}> Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
      {isLoading && (
        <ActivityIndicator
          style={styles.activityIndicator}
          color="#ccc"
          size={40}
        />
      )}
    </ScrollView>
  );
};

const mapStateToProps = state => ({
  userData: state.userData,
});

const ActionCreators = Object.assign({}, userActions);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  background: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    height: 180,
    width: 180,
    marginBottom: 10,
  },
  formContainer: {
    backgroundColor: '#f2f2f2',
    borderRadius: 15,
    padding: 20,
    marginBottom: 80,
  },
  inputLabel: {
    color: 'black',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
    marginBottom: 20,
  },
  textInput: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    color: 'black',
  },
  visibilityIcon: {
    padding: 15,
  },
  forgetPasswordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Align checkbox and text to the left
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
    marginRight: 12,
  },
  checkboxText: {
    color: 'black',
    fontWeight: '400',
  },

  forgetText: {
    color: '#EE5C25',
    fontWeight: '500',
    alignSelf: 'center',
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    marginTop: 10,
    marginLeft: 60,
    width: 200,
    justifyContent: 'center',
  },
  button: {
    borderRadius: 50,
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontWeight: 'bold',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 80, // Add margin to separate from the above content
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  signUpText: {
    // marginRight: 10,
    fontWeight: '400',
    color: 'black',
  },
  createBtn: {
    color: '#EE5C25',
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  activityIndicator: {
    alignSelf: 'center',
    marginTop: 20,
  },
});
