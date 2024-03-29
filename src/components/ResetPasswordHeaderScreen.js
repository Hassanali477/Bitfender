import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';

const ResetPasswordHeaderScreen = props => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'black',
          height:70,
        }}>
        <TouchableOpacity onPress={() => props.navigation.navigate('ForgetPassword')}>
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
        <Text
          style={{
            marginLeft: 40,
            fontSize: 22,
            letterSpacing: 4,
            fontWeight: 'bold',
            color: 'white',
            marginRight: 30,
          }}>
          Reset Password
        </Text>
      </View>
    </View>
  );
};

export default ResetPasswordHeaderScreen;

const styles = StyleSheet.create({

});
