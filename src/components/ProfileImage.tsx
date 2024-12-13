// components/ProfileImage.tsx

import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const ProfileImage = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/profile.jpg')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default ProfileImage;
