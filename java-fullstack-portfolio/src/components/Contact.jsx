import React from 'react';

export default function Contact() {
  return (
    <section id='contact' className='bg-gray-950 text-gray-100 py-20 px-6 text-center'>
      <h2 className='text-3xl font-semibold text-blue-400 mb-6'>Contact Me</h2>
      <p className='text-gray-400 mb-4'>Let's build something amazing together!</p>
      <div className='space-x-6'>
        <a href='mailto:ankitrajj@example.com' className='text-blue-400 hover:underline'>Email</a>
        <a href='https://linkedin.com/in/ankitrajj' className='text-blue-400 hover:underline'>LinkedIn</a>
        <a href='https://github.com/ankitrajj' className='text-blue-400 hover:underline'>GitHub</a>
      </div>
    </section>
  );
}
