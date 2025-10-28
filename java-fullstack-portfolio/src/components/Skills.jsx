import React from 'react';

export default function Skills() {
  const skills = {
    Backend: ['Java', 'Spring Boot', 'JPA', 'Hibernate'],
    Frontend: ['React', 'HTML', 'CSS', 'JavaScript'],
    Database: ['MySQL', 'PostgreSQL', 'MongoDB'],
    Tools: ['Git', 'Docker', 'Maven', 'AWS']
  };

  return (
    <section id='skills' className='bg-gray-950 text-gray-100 py-20 px-6'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-3xl font-semibold text-blue-400 mb-10'>Skills</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className='text-xl font-semibold mb-3 text-blue-300'>{category}</h3>
              <ul className='list-disc list-inside text-gray-300'>
                {items.map(skill => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
