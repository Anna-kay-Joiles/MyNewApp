import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { format } from 'date-fns';
import { FontAwesome } from '@expo/vector-icons'; 
import { Checkbox } from 'react-native-paper'; 
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TaskPage = () => {
  const currentDate = new Date();
  const formattedTime = format(currentDate, 'h:mm a'); 
  const formattedDate = format(currentDate, 'MMM dd, yyyy').toUpperCase(); 

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <View style={styles.timeDateContainer}>
          <Text style={styles.time}>{formattedTime}</Text>
          <Text style={styles.date}>{formattedDate}</Text>
        </View>
        <Icon name="account-circle" size={40} style={styles.profileIcon} />
      </View>

      <View style={styles.sectionDivider} />

      {/* TASKS HEADER with Icon */}
      <View style={styles.tasksHeaderContainer}>
        <FontAwesome name="tasks" size={24} color="#43729e" style={styles.tasksHeaderIcon} />
        <Text style={styles.tasksHeader}>TASKS</Text>
      </View>
      <View style={styles.sectionDivider} />

      {/* Add New Task Button */}
      <View style={styles.iconButtonContainer}>
        <TouchableOpacity style={styles.addTaskButton}>
          <Text style={styles.addTaskText}>+</Text>
        </TouchableOpacity>
        <Text style={styles.addTaskLabel}>ADD NEW TASK   </Text>

        <TouchableOpacity style={styles.filterButton}>
          <FontAwesome name="sliders" size={20} color="#43729e" />
          <Text style={styles.filterLabel}>FILTER SUBJECT'S</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionDivider} />

      
      
        <View style={styles.filterOptionContainer}>
          <Text style={styles.filterOption}>This Week</Text>
          <Checkbox status="unchecked" onPress={() => { }} />
        </View>
       

      <View style={styles.sectionDivider} />

      {/* Task List */}
      <View style={styles.taskContainer}>
        {['Math', 'Marine Biology', 'Economics', 'Finance'].map((subject, index) => (
          <View key={index}>
            <View style={styles.taskItem}>
              <FontAwesome name="book" size={24} color="#43729e" style={styles.taskIcon} />
              <View style={styles.taskDetails}>
                <View style={styles.leftSide}>
                  <Text style={styles.taskSubject}>{subject}</Text>
                  <Text style={styles.taskDue}>Due: Dec {16 + index + 1}, 2024</Text>
                </View>
                <View style={styles.rightSide}>
                <Text style={styles.taskType}>
                 Type: {index % 3 === 0 ? 'Pop Quiz' : index % 2 === 0 ? 'Research' : 'Trivia'}
                </Text>
                  <Text style={styles.taskTime}>Time: 
                    {index % 2 === 0 ? '30 mins' : '1hr 50 mins'}</Text>
                </View>
              </View>
            </View>
            <View style={styles.sectionDivider} />
            
          </View>
        ))}
      </View>
      <View style={styles.filterOptionContainer}>

          <Text style={styles.filterOption}>This Month</Text>

          <Checkbox status="unchecked" onPress={() => {}} />

        </View>
        <View style={styles.sectionDivider} />


      {/* Task List */}
      <View style={styles.taskContainer}>
        {['Chemistry ', 'Japanese', 'Engineering', 'Computer Science '].map((subject, index) => (
          <View key={index}>
            <View style={styles.taskItem}>
              <FontAwesome name="book" size={24} color="#43729e" style={styles.taskIcon} />
              <View style={styles.taskDetails}>
                <View style={styles.leftSide}>
                  <Text style={styles.taskSubject}>{subject}</Text>
                  <Text style={styles.taskDue}>Due: Dec { 10+ index * 3}, 2024</Text>
                </View>
                <View style={styles.rightSide}>
                  <Text style={styles.taskType}>Type: {index % 2 === 0 ? 'Quiz' : 'Research'}</Text>
                  <Text style={styles.taskTime}>Time: {index % 2 === 0 ? '30 mins' : '1hr 50 mins'}</Text>
                </View>
              </View>
            </View>
            <View style={styles.sectionDivider} />
            
          </View>
        ))}
      </View>



    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#43729e',
    padding: 16,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  timeDateContainer: {
    alignItems: 'flex-start',
  },
  time: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  addTaskLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#43729e',
  },
  
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
  
  filterLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#43729e',
    marginLeft: 8, 
  },
  
  taskTime: {
    fontSize: 14,
    color: 'gray',
  },
  date: {
    fontSize: 16,
    color: 'white',
  },
  taskType: {
    fontSize: 14,
    color: 'gray',
  },
  profileIcon: {
    color: 'white',
  },
  sectionDivider: {
    height: 2,
    backgroundColor: '#43729e',
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
    color: '#43729e',
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
  addTaskText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  filterOptions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
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
});

export default TaskPage;
