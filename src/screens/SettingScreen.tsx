import React from 'react';
import { View, Text, StyleSheet, Switch, Button } from 'react-native';

const SettingsScreen = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);

  const toggleDarkMode = () => setIsDarkMode(previousState => !previousState);
  const toggleNotifications = () => setNotificationsEnabled(previousState => !previousState);

  return (
    <View style={[styles.container, isDarkMode && styles.darkMode]}>
      <Text style={[styles.title, isDarkMode && styles.darkTitle]}>Settings</Text>

      <View style={styles.settingItem}>
        <Text style={[styles.settingText, isDarkMode && styles.darkText]}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={[styles.settingText, isDarkMode && styles.darkText]}>Enable Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={toggleNotifications}
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={[styles.settingText, isDarkMode && styles.darkText]}>Account</Text>
        <Button title="Change Password" onPress={() => alert('Password change functionality goes here')} />
      </View>

      <View style={styles.settingItem}>
        <Button title="Log Out" onPress={() => alert('Log out functionality goes here')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  darkMode: {
    backgroundColor: '#333',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  darkTitle: {
    color: '#fff',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  settingText: {
    fontSize: 18,
  },
  darkText: {
    color: '#fff',
  },
});

export default SettingsScreen;
