import React from "react";
import { useParams } from "react-router-dom";
import { departmentsData } from "../../data/departmentsData";

const DepartmentDetails = () => {
  const { name } = useParams();

  const dept = departmentsData.find(d => d.slug === name);

  if (!dept) {
    return (
      <div className="text-center mt-20 text-red-500 text-xl">
        Department not found
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white mb-3">
          {dept.name} Department
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl">
          {dept.about}
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-8">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          {/* Vision */}
          <div className="bg-[#0f172a] p-6 rounded-xl shadow border border-gray-700">
            <h2 className="text-lg font-semibold text-blue-400 mb-2">
              Vision
            </h2>
            <p className="text-gray-300">{dept.vision}</p>
          </div>

          {/* Programs */}
          <div className="bg-[#0f172a] p-6 rounded-xl shadow border border-gray-700">
            <h2 className="text-lg font-semibold text-blue-400 mb-2">
              Programs & Curriculum
            </h2>
            <ul className="list-disc ml-6 text-gray-300 space-y-1">
              {dept.programs.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>

          {/* Labs */}
          <div className="bg-[#0f172a] p-6 rounded-xl shadow border border-gray-700">
            <h2 className="text-lg font-semibold text-blue-400 mb-2">
              Labs & Research
            </h2>
            <p className="text-gray-300">{dept.labs}</p>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* Faculty */}
          <div className="bg-[#0f172a] p-6 rounded-xl shadow border border-gray-700">
            <h2 className="text-lg font-semibold text-blue-400 mb-3">
              Faculty
            </h2>
            <ul className="space-y-2 text-gray-300">
              {dept.faculty.map((f, i) => (
                <li key={i} className="border-b border-gray-700 pb-2">
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact (FIXED SAME COLOR) */}
          <div className="bg-[#0f172a] p-6 rounded-xl shadow border border-gray-700 hover:border-blue-500 transition">
            <h2 className="text-lg font-semibold text-blue-400 mb-2">
              Contact (HOD)
            </h2>
            <p className="text-gray-300">
              {dept.hod} <br />
              {dept.email} <br />
              {dept.phone}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default DepartmentDetails;