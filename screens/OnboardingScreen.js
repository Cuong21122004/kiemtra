import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const OnboardingScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/onboarding-background.jpg')}  // Đường dẫn ảnh nền
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.content}>
          {/* Chia văn bản thành 2 dòng riêng biệt */}
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.title}>to our store</Text>

          <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>

          {/* Nút Get Started */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('SignIn')}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',  // Đẩy nội dung xuống dưới
    paddingBottom: 140,  // Khoảng cách từ nội dung tới đáy màn hình
  },
  content: {
    alignItems: 'center',
    marginBottom: 30,  // Điều chỉnh khoảng cách nội dung với nút
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',  // Căn giữa nội dung
  },
  subtitle: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',  // Màu nền xanh lá cây
    paddingVertical: 25,
    paddingHorizontal: 100,
    borderRadius: 25,  // Bo tròn góc
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',  // Màu chữ trắng
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;
