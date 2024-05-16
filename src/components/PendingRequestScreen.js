import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  ActivityIndicator,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import axios from 'axios';
import PendingRequestHeader from './PendingRequestHeader';
import {connect} from 'react-redux';
import * as userActions from '../redux/actions/user';
import {bindActionCreators} from 'redux';
import LinearGradient from 'react-native-linear-gradient';
import API_BASE_URL from '../../config';
import { useNavigation } from '@react-navigation/native';

const PendingRequestScreen = props => {

  // const navigation = useNavigation();
  useEffect(() => {
    const backAction = () => {
      props.navigation.goBack(); // Navigate back when the back button is pressed
      return true; // Prevent default behavior
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [navigation]);
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
          `${API_BASE_URL}/nodeapp/pendingRequests`,
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
      await axios.post(`${API_BASE_URL}/nodeapp/approveRequest/${item._id}`, {
        CompanyName: item.CompanyName,
        CompanyAddress: item.CompanyAddress,
        ContactPerson: item.ContactPerson,
        ContactNo: item.ContactNo,
        Email: item.Email,
        UserEmail: email,
        ProductName: item.ProductName,
        NumberOfLicense: item.numberOfLicense,
        TotalLicense: item.TotalLicense,
        TotalPrice: item.TotalPrice,
        DateOfIssuance: item.DateOfIssuance,
        DateOfExpiry: item.DateOfExpiry,
        AccountManagerName: item.AccountManagerName,
      });
      setPendingRequests(pendingRequests.filter(req => req._id !== item._id));
    } catch (error) {
      console.error('Error:', error.response.data.message);
    }
  };

  const handleReject = async item => {
    try {
      await axios.post(`${API_BASE_URL}/nodeapp/rejectRequest/${item._id}`, {
        CompanyName: item.CompanyName,
        CompanyAddress: item.CompanyAddress,
        ContactPerson: item.ContactPerson,
        ContactNo: item.ContactNo,
        Email: item.Email,
        UserEmail: email,
        ProductName: item.ProductName,
        NumberOfLicense: item.numberOfLicense,
        TotalLicense: item.TotalLicense,
        TotalPrice: item.TotalPrice,
        DateOfIssuance: item.DateOfIssuance,
        DateOfExpiry: item.DateOfExpiry,
        AccountManagerName: item.AccountManagerName,
      });
      
      setPendingRequests(pendingRequests.filter(req => req._id !== item._id));
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
        renderItem={({item}) => {
          // console.log(item, 'items checking');
          return (
            <View
              style={[
                styles.card,
                department === 'Admin' ? null : styles.cardSupport,
              ]}>
              <Text style={styles.text}>Company Name:</Text>
              <Text style={styles.textItem}>{item.CompanyName}</Text>
              <Text style={styles.text}>Company Address:</Text>
              <Text style={styles.textItem}>{item.CompanyAddress}</Text>
              <Text style={styles.text}>Contact Person:</Text>
              <Text style={styles.textItem}>{item.ContactPerson}</Text>
              <Text style={styles.text}>Contact No:</Text>
              <Text style={styles.textItem}>{item.ContactNo}</Text>
              <Text style={styles.text}>Email:</Text>
              <Text style={styles.textItem}>{item.Email}</Text>
              <Text style={styles.text}>Product Name:</Text>
              <Text style={styles.textItem}>{item.ProductName}</Text>
              <Text style={styles.text}>Total License:</Text>
              <Text style={styles.textItem}>{item.TotalLicense}</Text>
              <Text style={styles.text}>Total Price:</Text>
              <Text style={styles.textItem}>{item.TotalPrice}</Text>
              <Text style={styles.text}>Date Of Issuance:</Text>
              <Text style={styles.textItem}>{item.DateOfIssuance}</Text>
              <Text style={styles.text}>Date Of Expiry:</Text>
              <Text style={styles.textItem}>{item.DateOfExpiry}</Text>
              <Text style={styles.text}>Account Manager Name:</Text>
              <Text style={styles.textItem}>{item.AccountManagerName}</Text>
              <Text style={styles.text}>Account Manager email:</Text>
              <Text style={styles.textItem}>{item.UserEmail}</Text>
              {department == 'Admin' && (
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    onPress={() => handleApprove(item)}
                    style={[styles.buttonContainerApprove]}>
                    <LinearGradient
                      colors={['#000', '#000']} // Adjust the second color to a lighter shade of black
                      locations={[0.1, 0.9]} // Adjust the gradient position as needed
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 1}}
                      style={[styles.button, {borderRadius: 50}]}>
                      <Text style={[styles.buttonText, {color: 'white'}]}>
                        Approve
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleReject(item)}>
                    <LinearGradient
                      colors={['#EE5C25', '#000']}
                      locations={[0.1, 0.99]}
                      start={{x: 0, y: 1}}
                      end={{x: 1, y: 1}}
                      style={[styles.button, {borderRadius: 50, width: 140}]}>
                      <Text style={[styles.buttonText, {color: 'white'}]}>
                        Reject
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          );
        }}
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
    height: 785,
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
  cardSupport: {
    height: 720, // Adjust the height as per your requirements
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
  textItem: {
    fontSize: 16,
    color: 'grey',
    fontWeight: '700',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
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
  buttonContainerApprove: {
    // marginTop: 10,
    // marginLeft: 60,
    width: 140,
    justifyContent: 'center',
  },
  button: {
    borderRadius: 50,
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontWeight: 'bold',
  },
});
