import React from 'react';
import XPCard from '../components/XPCard';
import ProjectCard from '../components/ProjectCard';
// Images
import Headshot from '../assets/headshot.png';
import Agua from '../assets/agua.png';
import Capital from '../assets/capital.png';
import Verizon from '../assets/verizon.png';
import Ithaca from '../assets/ithaca.jpg';
import Netflix from '../assets/netflix.jpeg';
import Pantry from '../assets/pantry.png';

const HomePage: React.FC = () => {
  return (
    <main className="max-w-6xl mx-auto px-10">
      <section id="about" className="min-h-screen flex items-center justify-center bg-white">
        <div className="md:w-1/2 mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">A little about me</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Hello! I'm Kelly Tran, a software engineer passionate about building impactful projects.
            I love solving challenging problems and collaborating with others to create innovative solutions.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={Headshot}
            alt="Kelly Tran"
            className="rounded-full w-96 object-cover shadow-md"
          />
        </div>
      </section>
      <section id="experiences" className="min-h-screen bg-white relative">
        <div className="max-w-5xl">
          <h1 className="text-4xl font-bold text-black mb-20 text-left">Experiences</h1>
          <div className="px-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <XPCard logo={Agua} companyName="AguaClara Cornell" time="Fall 2021 - Present" description="AguaClara Cornell is a Cornell Engineering Project Team. [Insert more later]"/>
            <XPCard logo={Capital} companyName="Capital One" time="Summer 2023" description="Software engineering intern in the summer of 2023 at McLean, VA. [Insert more later]" />
            <XPCard logo={Verizon} companyName="Verizon" time="Summer 2024" description="Software engineering intern in the summer of 2024 at Basking Ridge, NJ. [Insert more later]"/>
          </div>
        </div>
      </section>
      <section id="projects" className="min-h-screen relative bg-white mb-2">
        <div className="max-w-5xl">
          <h1 className="text-4xl font-bold text-black mb-20 text-left">Projects</h1>
          <div className="px-20 space-y-12">
          <ProjectCard
              title="Smart Pantry Mobile App"
              techStack={['Typescript', 'React Native', 'Nativewind', 'Expo', 'Appwrite']}
              description="An iOS application that enables users to track groceries and reduce food waste by suggesting recipes based on available ingredients. Developed over the course of 36 hours with 3 teammates for the Big Red Hacks Hackathon at Cornell University."
              thumbnail={Pantry}
              details="Timeline: Fall 2024"
            />
          <ProjectCard
              title="Netflix Case Study"
              techStack={['Figma', 'Notion', 'User Research']}
              description="A redesign of Netflix aimed at helping users decide what to watch by exploring what their friends are currently watching and have watched before."
              thumbnail={Netflix}
              details="Timeline: Fall 2022"
            />
            <ProjectCard
              title="Buckethaca Mobile App"
              techStack={['Python', 'SQL', 'SQLAlchemy', 'Flask', 'Docker']}
              description="An iOS application aimed at helping visitors to Ithaca and Cornell explore the local community by browsing current events and bucket list activities."
              thumbnail={Ithaca}
              details="Timeline: Spring 2022"
            />
          </div>
        </div>
      </section>
      <section id="contact" className="min-h-screen bg-white flex flex-col items-center justify-center px-8 py-12">
        <h1 className="text-4xl font-bold mb-4">Let's change the world together!</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          I’d love to connect! Feel free to reach out to{' '}
          <a
            href="https://www.linkedin.com/in/kelly-tran-8888888888888888888/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            me
          </a>.
        </p>
      </section>
    </main>
  );
};

export default HomePage;
