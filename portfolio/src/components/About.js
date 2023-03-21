import React from 'react';

function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex flex-col md:flex-row my-10">
        <div className="flex flex-col w-full md:w-1/2 justify-center items-center md:items-start px-4 sm:px-0">
          <h2 className="text-3xl mb-4">About Me</h2>
          <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
          <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        </div>
        <div className="w-full md:w-1/2 py-6 text-center">
          <img src="https://via.placeholder.com/400x400" alt="avatar" className="rounded-full w-64 h-64 mx-auto" />
        </div>
      </div>
    </section>
  );
}

export default About;