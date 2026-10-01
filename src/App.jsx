import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';


export default function PortfolioApp() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);

    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    alert('Resume download link would be triggered here');
  };

  return (
    <div className="bg-slate-950 text-gray-100 min-h-screen">

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/95 backdrop-blur border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex justify-between items-center h-16">

            <div className="text-2xl font-bold text-white">
              VISHWA SUBASH
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">

              <a
                href="#home"
                onClick={() => scrollToSection('home')}
                className="hover:text-blue-400 transition"
              >
                Home
              </a>

              <a
                href="#about"
                onClick={() => scrollToSection('about')}
                className="hover:text-blue-400 transition"
              >
                About
              </a>

              <a
                href="#skills"
                onClick={() => scrollToSection('skills')}
                className="hover:text-blue-400 transition"
              >
                Skills
              </a>

              <a
                href="#projects"
                onClick={() => scrollToSection('projects')}
                className="hover:text-blue-400 transition"
              >
                Projects
              </a>

              <a
                href="#experience"
                onClick={() => scrollToSection('experience')}
                className="hover:text-blue-400 transition"
              >
                Experience
              </a>

              <a
                href="#contact"
                onClick={() => scrollToSection('contact')}
                className="hover:text-blue-400 transition"
              >
                Contact
              </a>

              <button
                onClick={downloadResume}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-medium transition"
              >
                Download Resume
              </button>

            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-slate-800">

              <a
                href="#home"
                onClick={() => scrollToSection('home')}
                className="block py-2 hover:text-blue-400"
              >
                Home
              </a>

              <a
                href="#about"
                onClick={() => scrollToSection('about')}
                className="block py-2 hover:text-blue-400"
              >
                About
              </a>

              <a
                href="#skills"
                onClick={() => scrollToSection('skills')}
                className="block py-2 hover:text-blue-400"
              >
                Skills
              </a>

              <a
                href="#projects"
                onClick={() => scrollToSection('projects')}
                className="block py-2 hover:text-blue-400"
              >
                Projects
              </a>

              <a
                href="#experience"
                onClick={() => scrollToSection('experience')}
                className="block py-2 hover:text-blue-400"
              >
                Experience
              </a>

              <a
                href="#contact"
                onClick={() => scrollToSection('contact')}
                className="block py-2 hover:text-blue-400"
              >
                Contact
              </a>

              <button
                onClick={downloadResume}
                className="w-full mt-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-medium transition"
              >
                Download Resume
              </button>

            </div>
          )}

        </div>
      </nav>
// ✅ IMPROVED VERSION (Recommended)
{/* Hero Section - IMPROVED */}
<section
  id="home"
  className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center"
>
  <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
      {/* Left Content */}
      <div>
        <div className="inline-block mb-6">
          <span className="bg-green-900/30 border border-green-600 text-green-400 px-4 py-1 rounded-full text-sm font-medium">
            ● Open to Full-Time Opportunities
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Building practical solutions with
          <span className="text-blue-500 block">
            Python & Full-Stack Development
          </span>
        </h1>

        <p className="text-gray-400 text-lg mb-8 max-w-xl leading-relaxed">
          CSE graduate with hands-on experience in Python and full-stack
          web development. I enjoy building practical applications,
          working with databases, and solving real-world problems
          through software.
        </p>

        <div className="flex gap-4 flex-wrap">
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded font-medium transition"
          >
            View Projects
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="border border-gray-600 hover:border-gray-400 px-6 py-3 rounded font-medium transition"
          >
            Contact Me →
          </button>
        </div>
      </div>

      {/* Profile Image - IMPROVED */}
      <div className="flex justify-center">
        {/* Outer Ring (Decorative) */}
        <div className="relative w-[400px] h-[400px] rounded-full border-2 border-blue-500/20 flex items-center justify-center">
          
          {/* Photo Container */}
          <div className="w-[360px] h-[360px] rounded-full border-4 border-blue-500 flex items-center justify-center bg-transparent shadow-2xl" style={{boxShadow: '0 25px 70px rgba(59, 130, 246, 0.35)'}}>
            
            <div className="w-[352px] h-[352px] rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-900">
              <img
                src="/pic.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

        </div>
      </div>
    </div>
  </div>
