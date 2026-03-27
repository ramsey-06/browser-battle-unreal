import React from "react";

function Placement() {
  return (
    <div className="p-10 bg-gray-50 dark:bg-slate-900 min-h-screen">
      
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Placements
      </h1>

      {/* Stats Card */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow mb-6 transition hover:shadow-lg">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          Stats
        </h2>
        <p className="text-gray-700 dark:text-gray-300">Highest Package: ₹45 LPA</p>
        <p className="text-gray-700 dark:text-gray-300">Average Package: ₹8.5 LPA</p>
        <p className="text-gray-700 dark:text-gray-300">Placement Rate: 92%</p>
      </div>

      {/* Recruiters Card */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow transition hover:shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          Top Recruiters
        </h2>

        <div className="flex gap-3 flex-wrap">
          <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-3 py-1 rounded">
            Google
          </span>
          <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-3 py-1 rounded">
            Microsoft
          </span>
          <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-3 py-1 rounded">
            Amazon
          </span>
        </div>
      </div>

    </div>
  );
}

export default Placement;