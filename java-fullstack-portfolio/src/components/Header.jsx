import React from 'react';

export default function Header() {
  return (
    <header className='fixed top-0 left-0 w-full bg-gray-900 text-white p-4 shadow-md z-50'>
      <nav className='max-w-5xl mx-auto flex justify-between items-center'>
        <h1 className='text-2xl font-bold text-blue-400'>Ankit Raj</h1>
        <ul className='flex gap-6'>
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(item => (
            <li key={item}>
              <a href={'#' + item.toLowerCase()} className='hover:text-blue-400 transition'>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
