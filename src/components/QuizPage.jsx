import  { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from './Layout'; 

const quizData = {
  1: [
    { question: "What is the capital of France?", options: ["Paris", "London", "Berlin"], correct: "Paris" },
    { question: "What is 2+2?", options: ["3", "4", "5"], correct: "4" },
    { question: "What is the largest planet in our solar system?", options: ["Earth", "Jupiter", "Mars"], correct: "Jupiter" },
    { question: "What is the boiling point of water?", options: ["100°C", "90°C", "80°C"], correct: "100°C" },
    { question: "What is the square root of 49?", options: ["6", "7", "8"], correct: "7" },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Saturn"], correct: "Mars" },
    { question: "What is 5 x 6?", options: ["30", "25", "35"], correct: "30" },
    { question: "Who wrote 'Hamlet'?", options: ["Shakespeare", "Dickens", "Hemingway"], correct: "Shakespeare" },
    { question: "What is the currency of the USA?", options: ["Dollar", "Euro", "Yen"], correct: "Dollar" },
    { question: "How many states are there in the USA?", options: ["50", "51", "52"], correct: "50" }
  ],
  2: [
    { question: "What is 10/2?", options: ["5", "6", "7"], correct: "5" },
    { question: "What is 3*3?", options: ["6", "8", "9"], correct: "9" },
    { question: "What is 15 - 7?", options: ["6", "7", "8"], correct: "8" },
    { question: "What is 12 + 8?", options: ["20", "18", "22"], correct: "20" },
    { question: "What is 9 squared?", options: ["81", "72", "90"], correct: "81" },
    { question: "What is the value of π (pi)?", options: ["3.14", "3.16", "3.12"], correct: "3.14" },
    { question: "What is 4 x 4?", options: ["12", "16", "20"], correct: "16" },
    { question: "What is 100 divided by 4?", options: ["20", "25", "30"], correct: "25" },
    { question: "What is the remainder of 10 divided by 3?", options: ["2", "1", "3"], correct: "1" },
    { question: "What is 7 + 5?", options: ["11", "12", "13"], correct: "12" }
  ]
};

const QuizPage = () => {
  const { id } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const navigate = useNavigate();

  const handleAnswerClick = (answer) => {
    if (answer === quizData[id][currentQuestion].correct) {
      setScore((prevScore) => prevScore + 1);  
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData[id].length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      navigate('/score', { state: { score: score + (answer === quizData[id][currentQuestion].correct ? 1 : 0), total: quizData[id].length } });
    }
  };

  return (
    <Layout>
      {!showScore && (
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            {quizData[id][currentQuestion].question}
          </h2>
          <ul className="space-y-4">
            {quizData[id][currentQuestion].options.map(option => (
              <li key={option}>
                <button
                  onClick={() => handleAnswerClick(option)}
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Layout>
  );
};

export default QuizPage;