</section>


{/* About Section */}
<section
  id="about"
  className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50"
>
  <div className="max-w-7xl mx-auto">

    <h2 className="text-4xl font-bold mb-12">About Me</h2>

    <div className="grid md:grid-cols-2 gap-12">

      {/* Left Side */}
      <div>

        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          I'm a Computer Science Engineering graduate with a passion for
          building practical software solutions using Python and full-stack
          web technologies. I enjoy developing web applications, working
          with databases, and solving real-world problems through technology.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          My projects have given me hands-on experience with frontend
          development, backend technologies, databases, and AI-based
          applications. I'm continuously improving my technical skills and
          looking forward to contributing to a professional development team.
        </p>

        {/* Focus Areas */}
        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
          <h3 className="text-blue-400 font-bold text-lg mb-3">
            Focus Areas
          </h3>

          <div className="flex flex-wrap gap-3">
            <span className="bg-blue-900/30 border border-blue-600 text-blue-300 px-3 py-1 rounded">
              Python
            </span>

            <span className="bg-blue-900/30 border border-blue-600 text-blue-300 px-3 py-1 rounded">
              Full-Stack Development
            </span>

            <span className="bg-blue-900/30 border border-blue-600 text-blue-300 px-3 py-1 rounded">
              Web Development
            </span>

            <span className="bg-blue-900/30 border border-blue-600 text-blue-300 px-3 py-1 rounded">
              AI Applications
            </span>
          </div>
        </div>

      </div>

      {/* Right Side - Education */}
      <div>

        <h3 className="text-2xl font-bold text-white mb-6">
          Education
        </h3>

        <div className="space-y-4">

          {/* College */}
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <div className="flex justify-between items-start gap-4">
              <div>
                <h4 className="text-blue-400 font-bold text-lg">
                  PPG Institute of Technology
                </h4>

                <p className="text-gray-300 mt-1">
                  B.E. Computer Science and Engineering
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  CGPA: 7.1
                </p>
              </div>

              <span className="text-gray-400 text-sm whitespace-nowrap">
                2022 – 2026
              </span>
            </div>
          </div>

          {/* HSC */}
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <div className="flex justify-between items-start gap-4">
              <div>
                <h4 className="text-blue-400 font-bold text-lg">
                  Little Flower Higher Secondary School
                </h4>

                <p className="text-gray-300 mt-1">
                  HSC
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  Percentage: 66%
                </p>
              </div>

              <span className="text-gray-400 text-sm whitespace-nowrap">
                2021 - 2022
              </span>
            </div>
          </div>

          {/* SSLC */}
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <div className="flex justify-between items-start gap-4">
              <div>
                <h4 className="text-blue-400 font-bold text-lg">
                  Little Flower Higher Secondary School
                </h4>

                <p className="text-gray-300 mt-1">
                  SSLC
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  Percentage: 78%
                </p>
              </div>

              <span className="text-gray-400 text-sm whitespace-nowrap">
                2019 - 2020
              </span>
            </div>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>
      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold mb-12">
            Technical Proficiency
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Frontend */}
            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">

              <div className="flex items-center gap-3 mb-4">

                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>

                <h3 className="text-xl font-bold text-blue-400">
                  Frontend
                </h3>

              </div>

              <div className="space-y-2 text-gray-300">
                <p>• HTML</p>
                <p>• CSS</p>
                <p>• JavaScript</p>
                <p>• React.js</p>
              </div>

            </div>

            {/* Programming Languages */}
            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">

              <div className="flex items-center gap-3 mb-4">

                <div className="w-3 h-3 bg-green-500 rounded-full"></div>

                <h3 className="text-xl font-bold text-green-400">
                  Programming Languages
                </h3>

              </div>

              <div className="space-y-2 text-gray-300">
                <p>• Python</p>
                <p>• C</p>
              </div>

            </div>

            {/* Database */}
            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">

              <div className="flex items-center gap-3 mb-4">

                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>

                <h3 className="text-xl font-bold text-blue-400">
                  Database
                </h3>

              </div>

              <div className="space-y-2 text-gray-300">
                <p>• SQL</p>
                <p>• mongoDB</p>
              </div>

            </div>

            {/* Tools */}
            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">

              <div className="flex items-center gap-3 mb-4">

                <div className="w-3 h-3 bg-green-500 rounded-full"></div>

                <h3 className="text-xl font-bold text-green-400">
                  Tools
                </h3>

              </div>

              <div className="space-y-2 text-gray-300">
                <p>• VS Code</p>
                <p>• Git</p>
                <p>• GitHub</p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50"
      >
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold mb-12">
            Selected Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="AI Resume Analyzer"
              description="A full-stack web app that scores resumes against job descriptions using ATS-style keyword matching and generates personalized improvement suggestions via the Gemini API. Built with FastAPI, SQLAlchemy, and PostgreSQL on the backend, with JWT authentication and resume parsing (PDF/DOCX)."
              tags={[
                'react',
                'python',
                'gemini API',
                'postresql'
                
              ]}
            />
            <ProjectCard
              title="AI SupportFlow"
              description="Developed an AI-powered customer support automation platform using React.js, FastAPI, Python, and MongoDB to streamline customer ticket management. Implemented JWT-based authentication, ticket creation and management, AI-assisted ticket analysis, priority and sentiment detection, and automated response suggestions. Designed REST APIs for seamless communication between the frontend and backend."
              tags={[
                'react',
                'python',
                'fast API',
                'mongoDB',
                'gemini Api'
                
              ]}
            />

            <ProjectCard
              title="Bike Base"
              description="MERN stack application for sharing bike-related blogs and posts, allowing users to create, view, and manage bike-related content."
              tags={[
                'MongoDB',
                'Express.js',
                'React',
                'Node.js'
              ]}
            />

            <ProjectCard
              title="Food Ordering App"
              description=" A full-stack food ordering application for a single restaurant using the MERN stack. This app allows users to browse menu items, add and manage items in a cart, calculate totals, and place orders through a checkout flow. Integrated React, Node.js, Express.js, MongoDB, and Axios to create a responsive and functional restaurant ordering experience."
              tags={[
                'mongoDB',
                'Express',
                'React',
                'Node'
              ]}
            />

            <ProjectCard
              title="Student Management System"
              description="Developed a full-stack Student Management System using React.js, Node.js, Express.js, and MongoDB to efficiently manage student records. Implemented CRUD operations for adding, viewing, updating, and deleting student information with a responsive Bootstrap-based interface. Integrated REST APIs and Axios for seamless communication between frontend and backend."
              tags={[
                'React',
                'Node.js',
                'Express.js',
                'MongoDB'
              ]}
            />
            
            <ProjectCard
              title="AI-Based Smart Ambulance Dispatch System"
              description="AI-powered ambulance dispatch system developed using React, Node.js, Express.js, and MySQL to optimize ambulance allocation and reduce emergency response time."
              tags={[
                  'React',
                  'Node.js',
                  'Express.js',
                  'Python',
                  'Flask',
                  'MySQL'

              ]}
            />

          </div>

        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold mb-12">
            Professional Journey
          </h2>

          <div className="space-y-8">

            <ExperienceCard
              title="Frontend Development Intern"
              company="Sparkout Tech Solutions, Coimbatore"
              period="30-Day Internship"
              description="Completed a 30-day Frontend Development Internship, gaining practical experience in building responsive web interfaces and working with frontend development technologies."
            />

            <ExperienceCard
              title="Cybersecurity Intern"
              company="Ascentz"
              period="Internship"
              description="Completed a cybersecurity internship with exposure to fundamental cybersecurity concepts, security practices, and basic vulnerability awareness."
            />

            <ExperienceCard
              title="State-Level Hackathon Participant"
              company="Naan Mudhalvan MERN Stack Hackathon — KGiSL MicroCollege"
              period="2025"
              description="Participated in the State-Level Naan Mudhalvan MERN Stack Hackathon, gaining hands-on experience in developing solutions using the MERN stack in a competitive environment."
            />

          </div>

        </div>
      </section>

      {/* Contact Section */}
