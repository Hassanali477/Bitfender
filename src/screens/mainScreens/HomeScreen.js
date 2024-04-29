// HomeScreen.js

import React, {useEffect, useState} from 'react';
import {View, StyleSheet, BackHandler} from 'react-native';
import Header from '../../components/Header';
import CustomCard from '../../components/CustomCard';
import Drawer from '../../components/Drawer';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = props => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };
  const navigation = useNavigation();
  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  return (
    <View style={styles.container}>
      <Header toggleDrawer={toggleDrawer} />
      {isDrawerOpen && <Drawer onClose={closeDrawer} navigation={navigation} />}
      <CustomCard navigation={props.navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
