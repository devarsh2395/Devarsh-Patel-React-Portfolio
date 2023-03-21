import React from 'react';


function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex flex-col md:flex-row my-10">
        <div className="flex flex-col w-full md:w-1/2 justify-center items-center md:items-start px-4 sm:px-0">
          <h2 className="text-3xl mb-4">About Me</h2>
          <p className="mb-4">Welcome to my portfolio! My name is Devarsh Patel and I currently reside in Toronto. Originally from India, I moved to Canada at the age of 18 to attend college. After spending 5 years working in the food sector, I decided to pursue my passion for technology and enrolled in a full-stack web development bootcamp at the University of Toronto. As a restaurant manager, I developed strong leadership and problem-solving skills that I carry with me as a developer. I am always eager to learn new things and enjoy taking on challenges in order to expand my knowledge and skill set. In this portfolio, you will find a showcase of my work as a full-stack web developer. From front-end design using HTML, CSS, and JavaScript, to back-end development with Node.js, Express, and MongoDB, I am experienced in all aspects of web development. Please take a look around and feel free to reach out to me with any questions or potential opportunities. Thank you for visiting!</p>
        </div>
        <div className="w-full md:w-1/2 py-6 text-center">
          <img src="https://via.placeholder.com/400x400" alt="avatar" className="rounded-full w-64 h-64 mx-auto" />
        </div>
      </div>
    </section>
  );
}

export default About;