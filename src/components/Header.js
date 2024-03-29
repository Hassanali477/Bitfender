import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../redux/actions/user';
import {useNavigation} from '@react-navigation/native'; // Import useNavigation hook
import AsyncStorage from '@react-native-async-storage/async-storage';

const Header = props => {
  const navigation = useNavigation(); // Initialize useNavigation hook

  const handleLogout = () => {
    AsyncStorage.clear();
    props.actions.user(null)
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>HOME BIT PORTAL</Text>
        <TouchableOpacity onPress={handleLogout}>
          <View style={styles.iconContainer}>
            <Icon
              type="material-community"
              name="logout"
              color={'white'}
              size={30}
              style={{marginLeft: 25}}
            />
          </View>
        </TouchableOpacity>
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
    // justifyContent: 'space-between',
    height: 75,
    backgroundColor: 'black',
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 5,
    color: 'white',
    textAlign: 'center',
    marginLeft: 60,
  },
  iconContainer: {
    padding: 10,
  },
});
