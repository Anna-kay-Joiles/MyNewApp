import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, TextInput, Button } from 'react-native';
import { format } from 'date-fns';
import { Calendar } from 'react-native-calendars';
import { FontAwesome } from '@expo/vector-icons'; 
import DateTimePicker from '@react-native-community/datetimepicker';

const CalendarScreen = () => {
  const currentDate = new Date();
  const formattedTime = format(currentDate, 'h:mm a'); 
  const formattedDate = format(currentDate, 'MMM dd, yyyy').toUpperCase(); 
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [eventDate, setEventDate] = useState(new Date());
  const [eventTime, setEventTime] = useState(new Date());
  const [description, setDescription] = useState('');
  const [eventType, setEventType] = useState('');
  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  const handleSaveEvent = () => {

    console.log("Event saved:", {
      eventDate,
      eventTime,
      description,
      eventType,
    });
    closeModal(); 
  };

  const showTimePicker = () => setIsTimePickerVisible(true);
  const handleTimeChange = (event:any, selectedTime: Date|undefined) => {
    setIsTimePickerVisible(false);
    if (selectedTime) setEventTime(selectedTime);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Time and Date */}
      <View style={styles.headerContainer}>
        <Text style={styles.time}>{formattedTime}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>

      {/* Calendar Icon and Button */}
      <View style={styles.iconButtonContainer}>
        <TouchableOpacity style={styles.calendarIconPlaceholder}>
          <FontAwesome name="calendar" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.addEventText}> CALENDAR </Text>
      </View>

      <View style={styles.sectionDivider} />

      {/* Add Event Button */}
      <View style={styles.iconButtonContainer}>
        <TouchableOpacity style={styles.addEventButton} onPress={openModal}>
          <Text style={styles.addEventText}>+</Text>
        </TouchableOpacity>
        <Text style={styles.addEventText}> ADD EVENT</Text>
      </View>

      <View style={styles.sectionDivider} />

      {/* Full Calendar */}
      <Calendar
        style={styles.calendar}
        markedDates={{
          '2024-12-12': { marked: true, dotColor: 'red' },
        }}
      />

      <View style={styles.sectionDivider} />

      <Text style={styles.sectionTitle}>Upcoming Events</Text>
      <View style={styles.sectionDivider} />

      <View style={styles.eventContainer}>
        <View style={styles.eventItem}>
          <View style={styles.eventNumberBubble}><Text style={styles.eventNumberText}>1</Text></View>
          <View style={styles.eventInfo}>
            <Text style={styles.eventName}>Meeting with Team</Text>
            <Text style={styles.eventDate}>Due Dec 12, 2024</Text>
          </View>
        </View>
        <View style={styles.sectionDivider} />
      </View>

      {/* Modal for Event Form */}
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add Event</Text>

            {/* Date Picker */}
            <Text>Select Due Date:</Text>
            <DateTimePicker
              value={eventDate}
              mode="date"
              display="default"
              onChange={(e, selectedDate) => setEventDate(selectedDate || eventDate)}
            />

            {/* Time Picker Box */}
            <Text>Select Time Slot:</Text>
            <TouchableOpacity onPress={showTimePicker} style={styles.timeBox}>
              <Text style={styles.timeBoxText}>
                {eventTime ? format(eventTime, 'h:mm a') : 'Select Time'}
              </Text>
            </TouchableOpacity>

            {/* Time Picker Modal */}
            {isTimePickerVisible && (
              <DateTimePicker
                value={eventTime}
                mode="time"
                display="default"
                onChange={handleTimeChange}
              />
            )}

            {/* Description Input */}
            <Text>Description:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter event description"
              value={description}
              onChangeText={setDescription}
            />

            {/* Event Type Input */}
            <Text>Event Type:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter event type"
              value={eventType}
              onChangeText={setEventType}
            />

            <View style={styles.modalButtons}>
              <Button title="Save Event" onPress={handleSaveEvent} />
              <Button title="Cancel" onPress={closeModal} />
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerContainer: {
    alignItems: 'center',
  },
  time: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sectionDivider: {
    height: 2,
    backgroundColor: 'black',
    marginVertical: 8,
  },
  iconButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  calendarIconPlaceholder: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 25,
    marginRight: 16,
  },
  addEventButton: {
    backgroundColor: '#43729e',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  addEventText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
  calendar: {
    width: '100%',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  eventContainer: {
    marginTop: 8,
  },
  eventItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  eventNumberBubble: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#43729e',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  eventNumberText: {
    color: 'white',
    fontWeight: 'bold',
  },
  eventInfo: {
    flex: 1,
  },
  eventName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  eventDate: {
    fontSize: 14,
    color: 'gray',
  },

  
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeBoxText: {
    fontSize: 16,
  },
});

export default CalendarScreen;
