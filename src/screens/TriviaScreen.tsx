import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const triviaData = {
  Math: [
    { question: 'What is 2 + 2?', options: ['3', '4', '5'], correctAnswer: '4' },
    { question: 'What is the square root of 16?', options: ['2', '3', '4'], correctAnswer: '4' },
  ],
  'Marine Biology': [
    { question: 'What is the largest ocean on Earth?', options: ['Atlantic', 'Indian', 'Pacific'], correctAnswer: 'Pacific' },
    { question: 'What is the largest animal in the ocean?', options: ['Shark', 'Whale', 'Dolphin'], correctAnswer: 'Whale' },
  ],
  'Physics': [
    { question: 'What is the force that pulls objects toward Earth?', options: ['Magnetism', 'Gravity', 'Friction'], correctAnswer: 'Gravity' },
    { question: 'What is the speed of light in a vacuum?', options: ['3 x 10^8 m/s', '3 x 10^6 m/s', '3 x 10^9 m/s'], correctAnswer: '3 x 10^8 m/s' },
  ],
  'Medicine': [
    { question: 'What is the main function of red blood cells?', options: ['Oxygen transport', 'Digest food', 'Fight infections'], correctAnswer: 'Oxygen transport' },
    { question: 'What is the largest organ in the human body?', options: ['Brain', 'Liver', 'Skin'], correctAnswer: 'Skin' },
  ],
 ' Python': [
    { question: 'What is the correct syntax to output "Hello World" in Python?', options: ['echo("Hello World")', 'print("Hello World")', 'console.log("Hello World")'], correctAnswer: 'print("Hello World")' },
    { question: 'Which data type is used to store a sequence of characters in Python?', options: ['String', 'List', 'Tuple'], correctAnswer: 'String' },
  ],
  'Java': [
    { question: 'Which method is used to start a thread in Java?', options: ['start()', 'run()', 'execute()'], correctAnswer: 'start()' },
    { question: 'What does JVM stand for?', options: ['Java Visual Machine', 'Java Variable Manager', 'Java Virtual Machine'], correctAnswer: 'Java Virtual Machine' },
  ],
  'Japanese': [
    { question: 'What is the Japanese word for "thank you"?', options: ['Arigato', 'Konbanwa', 'Konnichiwa'], correctAnswer: 'Arigato' },
    { question: 'Which writing system is primarily used for Japanese words of foreign origin?', options: ['Hiragana', 'Katakana', 'Kanji'], correctAnswer: 'Katakana' },
  ],
  'Literature': [
    { question: 'Who wrote "Romeo and Juliet"?', options: ['Shakespeare', 'Dickens', 'Hemingway'], correctAnswer: 'Shakespeare' },
    { question: 'What is the main theme of "1984" by George Orwell?', options: ['Freedom', 'Totalitarianism', 'Love'], correctAnswer: 'Totalitarianism' },
  ],
 ' History': [
    { question: 'Who was the first president of the United States?', options: ['Abraham Lincoln', 'George Washington', 'Thomas Jefferson'], correctAnswer: 'George Washington' },
    { question: 'In what year did World War II end?', options: ['1945', '1940', '1950'], correctAnswer: '1945' },
  ],
  'Engineering': [
    { question: 'What is the unit of electrical resistance?', options: ['Ohm', 'Volt', 'Ampere'], correctAnswer: 'Ohm' },
    { question: 'Which material is commonly used for electrical wiring?', options: ['Copper', 'Wood', 'Plastic'], correctAnswer: 'Copper' },
  ],
  'Chemistry': [
    { question: 'What is the chemical symbol for water?', options: ['O2', 'H2O', 'CO2'], correctAnswer: 'H2O' },
    { question: 'What is the pH level of pure water?', options: ['7', '10', '3'], correctAnswer: '7' },
  ],
  'Astronomy': [
    { question: 'What is the closest planet to the Sun?', options: ['Earth', 'Venus', 'Mercury'], correctAnswer: 'Mercury' },
    { question: 'Which planet is known as the Red Planet?', options: ['Mars', 'Saturn', 'Jupiter'], correctAnswer: 'Mars' },
  ],
  'Radiology': [
    { question: 'What is commonly used to detect fractures in bones?', options: ['MRI', 'CT scan', 'X-ray'], correctAnswer: 'X-ray' },
    { question: 'What does MRI stand for?', options: ['Magnetic Resonance Imaging', 'Mechanical Radiology Imaging', 'Micro Resonance Imaging'], correctAnswer: 'Magnetic Resonance Imaging' },
  ],
  'Ecosystems': [
    { question: 'What is the main source of energy for most ecosystems?', options: ['Sunlight', 'Wind', 'Soil'], correctAnswer: 'Sunlight' },
    { question: 'What is the process by which plants make their own food?', options: ['Photosynthesis', 'Respiration', 'Digestion'], correctAnswer: 'Photosynthesis' },
  ],
  'Accounting': [
    { question: 'What does CPA stand for in accounting?', options: ['Certified Public Accountant', 'Certified Public Auditor', 'Certified Professional Accountant'], correctAnswer: 'Certified Public Accountant' },
    { question: 'Which financial statement shows a company’s revenue and expenses?', options: ['Balance Sheet', 'Income Statement', 'Cash Flow Statement'], correctAnswer: 'Income Statement' },
  ],
 ' Economics': [
    { question: 'What is the law of supply and demand?', options: ['Prices increase as supply increases', 'Prices increase as demand decreases', 'Prices increase as demand increases'], correctAnswer: 'Prices increase as demand increases' },
    { question: 'What does GDP stand for?', options: ['Gross Domestic Product', 'Gross Domestic Purchase', 'General Development Process'], correctAnswer: 'Gross Domestic Product' },
  ],
  'Finance': [
    { question: 'What is the purpose of diversification in investing?', options: ['Increase risk', 'Reduce risk', 'Eliminate risk'], correctAnswer: 'Reduce risk' },
    { question: 'What is the term for a financial asset that can be quickly converted to cash?', options: ['Liquid asset', 'Fixed asset', 'Intangible asset'], correctAnswer: 'Liquid asset' },
  ],
  'Cardiology': [
    { question: 'What part of the heart pumps oxygenated blood to the body?', options: ['Right Atrium', 'Left Ventricle', 'Right Ventricle'], correctAnswer: 'Left Ventricle' },
    { question: 'What is the medical term for a heart attack?', options: ['Arrhythmia', 'Angina', 'Myocardial Infarction'], correctAnswer: 'Myocardial Infarction' },
  ],
  'GameTheory': [
    { question: 'What is a Nash equilibrium in game theory?', options: ['A strategy where players can’t improve their outcome', 'A strategy where one player always wins', 'A strategy where players cooperate'], correctAnswer: 'A strategy where players can’t improve their outcome' },
    { question: 'In which type of game theory is a "zero-sum" scenario analyzed?', options: ['Cooperative', 'Non-cooperative', 'Competitive'], correctAnswer: 'Competitive' },
  ],
  'Neurology': [
    { question: 'What part of the brain controls voluntary movement?', options: ['Medulla Oblongata', 'Cerebellum', 'Motor Cortex'], correctAnswer: 'Motor Cortex' },
    { question: 'What is the name of the protective layer around the brain?', options: ['Meninges', 'Cortex', 'Axons'], correctAnswer: 'Meninges' },
  ],
  'Anatomy': [
    { question: 'How many bones are in the adult human body?', options: ['206', '210', '202'], correctAnswer: '206' },
    { question: 'Which part of the brain controls balance and coordination?', options: ['Cerebellum', 'Cerebrum', 'Medulla Oblongata'], correctAnswer: 'Cerebellum' },
  ],
  'Law': [
    { question: 'What is the highest court in the United States?', options: ['Supreme Court', 'Federal Court', 'District Court'], correctAnswer: 'Supreme Court' },
    { question: 'What is the main purpose of criminal law?', options: ['To protect individuals', 'To punish offenders', 'To enforce contracts'], correctAnswer: 'To protect individuals' },
  ],
};

const subjects = Object.keys(triviaData); 

const TriviaScreen = () => {
  const [score, setScore] = useState(0);

  const handleSubjectPress = (subject: string) => {
    console.log(`Navigating to trivia for: ${subject}`);
    
  };

  const handleCreateTrivia = () => {
    console.log('Navigating to create trivia screen');
    
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

      {/* Grid of subjects */}
      <FlatList
        data={subjects}
        renderItem={renderSubjectBox}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2} 
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
    paddingHorizontal: 10,
  },
  subjectBox: {
    backgroundColor: '#e0e0e0',
    padding: 20,  
    margin: 10,
    borderRadius: 10,
    width: 150, 
    height: 100, 
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, 
  },
  subjectText: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  score: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default TriviaScreen;
