import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaInstagram, FaLinkedin, FaSpotify } from "react-icons/fa";
import putrid from './assets/putrid.webp';
import elearning from './assets/elearning_bslc.png';
import ispm from './assets/ispm_newrecruitment.png';

interface Project {
  title: string;
  role: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

const PROJECTS_DATA: Project[] = [
  {
    title: "E-Learning by BSLC",
    role: "Contributor",
    description: "A web app that lets students download learning modules for their courses. I worked as one of the backend developers in this project.",
    imageUrl: elearning,
    projectUrl: "https://elearning.bslc.or.id/",
  },
  {
    title: "BINUS Information System Laboratorium Recruitment Site",
    role: "Contributor",
    description: "A website for recruiting new information systems lab members. Working on this project was one of my duties as an information systems lab project member. I worked as one of the backend developers.",
    imageUrl: ispm,
    projectUrl: "https://islab.apps.binus.ac.id/recruitmentislab/",
  },
];

const App = () => {
  return (
    <div className="font-mono flex flex-col min-h-screen bg-gruvbox-bg text-gruvbox-fg transition-colors duration-300">
      <Header />
      <main className="max-w-6xl m-auto px-4 sm:px-6 lg:px-8 flex-grow">
        <section className="flex flex-col-reverse gap-10 lg:flex-row items-center py-16 lg:py-28">
          <div className="flex flex-col gap-y-6 mr-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gruvbox-green">
              Hi! I'm Kenneth.
            </h1>
            <p className="text-sm sm:text-base">
              I'm a graduate student pursuing my master's degree at BINUS University, majoring in
              management information systems.
            </p>
            <div className="text-sm sm:text-base">
              I am interested in{" "}
              <span className="text-gruvbox-red font-semibold">
                <TypeAnimation
                  sequence={[
                    "Cloud Computing",
                    1000,
                    "DevOps",
                    1000,
                    "Software Engineering",
                    1000,
                    "Web Vulnerabilities",
                    1000,
                    "Learning",
                    1000,
                  ]}
                  wrapper="span"
                  speed={40}
                  repeat={Infinity}
                />
              </span>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-lg sm:text-xl pt-6 font-medium text-gruvbox-blue">
                Find me!
              </h2>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/reeesus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row items-center gap-3 rounded-md border border-gruvbox-fg py-1 px-2.5 text-center text-sm transition-all shadow-sm hover:bg-gruvbox-fg hover:text-gruvbox-bg light:hover:bg-gruvbox-fg light:hover:text-gruvbox-bg duration-100"
                >
                  <FaGithub aria-hidden="true" /> Github
                </a>
                <a
                  href="https://www.linkedin.com/in/kenneth-jefferson-riady-2273b52b1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row items-center gap-3 rounded-md border border-gruvbox-fg py-1 px-2.5 text-center text-sm transition-all shadow-sm hover:bg-gruvbox-fg hover:text-gruvbox-bg light:hover:bg-gruvbox-fg light:hover:text-gruvbox-bg duration-100"
                >
                  <FaLinkedin aria-hidden="true" /> LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/kennjffr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row items-center gap-3 rounded-md border border-gruvbox-fg py-1 px-2.5 text-center text-sm transition-all shadow-sm hover:bg-gruvbox-fg hover:text-gruvbox-bg light:hover:bg-gruvbox-fg light:hover:text-gruvbox-bg duration-100"
                >
                  <FaInstagram aria-hidden="true" /> Instagram
                </a>
                <a
                  href="https://open.spotify.com/user/93f22i6v7gbndoe8a7n809gjb?si=e4381ff1cd1f440f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row items-center gap-3 rounded-md border border-gruvbox-fg py-1 px-2.5 text-center text-sm transition-all shadow-sm hover:bg-gruvbox-fg hover:text-gruvbox-bg light:hover:bg-gruvbox-fg light:hover:text-gruvbox-bg duration-100"
                >
                  <FaSpotify aria-hidden="true" /> Spotify
                </a>
              </div>
            </div>
          </div>
          <img
            src={putrid}
            alt="ugly mug"
            className="w-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg lg:w-1/2 xl:max-w-xl max-h-[50vh] object-cover rounded-md mt-6 lg:mt-0 shadow-md"
          />
        </section>
        <section className="mt-40 mb-40">
          <h2 className="text-lg sm:text-xl text-gruvbox-purple mb-5 font-semibold text-center md:text-left">
            Projects
          </h2>
          <div className="flex flex-col gap-10 md:flex-row justify-between items-center md:items-start">
            {PROJECTS_DATA.map((project) => (
              <div
                key={project.title}
                className="w-5/6 sm:h-2/5 md:w-2/5 lg:w-2/5 flex flex-col items-center gap-4 p-5 rounded-md"
              >
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit project site for ${project.title}`}
                >
                  <img
                    src={project.imageUrl}
                    alt={`${project.title} screenshot`}
                    className="rounded-sm shadow-lg shadow-gruvbox-fg2 hover:-translate-y-1 transition-transform duration-300"
                  />
                </a>
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="mt-4 text-center text-xl text-gruvbox-green hover:underline">
                    {project.title}
                  </h3>
                </a>
                <div className="text-center text-gruvbox-yellow font-light">
                  {project.role}
                </div>
                <p className="text-justify font-extralight text-sm">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
