import React from 'react';
import Card from '../components/ui/Card';

const alumni = [
  {
    id: 1,
    name: 'Rohit Sharma',
    company: 'Google',
    image: '/images/alumni/rohit.jpg',
  },
  {
    id: 2,
    name: 'Ananya Reddy',
    company: 'Amazon',
    image: '/images/alumni/ananya.jpg',
  },
  {
    id: 3,
    name: 'Karthik Nair',
    company: 'Startup Founder',
    image: '/images/alumni/karthik.jpg',
  },
];

export default function Alumni() {
  return (
    <div
      className="section-padding"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="container-max">

        {/* Heading */}
        <h1 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white">
          Our Alumni
        </h1>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {alumni.map((person) => (
            <Card key={person.id} className="text-center">

              {/* Profile Image */}
              <img
                src={person.image}
                alt={person.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border border-gray-200 dark:border-slate-600"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/100";
                }}
              />

              {/* Name */}
              <h2 className="font-semibold text-gray-900 dark:text-white">
                {person.name}
              </h2>

              {/* Company */}
              <p className="text-gray-600 dark:text-gray-300">
                {person.company}
              </p>

            </Card>
          ))}
        </div>

      </div>
    </div>
  );
}