import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Layout from './Layout';

const ScoreSummaryPage = () => {
    const location = useLocation();
    const { score, total } = location.state;

    return (
        <Layout>
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Quiz Completed!</h2>
                <p className="text-lg text-gray-700">Your Score: {score} / {total}</p>
                <Link to={"/"}>
                    <button className='mt-5 border p-3 px-6 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-600 hover:to-purple-600 text-white transition-all duration-300'>
                        Go Back to Quizzes
                    </button>
                </Link>
            </div>
        </Layout>
    );
};

export default ScoreSummaryPage;
