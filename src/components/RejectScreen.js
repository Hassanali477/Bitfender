import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  BackHandler,
} from 'react-native';
import axios from 'axios';
import RejectScreenHeader from './RejectScreenHeader';
{
  /* {---------------Redux Imports------------} */
}
import {connect} from 'react-redux';
import * as userActions from '../redux/actions/user';
import {bindActionCreators} from 'redux';
import API_BASE_URL from '../../config';
import {useNavigation} from '@react-navigation/native';
const RejectScreen = props => {
  const navigation = useNavigation();
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
  const [rejectedRequests, setRejectedRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRejectedRequests = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${API_BASE_URL}/nodeapp/rejectedRequests`,
        );
        setRejectedRequests(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setIsLoading(false);
      }
    };

    fetchRejectedRequests();
  }, []); // Ensure useEffect runs when route.params changes

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={40} color="#ccc" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <RejectScreenHeader navigation={props.navigation} />
      <FlatList
        data={rejectedRequests}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Text style={styles.text}>Company Name:</Text>
            <Text style={styles.textItem}>{item.CompanyName}</Text>
            <Text style={styles.text}>Company Address: </Text>
            <Text style={styles.textItem}>{item.CompanyAddress}</Text>
            <Text style={styles.text}>Contact Person: </Text>
            <Text style={styles.textItem}>{item.ContactPerson}</Text>
            <Text style={styles.text}>Contact No: </Text>
            <Text style={styles.textItem}>{item.ContactNo}</Text>
            <Text style={styles.text}>Product Name: </Text>
            <Text style={styles.textItem}>{item.ProductName}</Text>
            <Text style={styles.text}>Client Email: </Text>
            <Text style={styles.textItem}>{item.Email}</Text>
            <Text style={styles.text}>Total License: </Text>
            <Text style={styles.textItem}>{item.TotalLicense}</Text>
            <Text style={styles.text}>Total Price:</Text>
            <Text style={styles.textItem}>{item.TotalPrice}</Text>
            <Text style={styles.text}>Date Of Issuance: </Text>
            <Text style={styles.textItem}>{item.DateOfIssuance}</Text>
            <Text style={styles.text}>Date Of Expiry: </Text>
            <Text style={styles.textItem}>{item.DateOfExpiry}</Text>
            <Text style={styles.text}>Account Manager name:</Text>
            <Text style={styles.textItem}>{item.AccountManagerName}</Text>
            <Text style={styles.text}>Account Manager email: </Text>
            <Text style={styles.textItem}>{item.UserEmail}</Text>
            <Text style={styles.text}>Status: </Text>
            <Text style={styles.textItem}>{item.status}</Text>
            <Text style={styles.text}>Rejected By: </Text>
            <Text style={styles.textItem}>{item.rejectedBy}</Text>
            <Text style={styles.text}>Approved By: </Text>
            <Text style={styles.textItem}>{item.approvedBy}</Text>
            <Text style={styles.text}>Date: </Text>
            <Text style={styles.textItem}>{item.dateNow}</Text>
            <Text style={styles.text}>Time: </Text>
            <Text style={styles.textItem}>{item.time}</Text>
          </View>
        )}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  flatlistContainer: {
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
  textItem: {
    fontSize: 16,
    color: 'grey',
    fontWeight: '700',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
export default connect(mapStateToProps, mapDispatchToProps)(RejectScreen);
