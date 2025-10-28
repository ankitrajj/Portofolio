import React from 'react';

export default function About() {
  return (
    <section id='about' className='bg-gray-900 text-gray-100 py-20 px-6'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-3xl font-semibold text-blue-400 mb-6'>About Me</h2>
        <p className='leading-relaxed text-lg text-gray-300'>
          I'm a passionate Java Full Stack Developer skilled in designing scalable backend systems
          using Spring Boot and building dynamic user interfaces with React.
          I love solving problems, writing clean code, and continuously learning new technologies.
        </p>
      </div>
    </section>
  );
}
