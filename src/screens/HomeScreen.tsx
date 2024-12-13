

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';
import { Calendar } from 'react-native-calendars';

const HomeScreen = () => {
  const navigation = useNavigation();
  const currentDate = new Date();
  const formattedTime = format(currentDate, 'h:mm a'); 
  const formattedDate = format(currentDate, 'MMM dd, yyyy').toUpperCase(); 
  const userName = 'John'; 

  const openBook = (bookName: string) => {
    alert(`Opening ${bookName}`); 
  };

  return (
    <ScrollView style={styles.container}>
        
      <Text style={styles.time}>{formattedTime}</Text>
      <Text style={styles.date}>{formattedDate}</Text>

      <View style={styles.greetingContainer}>
        <Text style={styles.greeting}>Hello, {userName}</Text>
      </View>

      <View style={styles.sectionDivider} />

      <Calendar
        style={styles.calendar}
        markedDates={{
          '2024-12-12': { marked: true, dotColor: 'red', activeOpacity: 0 },
        }}
      />

      <View style={styles.sectionDivider} />
      
      <Text style={styles.sectionTitle}>Current Books & PDF's</Text>
      <View style={styles.sectionDivider} />

      <View style={styles.bookshelfContainer}>
        <TouchableOpacity onPress={() => openBook('Study Guide for Mathematics')} style={styles.bookPlaceholder}>
          <Text style={styles.bookText}>Study Guide for Mathematics</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openBook('Science Essentials')} style={styles.bookPlaceholder}>
          <Text style={styles.bookText}>Science Essentials</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openBook('History Notes')} style={styles.bookPlaceholder}>
          <Text style={styles.bookText}>History Notes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openBook('English Grammar Workbook')} style={styles.bookPlaceholder}>
          <Text style={styles.bookText}>English Grammar Workbook</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  time: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  date: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  greetingContainer: {
    backgroundColor: '#43729e',
    padding: 16,
    alignItems: 'center',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  sectionDivider: {
    height: 2,
    backgroundColor: 'black',
    marginVertical: 16,
  },
  calendar: {
    width: '100%',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  bookshelfContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#f4f4f4',
    borderRadius: 8,
  },
  bookPlaceholder: {
    width: '48%',
    height: 150,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  bookText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
