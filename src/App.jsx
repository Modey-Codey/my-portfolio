import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div>
      <nav
        id="navbar"
        className="flex justify-end fixed top-0 left-0 w-full bg-pink-300 shadow-md z-10"
      >
        <ul className="flex mr-8 text-gray-800 font-bold">
          <li>
            <a
              href="#welcome-section"
              className="block text-2xl p-8 hover:bg-purple-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block text-2xl p-8 hover:bg-purple-300"
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block text-2xl p-8 hover:bg-purple-300"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/phawngam/"
              className="block text-4xl p-8 hover:bg-purple-300"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </nav>

      <section
        id="welcome-section"
        className="flex flex-col justify-center items-center w-full h-screen bg-gradient-to-br from-purple-500 to-black"
      >
        <img
          src="https://scontent.fbkk29-7.fna.fbcdn.net/v/t39.30808-6/421671408_2418428501697986_5488013884227033654_n.jpg?stp=c0.17.206.206a_dst-jpg_p206x206&_nc_cat=106&ccb=1-7&_nc_sid=714c7a&_nc_eui2=AeFBko-fEzKmsYCa5J9elf3haTLF8xk2F8ppMsXzGTYXyl_NES9tusTFxXqLjEbP2CQmVXG_m9HmQMoWhmLO2vpC&_nc_ohc=STsAFdLDcToQ7kNvgFj2K7-&_nc_ht=scontent.fbkk29-7.fna&oh=00_AYACsknY6zFJwvnvJDuJ6c0NobuvlByj_BCzuyZP_QMvMA&oe=669ED50B"
          alt="Profile"
          className="rounded-full w-40 h-40 mb-10"
        />
        <h1 className="text-6xl font-raleway font-bold text-[#fcf5fb] mb-14">
          Hey I am Modtanoy
        </h1>
        <p className="text-4xl font-poppins font-light tracking-wider text-pink-300">
          A passionate piano instructor aspiring to become a software developer.
          With a love for value investing, <br />
          I'm dedicated to learning and growing in the tech world, aiming to
          create innovative and impactful solutions.
        </p>
      </section>

      <section
        id="projects"
        className="text-center py-40 bg-gradient-to-br from-black to-purple-500 w-full h-screen"
      >
        <h2 className="text-6xl font-raleway font-bold mb-24 mx-auto mt-20 text-[#fcf5fb]">
          These are some of my project
        </h2>

        <div className="flex justify-center max-w-5xl mx-auto mb-24 text-gray-800">
          <a
            href="https://jsd-7-cmfm-frontend.vercel.app/"
            target="_blank"
            className="bg-[#8de1ff] shadow-lg"
          >
            <img
              src="../src/assets/images/PONY MART.png"
              alt="project"
              className="w-full h-80 object-cover"
            />
            <p className="text-3xl p-8">PONY MART</p>
          </a>
          {/* 
          <a href="" target="_blank" className="bg-[#0089BA] shadow-lg">
            <img src="" alt="project" className="w-full h-80 object-cover" />
            <p className="text-3xl p-8">Project</p>
          </a>
grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16
          <a href="" target="_blank" className="bg-[#0089BA] shadow-lg">
            <img src="" alt="project" className="w-full h-80 object-cover" />
            <p className="text-3xl p-8">Project</p>
          </a>

          <a href="" target="_blank" className="bg-[#0089BA] shadow-lg">
            <img src="" alt="project" className="w-full h-80 object-cover" />
            <p className="text-3xl p-8">Project</p>
          </a> */}
        </div>
      </section>

      <section
        id="contact"
        className="flex flex-col justify-center items-center text-center w-full h-screen p-8 text-[#fcf5fb] bg-gradient-to-br from-purple-500 to-black"
      >
        <div className="text-6xl font-raleway font-bold mb-16 ">
          Let's work together...
        </div>
        <div className="flex justify-center w-full max-w-4xl mt-16 mr-16">
          <a
            href="https://www.linkedin.com/in/phawngam/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-6xl mx-8"
          >
            <FaLinkedin />
          </a>
          <a
            id="profile-link"
            href="https://github.com/Modey-Codey"
            target="_blank"
            className="text-6xl mx-8"
          >
            <FaGithub />
          </a>
          <a href="mailto:phawngam.p@gmail.com" className="text-6xl mx-8">
            <FaEnvelope />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
