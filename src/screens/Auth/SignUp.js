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
} from 'react-native';
import axios from 'axios';
import {SelectList} from 'react-native-dropdown-select-list';
import CustomDropdown from '../../components/CustomList';
import {Icon} from 'react-native-elements';

// Inside your SignUp component render function

// import DropDownPicker from 'react-native-dropdown-picker';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const SignUp = (props, navigation) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [currentValue, setCurrentValue] = useState(null);
  const [name, setName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const data = [
    {key: '1', value: 'Admin'},
    {key: '2', value: 'Support'},
  ];

  const handleSubmit = async () => {
    try {
      const userData = {name, email, password, mobileNo, department};

      const response = await axios.post(
        'http://192.168.1.115:3000/register',
        userData,
      );
      if (response.status === 200) {
        props.navigation.navigate('Login');
        Alert.alert('Success', 'User registered successfully.');
        setName('');
        setEmail('');
        setMobileNo('');
        setDepartment('');
        setPassword('');
      } else {
        console.error(
          'Registration failed: Unexpected response status',
          response.status,
        );
        Alert.alert(
          'Error',
          'Failed to register user. Please try again later.',
        );
      }
    } catch (error) {
      console.error('Registration failed:', error.response);
      Alert.alert('Error', 'Failed to register user. Please try again later.');
    }
  };

  // const sendVerificationEmail = async email => {
  //   try {
  //     const response = await axios.post(
  //       'http://192.168.1.103:3000/send-verification-email',
  //       {email},
  //     );
  //     if (response.status !== 200) {
  //       console.error('Failed to send verification email');
  //     }
  //   } catch (error) {
  //     console.error('Failed to send verification email:', error);
  //   }
  // };
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          alignSelf: 'flex-start',
          top: -50,
          left: 15,
          borderWidth: 1,
          borderRadius: 10,
        }}>
        <Icon
          type="material-community"
          name="arrow-left"
          size={42}
          onPress={() => {
            props.navigation.goBack();
          }}
        />
      </View>
      <Text style={styles.headText}>SIGN-UP</Text>
      <View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="person" type="material" color={'#fafad2'} size={26} />
          <TextInput
            placeholder="Name"
            placeholderTextColor={'white'}
            style={styles.textInput1}
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="mail" size={26} color={'#fafad2'} />
          <TextInput
            placeholder="Email"
            placeholderTextColor={'white'}
            style={styles.textInput1}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            marginRight: 10,
          }}>
          <Icon
            type="material-commuity"
            name="lock-open"
            color={'#fafad2'}
            size={28}
            style={{marginRight: 10}}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              flex: 1,
              marginTop: 20,
              borderRadius: 5,
              marginBottom: 22,
              // marginRight:10
            }}>
            <TextInput
              placeholder="Password"
              style={{flex: 1, color: 'white', marginLeft: 5}}
              placeholderTextColor={'white'}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!isPasswordVisible}
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Icon
                name={isPasswordVisible ? 'visibility-off' : 'visibility'}
                type="material"
                color={'#fafad2'}
                style={{marginRight: 10}}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="phone" size={26} color={'#fafad2'} />
          <TextInput
            placeholder="Mobile No"
            placeholderTextColor={'white'}
            style={styles.textInput1}
            value={mobileNo}
            onChangeText={setMobileNo}
            keyboardType="numeric"
            maxLength={11}
          />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            name="people"
            type="material-icons"
            size={26}
            color={'#fafad2'}
          />
          <CustomDropdown
            options={data}
            onSelect={val => {
              console.log(val);
              setDepartment(val);
            }}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
        <Text style={styles.button1}>Sign-up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EE5C25',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    height: height,
  },
  headText: {
    fontWeight: '700',
    fontSize: 30,
    letterSpacing: 1,
    color: 'black',
    marginBottom: 25,
    alignSelf: 'center',
    marginTop: -20,
    // marginLeft: 30,
  },
  textInput1: {
    borderColor: 'black',
    borderWidth: 1,
    width: 350,
    borderRadius: 5,
    padding: 10,
    margin: 10,
    fontWeight: '300',
    fontSize: 16,
  },
  buttonContainer: {
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 10,
    alignSelf: 'flex-end',
    width: 90,
    marginRight: 35,
    marginTop: 20,
  },
  button1: {
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: '500',
    color: 'white',
  },
  dropDownPicker: {
    width: 350,
    margin: 10,
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderRadius: 5,
  },
  dropDownContainer: {
    width: 350,
    marginTop: 1,
    alignItems: 'center',
    borderColor: 'white',
    backgroundColor: '#EE5C25',
  },
  dropDownText: {
    color: 'white',
    fontWeight: '600',
  },
});
