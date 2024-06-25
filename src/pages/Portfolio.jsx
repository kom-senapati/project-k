import { AlignRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "wouter";
import { Link as ScrollLink } from "react-scroll";

const portfolio = () => {
  const Tick = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <div className="p-10 flex flex-col gap-20">
      {/* Header */}
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="#" className="btn btn-ghost text-xl">
            K Om Senapati
          </Link>
        </div>
        <div className="flex-none">
          <div className="hidden md:flex items-center justify-center gap-5">
            <ScrollLink to="about" smooth={true}>
              <h1 className="btn btn-sm text-xl">About</h1>
            </ScrollLink>
            <ScrollLink to="projects" smooth={true}>
              <h1 className="btn btn-sm text-xl">Projects</h1>
            </ScrollLink>
            <ScrollLink to="education" smooth={true}>
              <h1 className="btn btn-sm text-xl">Education</h1>
            </ScrollLink>
            <ScrollLink to="skills" smooth={true}>
              <h1 className="btn btn-sm text-xl">Skills</h1>
            </ScrollLink>
            <ScrollLink to="contact" smooth={true}>
              <h1 className="btn btn-sm text-xl">Contact</h1>
            </ScrollLink>
          </div>
          <details className="md:hidden dropdown dropdown-end">
            <summary className="m-1 btn">
              <AlignRight />
            </summary>
            <div className="flex flex-col items-center gap-1 p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-35">
              <ScrollLink to="about" smooth={true}>
                <h1 className="text-xl hover:text-primary w-full">About</h1>
              </ScrollLink>
              <ScrollLink to="projects" smooth={true}>
                <h1 className="text-xl hover:text-primary w-full">Projects</h1>
              </ScrollLink>
              <ScrollLink to="education" smooth={true}>
                <h1 className="text-xl hover:text-primary w-full">Education</h1>
              </ScrollLink>
              <ScrollLink to="skills" smooth={true}>
                <h1 className="text-xl hover:text-primary w-full">Skills</h1>
              </ScrollLink>
              <ScrollLink to="contact" smooth={true}>
                <h1 className="text-xl hover:text-primary w-full">Contact</h1>
              </ScrollLink>
            </div>
          </details>
        </div>
      </div>

      {/* Introduction */}
      <div className="hero h-full">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <img
                src="https://avatar.iran.liara.run/public/30"
                alt="avatar"
                className="w-64 h-64 md:w-80 md:h-80"
              />
              <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="font-semibold text-lg">Hello I'm</h1>
                <h1 className="font-bold text-3xl">K Om Senapati</h1>
                <a className="btn btn-md text-sm rounded-full">
                  Download Resume
                </a>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={28} />
                  </a>
                  <a
                    href="https://www.github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={28} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div id="about" className="hero h-full">
        <div className="hero-content">
          <div className="max-w-xl">
            <h1 className="text-4xl mb-2">who i am ?</h1>
            <p className="text-lg">
              I'm a 3rd-semester Computer Science undergraduate with a passion
              for coding and data science. I love exploring new technologies and
              solving complex problems. When I'm not coding, I enjoy watching
              movies and sipping on coffee. My goal is to become a skilled
              Python developer and contribute to innovative projects.
            </p>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div id="projects" className="hero h-full">
        <div className="hero-content text-center">
          <div className="max-w-xl flex flex-col items-center gap-4">
            <h1 className="text-xl -mb-5">Browse my</h1>
            <h1 className="text-4xl">projects</h1>
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex flex-col w-xl p-5 rounded-xl border">
                <img
                  src="https://avatar.iran.liara.run/public/30"
                  alt="avatar"
                  className="w-64 h-64"
                />
                <h1 className="text-3xl">Project</h1>
                <div className="flex gap-5 justify-center">
                  <button className="btn text-sm rounded-full">Github</button>
                  <button className="btn text-sm rounded-full">
                    Live link
                  </button>
                </div>
              </div>
              <div className="flex flex-col w-xl p-5 rounded-xl border">
                <img
                  src="https://avatar.iran.liara.run/public/30"
                  alt="avatar"
                  className="w-64 h-64"
                />
                <h1 className="text-3xl">Project</h1>
                <div className="flex gap-5 justify-center">
                  <button className="btn text-sm rounded-full">Github</button>
                  <button className="btn text-sm rounded-full">
                    Live link
                  </button>
                </div>
              </div>
            </div>
            <button className="btn btn-md text-xl w-40">View More</button>
          </div>
        </div>
      </div>

      {/* Education */}
      <div id="education" className="hero h-full">
        <div className="hero-content">
          <div className="max-w-xl flex flex-col items-center gap-4">
            <h1 className="text-xl -mb-5">About</h1>
            <h1 className="text-4xl">my journey</h1>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              <li>
                <div className="timeline-middle">
                  <Tick />
                </div>
                <div className="timeline-start mb-10 md:text-end">
                  <time className="font-mono italic">2021</time>
                  <div className="text-lg font-black">
                    Secondary Examination
                  </div>
                  Score - 95%
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <Tick />
                </div>
                <div className="timeline-end mb-10">
                  <time className="font-mono italic">2023</time>
                  <div className="text-lg font-black">
                    Higher Secondary Examination
                  </div>
                  Score - 93%
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <Tick />
                </div>
                <div className="timeline-start mb-10 md:text-end">
                  <time className="font-mono italic">2027</time>
                  <div className="text-lg font-black">B.Tech( CSE )</div>
                  Semester 1 SGPA - 8.7
                </div>
                <hr />
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div id="skills" className="hero h-full">
        <div className="hero-content">
          <div className="max-w-xl flex flex-col items-center gap-4">
            <h1 className="text-xl -mb-5">Assess</h1>
            <h1 className="text-4xl">my skills</h1>
            <div className="flex flex-col">
              <div>
                <h3 className="text-xl font-semibold mb-2">Frontend</h3>
                <div className="flex gap-2">
                  <i className="devicon-react-original colored text-5xl"></i>
                  <i className="devicon-nextjs-plain colored text-5xl"></i>
                  <i class="devicon-tailwindcss-original colored text-5xl"></i>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Backend</h3>
                <div className="flex gap-2">
                  <i class="devicon-flask-original colored text-5xl"></i>
                  <i class="devicon-fastapi-plain colored text-5xl"></i>
                  <i class="devicon-express-original colored text-5xl"></i>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Data</h3>
                <div className="flex gap-2">
                  <i class="devicon-python-plain colored text-5xl"></i>
                  <i class="devicon-pandas-plain colored text-5xl"></i>
                  <i class="devicon-matplotlib-plain colored text-5xl"></i>
                  <i class="devicon-jupyter-plain colored text-5xl"></i>
                  <i class="devicon-streamlit-plain colored text-5xl"></i>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Tools</h3>
                <div className="flex gap-2">
                  <i class="devicon-vscode-plain colored text-5xl"></i>
                  <i class="devicon-postman-plain colored text-5xl"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact & Footer */}
      <div id="contact" className="text-center">
        <h1 className="text-xl">Get In Touch</h1>
        <h1 className="text-4xl mb-8">contact me</h1>
        <div className="inline-flex items-center border rounded-2xl px-4 py-2 shadow">
          <i className="fas fa-envelope mr-2"></i>
          <a
            href="mailto:komnoob123@gamil.com"
            className="mr-8 flex flex-row gap-2 link link-hover"
          >
            <Mail />
            komnoob123@gmail.com
          </a>
          <i className="fab fa-linkedin mr-2"></i>
          <a href="https://www.linkedin.com/in/kom-senapati/">
            <Linkedin />
          </a>
        </div>
      </div>
      <footer className="text-center mt-auto py-4">
        Copyright © 2024 K Om Senapati. All Rights Reserved
      </footer>
    </div>
  );
};
export default portfolio;
