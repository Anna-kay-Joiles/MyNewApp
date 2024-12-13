

export const examService = {
    async fetchQuestions() {

      return [
        {
          id: 1,
          question: 'What is 2 + 2?',
          answers: ['3', '4', '5'],
          correctAnswer: '4',
        },
        {
          id: 2,
          question: 'What is the capital of France?',
          answers: ['Paris', 'London', 'Berlin'],
          correctAnswer: 'Paris',
        },
      ];
    },
  
    checkAnswer(questionId, answer) {

      const questions = [
        { id: 1, correctAnswer: '4' },
        { id: 2, correctAnswer: 'Paris' },
      ];
      const question = questions.find((q) => q.id === questionId);
      return question && question.correctAnswer === answer;
    },
  };
  