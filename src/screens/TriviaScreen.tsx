import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { triviaService } from '../service/triviaService';

interface Answer {
  text: string;
  correct: boolean;
}

interface Trivia {
  question: string;
  answers: Answer[];
}

const TriviaScreen = () => {
  const [trivia, setTrivia] = useState<Trivia | null>(null); 
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetchTrivia();
  }, []);

  const fetchTrivia = async () => {
    const data = await triviaService.getTriviaQuestion();
    setTrivia(data); 
  };

  const handleAnswer = (correct: boolean) => {
    if (correct) {
      setScore(score + 1);
    }
    fetchTrivia();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trivia</Text>
      {trivia ? (
        <View>
          <Text style={styles.questionText}>{trivia.question}</Text>
          {trivia.answers.map((ans, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleAnswer(ans.correct)}
              style={styles.answerButton}>
              <Text style={styles.answerText}>{ans.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
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
  questionText: {
    fontSize: 18,
    marginBottom: 10,
  },
  answerButton: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    marginBottom: 8,
    borderRadius: 5,
  },
  answerText: {
    fontSize: 16,
  },
  score: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default TriviaScreen;
