import React, { useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { format } from 'date-fns'; 
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import * as DocumentPicker from 'expo-document-picker';

const ImportResourcesScreen = () => {
  const [pdf, setPdf] = useState(null);

  const handlePdfUpload = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: 'application/pdf', 
    });

  
  };

  const currentDate = new Date();
  const formattedTime = format(currentDate, 'h:mm a');
  const formattedDate = format(currentDate, 'MMM dd, yyyy').toUpperCase();

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <View style={styles.timeDateContainer}>
          <Text style={styles.time}>{formattedTime}</Text>
          <Text style={styles.date}>{formattedDate}</Text>
        </View>
        <Icon name="account-circle" size={40} style={styles.profileIcon} />
      </View>

      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 20 }}>
        <Button
          title="Import Resources"
          onPress={handlePdfUpload}
        />
        {pdf && (
          <View>
            <Text>Selected PDF: {pdf}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#43729e',
    borderRadius: 10,
    marginBottom: 16,
    width: '100%', 
  },
  timeDateContainer: {
    flex: 1,
  },
  time: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  date: {
    fontSize: 16,
    color: 'white',
  },
  profileIcon: {
    color: 'white',
  },
});

export default ImportResourcesScreen;
