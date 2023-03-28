import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const MyPage = () => {
  const [alertText, setAlertText] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleButtonClick = () => {
    setAlertText('I am an experienced React developer passionate about creating visually stunning and responsive applications using modern React libraries and frameworks. My expertise lies in transforming complex ideas into visually appealing designs, and I am always ready to take on a challenge. Lets collaborate to bring your project to life');
    setShowAlert(true);
  };

  const handleOverlayClick = () => {
    setShowAlert(false);
  };

  return (
    <View style={styles.container}>
     <View style={[styles.buttonContainer, { opacity: showAlert ? 0.3 : 0.6 }]}>

        <Button 
          title="Sample Button" 
          onPress={handleButtonClick} 
          color="#fff" 
          style={{ color: "black", backgroundColor: "#fff", borderRadius: 10, paddingHorizontal: 20, paddingVertical: 10, elevation: 2 }} 
        />
      </View>
      {showAlert && (
        <>
          <View style={styles.alertContainer}>
            <Text style={styles.alertText}>{alertText}</Text>
          </View>
          <TouchableOpacity
            style={styles.overlay}
            onPress={handleOverlayClick}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  buttonContainer: {
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'black'
  },
  alertContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height:'12%',
    backgroundColor: '#fff',
    padding: 10,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    elevation: 3,
  },
  alertText: {
    color: '#333',
    textAlign: 'center'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  }
});

export default MyPage;
