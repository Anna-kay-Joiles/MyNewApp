import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { format } from 'date-fns';
import { FontAwesome } from '@expo/vector-icons'; 
import { Checkbox } from 'react-native-paper'; 

const TaskPage = () => {
  const currentDate = new Date();
  const formattedTime = format(currentDate, 'h:mm a'); 
  const formattedDate = format(currentDate, 'MMM dd, yyyy').toUpperCase(); 

  return (
    <ScrollView style={styles.container}>
      {/* Time and Date */}
      <View style={styles.headerContainer}>
        <Text style={styles.time}>{formattedTime}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>

      <View style={styles.sectionDivider} />

      {/* TASKS HEADER with Icon */}
      <View style={styles.tasksHeaderContainer}>
        <FontAwesome name="tasks" size={24} color="black" style={styles.tasksHeaderIcon} />
        <Text style={styles.tasksHeader}>TASKS</Text>
      </View>
      <View style={styles.sectionDivider} />

      {/* Add New Task Button */}
      <View style={styles.iconButtonContainer}>
        <TouchableOpacity style={styles.addTaskButton}>
          <Text style={styles.addTaskText}>+</Text>
        </TouchableOpacity>
        <Text style={styles.addTaskLabel}>ADD NEW TASK</Text>
      </View>

      <View style={styles.sectionDivider} />

      {/* Filter Options */}
      <View style={styles.filterOptions}>
        <TouchableOpacity style={styles.filterButton}>
          <FontAwesome name="filter" size={20} color="black" />
          <Text style={styles.filterLabel}>FILTER SUBJECT'S</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.filterOptions}>
        <View style={styles.filterOptionContainer}>
          <Text style={styles.filterOption}>This Month</Text>
          <Checkbox status="unchecked" onPress={() => {}} />
        </View>
        <View style={styles.filterOptionContainer}>
          <Text style={styles.filterOption}>This Week</Text>
          <Checkbox status="unchecked" onPress={() => {}} />
        </View>
      </View>

      <View style={styles.sectionDivider} />

      {/* Task List */}
      <View style={styles.taskContainer}>
        <View style={styles.taskItem}>
          <FontAwesome name="book" size={24} color="black" style={styles.taskIcon} />
          <View style={styles.taskDetails}>
            <View style={styles.leftSide}>
              <Text style={styles.taskSubject}>Math</Text>
              <Text style={styles.taskDue}>Due: Oct 1, 2025</Text>
            </View>
            <View style={styles.rightSide}>
              <Text style={styles.taskType}>Type: Quiz</Text>
              <Text style={styles.taskTime}>Time: 30 mins</Text>
            </View>
          </View>
        </View>

        <View style={styles.sectionDivider} />

        <View style={styles.taskItem}>
          <FontAwesome name="book" size={24} color="black" style={styles.taskIcon} />
          <View style={styles.taskDetails}>
            <View style={styles.leftSide}>
              <Text style={styles.taskSubject}>Science</Text>
              <Text style={styles.taskDue}>Due: Oct 5, 2025</Text>
            </View>
            <View style={styles.rightSide}>
              <Text style={styles.taskType}>Type: Research</Text>
              <Text style={styles.taskTime}>Time: 1hr 50 mins</Text>
            </View>
          </View>
        </View>

        <View style={styles.sectionDivider} />

        <View style={styles.taskItem}>
          <FontAwesome name="book" size={24} color="black" style={styles.taskIcon} />
          <View style={styles.taskDetails}>
            <View style={styles.leftSide}>
              <Text style={styles.taskSubject}>Biology</Text>
              <Text style={styles.taskDue}>Due: Oct 6, 2025</Text>
            </View>
            <View style={styles.rightSide}>
              <Text style={styles.taskType}>Type: Homework</Text>
              <Text style={styles.taskTime}>Time: 45 mins</Text>
            </View>
          </View>
        </View>

        <View style={styles.sectionDivider} />

        <View style={styles.taskItem}>
          <FontAwesome name="book" size={24} color="black" style={styles.taskIcon} />
          <View style={styles.taskDetails}>
            <View style={styles.leftSide}>
              <Text style={styles.taskSubject}>Biology</Text>
              <Text style={styles.taskDue}>Due: Oct 27, 2025</Text>
            </View>
            <View style={styles.rightSide}>
              <Text style={styles.taskType}>Type: Quiz</Text>
              <Text style={styles.taskTime}>Time: 30 mins</Text>
            </View>
          </View>
        </View>
      </View>
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
  tasksHeaderContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 16,
  },
  tasksHeaderIcon: {
    marginRight: 8, 
  },
  tasksHeader: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  iconButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  addTaskButton: {
    backgroundColor: '#43729e',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  addTaskText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  addTaskLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  filterOptions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center', 
    marginRight: 10,
  },
  filterLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8, 
  },
  filterOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  filterOption: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#43729e',
    marginRight: 5,
  },
  checkbox: {
    width: 20,
    height: 20,
  },
  taskContainer: {
    marginTop: 8,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  taskIcon: {
    marginRight: 12,
  },
  taskDetails: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  leftSide: {
    flex: 1,
  },
  rightSide: {
    flex: 1,
    alignItems: 'flex-end',
  },
  taskSubject: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskDue: {
    fontSize: 14,
    color: 'gray',
  },
  taskType: {
    fontSize: 14,
  },
  taskTime: {
    fontSize: 14,
  },
});

export default TaskPage;
