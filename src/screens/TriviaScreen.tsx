import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { triviaService } from '../service/triviaService';

const subjects = [
  'Math', 'Marine Biology', 'Physics', 'Medicine', 'Law', 
  'Python', 'Java', 'Japanese', 'Literature', 'History', 
  'Engineering', 'Chemistry', 'Astronomy', 'Radiology', 
  'Ecosystems', 'Accounting', 'Economics', 'Finance', 
  'Cardiology', 'Game Theory'
];

const TriviaScreen = () => {
  // State for scores and trivia questions can be kept as you implemented
  const [score, setScore] = useState(0);
  
  // Function to handle subject selection
  const handleSubjectPress = (subject: string) => {
    console.log(`Navigating to trivia for: ${subject}`);
    // Navigate to a new screen with trivia questions by subject
    // For example: navigation.navigate('SubjectTrivia', { subject });
  };

  const handleCreateTrivia = () => {
    console.log('Navigating to create trivia screen');
    // Navigate to create trivia logic
    // For example: navigation.navigate('CreateTrivia');
  };

  const renderSubjectBox = ({ item }: { item: string }) => (
    <TouchableOpacity style={styles.subjectBox} onPress={() => handleSubjectPress(item)}>
      <Text style={styles.subjectText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trivia</Text>
      
      {/* Create trivia button */}
      <TouchableOpacity style={styles.createTriviaButton} onPress={handleCreateTrivia}>
        <Text style={styles.createTriviaText}>Create Trivia</Text>
      </TouchableOpacity>
        
      {/* Header for filtering or additional features can be added here */}

      {/* Grid of subjects */}
      <FlatList
        data={subjects}
        renderItem={renderSubjectBox}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2} // Two columns layout
        contentContainerStyle={styles.grid}
      />

      <Text style={styles.score}>Score: {score}</Text>
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
  createTriviaButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  createTriviaText: {
    color: '#fff',
    fontSize: 18,
  },
  grid: {
    alignItems: 'center',
  },
  subjectBox: {
    backgroundColor: '#e0e0e0',
    padding: 30,
    margin: 10,
    borderRadius: 5,
    flex: 1, // to make boxes responsive
    justifyContent: 'center',
    alignItems: 'center',
  },
  subjectText: {
    fontSize: 16,
  },
  score: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default TriviaScreen;