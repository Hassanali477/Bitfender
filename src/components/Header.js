// Header.js

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../redux/actions/user';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width} = Dimensions.get('window');

const Header = props => {
  const navigation = useNavigation();

  const openDrawer = () => {
    props.toggleDrawer(); // Toggle the drawer state
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Hamburger Menu */}
        <TouchableOpacity onPress={openDrawer} style={styles.iconContainer}>
          <Icon
            type="material-community"
            name="menu"
            color={'white'}
            size={width * 0.08} // Adjust icon size based on screen width
          />
        </TouchableOpacity>
        {/* Header Text */}
        <Text style={styles.headerText}>HOME BIT PORTAL</Text>
        {/* Logout Icon */}
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  userData: state.userData,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(userActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EE5C25',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    height: width * 0.2, // Adjust height based on screen width
  },
  headerText: {
    fontSize: width * 0.055, // Adjust font size based on screen width
    fontWeight: 'bold',
    letterSpacing: width * 0.01, // Adjust letter spacing based on screen width
    color: 'white',
    marginLeft: 40,
  },
  iconContainer: {
    padding: width * 0.02, // Adjust padding based on screen width
  },
});
