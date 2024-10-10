import { Link } from "react-router-dom";
import Layout from './Layout';  // Import Layout component

const HomePage = () => {
    return (
        <Layout>
            <div className='flex flex-col gap-5 justify-center items-center bg-white p-10 rounded-lg shadow-lg max-w-lg w-full'>
                <h1 className="font-extrabold text-5xl text-gray-800 text-center">Quiz Application</h1>
                <Link to={"/quizlist"}>
                    <button className='border p-3 px-6 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white text-2xl font-bold hover:from-blue-600 hover:to-purple-600 transition-all duration-300'>
                        Start Quiz
                    </button>
                </Link>
            </div>
        </Layout>
    )
}

export default HomePage;
