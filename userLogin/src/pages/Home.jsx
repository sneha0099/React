import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-teal-500">
            <img
                src="https://images.pexels.com/photos/1276518/pexels-photo-1276518.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Nature Background"
                className="absolute inset-0 object-cover w-full h-full opacity-60"
            />
            <div className="relative bg-green-300 p-8 rounded-lg shadow-lg w-full max-w-md mx-4 md:mx-0">
                <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Welcome to Our App</h1>
                <p className="text-lg mb-6 text-center text-gray-700">
                    We are thrilled to have you here! Explore our platform and take advantage of the features we offer. Get started by logging in or signing up.
                </p>
                <div className="flex flex-col items-center space-y-4">
                    <Link
                        to="/login"
                        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md text-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Login
                    </Link>
                    <Link
                        to="/signup"
                        className="w-full py-2 px-4 bg-pink-600 text-white font-semibold rounded-md shadow-md text-center hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                    >
                        Sign Up
                    </Link>
                </div>
                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-600">
                        Have questions? Feel free to <a href="mailto:support@example.com" className="text-blue-500 hover:underline">contact us</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};
