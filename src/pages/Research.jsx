import React from "react";

function Research() {
  return (
    <div className="p-10 bg-gray-50 dark:bg-slate-900 min-h-screen">
      
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Research & Innovation
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {/* AI & ML */}
        <div className="bg-white dark:bg-slate-800 p-6 shadow rounded-xl transition hover:shadow-lg">
          <h2 className="font-semibold text-lg text-gray-900 dark:text-white">
            AI & ML
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Advanced research in artificial intelligence.
          </p>
        </div>

        {/* Renewable Energy */}
        <div className="bg-white dark:bg-slate-800 p-6 shadow rounded-xl transition hover:shadow-lg">
          <h2 className="font-semibold text-lg text-gray-900 dark:text-white">
            Renewable Energy
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Focus on sustainable energy solutions.
          </p>
        </div>

        {/* Healthcare Tech */}
        <div className="bg-white dark:bg-slate-800 p-6 shadow rounded-xl transition hover:shadow-lg">
          <h2 className="font-semibold text-lg text-gray-900 dark:text-white">
            Healthcare Tech
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Innovations in medical technology.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Research;