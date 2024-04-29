import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Icon} from 'react-native-elements';
import {Image} from 'react-native';

const AdminHeaderScreen = ({navigation, toggleModalVisibility}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon
            name="arrow-left"
            type="material-community"
            size={32}
            color={'white'}
            iconStyle={{
              marginLeft: 20,
              borderWidth: 1,
              borderColor: 'white',
              padding: 5,
              borderRadius: 10,
            }}
            activeOpacity={0.3}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Approve Request</Text>
        <TouchableOpacity onPress={toggleModalVisibility}>
          <Image
            source={require('../Assets/images/arrow-down.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AdminHeaderScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    backgroundColor: 'black',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 28,
    height: 18,
    marginLeft: 10,
  },
  icon1: {
    width: 50,
    height: 35,
    marginLeft: 10,
  },
  title: {
    marginLeft: 35,
    fontSize: 20,
    letterSpacing: 4,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 30,
  },
  modalContainer: {
    position: 'absolute',
    top: 70,
    right: 0,
    zIndex: 999,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    // borderWidth: 1,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 15,
  },
  modalButton: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  modalButtonText: {
    fontSize: 17,
    color: 'black',
  },
});
