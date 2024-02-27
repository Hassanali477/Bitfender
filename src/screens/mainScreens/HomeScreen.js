import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

{
  /* {---------------Redux Imports------------} */
}
import {connect} from 'react-redux';
import * as userActions from '../../redux/actions/user';
import {bindActionCreators} from 'redux';
import Header from '../../components/Header';
import {Icon} from 'react-native-elements';
import CustomCard from '../../components/CustomCard';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const HomeScreen = props => {
  // Extract additionalData from route.params if it exists
  const additionalData = props.route.params?.additionalData;

  return (
     
    // </>
    // <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    //   <Text style={{color: 'black'}}>Hassan</Text>
    //   {additionalData ? (
    //     <>
    //       <Text style={{color: 'black'}}>
    //         Name: Hassan {additionalData.name}
    //       </Text>F
    //       <Text>Email: {additionalData.email}</Text>
    //       <Text>Contact No: {additionalData.contactNo}</Text>
    //       <Text>Department: {additionalData.department}</Text>
    //     </>
    //   ) : (
    //     <Text>Welcome to HomeScreen</Text>
    //   )}
    // </View>
    <View style={styles.container}>
      <Header />
      <CustomCard navigation={props.navigation} />
    </View>
  );
};
{
  /* {---------------redux State ------------} */
}
const mapStateToProps = state => ({
  userData: state.userData,
});
const ActionCreators = Object.assign({}, userActions);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
    // width: width,
    // height: height,
  },
});
