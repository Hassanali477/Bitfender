import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  ImageBackground,
} from 'react-native';

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
  // const additionalData = props.route.params?.additionalData;

  return (
    <ImageBackground
      source={require('../../Assets/images/cardbackground.jpg')}
      style={{flex: 1, backgroundColor:'black'}}
      resizeMode="cover">
      <View style={styles.container}>
        <Header />
        <CustomCard navigation={props.navigation} />
      </View>
    </ImageBackground>
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
    // backgroundColor: '',
    // width: width,
    // height: height,
  },
});
