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
} from 'react-native';
import React, {useState} from 'react';
import ResetPasswordHeaderScreen from './ResetPasswordHeaderScreen';
import axios from 'axios';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const ResetPasswordScreen = props => {
  const [newPassword, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = async token => {
    try {
      // Add validation for password and confirmPassword
      if (newPassword !== confirmPassword) {
        Alert.alert('Error', 'Passwords do not match.');
        return;
      }
      const response = await axios.post(
        `http://192.168.1.115:3000/resetPassword/:token${token}`,
        {
          token: token,
          newPassword: newPassword,
          confirmPassword: confirmPassword,
        },
      );
      console.log(
        token,
        newPassword,
        confirmPassword,
        'checking this everything',
      );

      // Proceed with password reset logic based on the response
      if (response.data.success) {
        Alert.alert('Password reset successfully', [
          {
            text: 'OK',
            onPress: () => props.navigation.navigate('Login'),
          },
        ]);
      } else {
        Alert.alert('Error', 'Invalid or expired token');
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <>
      <ScrollView>
        <ImageBackground
          style={{flex: 1, height: height, width: width}}
          source={require('../Assets/images/background.jpg')}>
          <View style={styles.container}>
            <Image
              source={require('../Assets/images/launch_screen.jpg')}
              resizeMode="contain"
              style={{height: 200, width: 200}}
            />
            <View style={{alignItems: 'center'}}>
              <Text style={styles.label}>Reset Password Here!</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="New Password"
              placeholderTextColor={'black'}
              value={newPassword}
              onChangeText={setPassword}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor={'black'}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleResetPassword(props.token)}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </>
  );
};

export default ResetPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 130,
    // justifyContent: 'center',
    alignItems: 'center',
    // width: '100%',
    // height: '60%',
  },
  label: {
    fontSize: 28,
    marginBottom: 40,
    color: 'black',
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 10,
    marginBottom: 20,
    color: 'black',
  },
  button: {
    backgroundColor: 'black',
    alignSelf: 'flex-end',
    marginRight: 40,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    width: 100,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    alignSelf: 'center',
  },
});
