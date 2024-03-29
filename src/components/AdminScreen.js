// AdminScreen.js

import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  Alert,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';

{
  /* {---------------Redux Imports------------} */
}
import {connect} from 'react-redux';
import * as userActions from '../redux/actions/user';
import {bindActionCreators} from 'redux';
import AdminHeaderScreen from './AdminHeaderScreen';
const AdminScreen = props => {
  const [pendingRequests, setPendingRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  var {
    userData: {token, user},
  } = props;
  useEffect(() => {
    const fetchPendingRequests = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `http://192.168.1.115:3000/approvedrequest`,
        );
        setPendingRequests(response.data);
        setIsLoading(false);
        console.log(response.data, 'checking message');
      } catch (error) {
        setIsLoading(false);
        console.error('Error:', error);
      }
    };
    fetchPendingRequests();
  }, []);
  // const approveRequest = async id => {
  //   try {
  //     await axios.post(`http://192.168.1.115:3000/approveRequest/${id}`);
  //     // Update the pendingRequests state to remove the approved request
  //     setPendingRequests(pendingRequests.filter(item => item._id !== id));
  //     Alert.alert('Success', 'Order approved successfully');
  //   } catch (error) {
  //     console.error('Error:', error);
  //     // Handle error
  //   }
  // };

  // const rejectRequest = async id => {
  //   try {
  //     await axios.post(`http://192.168.1.115:3000/rejectRequest/${id}`);
  //     // Update the pendingRequests state to remove the rejected request
  //     setPendingRequests(pendingRequests.filter(item => item._id !== id));
  //     Alert.alert('Success', 'Order rejected successfully');
  //   } catch (error) {
  //     console.error('Error:', error);
  //     // Handle error
  //   }
  // };

  return (
    <View style={styles.container}>
      <AdminHeaderScreen navigation={props.navigation} />
      <FlatList
        data={pendingRequests}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Text style={styles.text}>Company Name: {item.CompanyName}</Text>
            <Text style={styles.text}>
              Company Address: {item.CompanyAddress}
            </Text>
            <Text style={styles.text}>
              Contact Person: {item.ContactPerson}
            </Text>
            <Text style={styles.text}>Contact No: {item.ContactNo}</Text>
            <Text style={styles.text}>Product Name: {item.ProductName}</Text>
            <Text style={styles.text}>Client Email: {item.Email}</Text>
            <Text style={styles.text}>Total License: {item.TotalLicense}</Text>
            <Text style={styles.text}>Total Price: {item.TotalPrice}</Text>
            <Text style={styles.text}>
              Account Manager name: {item.AccountManagerName}
            </Text>
            <Text style={styles.text}>
              Account Manager email: {item.UserEmail}
            </Text>
            <Text style={styles.text}>Status: {item.status}</Text>
            <Text style={styles.text}>Rejected By: {item.rejectedBy}</Text>
            <Text style={styles.text}>Approved By: {item.approvedBy}</Text>
            <Text style={styles.text}>Date: {item.dateNow}</Text>
            <Text style={styles.text}>Time: {item.time}</Text>
            <View style={styles.expirtyDateContainer}>
              {item.Message !== '' && (
                <Text style={styles.expirtyDate}>{item.Message}</Text>
              )}
            </View>
          </View>
        )}
        keyExtractor={item => item._id}
      />

      {isLoading && (
        <ActivityIndicator
          style={styles.activityIndicator}
          size={40}
          color="#ccc"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  flatListContainer: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    margin: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  activityIndicator: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: '50%',
  },
  expirtyDateContainer:{
    width:'100%',
    height: 40,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:15,
    borderRadius:10
  },
  expirtyDate: {
    fontSize: 16,
    color: 'white',
    marginTop: 5,
    marginBottom: 5,
    fontWeight: 'bold',
    backgroundColor: 'black',
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
export default connect(mapStateToProps, mapDispatchToProps)(AdminScreen);
