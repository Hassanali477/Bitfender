import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Modal,
  FlatList,
} from 'react-native';

const CustomDropdown = ({options, onSelect}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelect = value => {
    setSelectedValue(value);
    setModalVisible(false);
    onSelect(value);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.button}>
        <Text style={styles.buttonText}>{selectedValue || 'Department'}</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={options}
              style={{width: 200, height: 200}}
              keyExtractor={item => item.key}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => handleSelect(item.value)}
                  style={styles.option}>
                  <Text style={{color: 'black'}}>{item.value}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    borderRadius: 5,
    width: 350,
    marginLeft: 10,
    margin: 10,
    height: 48,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '300',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    // maxHeight: '80%',
    width: 250,
    height: 120,
    // alignItems:'center'
  },
  option: {
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'lightgray',
    // borderBot
  },
});
