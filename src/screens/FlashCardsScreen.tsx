import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const FlashcardsScreen = () => {
  const flashcards = [
    { question: 'What is React?', answer: 'A JavaScript library for building UIs' },
    { question: 'What is JSX?', answer: 'JavaScript XML, a syntax extension for JavaScript' },
    // Add more flashcards
  ];
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const nextFlashcard = () => {
    setIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    setShowAnswer(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flashcards</Text>
      <Text style={styles.questionText}>{flashcards[index].question}</Text>
      {showAnswer && <Text style={styles.answerText}>{flashcards[index].answer}</Text>}
      <TouchableOpacity onPress={toggleAnswer} style={styles.toggleButton}>
        <Text style={styles.toggleButtonText}>{showAnswer ? 'Hide Answer' : 'Show Answer'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={nextFlashcard} style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next Flashcard</Text>
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
  questionText: {
    fontSize: 18,
    marginBottom: 10,
  },
  answerText: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  toggleButton: {
    backgroundColor: '#43729e',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  toggleButtonText: {
    color: 'white',
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 5,
  },
  nextButtonText: {
    fontSize: 16,
  },
});

export default FlashcardsScreen;
