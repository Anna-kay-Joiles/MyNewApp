import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { examService } from '../service/examService'; 

interface Question {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: string;
}

interface Exam {
  id: number;
  name: string;
  dueDate: string;
  duration: string;
}

const ExamScreen = () => {
  const [exams, setExams] = useState<Exam[]>([
    { id: 1, name: 'Math', dueDate: 'Dec 1, 2025', duration: '1hr 50min' },
    { id: 2, name: 'Science', dueDate: 'Dec 3, 2025', duration: '1hr 50min' },
    { id: 3, name: 'Biology', dueDate: 'Dec 5, 2025', duration: '2hr 50min' },
  ]);
  const [selectedExam, setSelectedExam] = useState<Exam | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [score, setScore] = useState<number>(0);
  const [wrongAnswers, setWrongAnswers] = useState<number[]>([]); 

  const [examAttempts, setExamAttempts] = useState<{ [key: number]: number }>({});

  const startExam = async (exam: Exam) => {
    const data = await examService.fetchQuestions(exam.id);
    setSelectedExam(exam);
    setQuestions(data);
    setScore(0); 
    setWrongAnswers([]); 

    setExamAttempts((prev) => ({
      ...prev,
      [exam.id]: (prev[exam.id] || 0) + 1,
    }));
  };

  const handleAnswer = (questionId: number, answer: string): void => {
    const correct = examService.checkAnswer(questionId, answer);
    if (!correct) {
      setWrongAnswers((prev) => [...prev, questionId]); 
    } else {
      setScore(score + 1); 
    }
  };

  const renderExamList = () => (
    <ScrollView style={styles.examListContainer}>
      {exams.map((exam) => (
        <TouchableOpacity
          key={exam.id}
          style={styles.examItem}
          onPress={() => startExam(exam)}
        >
          <Text style={styles.examName}>{exam.name}</Text>
          <Text style={styles.examDetails}>
            Due: {exam.dueDate} | Time: {exam.duration}
          </Text>
          <Text style={styles.examDetails}>
            Attempts: {examAttempts[exam.id] || 0}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  const renderQuestions = () => (
    <ScrollView style={styles.questionsContainer}>
      <Text style={styles.examTitle}>{selectedExam?.name} Questions</Text>
      {questions.map((q, index) => (
        <View key={index} style={styles.questionItem}>
          <Text style={styles.questionText}>{q.question}</Text>
          {q.answers.map((ans, ansIndex) => (
            <TouchableOpacity
              key={ansIndex}
              onPress={() => handleAnswer(q.id, ans)}
              style={styles.answerButton}
            >
              <Text style={styles.answerText}>{ans}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
      <Text style={styles.score}>Score: {score}</Text>
      <TouchableOpacity
        onPress={() => setSelectedExam(null)}
        style={styles.goBackButton}
      >
        <Text style={styles.goBackText}>Go Back to Exam List</Text>
      </TouchableOpacity>
    </ScrollView>
  );

  const renderFeedback = () => (
    <View style={styles.feedbackContainer}>
      <Text style={styles.feedbackTitle}>Exam Finished</Text>
      <Text style={styles.feedbackText}>Your Score: {score}</Text>
      <Text style={styles.feedbackText}>
        Incorrect Answers: {wrongAnswers.length}
      </Text>
      <Text style={styles.feedbackText}>Wrong Answer Question IDs: {wrongAnswers.join(', ')}</Text>
      <TouchableOpacity
        onPress={() => setSelectedExam(null)}
        style={styles.goBackButton}
      >
        <Text style={styles.goBackText}>Go Back to Exam List</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Upcoming Exams</Text>
      </View>
      {!selectedExam ? renderExamList() : questions.length > 0 ? renderQuestions() : renderFeedback()}
    </View>
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
  examListContainer: {
    marginBottom: 20,
  },
  examItem: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  examName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  examDetails: {
    fontSize: 14,
    color: '#555',
  },
  questionsContainer: {
    marginTop: 20,
  },
  examTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
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
  goBackButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  goBackText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  feedbackContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  feedbackTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  feedbackText: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default ExamScreen;