<section
  id="contact"
  className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50"
>
  <div className="max-w-7xl mx-auto">

    <h2 className="text-4xl font-bold mb-12">
      Let's Connect
    </h2>

    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* Contact Information */}
      <div>

        <p className="text-gray-300 text-lg mb-8 max-w-xl">
          I'm actively looking for opportunities to start my career as a
          software developer. I'm excited to contribute my skills, learn
          from experienced teams, and build impactful software solutions.
        </p>

        <div className="space-y-4">

          <ContactItem
            icon="✉️"
            label="Email"
            value="subramanisubash2004@gmail.com"
          />

          <ContactItem
            icon="🔗"
            label="LinkedIn"
            value=" https://www.linkedin.com/in/vishwa-subash-074812269"
          />

          <ContactItem
            icon="🐙"
            label="GitHub"
            value="github.com/Subashsubramani2004"
          />

          <ContactItem
            icon="📱"
            label="Phone"
            value="+91 8072707335"
          />

          {/* Address */}
          <div className="flex items-start gap-3">
            <span className="text-2xl">
              📍
            </span>

            <div>
              <p className="text-gray-500 text-sm">
                Address
              </p>

              <p className="text-gray-300 font-medium">
                Thiruvidaimarudur, Thanjavur, Tamil Nadu, India
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Connect Buttons */}
      <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">

        <h3 className="text-2xl font-bold mb-4">
          Let's Work Together
        </h3>

        <p className="text-gray-400 mb-6">
          Have an opportunity or want to connect? Reach out through any of
          the platforms below.
        </p>

        <div className="flex flex-wrap gap-4">

          <a
            href="mailto:subramanisubash2004@gmail.com"
            className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded font-medium transition"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/vishwa-subash-074812269"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-600 hover:border-blue-500 hover:text-blue-400 px-5 py-3 rounded font-medium transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Subashsubramani2004"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-600 hover:border-blue-500 hover:text-blue-400 px-5 py-3 rounded font-medium transition"
          >
            GitHub
          </a>

        </div>

      </div>

    </div>

  </div>
