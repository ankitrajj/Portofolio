import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id='home' className='flex flex-col items-center justify-center h-screen bg-gray-950 text-center text-white px-4'>
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className='text-5xl font-bold text-blue-400 mb-4'>
        Hi, I'm Ankit Raj
      </motion.h1>
      <p className='text-lg text-gray-300 max-w-2xl'>
        Java Full Stack Developer | Spring Boot • React • Microservices • Docker • AWS
      </p>
    </section>
  );
}
