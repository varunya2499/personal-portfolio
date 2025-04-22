import { useState, useEffect } from "react";
import { FaFacebook, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

// DynamicRoleHeading component
const DynamicRoleHeading = () => {
  const roles = [
    "Health Promotion",
    "Community Health Leader",
    "Public Health Advocate",
    "Health Educator",
    "Wellness Strategist",
    "Health Policy Developer",
    "Behavior Change Expert",
  ];

  const [role, setRole] = useState(roles[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRole((prevRole) => {
        const currentIndex = roles.indexOf(prevRole);
        const nextIndex = (currentIndex + 1) % roles.length;
        return roles[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return <span className="text-pink-400">{role}</span>;
};

// Hero component
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[url('/personal-portfolio/hero.png')] flex items-center justify-center px-4 py-16 relative">
      <div className="text-center max-w-xl">
        <p className="text-gray-300 text-xl font-bold mb-4">Hi, I'm Varunya Kajeendran</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-white">Dedicated to </span>
          <DynamicRoleHeading />
        </h1>
        <p className="text-gray-300 font-bold py-4 mb-8">
          Passionate about improving community health through innovative programs and evidence-based practices. 
          As an international chess player, I bring strategic thinking, patience, and analytical skills into the field of health promotion — 
          approaching challenges with a clear mind and well-planned moves, both on the board and in the community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="resume.pdf" download>
  <button className="bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-600 hover:scale-105 transition-all duration-300">
    Download CV
  </button>
</a>

          <button
            className="border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white/10 hover:scale-105 transition-all duration-300"
            onClick={() => setIsOpen(true)}
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* Contact Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full text-center relative">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Let's Connect!</h2>
            <p className="text-gray-600 mb-6">Feel free to reach out via any platform below:</p>

            <div className="flex justify-center gap-6 text-2xl text-pink-600">
              
              <a href="http://www.linkedin.com/in/varunya-kajeendran-0793b032b" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="mailto:varunkajeen@gmail.com"><FaEnvelope /></a>
              <a href="https://www.instagram.com/varun_yajiv?igsh=aHNuNzk4MXhxMThh&utm_source=qr" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>

            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;
