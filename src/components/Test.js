// import React, { useState } from 'react';
// import testService from '../services/testService';

// const Test = () => {
//   const [questions, setQuestions] = useState([]);
//   const [answers, setAnswers] = useState({});
//   const [score, setScore] = useState(null);

//   const handleChange = (e, questionId) => {
//     setAnswers({ ...answers, [questionId]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const calculatedScore = testService.calculateScore(questions, answers);
//     setScore(calculatedScore);
//   };

//   return (
//     <div>
//       <h2>Test</h2>
//       <form onSubmit={handleSubmit}>
//         {questions.map((question) => (
//           <div key={question.id}>
//             <p>{question.text}</p>
//             {question.options.map((option) => (
//               <label key={option}>
//                 <input
//                   type="radio"
//                   name={question.id}
//                   value={option}
//                   onChange={(e) => handleChange(e, question.id)}
//                 />
//                 {option}
//               </label>
//             ))}
//           </div>
//         ))}
//         <button type="submit">Submit</button>
//       </form>
//       {score !== null && <p>Your score is: {score}</p>}
//     </div>
//   );
// };

// export default Test;


import React, { useState, useEffect } from 'react';
import './Test.css';
import testService from '../services/testService';

const Test = ({ match }) => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const { id } = match.params;

  useEffect(() => {
    const fetchQuestions = async () => {
      const fetchedQuestions = await testService.getQuestions(id);
      setQuestions(fetchedQuestions);
    };
    fetchQuestions();
  }, [id]);

  const handleChange = (e, questionId) => {
    setAnswers({ ...answers, [questionId]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const calculatedScore = testService.calculateScore(questions, answers);
    setScore(calculatedScore);
  };

  return (
    <div className="test-container">
      <h2>Test Page</h2>
      <form onSubmit={handleSubmit}>
        {questions.map((question) => (
          <div key={question.id} className="question">
            <p>{question.text}</p>
            {question.options.map((option) => (
              <label key={option} className="option">
                <input
                  type="radio"
                  name={question.id}
                  value={option}
                  onChange={(e) => handleChange(e, question.id)}
                />
                {option}
              </label>
            ))}
          </div>
        ))}
        <button type="submit" className="btn">Submit</button>
      </form>
      {score !== null && <p className="score">Your score is: {score}</p>}
    </div>
  );
};

export default Test;
