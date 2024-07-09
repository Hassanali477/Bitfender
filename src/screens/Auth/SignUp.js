import React, {useEffect, useState} from 'react';
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
  ScrollView,
  BackHandler,
} from 'react-native';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import {SelectList} from 'react-native-dropdown-select-list';
import CustomDropdown from '../../components/CustomList';
import {Icon} from 'react-native-elements';
import API_BASE_URL from '../../../config';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import CustomAlert from '../../components/CustomAlert';

// Inside your SignUp component render function

// import DropDownPicker from 'react-native-dropdown-picker';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const SignUp = (props, navigation) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [currentValue, setCurrentValue] = useState(null);
  const [name, setName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [department, setDepartment] = useState('Support');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // State to manage error message
  const [showAlert, setShowAlert] = useState(false);
  const data = [
    {key: '1', value: 'Admin'},
    {key: '2', value: 'Support'},
  ];

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim() || !password.trim() || !mobileNo.trim()) {
      // Alert.alert('Error', 'Please fill in all fields');
      setErrorMessage('Please fill in all fields');
      setShowAlert(true);
      return;
    }
    if (name.trim() === '') {
      // Alert.alert('Error', 'Please enter your name.');
      setErrorMessage('Please enter your name.');
      setShowAlert(true);
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      // Alert.alert('Error', 'Please enter a valid email address.');
      setErrorMessage('Please enter a valid email address.');
      setShowAlert(true);
      return;
    }
    if (password !== confirmPassword) {
      // Alert.alert('Error', 'Password and Confirm Password do not match.');
      setErrorMessage('Password and Confirm Password do not match.');
      setShowAlert(true);
      return;
    }
    if (password.length < 8) {
      // Alert.alert('Error', 'Password must be at least 8 characters long.');
      setErrorMessage('Password must be at least 8 characters long.');
      setShowAlert(true);
      return;
    }
    if (mobileNo.length === '') {
      // Alert.alert('Error', 'Please enter a valid 11-digit mobile number.');
      setErrorMessage('Please enter a mobile number.');
      setShowAlert(true);
      return;
    }

    try {
      const userData = {name, email, password, mobileNo, department};
      const response = await axios.post(
        `${API_BASE_URL}/nodeapp/register`,
        userData,
      );

      if (response.status === 200) {
        if (
          response.data.status === 'error' &&
          response.data.message === 'User already exists'
        ) {
          setErrorMessage(
            'User with this email already exists. Please try another email.',
          );
          setShowAlert(true);
        } else {
          props.navigation.navigate('Login');
          setErrorMessage('User registered successfully.');
          setShowAlert(true);
          setName('');
          setEmail('');
          setMobileNo('');
          setDepartment('');
          setPassword('');
        }
      } else {
        // Handle unexpected response status
        console.error(
          'Registration failed: Unexpected response status',
          response.status,
        );
        // Alert.alert(
        //   'Error',
        //   'Failed to register user. Please try again later.',
        // );
        setErrorMessage('Failed to register user. Please try again later.');
        setShowAlert(true);
      }
    } catch (error) {
      console.error('Registration failed:', error.response.data.message);
      // Alert.alert('Error', 'Failed to register user. Please try again later.');
      setErrorMessage('Failed to register user. Please try again later.');
      setShowAlert(true);
    }
  };
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
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
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.background}>
        <Image
          source={require('../../Assets/images/launch_screen.jpg')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.formContainer}>
        <CustomAlert
          visible={showAlert}
          message={errorMessage}
          onClose={() => setShowAlert(false)}
          type={
            errorMessage.startsWith('User registered successfull')
              ? 'success'
              : 'error'
          }
        />
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Name"
            style={styles.textInput}
            placeholderTextColor={'black'}
            value={name}
            onChangeText={setName}
          />
        </View>
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
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Confirm Password"
            style={styles.textInput}
            placeholderTextColor={'black'}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!isConfirmPasswordVisible}
          />
          <TouchableOpacity
            onPress={toggleConfirmPasswordVisibility}
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
            placeholder="Mobile No"
            style={styles.textInput}
            placeholderTextColor={'black'}
            value={mobileNo}
            onChangeText={setMobileNo}
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity onPress={handleSubmit} style={styles.buttonContainer}>
          <LinearGradient
            colors={['#EE5C25', '#000']} // Adjust the second color to a lighter shade of black
            locations={[0.1, 0.9]} // Adjust the gradient position as needed
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={[styles.button, {borderRadius: 50}]}>
            <Text style={[styles.buttonText, {color: 'white'}]}>Sign Up</Text>
          </LinearGradient>
        </TouchableOpacity>
        <View style={styles.bottomContainer}>
          <Text style={styles.signUpText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
            <Text style={styles.createBtn}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

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
    paddingVertical: 12,
    paddingHorizontal: 15,
    color: 'black',
  },
  visibilityIcon: {
    padding: 15,
  },
  buttonContainer: {
    marginTop: 10,
    width: '100%',
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
    marginTop: 20,
  },
  signUpText: {
    fontWeight: '400',
    color: 'black',
  },
  createBtn: {
    color: '#EE5C25',
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
});
