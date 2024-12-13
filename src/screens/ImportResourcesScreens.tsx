import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ImportResourcesScreen = () => {
  const handleImport = () => {
    // Import resource logic goes here
    console.log('Resources imported');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Import Resources</Text>
      <TouchableOpacity onPress={handleImport} style={styles.importButton}>
        <Text style={styles.importButtonText}>Import Resources</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  importButton: {
    backgroundColor: '#43729e',
    padding: 10,
    borderRadius: 5,
  },
  importButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default ImportResourcesScreen;
