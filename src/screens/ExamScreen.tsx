import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { examService } from '../service/examService';

interface Question {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: string;
}

const ExamScreen = () => {
  const [questions, setQuestions] = useState<Question[]>([]); 
  const [score, setScore] = useState<number>(0); 

  const startExam = async () => {
    const data = await examService.fetchQuestions();
    setQuestions(data);
  };


  const handleAnswer = (questionId: number, answer: string): void => {
    const correct = examService.checkAnswer(questionId, answer);
    if (correct) {
      setScore(score + 1);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Exam</Text>
      </View>

      <TouchableOpacity style={styles.startButton} onPress={startExam}>
        <Text style={styles.buttonText}>Start Exam</Text>
      </TouchableOpacity>

      {questions.length > 0 && (
        <View style={styles.questionsContainer}>
          {questions.map((q, index) => (
            <View key={index} style={styles.questionItem}>
              <Text style={styles.questionText}>{q.question}</Text>
              {q.answers.map((ans, ansIndex) => (
                <TouchableOpacity
                  key={ansIndex}
                  onPress={() => handleAnswer(q.id, ans)} 
                  style={styles.answerButton}>
                  <Text style={styles.answerText}>{ans}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      )}

      <Text style={styles.score}>Score: {score}</Text>
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
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  startButton: {
    backgroundColor: '#43729e',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  questionsContainer: {
    marginTop: 20,
  },
  questionItem: {
    marginBottom: 15,
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
    textAlign: 'center',
    marginTop: 20,
  },
});

export default ExamScreen;
