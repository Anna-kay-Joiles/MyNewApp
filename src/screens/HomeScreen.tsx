import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';
import { Calendar } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
      {/* Header */}
      <View style={styles.headerContainer}>
        <View style={styles.centeredTimeDateContainer}>
          <Text style={styles.time}>{formattedTime}</Text>
          <Text style={styles.date}>{formattedDate}</Text>
        </View>
        <Icon name="account-circle" size={30} style={styles.icon} />
      </View>

      {/* Greeting */}
      <View style={styles.greetingContainer}>
        <Text style={styles.greeting}>HELLO, {userName.toUpperCase()}</Text>
      </View>

      {/* Calendar */}
      <Calendar
        style={styles.calendar}
        markedDates={{
          '2025-09-30': { marked: true, dotColor: 'red', activeOpacity: 0 },
        }}
      />

      {/* Books Section */}
      
      <Text style={styles.sectionTitle}>Current Books & PDF's</Text>

      <View style={styles.bookshelfContainer}>
        <TouchableOpacity onPress={() => openBook('Book 1')} style={styles.book}>
          <Image
            source={{ uri: 'https://i.pinimg.com/736x/20/ea/4f/20ea4f912c01b75377b5240865d7af21.jpg' }}
            style={styles.bookImage}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openBook('Book 2')} style={styles.book}>
          <Image
            source={{ uri: 'https://th.bing.com/th/id/OIP.fJNaraF_YS5wd_fOm0LOvAHaLG?rs=1&pid=ImgDetMain' }}
            style={styles.bookImage}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openBook('Book 3')} style={styles.book}>
          <Image
            source={{ uri: 'https://th.bing.com/th/id/OIP.SoVJ3JYup7XZisAGNpdUHAAAAA?rs=1&pid=ImgDetMain' }}
            style={styles.bookImage}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openBook('Book 4')} style={styles.book}>
          <Image
            source={{ uri: 'https://i.pinimg.com/736x/0c/b5/f6/0cb5f61ef71455d8ab42b8a3bc73e817--medicine-book-internal-medicine.jpg' }}
            style={styles.bookImage}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  centeredTimeDateContainer: {
    flex: 1,
    alignItems: 'center',
  },
  time: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 16,
    color: '#666',
  },
  icon: {
    color: '#000',
  },
  greetingContainer: {
    backgroundColor: '#43729e',
    padding: 16,
    alignItems: 'center',
    marginVertical: 16,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  calendar: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  bookshelfContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
  },
  book: {
    width: '48%',
    marginBottom: 16,
  },
  bookImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    backgroundColor: '#e0e0e0',
  },
});

export default HomeScreen;
