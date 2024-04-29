import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Alert,
  BackHandler,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {connect} from 'react-redux';
import * as userActions from '../redux/actions/user';
import {bindActionCreators} from 'redux';
import {Icon} from 'react-native-elements';
import {Image} from 'react-native';
import axios from 'axios';
import {TextInput} from 'react-native';
import API_BASE_URL from '../../config';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomAlert from './CustomAlert';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const ProfileScreen = props => {
  const navigation = useNavigation();
  const [name, setName] = useState(props.userData?.user?.name);
  const [email, setEmail] = useState(props.userData?.user?.email);
  const [mobileNo, setMobileNo] = useState(
    props.userData?.user?.mobileNo.toString(),
  );
  const [department, setDepartment] = useState(
    props.userData?.user?.department,
  );
  const [errorMessage, setErrorMessage] = useState(''); // State to manage error message
  const [showAlert, setShowAlert] = useState(false);
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

  const updateProfile = async () => {
    const updateData = {name, mobileNo, email};
    try {
      const response = await axios.post(
        `${API_BASE_URL}/nodeapp/profile/update`,
        updateData,
      );
      if (response.data.status === 'success') {
        setErrorMessage('Profile updated successfully');
        setShowAlert(true);
      }
    } catch (error) {
      setErrorMessage('Failed to update profile');
      setShowAlert(true);
    }
  };

  return (
    <View style={styles.container}>
      <CustomAlert
        visible={showAlert}
        message={errorMessage}
        onClose={() => setShowAlert(false)}
        type={
          errorMessage.startsWith('Profile updated successfully')
            ? 'success'
            : 'error'
        }
      />
      <LinearGradient
        colors={['#fff', '#fff']}
        locations={[0.1, 0.9]}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}>
        <View style={{flex: 1, alignItems: 'center', marginTop: 30}}>
          <Image
            source={require('../Assets/images/launch_screen.jpg')}
            resizeMode="contain"
            style={{width: 180, height: 180}}
          />
        </View>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.header}>
              <Text style={styles.modalHeading}>My Profile</Text>
            </View>
            <Text style={styles.modalText}>Name:</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={text => setName(text)}
            />
            <Text style={styles.modalText}>Department:</Text>
            <TextInput
              editable={false}
              style={styles.input}
              value={department}
              onChangeText={text => setDepartment(text)}
            />
            <Text style={styles.modalText}>Email:</Text>
            <TextInput
              editable={false}
              style={styles.input}
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <Text style={styles.modalText}>Mobile Number:</Text>
            <TextInput
              style={styles.input}
              value={mobileNo}
              onChangeText={text => setMobileNo(text)}
              keyboardType="number-pad"
            />
            <View style={{marginTop: 20}}>
              <LinearGradient
                colors={['#EE5C25', '#000']}
                locations={[0.1, 0.9]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={{borderRadius: 50}}>
                <TouchableOpacity
                  style={styles.updateButton}
                  onPress={updateProfile}>
                  <Text style={styles.updateButtonText}>Update Profile</Text>
                </TouchableOpacity>
              </LinearGradient>
              <View
                style={{
                  flexDirection: 'row',
                  gap: 5,
                  marginTop: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'black'}}>
                  Don't want to edit Profile?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                  <Text style={{color: '#EE5C25', fontWeight: '500'}}>
                    Home
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    height: height,
    width: width,
    justifyContent: 'flex-end', // Position the modal at the bottom
    alignItems: 'flex-start', // Align content to the right
  },
  modalContent: {
    height: height / 1.5,
    width: width / 1,
    padding: 20,
    borderTopLeftRadius: 20, // Rounded top-left corner
    borderTopRightRadius: 20, // Rounded top-left corner
    elevation: 5,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  header: {
    marginTop: 10,
  },
  modalHeading: {
    fontSize: 22,
    fontWeight: '500',
    marginBottom: 10,
    color: 'black',
    alignSelf: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
    color: 'black',
    fontWeight: '500',
  },
  closeButton: {
    padding: 5,
  },
  input: {
    fontSize: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 50,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'black',
  },
  updateButton: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  updateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
