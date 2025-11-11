import React from 'react';
import {       RiArticleLine, RiNewspaperLine, RiSeedlingLine } from 'react-icons/ri';

const AgroNews = () => {
    return (
      <div className="py-16 bg-green-50">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-10 flex justify-center items-center gap-2">
          <RiArticleLine className="text-green-600 text-4xl" />
          Latest Agro News & Blogs
        </h2>

        {/* News Cards */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 px-6">
          {/* Blog 1 */}
          <div className="card bg-white p-6 shadow-md hover:shadow-lg rounded-xl text-center flex-1">
            <img
              src="https://i.ibb.co.com/d4XQmchz/cow.jpg"
              alt="Cow Farm img"
              className="rounded-lg mb-4 h-48 w-full object-cover"
            />
            <RiSeedlingLine className="text-green-600 text-4xl mx-auto mb-2" />
            <h3 className="font-semibold text-lg mb-2">
              Borishal Cow Farm Expands with Modern Practices
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Discover how cow farmers in Borishal are improving productivity
              and sustainability using innovative farm management techniques.
            </p>
            <button className="text-green-600 font-medium hover:underline">
              Read More..
            </button>
          </div>

          <div className="card bg-white p-6 shadow-md hover:shadow-lg rounded-xl text-center flex-1">
            <img
              src="https://i.ibb.co.com/ZR5fC5WT/organic-farmar.jpg"
              alt="Organic img"
              className="rounded-lg mb-4 h-48 w-full object-cover"
            />
            <RiNewspaperLine className="text-green-600 text-4xl mx-auto mb-2" />
            <h3 className="font-semibold text-lg mb-2">
              Organic Fertilizer Trends in Bangladesh
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Discover how organic farming is changing Bangladesh’s agricultural
              future.
            </p>
            <button className="text-green-600 font-medium hover:underline">
              Read More ...
            </button>
          </div>

          {/* Blog 3 */}
          <div className="card bg-white p-6 shadow-md hover:shadow-lg rounded-xl text-center flex-1">
            <img
              src="https://i.ibb.co.com/W4s8FM50/ai-image.jpg"
              alt="AI-Agri-img"
              className="rounded-lg mb-4 h-48 w-full object-cover"
            />
            <RiArticleLine className="text-green-600 text-4xl mx-auto mb-2" />
            <h3 className="font-semibold text-lg mb-2">
              AI in Agriculture — The Smart Future
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Artificial Intelligence is empowering farmers with predictive data
              & automation.
            </p>
            <button className="text-green-600 font-medium hover:underline">
              Read More....
            </button>
          </div>
        </div>
      </div>
    );
};

export default AgroNews;