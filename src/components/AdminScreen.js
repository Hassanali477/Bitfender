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
      <AdminHeaderScreen navigation={props.navigation}/>
      <FlatList
        data={pendingRequests}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Text>Product Name: {item.ProductName}</Text>
            <Text>Client Name: {item.ClientName}</Text>
            <Text>Number of Users: {item.NumberOfUsers}</Text>
            <Text>Contact No: {item.ContactNo}</Text>
            <Text>Product Price: {item.ProductPrice}</Text>
            <Text>Status: {item.status}</Text>
            <Text>RejectedBy: {item.rejectedBy}</Text>
            <Text>ApprovedBy: {item.approvedBy}</Text>
            <Text>Date: {item.dateNow}</Text>
            <Text>Time: {item.time}</Text>

            {/* <View style={styles.buttonContainer}>
              <Button
                title="Approve"
                onPress={() => approveRequest(item._id)}
              />
              <Button title="Reject" onPress={() => rejectRequest(item._id)} />
            </View> */}
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
    // padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
  marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
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
export default connect(mapStateToProps, mapDispatchToProps)(AdminScreen);
