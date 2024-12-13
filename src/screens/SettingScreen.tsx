import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { signOut } from 'firebase/auth'; 
import { auth } from '../firebaseConfig';

const SettingsScreen = ({ navigation }: any) => {
  const handleLogout = async () => {
    try {
      await signOut(auth); 
      navigation.replace('Login'); 
    } catch (err: any) {
      console.error('Error logging out:', err.message);
    }
  };

  return (
    <View style={styles.container}>
      {/* Add the logout button under settings */}
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default SettingsScreen;
