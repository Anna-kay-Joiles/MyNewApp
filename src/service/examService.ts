interface Exam {
  id: number;
  name: string;
  dueDate: string;
  duration: string;
}

interface Question {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: string;
}

export const examService = {
  // Fetch the list of exams
  fetchExams: async (): Promise<Exam[]> => {
    return [
      { id: 1, name: 'Math', dueDate: 'Dec 1, 2025', duration: '1hr 50min' },
      { id: 2, name: 'Science', dueDate: 'Dec 3, 2025', duration: '1hr 50min' },
      { id: 3, name: 'Biology', dueDate: 'Dec 5, 2025', duration: '2hr 50min' },
      { id: 4, name: 'Information Technology', dueDate: 'Dec 9, 2025', duration: '2hr 50min' },
      { id: 5, name: 'Medicine', dueDate: 'Dec 11, 2025', duration: '4hr 50min' },
      { id: 6, name: 'Finance', dueDate: 'Dec 12, 2025', duration: '1hr 50min' },
      { id: 7, name: 'Economics', dueDate: 'Dec 16, 2025', duration: '1hr 50min' },
      { id: 8, name: 'Anatomy', dueDate: 'Dec 17, 2025', duration: '1hr 50min' },
      { id: 9, name: 'Japanese', dueDate: 'Dec 18, 2025', duration: '1hr 50min' },
      { id: 10, name: 'Engineering', dueDate: 'Dec 22, 2025', duration: '3hr 50min' },
    ];
  },

  fetchQuestions: async (examId: number): Promise<Question[]> => {
    const questions: { [key: number]: Question[] } = {
      1: [
        {
          id: 1,
          question: 'What is 2 + 2?',
          answers: ['3', '4', '5', '6'],
          correctAnswer: '4',
        },
        {
          id: 2,
          question: 'What is 5 x 5?',
          answers: ['20', '25', '30', '35'],
          correctAnswer: '25',
        },
      ],
      2: [
        {
          id: 3,
          question: 'What is the chemical symbol for water?',
          answers: ['H2O', 'O2', 'CO2', 'H2O2'],
          correctAnswer: 'H2O',
        },
        {
          id: 4,
          question: 'What planet is known as the Red Planet?',
          answers: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
          correctAnswer: 'Mars',
        },
      ],
    };

    return questions[examId] || [];
  },

  checkAnswer: (questionId: number, answer: string): boolean => {
    const correctAnswers: { [key: number]: string } = {
      1: '4', // Correct answer for question 1
      2: '25', // Correct answer for question 2
      3: 'H2O', // Correct answer for question 3
      4: 'Mars', // Correct answer for question 4
    };

    return correctAnswers[questionId] === answer;
  },
};
