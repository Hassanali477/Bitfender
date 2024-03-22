import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {Icon} from 'react-native-elements';

const HeaderCreate = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Status bar */}
      {/* <StatusBar backgroundColor="#EE5C25" barStyle="dark-content" /> */}

      {/* Custom header */}
      <View style={styles.header}>
        <View
          style={{
            alignSelf: 'flex-start',
            // position: 'absolute',
            top: 20,
            left: -30,
            borderWidth: 1,
            borderRadius: 10,
          }}>
          <Icon
            type="material-community"
            name="arrow-left"
            color={'white'}
            iconStyle={{borderWidth: 1, borderColor: 'white', borderRadius: 10,padding:5}}
            size={32}
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
        </View>
        <Text style={styles.headerText}>Create Your Order</Text>
      </View>
    </View>
  );
};
export default HeaderCreate;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EE5C25',
    // alignItems:'center'
    justifyContent:'center'
},
  header: {
    height: 80,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 4,
    color: 'white',
    marginRight: 30,
  },
});