</section>
{/* Footer */}
<footer className="border-t border-slate-800 py-8 px-4 sm:px-6 lg:px-8 bg-slate-950">

  <div className="max-w-7xl mx-auto">

    <div className="flex justify-between items-center flex-wrap gap-4">

      <p className="text-gray-500">
        © 2026 Vishwa Subash. Built for performance.
      </p>

      <div className="flex gap-6 text-gray-500">

        <button
          type="button"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/vishwa-subash-074812269",
              "_blank",
              "noopener,noreferrer"
            )
          }
          className="hover:text-blue-400 transition"
        >
          LinkedIn
        </button>

        <button
          type="button"
          onClick={() =>
            window.open(
              "https://github.com/Subashsubramani2004",
              "_blank",
              "noopener,noreferrer"
            )
          }
          className="hover:text-blue-400 transition"
        >
          GitHub
        </button>

        <a
          href="mailto:subramanisubash2004@gmail.com"
          className="hover:text-blue-400 transition"
        >
          Email
        </a>

      </div>

    </div>

  </div>

</footer>
    </div>
  );
}

function ProjectCard({ title, description, tags }) {
  return (
    <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-slate-600 transition">

      <h3 className="text-xl font-bold mb-2 text-white">
        {title}
      </h3>

      <p className="text-gray-400 mb-4">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">

        {tags.map((tag, i) => (
          <span
            key={i}
            className="bg-blue-900/30 border border-blue-600 text-blue-300 px-3 py-1 rounded text-sm"
          >
            {tag}
          </span>
        ))}

      </div>

    </div>
  );
}

function ExperienceCard({
  title,
  company,
  period,
  description
}) {
  return (
    <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">

      <div className="flex justify-between items-start mb-4">

        <div>

          <h3 className="text-2xl font-bold text-white">
            {title}
          </h3>

          <p className="text-green-400 font-medium">
            {company}
          </p>

        </div>

        <span className="text-gray-400 text-sm">
          {period}
        </span>

      </div>

      <p className="text-gray-300">
        {description}
      </p>

    </div>
  );
}

function ContactItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3">

      <span className="text-2xl">
        {icon}
      </span>

      <div>

        <p className="text-gray-500 text-sm">
          {label}
        </p>

        <p className="text-gray-300 font-medium">
          {value}
        </p>

      </div>

    </div>
  );
}