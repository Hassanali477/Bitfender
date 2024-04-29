import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Icon} from 'react-native-elements';

const width = Dimensions.get('screen').width;

const CustomAlert = ({visible, message, onClose, type}) => {
  const getIconName = () => {
    if (type === 'success') {
      return 'check-circle';
    } else if (type === 'error') {
      return 'warning';
    }
    return 'info'; // Default icon for other types
  };

  const getIconColor = () => {
    if (type === 'success') {
      return '#32CD32'; // Green color for success
    } else if (type === 'error') {
      return '#FF6347'; // Red color for error
    }
    return '#555'; // Default color for other types
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Icon name="close" type="material" color="#555" size={24} />
          </TouchableOpacity>
          <Text style={styles.modalText}>{message}</Text>
          {type && (
            <Icon
              name={getIconName()}
              type="font-awesome"
              color={getIconColor()}
              size={40}
              style={styles.icon}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 25,
    alignItems: 'center',
    elevation: 5,
    width: width * 0.9,
    maxHeight: width * 0.6,
  },
  modalText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#333',
    lineHeight: 24,
    fontWeight: '400',
    marginBottom: 20, // Added marginBottom to create space between text and icon
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  icon: {
    marginVertical: 10, // Adjusted marginVertical to create space around the icon
  },
});

export default CustomAlert;
