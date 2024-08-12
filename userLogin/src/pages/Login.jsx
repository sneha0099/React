import React from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-teal-500">
            <img
                src="https://i.pinimg.com/originals/0a/77/a4/0a77a4981adca68e5f236af4ab186371.png"
                alt="Nature Background"
                className="absolute inset-0 object-cover w-full h-full opacity-50"
            />
            <div className="relative bg-transeprent  p-8 rounded-lg shadow-lg border border-white/70 w-full max-w-md mx-4 md:mx-0">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-600">
                    Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
                </p>
            </div>
        </div>
    );
};
