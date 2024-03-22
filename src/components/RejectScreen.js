import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import RejectScreenHeader from './RejectScreenHeader';
{
  /* {---------------Redux Imports------------} */
}
import {connect} from 'react-redux';
import * as userActions from '../redux/actions/user';
import {bindActionCreators} from 'redux';
const RejectScreen = props => {
  const [rejectedRequests, setRejectedRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRejectedRequests = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `http://192.168.1.115:3000/rejectedRequests`,
        );
        setRejectedRequests(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setIsLoading(false);
      }
    };

    fetchRejectedRequests();
  },[]); // Ensure useEffect runs when route.params changes

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
        contentContainerStyle={{paddingBottom: '20%'}}
        renderItem={({item}) => (
          <View style={styles.card}>
          <Text style={styles.text}>Product Name: {item.ProductName}</Text>
          <Text style={styles.text}>Client Name: {item.ClientName}</Text>
          <Text style={styles.text}>Number of Users: {item.NumberOfUsers}</Text>
          <Text style={styles.text}>Contact No: {item.ContactNo}</Text>
          <Text style={styles.text}>Product Price: {item.ProductPrice}</Text>
          <Text style={styles.text}>Status: {item.status}</Text>
          <Text style={styles.text}>RejectedBy: {item.rejectedBy}</Text>
          <Text style={styles.text}>ApprovedBy: {item.approvedBy}</Text>
          <Text style={styles.text}>Date: {item.dateNow}</Text>
          <Text style={styles.text}>Time: {item.time}</Text>
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
