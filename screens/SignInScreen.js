import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ImageBackground, Image } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal'; // Thêm thư viện chọn quốc gia

const SignInScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('US'); // Mã quốc gia mặc định
  const [callingCode, setCallingCode] = useState('1');   // Mã gọi quốc tế mặc định (USA)

  return (
    <ImageBackground
      source={require('../assets/signin-background.jpg')} // Đường dẫn ảnh nền
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            {/* Chia văn bản thành 2 dòng riêng biệt */}
            <Text style={styles.title}>Welcome</Text>
            <Text style={styles.subtitle}>to our store</Text>
          </View>

          {/* Phần chọn mã quốc gia và nhập số điện thoại */}
          <View style={styles.phoneInputContainer}>
            {/* Chọn mã quốc gia */}
            <CountryPicker
              countryCode={countryCode}
              withFlag
              withCallingCode
              withFilter
              onSelect={(country) => {
                setCountryCode(country.cca2);
                setCallingCode(country.callingCode[0]);
              }}
              containerButtonStyle={styles.countryPicker}
            />
            {/* Nhập số điện thoại */}
            <TextInput
              style={styles.phoneInput}
              placeholder="Nhập số điện thoại"
              placeholderTextColor="#aaa"
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>

          {/* Nút Continue with Google */}
          <TouchableOpacity style={styles.googleButton}>
            <Image 
              source={require('../assets/google-logo.png')} // Đường dẫn logo Google
              style={styles.googleLogo}
            />
            <Text style={styles.buttonTextGoogle}>Continue with Google</Text>
          </TouchableOpacity>

          {/* Nút Continue with Facebook */}
          <TouchableOpacity style={styles.facebookButton}>
            <Image 
              source={require('../assets/facebook-logo.png')} // Đường dẫn logo Facebook
              style={styles.facebookLogo}
            />
            <Text style={styles.buttonTextFacebook}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    padding: 20,
  },
  content: {
    alignItems: 'center',
    paddingBottom: 50,
  },
  titleContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginTop: 5,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  countryPicker: {
    marginLeft: 15,
  },
  phoneInput: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 15,
    fontSize: 16,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4285F4',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 20,
    width: '100%',
    borderColor: '#357AE8',
    borderWidth: 2,
  },
  facebookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3b5998',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 20,
    width: '100%',
    borderColor: '#29487d',
    borderWidth: 2,
  },
  googleLogo: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  facebookLogo: {
    width: 28,
    height: 28,
    marginRight: 10,
  },
  buttonTextGoogle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonTextFacebook: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignInScreen;
