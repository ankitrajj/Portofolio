import React from 'react';

export default function Projects() {
  const projects = [
    { name: 'JWT Authentication', desc: 'Spring Boot + JWT + Role-based API Security.', link: 'https://github.com/ankitrajj/JWT' },
    { name: 'CRUD with H2 DB', desc: 'Basic CRUD operations with H2 + Spring Data JPA.', link: 'https://github.com/ankitrajj/CRUD-operation-with-H2' },
    { name: 'Microservices System', desc: 'Spring Boot Microservices with API Gateway and Eureka.', link: 'https://github.com/ankitrajj/MicroServices-with-API-GateWay' },
  ];

  return (
    <section id='projects' className='bg-gray-900 text-gray-100 py-20 px-6'>
      <div className='max-w-5xl mx-auto'>
        <h2 className='text-3xl font-semibold text-blue-400 mb-10'>Projects</h2>
        <div className='grid md:grid-cols-3 gap-8'>
          {projects.map(p => (
            <div key={p.name} className='bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition'>
              <h3 className='text-xl font-semibold mb-2 text-blue-300'>{p.name}</h3>
              <p className='text-gray-400 mb-4'>{p.desc}</p>
              <a href={p.link} target='_blank' className='text-blue-400 hover:underline'>View on GitHub →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
