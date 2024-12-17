export const triviaService = {
  getTriviaQuestion: async () => {
    const triviaQuestions = {
      Math: [
        {
          question: "What is the value of pi to two decimal places?",
          answers: [
            { text: "3.14", correct: true },
            { text: "3.15", correct: false },
            { text: "3.16", correct: false },
            { text: "3.17", correct: false },
          ],
        },
      ],
      History: [
        {
          question: "Who was the first President of the United States?",
          answers: [
            { text: "George Washington", correct: true },
            { text: "Thomas Jefferson", correct: false },
            { text: "Abraham Lincoln", correct: false },
            { text: "John Adams", correct: false },
          ],
        },
      ],
      Physics: [
        {
          question: "What is the speed of light?",
          answers: [
            { text: "299,792,458 m/s", correct: true },
            { text: "150,000,000 m/s", correct: false },
            { text: "300,000 m/s", correct: false },
            { text: "200,000 m/s", correct: false },
          ],
        },
        // Add more Physics questions here
      ],
      Marine_Biology: [
        // Add Marine Biology questions here
      ],
    };

    // Simulating an API call with a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Return trivia questions for the specified subject or a default question if the subject does not exist
    return  {
         question: "What is the capital of France?",  // Default question if subject not found
         answers: [
           { text: "Paris", correct: true },
           { text: "London", correct: false },
           { text: "Berlin", correct: false },
           { text: "Rome", correct: false },
         ],
       };
  },
};