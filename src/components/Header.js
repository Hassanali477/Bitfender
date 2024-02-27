import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      {/* Status bar */}
      <StatusBar backgroundColor="#EE5C25" barStyle="dark-content" />

      {/* Custom header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>HOME BIT PORTAL</Text>
      </View>
    </View>
  );
};
export default Header;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EE5C25',
  },
  header: {
    height: 75,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing:5,
    color: 'white',
  },
});
