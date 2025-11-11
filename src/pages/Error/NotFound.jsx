import React from 'react';
import { RiErrorWarningLine } from 'react-icons/ri';
import { Link } from 'react-router';

const NotFound = () => {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
        <RiErrorWarningLine className="text-red-600 text-6xl mb-6" />
        <h1 className="text-5xl font-bold mb-4 text-center">404</h1>
        <p className="text-xl text-gray-700 mb-6 text-center">
          Oops! The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition-colors duration-300"
        >
          Go Back Home
        </Link>
      </div>
    );
};

export default NotFound;