import React from "react";

const DepartmentDetails = ({ name }) => {
  return (
    <div className="mt-8 bg-[#0f172a] p-6 md:p-10 rounded-2xl shadow-xl border border-gray-700">

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
        {name} Department
      </h1>

      {/* About */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-blue-400 mb-2">
          About
        </h2>
        <p className="text-gray-300 leading-relaxed">
          The {name} department offers cutting-edge education with a focus on
          innovation, research, and real-world application. Students are trained
          with industry-relevant skills and modern technologies.
        </p>
      </div>

      {/* Vision */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-blue-400 mb-2">
          Vision
        </h2>
        <p className="text-gray-300 leading-relaxed">
          To be a center of excellence in {name.toLowerCase()} by fostering
          creativity, leadership, and impactful research for global development.
        </p>
      </div>

      {/* Programs */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-blue-400 mb-2">
          Programs & Curriculum
        </h2>
        <ul className="list-disc ml-6 text-gray-300 space-y-1">
          <li>Bachelor’s Degree Programs</li>
          <li>Master’s Degree Programs</li>
          <li>Doctoral (PhD) Programs</li>
          <li>Industry-focused Certifications</li>
        </ul>
      </div>

      {/* Faculty */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-blue-400 mb-2">
          Faculty List & Profiles
        </h2>
        <p className="text-gray-300">
          Our faculty includes experienced professors, researchers, and industry
          experts dedicated to mentoring students and advancing knowledge.
        </p>
      </div>

      {/* Labs & Research */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-blue-400 mb-2">
          Labs, Research & Achievements
        </h2>
        <p className="text-gray-300">
          The department is equipped with advanced laboratories and actively
          participates in groundbreaking research projects, publications, and
          international collaborations.
        </p>
      </div>

      {/* Contact */}
      <div>
        <h2 className="text-xl font-semibold text-blue-400 mb-2">
          Contact (HOD)
        </h2>
        <p className="text-gray-300">
          Head of Department <br />
          Email: hod@university.edu <br />
          Phone: +91 98765 43210
        </p>
      </div>

    </div>
  );
};

export default DepartmentDetails;