import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const HelpScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Help & Instructions</Text>

      <Text style={styles.sectionTitle}>Getting Started</Text>
      <Text style={styles.helpText}>
       Once you're logged in, you can access various study materials and
        track your progress.
      </Text>

      <Text style={styles.sectionTitle}>Navigation</Text>
      <Text style={styles.helpText}>
        The app is organized into different sections. Use the bottom navigation
        bar to switch between the Home, Study, and Profile sections.
      </Text>

      <Text style={styles.sectionTitle}>Study Tips</Text>
      <Text style={styles.helpText}>
        1. Set a specific study goal before you begin.{' '}
        <Text style={styles.importantText}>Be clear about your objective.</Text>
      </Text>
      <Text style={styles.helpText}>
        2. Take regular breaks to stay focused and avoid burnout.
      </Text>
      <Text style={styles.helpText}>
        3. Use the app's flashcards and quizzes to reinforce learning.
      </Text>

      <Text style={styles.sectionTitle}>FAQ</Text>
      <Text style={styles.helpText}>
        <Text style={styles.questionText}>Q: How can I reset my password?</Text>
        {'\n'}A: Go to your profile, select "Settings," and choose "Reset
        Password."
      </Text>

      <Text style={styles.helpText}>
        <Text style={styles.questionText}>Q: How do I track my progress?</Text>
        {'\n'}A: In the Profile section, you'll find detailed statistics and
        achievements based on your study activities.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  helpText: {
    fontSize: 16,
    marginBottom: 10,
  },
  importantText: {
    fontWeight: 'bold',
    color: '#FF6347', 
  },
  questionText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default HelpScreen;
