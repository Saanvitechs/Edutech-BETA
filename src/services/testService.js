const getQuestions = async () => {
    // Fetch questions from API or mock data
    return [
      { id: 1, text: "Question 1", options: ["Option 1", "Option 2", "Option 3"], correctAnswer: "Option 1" },
      { id: 2, text: "Question 2", options: ["Option 1", "Option 2", "Option 3"], correctAnswer: "Option 2" },
      // Add more questions as needed
    ];
  };
  
  const calculateScore = (questions, answers) => {
    let score = 0;
    questions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        score += 1;
      }
    });
    return score;
  };
  
  const testService = {
    getQuestions,
    calculateScore,
  };
  
  export default testService;
  