import React, {useEffect, useState} from 'react';
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
  Dimensions,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import axios from 'axios';
import HeaderCreate from './HeaderCreate';
import {connect} from 'react-redux';
import * as userActions from '../redux/actions/user';
import {bindActionCreators} from 'redux';
import {Calendar} from 'react-native-calendars';

const screenWidth = Dimensions.get('screen').width;
const iconSize = 30;

const CreateScreen = props => {
  var {
    userData: {
      user: {name, department},
    },
  } = props;

  const [companyName, setCompanyName] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [productName, setProductName] = useState('');
  const [numberOfLicense, setNumberOfLicense] = useState('');
  const [amountOfLicense, setAmountOfLicense] = useState('');
  const [totalPrice, setTotalPrice] = useState('');
  const [accountManager, setAccountManager] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [dateOfIssuance, setDateOfIssuance] = useState('');
  const [dateOfExpiry, setDateOfExpiry] = useState('');
  const [showCalendar1, setShowCalendar1] = useState(false);
  const [showCalendar2, setShowCalendar2] = useState(false);

  const [productNameError, setProductNameError] = useState('');
  const [companyNameError, setCompanyNameError] = useState('');
  const [companyAddressError, setCompanyAddressError] = useState('');
  const [contactPersonError, setContactPersonError] = useState('');
  const [contactNoError, setContactNoError] = useState('');
  const [clientEmailError, setClientEmailError] = useState('');
  const [numberOfLicenseError, setNumberOfLicenseError] = useState('');
  const [amountOfLicenseError, setAmountOfLicenseError] = useState('');
  const [totalPriceError, setTotalPriceError] = useState('');
  const [accountManagerError, setAccountManagerError] = useState('');
  const validateInputs = () => {
    // Reset error messages
    setProductNameError('');
    setCompanyNameError('');
    setCompanyAddressError('');
    setContactPersonError('');
    setContactNoError('');
    setClientEmailError('');
    setNumberOfLicenseError('');
    setAmountOfLicenseError('');
    setTotalPriceError('');
    setAccountManagerError('');
    let isValid = true;

    // Validate each input field
    if (!productName.trim()) {
      setProductNameError('Product name is required');
      isValid = false;
    }
    if (!companyName.trim()) {
      setCompanyNameError('Company name is required');
      isValid = false;
    }
    if (!companyAddress.trim()) {
      setCompanyAddressError('Company Address is required');
      isValid = false;
    }
    if (!contactPerson.trim()) {
      setContactPersonError('Contact person is required');
      isValid = false;
    }
    if (!contactNo.trim()) {
      setContactNoError('Contact no is required');
      isValid = false;
    }
    if (!clientEmail.trim()) {
      setClientEmailError('Client email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(clientEmail)) {
      setClientEmailError('Invalid email format');
      isValid = false;
    }
    if (!dateOfIssuance.trim()) {
      setDateOfIssuanceError('');
      inValid = false;
    }
    if (!numberOfLicense.trim()) {
      setNumberOfLicenseError('Number of license is required');
      isValid = false;
    }
    if (!amountOfLicense.trim()) {
      setAmountOfLicenseError('Amount of license is required');
      isValid = false;
    }
    if (!totalPrice.trim()) {
      setTotalPriceError('Total price is required');
      isValid = false;
    }
    if (!accountManager.trim()) {
      setAccountManagerError('Account manager name is required');
      isValid = false;
    }

    return isValid;
  };
  const calculateTotalPrice = () => {
    const numOfLicenseValue = parseFloat(numberOfLicense);
    const amountPerLicenseValue = parseFloat(amountOfLicense);
    if (!isNaN(numOfLicenseValue) && !isNaN(amountPerLicenseValue)) {
      const totalPriceValue = numOfLicenseValue * amountPerLicenseValue;
      setTotalPrice(totalPriceValue.toString());
    }
  };
  useEffect(() => {
    calculateTotalPrice();
  }, [numberOfLicense, amountOfLicense]);

  const createHandleSubmit = async () => {
    const isValid = validateInputs();
    if (!isValid) {
      return;
    }
    const userDataCreate = {
      CompanyName: companyName,
      CompanyAddress: companyAddress,
      ContactPerson: contactPerson,
      ContactNo: contactNo,
      Email: clientEmail,
      UserEmail: props?.userData?.user?.email,
      ProductName: productName,
      NumberOfLicense: numberOfLicense,
      TotalLicense: amountOfLicense,
      TotalPrice: totalPrice,
      DateOfIssuance: dateOfIssuance,
      DateOfExpiry: dateOfExpiry,
      AccountManagerName: accountManager,
    };

    try {
      if (
        productName === '' ||
        companyAddress === '' ||
        contactPerson === '' ||
        contactNo === '' ||
        clientEmail === '' ||
        numberOfLicense === '' ||
        amountOfLicense === '' ||
        totalPrice === '' ||
        dateOfIssuance === '' ||
        dateOfExpiry === '' ||
        accountManager === ''
      )
        if (
          isNaN(contactNo) ||
          isNaN(numberOfLicense) ||
          isNaN(amountOfLicense) ||
          isNaN(totalPrice)
        ) {
          Alert.alert(
            'Error',
            'Contact number, number of license, amount of license, and total price must be numeric',
          );
          return;
        }

      var {
        userData: {token},
      } = props;

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
      Alert.alert('Error', 'Failed to send data');
    }
  };
  const openCalendar = calendarNumber => {
    if (calendarNumber === 1) {
      setShowCalendar1(!showCalendar1);
    } else if (calendarNumber === 2) {
      setShowCalendar2(!showCalendar2);
    }
  };

  const changeDOB = (day, calendarNumber) => {
    console.log(day, 'dasd');
    if (calendarNumber === 1) {
      setDateOfIssuance(day.dateString);
      setShowCalendar1(false);
    } else if (calendarNumber === 2) {
      setDateOfExpiry(day.dateString);
      setShowCalendar2(false);
    }
  };

  return (
    <>
      <HeaderCreate navigation={props.navigation} />
      <ScrollView contentContainerStyle={{paddingBottom: 20}}>
        <View style={styles.container}>
          <View style={{marginBottom: 10}}>
            <Text
              style={{
                color: 'black',
                fontSize: 26,
                fontWeight: '800',
                letterSpacing: 2.5,
                marginTop: 25,
              }}>
              WELCOME TO ORDER !
            </Text>
          </View>
          <TextInput
            style={[styles.input, companyNameError && styles.errorInput]}
            placeholder="Company Name"
            placeholderTextColor={'#ccc'}
            value={companyName}
            onChangeText={text => {
              setCompanyName(text);
              setCompanyNameError('');
            }}
          />

          <TextInput
            style={[styles.input, companyAddressError && styles.errorInput]}
            placeholder="Company Address"
            placeholderTextColor={'#ccc'}
            value={companyAddress}
            onChangeText={text => {
              setCompanyAddress(text);
              setCompanyAddressError('');
            }}
          />

          <TextInput
            style={[styles.input, contactPersonError && styles.errorInput]}
            placeholder="Contact Person"
            placeholderTextColor={'#ccc'}
            value={contactPerson}
            onChangeText={text => {
              setContactPerson(text);
              setContactPersonError('');
            }}
          />

          <TextInput
            style={[styles.input, contactNoError && styles.errorInput]}
            placeholder="Contact Number"
            placeholderTextColor={'#ccc'}
            value={contactNo}
            keyboardType="numeric"
            onChangeText={text => {
              setContactNo(text);
              setContactNoError('');
            }}
          />

          <TextInput
            style={[styles.input, clientEmailError && styles.errorInput]}
            placeholder="Client Email"
            placeholderTextColor={'#ccc'}
            value={clientEmail}
            onChangeText={text => {
              setClientEmail(text);
              setClientEmailError('');
            }}
          />

          <TextInput
            style={[styles.input, productNameError && styles.errorInput]}
            placeholder="Product Name"
            placeholderTextColor={'#ccc'}
            value={productName}
            onChangeText={text => {
              setProductName(text);
              setProductNameError('');
            }}
          />
          <View style={styles.inputContainer}>
            <TextInput
              style={[
                styles.inputField,
                numberOfLicenseError && styles.errorInput,
              ]}
              placeholder="Number License Price"
              placeholderTextColor={'#ccc'}
              value={numberOfLicense}
              keyboardType="numeric"
              onChangeText={text => {
                setNumberOfLicense(text);
                setNumberOfLicenseError('');
              }}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={[
                styles.inputField,
                amountOfLicenseError && styles.errorInput,
              ]}
              placeholder="Amount Of License"
              placeholderTextColor={'#ccc'}
              value={amountOfLicense}
              keyboardType="numeric"
              onChangeText={text => {
                setAmountOfLicense(text);
                setAmountOfLicenseError('');
              }}
            />
          </View>
          {amountOfLicenseError ? (
            <Text style={styles.errorText}>{amountOfLicenseError}</Text>
          ) : null}

          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.inputField, totalPriceError && styles.errorInput]}
              placeholder="Total License Price"
              placeholderTextColor={'#ccc'}
              value={totalPrice}
              onChangeText={text => {
                setTotalPrice(text);
                setTotalPriceError('');
              }}
            />
          </View>
          {totalPriceError ? (
            <Text style={styles.errorText}>{totalPriceError}</Text>
          ) : null}
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Date Of Issuance"
              style={styles.inputField}
              placeholderTextColor="#ccc"
              editable={false}
              value={dateOfIssuance}
              onChangeText={() => {
                setDateOfIssuanceError('dasdja');
              }}
            />
            <TouchableOpacity
              onPress={() => {
                openCalendar(1);
              }}
              style={styles.calendarButton}>
              <Image
                source={require('../Assets/images/calendar.png')}
                style={styles.calendarIcon}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Date Of Expiry"
              style={styles.inputField}
              placeholderTextColor="#ccc"
              editable={false}
              value={dateOfExpiry}
            />
            <TouchableOpacity
              onPress={() => {
                openCalendar(2);
              }}
              style={styles.calendarButton}>
              <Image
                source={require('../Assets/images/calendar.png')}
                style={styles.calendarIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={[
                styles.inputField,
                accountManagerError && styles.errorInput,
              ]}
              placeholder="Account Manager Name"
              placeholderTextColor={'#ccc'}
              value={accountManager}
              onChangeText={text => {
                setAccountManager(text);
                setAccountManagerError('');
              }}
            />
          </View>
          {accountManagerError ? (
            <Text style={styles.errorText}>{accountManagerError}</Text>
          ) : null}

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
      {showCalendar1 && (
        <View style={styles.calendarContainer}>
          <Calendar
            style={styles.calendar}
            markedDates={{
              [dateOfIssuance]: {selected: true, selectedColor: '#1F93D1'},
            }}
            onDayPress={day => changeDOB(day, 1)}
            theme={{
              backgroundColor: '#FFFFFF',
              calendarBackground: '#FFFFFF',
              textSectionTitleColor: '#b6c1cd',
              textSectionTitleDisabledColor: '#d9e1e8',
              selectedDayBackgroundColor: '#00adf5',
              selectedDayTextColor: '#FFFFFF',
              todayTextColor: '#00adf5',
              dayTextColor: '#2d4150',
              textDisabledColor: '#d9e1e8',
              dotColor: '#00adf5',
              selectedDotColor: '#FFFFFF',
              arrowColor: 'orange',
              disabledArrowColor: '#d9e1e8',
              monthTextColor: 'blue',
              indicatorColor: 'blue',
              textDayFontFamily: 'monospace',
              textMonthFontFamily: 'monospace',
              textDayHeaderFontFamily: 'monospace',
              textDayFontSize: 16,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 16,
            }}
          />
        </View>
      )}
      {showCalendar2 && (
        <View style={styles.calendarContainer}>
          <Calendar
            style={styles.calendar}
            markedDates={{
              [dateOfExpiry]: {selected: true, selectedColor: '#1F93D1'},
            }}
            onDayPress={day => changeDOB(day, 2)}
            theme={{
              backgroundColor: '#FFFFFF',
              calendarBackground: '#FFFFFF',
              textSectionTitleColor: '#b6c1cd',
              textSectionTitleDisabledColor: '#d9e1e8',
              selectedDayBackgroundColor: '#00adf5',
              selectedDayTextColor: '#FFFFFF',
              todayTextColor: '#00adf5',
              dayTextColor: '#2d4150',
              textDisabledColor: '#d9e1e8',
              dotColor: '#00adf5',
              selectedDotColor: '#FFFFFF',
              arrowColor: 'orange',
              disabledArrowColor: '#d9e1e8',
              monthTextColor: 'blue',
              indicatorColor: 'blue',
              textDayFontFamily: 'monospace',
              textMonthFontFamily: 'monospace',
              textDayHeaderFontFamily: 'monospace',
              textDayFontSize: 16,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 16,
            }}
          />
        </View>
      )}
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
    marginBottom: 5,
    borderRadius: 50,
    paddingHorizontal: 10,
    padding: 11,
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
  calendarContainer: {
    position: 'absolute',
    right: 5,
    width: 600,
    height: 550,
    marginTop: '45%',
    marginLeft: '50%',
    backgroundColor: '#FFF',
    color: 'black',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 999, // Ensure the calendar appears above other components
    borderRadius: 20,
    overflow: 'hidden', // Ensure borderRadius applies properly
  },
  calendar: {
    width: '100%',
    height: '100%',
    color: 'black',
  },
  calendarButton: {
    width: iconSize,
    height: iconSize,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarIcon: {
    height: 20,
    width: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    marginBottom: 5,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 13,
    marginTop: 15,
  },
  input: {
    width: '100%',
    height: 60,
    marginHorizontal: 10,
    backgroundColor: 'white',
    marginBottom: 5,
    borderRadius: 10,
    paddingHorizontal: 10,
    padding: 11,
    color: 'black',
    fontSize: 13,
    // fontWeight: '500',
    marginTop: 15,
  },
  inputField: {
    color: 'black',
  },
  errorInput: {
    borderColor: 'red',
    borderWidth: 1,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
    alignSelf: 'flex-start',
  },
});

const mapStateToProps = state => ({
  userData: state.userData,
});

const ActionCreators = Object.assign({}, userActions);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateScreen);
