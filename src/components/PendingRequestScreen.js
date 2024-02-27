import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import PendingRequestHeader from './PendingRequestHeader';

{
  /* {---------------Redux Imports------------} */
}
import {connect} from 'react-redux';
import * as userActions from '../redux/actions/user';
import {bindActionCreators} from 'redux';

const PendingRequestScreen = props => {
  const [pendingRequests, setPendingRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {navigation} = props;
  var {
    userData: {
      token,
      user: {department, email},
    },
  } = props;
  console.log(props.user, 'checking user')
  useEffect(() => {
    const fetchPendingRequests = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `http://192.168.1.115:3000/pendingRequests`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setIsLoading(false);
        setPendingRequests(response.data);
      } catch (error) {
        console.error('Error:', error);
        // Handle error
      }
    };
    fetchPendingRequests();
  }, []);
  const approveRequest = async item => {
    console.log(item, 'Checking items');
    try {
      const response = await axios.post(
        `http://192.168.1.115:3000/approveRequest/${item._id}`,
        {
          email: email,
          ProductName: item.ProductName,
          ClientName: item.ClientName,
          NumberOfUsers: item.NumberOfUsers,
          ContactNo: item.ContactNo,
          ProductPrice: item.ProductPrice,
        },
      );
      const {adminEmail} = response.data;
      console.log(response, 'dsadasd'); // Extract admin email from the response

      // Navigate to the ApproveScreen and pass the approved request data and admin email as parameters
      navigation.navigate('Admin', {
        approvedRequestData: pendingRequests.find(item => item._id === id),
        adminEmail: adminEmail,
      });
    } catch (error) {
      console.error('Error:', error.response.data.message);
    }
  };

  const rejectRequest = async item => {
    try {
      const response = await axios.post(
        `http://192.168.1.115:3000/rejectRequest/${item._id}`,
        {
          email: email,
          ProductName: item.ProductName,
          ClientName: item.ClientName,
          NumberOfUsers: item.NumberOfUsers,
          ContactNo: item.ContactNo,
          ProductPrice: item.ProductPrice,
        },
      );
      const {adminEmail} = response.data; // Extract admin email from the response
      // console.log(adminEmail, 'checking email');
      // Navigate to the RejectScreen and pass the rejected request data and admin email as parameters
      navigation.navigate('RejectScreen', {
        rejectedRequestsData: pendingRequests.find(
          item1 => item1._id === item._id,
        ),
        adminEmail: adminEmail,
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <View style={styles.flatlistContainer}>
        <PendingRequestHeader navigation={props.navigation} />
        <FlatList
          data={pendingRequests}
          contentContainerStyle={{paddingBottom: '20%'}}
          renderItem={({item}) => (
            <View style={styles.card}>
              <Text>Product Name: {item.ProductName}</Text>
              <Text>Client Name: {item.ClientName}</Text>
              <Text>Number of Users: {item.NumberOfUsers}</Text>
              <Text>Contact No: {item.ContactNo}</Text>
              <Text>Product Price: {item.ProductPrice}</Text>
              {/* <Text>User Email: {item.UserEmail}</Text> */}
              <Text>Date Created: {item.CreatedAt}</Text>
              <Text>Total Price: {item.TotalPrice}</Text>

              {console.log(department, 'sdads')}
              {department == 'Admin' && (
                <View style={styles.buttonContainer}>
                  <Button
                    title="Approve"
                    onPress={() => approveRequest(item)}
                  />
                  <Button title="Reject" onPress={() => rejectRequest(item)} />
                </View>
              )}
            </View>
          )}
          keyExtractor={item => item._id}
          // keyExtractor={(item, index) => index.toString()}
        />
        {isLoading && (
          <ActivityIndicator
            style={styles.activityIndicator}
            color="#ccc"
            size={40}
          />
        )}
      </View>
    </>
  );
};

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
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PendingRequestScreen);

const styles = StyleSheet.create({
  flatlastSubContainer: {
    // flex: 1,
    width: '100%',
    backgroundColor: '#ccc',
  },
  card: {
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 20,
    margin: 10,
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
