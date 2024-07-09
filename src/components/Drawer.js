import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {connect} from 'react-redux';
import * as userActions from '../redux/actions/user';
import {bindActionCreators} from 'redux';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Icon} from 'react-native-elements';

const {width, height} = Dimensions.get('screen');

const Drawer = (props) => {
  const closeDrawer = () => {
    props.onClose();
  };

  const handleLogout = () => {
    AsyncStorage.clear();
    props.navigation.navigate('Login');
  };
  const HomeFunction = () => {
    props.onClose();
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#ccc', '#fff']} // Adjust the second color to a lighter shade of black
        locations={[0.1, 0.9]} // Adjust the gradient position as needed
        start={{x: 1, y: 1}}
        end={{x: 1, y: 0}}>
        <View style={styles.drawer}>
          <View style={styles.header}>
            {/* Display user's profile image */}
            <Image
              source={require('../Assets/images/launch_screen.jpg')}
              style={styles.profileImage}
              resizeMode="contain"
            />
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#ccc',
                width: width / 1.5,
              }}></View>
          </View>
          <View style={styles.userInfo}>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                width: width / 1.7,
                padding: 10,
                borderRadius: 10,
              }}
              onPress={() => props.navigation.navigate('ProfileScreen')}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 16,
                  fontWeight: '500',
                }}>
                My Profile
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                width: width / 1.7,
                padding: 10,
                marginTop: 20,
                borderRadius: 10,
              }}
              onPress={() => HomeFunction()}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  letterSpacing: 1,
                  fontWeight: '500',
                }}>
                Home
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                width: width / 1.7,
                padding: 10,
                marginTop: 20,
                borderRadius: 10,
              }}
              onPress={() => props.navigation.navigate('ResetPasswordScreen')}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  letterSpacing: 1,
                  fontWeight: '500',
                }}>
                Reset Password
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity
              onPress={() => handleLogout()}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                type="material-community"
                name="logout"
                color={'black'}
                style={{
                  textAlign: 'center',
                  alignSelf: 'center',
                  // paddingVertical: 5,
                }}
                size={width * 0.07} // Adjust icon size based on screen width
              />
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleLogout()}>
                <Text style={styles.buttonText}>Logout</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
      <TouchableWithoutFeedback onPress={() => closeDrawer()}>
        <View style={styles.closeDrawer}></View>
      </TouchableWithoutFeedback>
      {/* {modalVisible && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.header}>
                <Text style={styles.modalHeading}>My Profile</Text>
                <TouchableOpacity
                  onPress={() => setModalVisible(false)}
                  style={styles.closeButton}>
                  <Icon name="close" type="material" color="black" size={24} />
                </TouchableOpacity>
              </View>
              <Text style={styles.modalText}>Name: {name}</Text>
              <Text style={styles.modalText}>Email: {email}</Text>
              <Text style={styles.modalText}>Mobile Number: {mobileNo}</Text>
              <Text style={styles.modalText}>Department: {department}</Text>
            </View>
          </View>
        </Modal>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    width: width,
    height: height,
    zIndex: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
  },
  drawer: {
    width: width / 1.5,
    height: height / 1,
    // backgroundColor: '#ccc',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  closeDrawer: {
    width: width / 0.5,
    height: height,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',

    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 40,
  },
  profileImage: {
    width: 150, // Set width of the profile image
    height: 150, // Set height of the profile image
    borderRadius: 20, // Make the image circular by setting borderRadius to half of the width/height
  },
  userInfo: {
    marginBottom: 30,
    alignItems: 'center',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userDepartment: {
    fontSize: 16,
    marginBottom: 5,
  },
  footer: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginLeft: 15,
    justifyContent: 'center',
    borderWidth: 1,
  },
  button: {
    // backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 5,
    // marginBottom: 10,
    textAlign: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 1,
  },
  closeButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  closeButtonText: {
    fontSize: 16,
    color: '#007BFF',
  },
  openButton: {
    fontSize: 16,
    color: 'blue',
    marginBottom: 20,
  },
  // modalContainer: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: 'rgba(0, 0, 0, 0.5)',
  // },
  // modalContent: {
  //   backgroundColor: '#fff',
  //   height: height / 2.2,
  //   width: width / 1.4,
  //   padding: 20,
  //   borderRadius: 10,
  //   elevation: 5,
  // },
  // header: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  // },
  // modalHeading: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   marginBottom: 10,
  //   color: 'blue',
  // },
  // modalText: {
  //   fontSize: 16,
  //   marginBottom: 10,
  //   color: 'black',
  // },
  // closeButton: {
  //   padding: 5,
  // },
});

const mapStateToProps = state => ({
  userData: state.userData,
});
const ActionCreators = Object.assign({}, userActions);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
