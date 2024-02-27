import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ResetPasswordHeaderScreen from './ResetPasswordHeaderScreen';
const ResetPasswordScreen = (props) => {
  return (
    <View>
      <View>
        <ResetPasswordHeaderScreen navigation={props.navigation} />
      </View>
    </View>
  );
};

export default ResetPasswordScreen;

const styles = StyleSheet.create({});
