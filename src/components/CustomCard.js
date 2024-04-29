import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const {width} = Dimensions.get('window');
const cardWidth = (width - 40) / 2; // Calculate card width based on screen width

const CustomCard = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, marginBottom: 20}}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
          <TouchableOpacity onPress={() => navigation.navigate('CreateScreen')}>
            <LinearGradient
              colors={['#EE5C25', '#000']}
              locations={[0.1, 0.9]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={[styles.card, styles.cardElevation]}>
              <ImageBackground
                source={require('../Assets/images/customer-background.png')}
                style={[styles.backgroundImage, {width: cardWidth}]}>
                <View style={styles.cardContent}>
                  <Image
                    source={require('../Assets/images/customer.png')}
                    style={{height: 45, width: 50, marginBottom: 15}}
                  />
                  <Text style={[styles.cardText, {color: 'white'}]}>
                    Customer Registration
                  </Text>
                </View>
              </ImageBackground>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('PendingRequest')}>
            <View style={[styles.card, styles.cardElevation]}>
              <Image
                source={require('../Assets/images/pending.png')}
                style={{height: 45, width: 50, marginBottom: 15}}
              />
              <Text style={styles.cardText}>Pending </Text>
              <Text style={styles.cardText}>Request</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
          <TouchableOpacity onPress={() => navigation.navigate('Admin')}>
            <View style={[styles.card, styles.cardElevation]}>
              <Image
                source={require('../Assets/images/001-correct.png')}
                style={{height: 45, width: 50, marginBottom: 15}}
              />
              <Text style={styles.cardText}>Approve</Text>
              <Text style={styles.cardText}>Request</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('RejectScreen')}>
            <View style={[styles.card, styles.cardElevation]}>
              <Image
                source={require('../Assets/images/incorrect.png')}
                style={{height: 45, width: 50, marginBottom: 15}}
              />
              <Text style={styles.cardText}>Reject</Text>
              <Text style={styles.cardText}>Request</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity>
        <Image
          source={require('../Assets/images/home.png')}
          style={{width: 35, height: 35, alignSelf: 'center', marginBottom: 20}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    height: 190,
    width: 190,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#ccc',
  },
  backgroundImage: {
    height: 190,
    width: 190,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center',
  },
  cardElevation: {
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.27,
    shadowRadius: 0.65,
  },
});
