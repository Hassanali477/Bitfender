import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import HeaderCreate from './HeaderCreate';
{
  /* {---------------Redux Imports------------} */
}
import {connect} from 'react-redux';
import * as userActions from '../redux/actions/user';
import {bindActionCreators} from 'redux';

const CreateScreen = props => {
  var {
    userData: {user},
  } = props;

  const [productName, setProductName] = useState('');
  const [clientName, setClientName] = useState('');
  const [numberOfUsers, setNumberOfUsers] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const createHandleSubmit = async () => {
    const userDataCreate = {
      ProductName: productName,
      ClientName: clientName,
      NumberOfUsers: numberOfUsers,
      ContactNo: contactNo,
      ProductPrice: productPrice,
      UserEmail: user.email,
    };

    try {
      if (
        !productName ||
        !clientName ||
        !numberOfUsers ||
        !contactNo ||
        !productPrice
      ) {
        Alert.alert('Error', 'All fields are required');
        return;
      }

      if (isNaN(numberOfUsers) || isNaN(contactNo) || isNaN(productPrice)) {
        Alert.alert(
          'Error',
          'Number of users, contact number, and product price must be numeric',
        );
        return;
      }
      var {
        userData: {token},
      } = props;
      console.log(token, 'hello');
      setIsLoading(true);
      const responseUser = await axios.post(
        `http://192.168.1.115:3000/CreateUserData`,
        userDataCreate,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          timeout: 2000,
        },
      );
      setIsLoading(false);
      Alert.alert('Success', 'Data sent successfully');
      console.log(responseUser.data, 'Data successfully sent');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Check all the fields');
    }
  };

  return (
    <>
      <HeaderCreate navigation={props.navigation} />
      <ScrollView contentContainerStyle={{paddingBottom: 20}}>
        <View style={styles.container}>
          <View style={{marginBottom: 20}}>
            <Text
              style={{
                color: 'black',
                fontSize: 26,
                fontWeight: '800',
                letterSpacing: 2.5,
                marginTop: 50,
              }}>
              WELCOME TO ORDER !
            </Text>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Product Name"
            placeholderTextColor={'black'}
            value={productName}
            onChangeText={setProductName}
          />
          <TextInput
            style={styles.input}
            placeholder="Client Name"
            placeholderTextColor={'black'}
            value={clientName}
            onChangeText={setClientName}
          />
          <TextInput
            style={styles.input}
            placeholder="Number of Users"
            placeholderTextColor={'black'}
            value={numberOfUsers}
            onChangeText={setNumberOfUsers}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Contact Number"
            placeholderTextColor={'black'}
            value={contactNo}
            onChangeText={setContactNo}
            keyboardType="numeric"
            maxLength={11}
          />
          <TextInput
            style={styles.input}
            placeholder="Product Price"
            placeholderTextColor={'black'}
            value={productPrice}
            onChangeText={setProductPrice}
            keyboardType="numeric"
          />
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => createHandleSubmit()}>
              <Text style={styles.text1}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => props.navigation.navigate('PendingRequest')}>
              <Text style={styles.text1}>Pending Request</Text>
            </TouchableOpacity>
          </View>
          {isLoading && (
            <ActivityIndicator
              style={styles.activityindicator}
              color="#ccc"
              size={40}
            />
          )}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3d3d3',
    paddingHorizontal: 15,
  },
  input: {
    width: '100%',
    height: 60,
    marginHorizontal: 10,
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 15,
    paddingHorizontal: 10,
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 15,
  },
  btnContainer: {
    alignSelf: 'center',
    width: '100%',
  },
  submitButton: {
    marginTop: 20,
    backgroundColor: 'black',
    borderRadius: 15,
    height: 70,
    justifyContent: 'center',
  },
  text1: {
    alignSelf: 'center',
    padding: 10,
    fontSize: 20,
    fontWeight: '800',
    color: 'white',
    letterSpacing: 2.5,
  },
  activityIndicator: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: '50%',
  },
});

{
  /* {---------------redux State ------------} */
}
const mapStateToProps = state => ({
  userData: state.userData,
});
{
  /* {---------------redux Actions ------------} */
}
const ActionCreators = Object.assign({}, userActions);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(CreateScreen);
