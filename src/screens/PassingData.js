import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const PassingData = () => {
  const [data, setData] = useState(undefined);
  const getApiData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      let result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);

      Alert.alert('Error', 'Failed to fetch data. Please try again later.');
    }
  };

  useEffect(() => {
    getApiData();
  }, 1000);

  return (
    <View style={styles.container}>
      {data ? (
        <View>
          {/* Access the data correctly */}
          <Text style={{color: 'white'}}>{data[0].title}</Text>
        </View>
      ) : null}
      <View>
      </View>
    </View>
  );
};

export default PassingData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});
