import { Link } from 'react-router-dom';
import Layout from './Layout';  
const quizzes = [
    { id: 1, title: "General Knowledge", description: "Test your general knowledge" },
    { id: 2, title: "Math Quiz", description: "Challenge yourself with math questions" }
];

const QuizList = () => {
    return (
        <Layout>
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl mx-auto">
                <h2 className="text-4xl mb-6 font-extrabold text-gray-800 text-center">Available Quizzes</h2>
                <ul className="space-y-6">
                    {quizzes.map(quiz => (
                        <li key={quiz.id} className="border p-5 rounded-xl shadow-lg border-blue-700">
                            <h3 className="text-2xl font-bold">{quiz.title}</h3>
                            <p className="">{quiz.description}</p>
                            <Link to={`/quiz/${quiz.id}`} className=" inline-block  p-3 px-6 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 mt-3 text-white text-xl text-bold ">
                                Start Quiz
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export default QuizList;
