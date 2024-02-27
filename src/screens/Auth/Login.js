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
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import {Icon} from 'react-native-elements';

{
  /* {---------------Redux Imports------------} */
}
import {connect} from 'react-redux';
import * as userActions from '../../redux/actions/user';
import {bindActionCreators} from 'redux';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    try {
      const userData = {
        email: email,
        password: password,
      };

      setIsLoading(true);
      const response = await axios.post(
        'http://192.168.1.115:3000/login',
        userData,
      );
      setIsLoading(false);

      if (response.status === 200) {
        console.log('Login successful', response.data);
        const token = response.data.token;
        console.log(token, 'checking');
        const user = response.data.userData;
        console.log(user, 'user checking');
        if (user && user.name) {
          var {actions} = props;
          actions.userToken(token);
          console.log(token, 'token');
          actions.user(user);
          props.navigation.navigate('Home');
        } else {
          console.error('Login failed: User data incomplete');
          Alert.alert('Error', 'Invalid user data received');
        }
      } else {
        console.error(
          'Login failed: Unexpected response status',
          response.status,
        );
        Alert.alert('Error', 'Unexpected response from server');
      }
    } catch (error) {
      console.error('Login failed', error);
      Alert.alert('Incorrect password', 'Incorrect email and password.');
    }
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../../Assets/images/launch_screen.jpg')}
          style={{height: 150, width: 200, marginBottom: 10}}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.headText}>LOGIN</Text>
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
            color={'#fafad2'}
            size={28}
            iconStyle={{marginRight: 10}}
          />
          <TextInput
            placeholder="Email"
            style={styles.textInput1}
            placeholderTextColor={'white'}
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
      </View>
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginLeft: 30}}>
        <TouchableOpacity
          style={[
            styles.buttonContainer,
            {backgroundColor: '#EE5C25', borderWidth: 1, width: 160},
          ]}
          onPress={() => props.navigation.navigate('ForgetPassword')}>
          <Text style={[styles.button1, {fontWeight: '300'}]}>
            Forget passwrod ?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonContainer, {marginLeft: 10}]}
          onPress={handleLogin}>
          <Text style={styles.button1}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.text1}>
        <Text style={styles.text2}>New on A2Z BIT PORTAL?</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
          <Text style={styles.createBtn}>Create an account</Text>
        </TouchableOpacity>
      </View>
      {isLoading && (
        <ActivityIndicator
          style={styles.activityIndicator}
          color="#ccc"
          size={40}
        />
      )}
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
export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EE5C25',
    alignItems: 'center',
    justifyContent: 'center',
    height: height,
    width: width,
  },
  headText: {
    fontWeight: '700',
    fontSize: 30,
    letterSpacing: 1,
    color: 'black',
    marginBottom: 25,
    marginTop: 30,
  },
  textInput1: {
    borderColor: 'black',
    borderWidth: 1,
    width: 330,
    borderRadius: 5,
    padding: 10,
    // marginBottom: 25,
    fontWeight: '300',
    marginRight: 10,
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
    alignSelf: 'flex-end',
    width: 90,
    marginRight: 35,
  },
  button1: {
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: '700',
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
  activityIndicator: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: '50%',
  },
});
