import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Modal, Button } from 'react-native';
import { format } from 'date-fns';
import { FontAwesome } from '@expo/vector-icons'; 

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Task = {
  id: string;
  createdAt: Date;
  title: string;
  description: string;
  subject: string;
  type: string;
  occurrence: string;
  dueDate: string;
  dueTime: string;
};

const TaskScreen = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    subject: '',
    type: '',
    occurrence: '',
    dueDate: '',
    dueTime: '',
  });

  const currentDate = new Date();
  const formattedTime = format(currentDate, 'h:mm a'); 
  const formattedDate = format(currentDate, 'MMM dd, yyyy').toUpperCase(); 

  const handleAddTask = () => {
    if (!newTask.title) {
      alert('Title is required to add a task!');
      return;
    }
    
    const newTaskWithId = {
      ...newTask,
      id: Date.now().toString(),
      createdAt: new Date()
    };
    setTasks(prevTasks => [...prevTasks, newTaskWithId]);
    setNewTask({ title: '', description: '', subject: '', type: '', occurrence: '', dueDate: '', dueTime: '' });
    setIsModalVisible(false);
  };

  const renderTask = ({ item }: { item: Task }) => (
    <View style={styles.taskContainer}>
      <Text style={styles.taskTitle}>{item.title}</Text>
      <Text style={styles.taskDescription}>{item.description}</Text>
      <Text style={styles.taskInfo}>Subject: {item.subject}</Text>
      <Text style={styles.taskInfo}>Type: {item.type}</Text>
      <Text style={styles.taskInfo}>Due: {item.dueDate} at {item.dueTime}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.timeDateContainer}>
          <Text style={styles.time}>{formattedTime}</Text>
          <Text style={styles.date}>{formattedDate}</Text>
        </View>
        <Icon name="account-circle" size={40} style={styles.profileIcon} />
      </View>

      <View style={styles.sectionDivider} />

      <View style={styles.tasksHeaderContainer}>
        <FontAwesome name="tasks" size={24} color="#43729e" style={styles.tasksHeaderIcon} />
        <Text style={styles.tasksHeader}>TASKS</Text>
      </View>

      <View style={styles.sectionDivider} />

      <View style={styles.iconButtonContainer}>
        <TouchableOpacity style={styles.addTaskButton} onPress={() => setIsModalVisible(true)}>
          <Text style={styles.addTaskText}>+</Text>
        </TouchableOpacity>
        <Text style={styles.addTaskLabel}>ADD NEW TASK</Text>
      </View>

      <FlatList 
        data={tasks} 
        keyExtractor={item => item.id} 
        renderItem={renderTask} 
        ListEmptyComponent={<Text style={styles.noTasksText}>No tasks available. Add a new task!</Text>}
      />

      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add New Task</Text>
            <TextInput 
              style={styles.input} 
              placeholder="Title" 
              value={newTask.title} 
              onChangeText={text => setNewTask({ ...newTask, title: text })} 
            />
            <TextInput 
              style={styles.input} 
              placeholder="Description" 
              value={newTask.description} 
              onChangeText={text => setNewTask({ ...newTask, description: text })} 
            />
            <TextInput 
              style={styles.input} 
              placeholder="Subject" 
              value={newTask.subject} 
              onChangeText={text => setNewTask({ ...newTask, subject: text })} 
            />
            <TextInput 
              style={styles.input} 
              placeholder="Type" 
              value={newTask.type} 
              onChangeText={text => setNewTask({ ...newTask, type: text })} 
            />
            <TextInput 
              style={styles.input} 
              placeholder="Occurrence" 
              value={newTask.occurrence} 
              onChangeText={text => setNewTask({ ...newTask, occurrence: text })} 
            />
            <TextInput 
              style={styles.input} 
              placeholder="Due Date" 
              value={newTask.dueDate} 
              onChangeText={text => setNewTask({ ...newTask, dueDate: text })} 
            />
            <TextInput 
              style={styles.input} 
              placeholder="Due Time" 
              value={newTask.dueTime} 
              onChangeText={text => setNewTask({ ...newTask, dueTime: text })} 
            />
            <View style={styles.buttonContainer}>
              <Button title="Add Task" onPress={handleAddTask} />
              <Button title="Cancel" color="red" onPress={() => setIsModalVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
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
  },
  timeDateContainer: {
    alignItems: 'flex-start',
  },
  time: {
    fontSize: 20,
    color: 'white',
  },
  date: {
    fontSize: 16,
    color: 'white',
  },
  profileIcon: {
    color: 'white',
  },
  sectionDivider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 8,
  },
  tasksHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  tasksHeaderIcon: {
    marginRight: 8,
  },
  tasksHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#43729e',
  },
  iconButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 16,
  },
  addTaskButton: {
    backgroundColor: '#43729e',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addTaskText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  addTaskLabel: {
    fontSize: 16,
    color: '#43729e',
    marginTop: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  taskContainer: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  taskDescription: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  taskInfo: {
    fontSize: 12,
    color: '#888',
  },
  noTasksText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#888',
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
});
export default TaskScreen;
