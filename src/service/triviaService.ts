// src/services/triviaService.ts
export const triviaService = {
    getTriviaQuestion: async () => {
      // Example: Fetch trivia question from an API or static source
      const data = {
        question: "What is the capital of France?",
        answers: [
          { text: "Paris", correct: true },
          { text: "London", correct: false },
          { text: "Berlin", correct: false },
          { text: "Rome", correct: false },
        ],
      };
      return data;
    },
  };
  