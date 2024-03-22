import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import PendingRequestHeader from './PendingRequestHeader';
import {connect} from 'react-redux';
import * as userActions from '../redux/actions/user';
import {bindActionCreators} from 'redux';
import CustomButton from './CustomButton';

const PendingRequestScreen = props => {
  const [pendingRequests, setPendingRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {navigation} = props;
  const {
    userData: {
      token,
      user: {department, email},
    },
  } = props;

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
      }
    };
    fetchPendingRequests();
  }, []);

  const handleApprove = async item => {
    try {
      await axios.post(`http://192.168.1.115:3000/approveRequest/${item._id}`, {
        email: email,
        ProductName: item.ProductName,
        ClientName: item.ClientName,
        NumberOfUsers: item.NumberOfUsers,
        ContactNo: item.ContactNo,
        ProductPrice: item.ProductPrice,
      });

      // Remove the approved request from the pendingRequests array
      setPendingRequests(pendingRequests.filter(req => req._id !== item._id));

      // Navigate to the ApproveScreen and pass the approved request data
      navigation.navigate('Admin', {
        approvedRequestData: item,
      });
    } catch (error) {
      console.error('Error:', error.response.data.message);
    }
  };

  const handleReject = async item => {
    try {
      await axios.post(`http://192.168.1.115:3000/rejectRequest/${item._id}`, {
        email: email,
        ProductName: item.ProductName,
        ClientName: item.ClientName,
        NumberOfUsers: item.NumberOfUsers,
        ContactNo: item.ContactNo,
        ProductPrice: item.ProductPrice,
      });

      // Remove the rejected request from the pendingRequests array
      setPendingRequests(pendingRequests.filter(req => req._id !== item._id));

      // Navigate to the RejectScreen and pass the rejected request data
      navigation.navigate('RejectScreen', {
        rejectedRequestsData: item,
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <View style={styles.flatlistContainer}>
      <PendingRequestHeader navigation={props.navigation} />
      <FlatList
        data={pendingRequests}
        contentContainerStyle={styles.listContainer}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Text style={styles.text}>Product Name: {item.ProductName}</Text>
            <Text style={styles.text}>Client Name: {item.ClientName}</Text>
            <Text style={styles.text}>
              Number of Users: {item.NumberOfUsers}
            </Text>
            <Text style={styles.text}>Contact No: {item.ContactNo}</Text>
            <Text style={styles.text}>Product Price: {item.ProductPrice}</Text>
            <Text style={styles.text}>Date Created: {item.CreatedAt}</Text>
            <Text style={styles.text}>Total Price: {item.TotalPrice}</Text>
            {department == 'Admin' && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => handleApprove(item)}
            style={[styles.button, styles.approveBtn]}
          >
            <Text style={styles.buttonText}>Approve</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleReject(item)}
            style={[styles.button, styles.rejectBtn]}
          >
            <Text style={styles.buttonText}>Reject</Text>
          </TouchableOpacity>
        </View>
      )}
          </View>
        )}
        keyExtractor={item => item._id}
      />
      {isLoading && (
        <ActivityIndicator
          style={styles.activityIndicator}
          color="#ccc"
          size={40}
        />
      )}
    </View>
  );
};

const mapStateToProps = state => ({
  userData: state.userData,
});

const ActionCreators = Object.assign({}, userActions);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PendingRequestScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    marginTop: 10,
  },
  listContainer: {
    paddingBottom: '20%',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    // marginHorizontal: 10,
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  button: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
  },
  approveBtn: {
    backgroundColor: 'green',
  },
  rejectBtn: {
    backgroundColor: 'red',
  },
  activityIndicator: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: '50%',
  },
});
