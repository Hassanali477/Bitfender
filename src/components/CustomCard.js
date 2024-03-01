import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {Icon} from 'react-native-elements';

const CustomCard = ({navigation}) => {
  return (
    <>
      <View style={styles.cardcontainer}>
        <TouchableOpacity onPress={() => navigation.navigate('CreateScreen')}>
          <View style={[styles.card1, {width: 390}]}>
            <View>
              <Text style={{color:'white',fontSize:20,fontWeight:'600',letterSpacing:2.5}}>Create Request</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
        <TouchableOpacity onPress={() => navigation.navigate('PendingRequest')}>
          <View style={styles.card1}>
            <Text style={{color: 'white',fontSize:20,fontWeight:'600',letterSpacing:1.3}}>Pending Request</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Admin')}>
          <View style={styles.card1}>
            <Text style={{color: 'white',fontSize:20,fontWeight:'600',letterSpacing:1.3}}>Approve Request</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
      <TouchableOpacity onPress={() => navigation.navigate('RejectScreen')}>
          <View style={styles.card1}>
            <Text style={{color: 'white',fontSize:20,fontWeight:'600',letterSpacing:1.3}}>Reject Request</Text>
          </View>
        </TouchableOpacity>
        </View>
    </>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  cardcontainer: {
    // alignItems: 'center',
    // margin: 10,
    marginTop: 30,
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
  card1: {
    height: 180,
    width: 190,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    marginLeft: 10,
  },
});
