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
import {GlassView} from '@metafic-co/glassmorphism';

const CustomCard = ({navigation}) => {
  return (
    <>
      <View style={styles.cardcontainer}>
        <TouchableOpacity onPress={() => navigation.navigate('CreateScreen')}>
          {/* <GlassView
            glassStyle={{
              backgroundColor: 'rgba(52, 52, 52, 0.4)',
              opacity: 0.4,
            }}> */}
          <View style={[styles.card1, {width: 390, marginRight: 10}]}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
                letterSpacing: 1,
              }}>
              Customer Registration
            </Text>
          </View>
          {/* </GlassView> */}
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
        <TouchableOpacity onPress={() => navigation.navigate('PendingRequest')}>
          {/* <GlassView
            glassStyle={{
              backgroundColor: 'rgba(52, 52, 52, 0.4)',
              opacity: 0.4,
            }}> */}
          <View style={styles.card1}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
                letterSpacing: 1,
              }}>
              Pending Request
            </Text>
          </View>
          {/* </GlassView> */}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Admin')}>
          <View style={styles.card1}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
                letterSpacing: 1,
              }}>
              Approve Request
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
        <TouchableOpacity onPress={() => navigation.navigate('RejectScreen')}>
          <View style={styles.card1}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
                letterSpacing: 1,
              }}>
              Reject Request
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  cardcontainer: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
