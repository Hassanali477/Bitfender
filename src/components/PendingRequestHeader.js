import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';

const PendingRequestHeader = props => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          // flex:1,
          alignItems: 'center',
          backgroundColor: 'black',
          // justifyContent:'center'
        }}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
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
            marginLeft: 45,
            fontSize: 22,
            letterSpacing: 4,
            fontWeight: 'bold',
            color: 'white',
            marginRight: 30,
          }}>
          Pending Request
        </Text>
      </View>
    </View>
  );
};

export default PendingRequestHeader;

const styles = StyleSheet.create({
  container: {
    // flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    // justifyContent: 'center',
    backgroundColor: 'black',
    width: '100%',
  },
});
