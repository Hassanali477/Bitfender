// AdminScreen.js

import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
{
  /* {---------------Redux Imports------------} */
}
import {connect} from 'react-redux';
import * as userActions from '../redux/actions/user';
import {bindActionCreators} from 'redux';
import AdminHeaderScreen from './AdminHeaderScreen';
import API_BASE_URL from '../../config';
import { useNavigation } from '@react-navigation/native';
import { BackHandler } from 'react-native';
const AdminScreen = props => {
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
  const [pendingRequests, setPendingRequests] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectValue, setSelectValue] = useState('All List');
  // var {
  //   userData: {token, user},
  // } = props;
  useEffect(() => {
    const fetchPendingRequests = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${API_BASE_URL}/nodeapp/approvedrequest`,
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

  const handleNearExpiry = val => {
    setSelectValue(val);
  };

  const handleAllList = val => {
    setSelectValue(val);
  };
  const toggleModalVisible = () => {
    setModalVisible(!modalVisible);
  };

  const RenderItem = ({item}) => {
    return (
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
        {item.Message !== '' && (
          <View style={styles.expirtyDateContainer}>
            <Text style={styles.expirtyDate}>{item.Message}</Text>
          </View>
        )}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <AdminHeaderScreen
        navigation={props.navigation}
        toggleModalVisibility={toggleModalVisible}
      />
      {modalVisible && (
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => handleNearExpiry('Near Expiry')}>
              <Text style={styles.modalButtonText}>Near Expiry</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => handleAllList('All List')}>
              <Text style={styles.modalButtonText}>All List</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {/* <FlatList
        data={pendingRequests}
        renderItem={({item}) => (
          <>
            {selectValue == 'Near Expiry' && (
              <>{item.Message !== '' && <RenderItem item={item} />} </>
            )}
            {selectValue == 'All List' && <RenderItem item={item} />}
          </>
        )}
        keyExtractor={item => item._id}
      /> */}
      <FlatList
        data={pendingRequests}
        renderItem={({item}) =>
          (selectValue === 'Near Expiry' && item.Message !== '') ||
          selectValue === 'All List' ? (
            <RenderItem item={item} />
          ) : null
        }
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
  textItem: {
    fontSize: 16,
    color: 'grey',
    fontWeight: '700',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  activityIndicator: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: '50%',
  },
  expirtyDateContainer: {
    width: '100%',
    height: 40,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    borderRadius: 10,
  },
  expirtyDate: {
    fontSize: 16,
    color: 'white',
    marginTop: 5,
    marginBottom: 5,
    fontWeight: 'bold',
    // backgroundColor: 'black',
  },
  modalContainer: {
    position: 'absolute',
    top: 70,
    right: 0,
    zIndex: 999,
    backgroundColor: 'white',
    // borderRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 3,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 10,
  },
  modalButton: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  modalButtonText: {
    fontSize: 17,
    color: 'black',
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
