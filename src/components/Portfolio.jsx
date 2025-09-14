import { useState, useEffect } from "react";
import profileImg2 from "../assets/projects/portfolio/home.webp";
import profileImg3 from "../assets/projects/asswenna/asswenna.webp";
import uocDailyThumbnail from "../assets/projects/newApp/splash.webp";
import uocDailyMockup from "../assets/projects/newApp/uoc_daily_mockup.webp";
import asswenna_mokup from "../assets/projects/asswenna/asswenna_mokup.webp";
import portfolio_mokup from "../assets/projects/portfolio/about.webp";
import ecoTourismThumbnail from "../assets/projects/Eco/logo.webp";
import ecoTourismMockup from "../assets/projects/Eco/home.webp";
import talentBridgeThumbnail from "../assets/projects/talant/logo.webp";
import talentBridgeMockup from "../assets/projects/talant/home.webp";
import ProjectModal from "./ProjectModal";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Reset currentIndex when switching between mobile and desktop sizes
  useEffect(() => {
    setCurrentIndex(0);
  }, [isMobile]);

  const projects = [
    {
      id: 1,
      title: "Talent Bridge",
      category:  "Web Development",
      image: talentBridgeThumbnail,
      mockupImage: talentBridgeMockup,
      description: "Talent Bridge is a full-featured MERN stack job board platform that streamlines the recruitment process with role-based access for Job Seekers, Employers, and Admins. It includes CV upload, job posting, admin approval workflows, real-time notifications, and smart dashboards for each role. Designed to simulate platforms like LinkedIn and Indeed, Talent Bridge delivers a professional and scalable recruitment experience.",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT Authentication",
        "Multer (File Uploads)"
      ],
      links: {
        github: "https://github.com/sahansara/Talent_Bridge-a-full-featured-job-board-platform.git", 
        live: "https://www.linkedin.com/posts/widane-vihaga12_mern-fullstackdevelopment-webdevelopment-activity-7369238417278234627-eW4h?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFT6xbcBmtSz4nLgg_k6dz62lsCYgJflNWg"
      }
    },
    {
      id: 2,
      title: "Agricultural Information Platform",
      category: "Team Project",
      image: profileImg3,
      mockupImage: asswenna_mokup, 
      description: "The platform is a digital agricultural solution built with Laravel, React, and MySQL that offers farmers personalized crop calendars and management tools. It features an AI chatbot for instant support and an intelligent disease detection system that identifies plant diseases from images.",
      technologies: ["Laravel", "React", "MySQL", "AI", "Chatbot", "Image Processing"],
      links: {
        github: "https://github.com/sahansara/Agricultural-Information-Platform-with-Crop-Calendar.git",
        live: "https://www.linkedin.com/posts/widane-vihaga12_reactjs-laravel-agritech-activity-7321262961413558272-L9ve?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFT6xbcBmtSz4nLgg_k6dz62lsCYgJflNWg"
      }
    },
    {
      id: 3,
      title: "UOC Daily",
      category: "Mobile App Development",
      image: uocDailyThumbnail, 
      mockupImage: uocDailyMockup, 
      description: "UOC Daily is a mobile news application developed using Java and Firebase. It enables university students and staff to access real-time news updates categorized as Academic, Events, and Sports. The admin panel allows content and user management, including news creation, image uploads, and role-based access. The UI was designed in Adobe XD and translated into a clean and responsive Android app.",
      technologies: [
        "Java",
        "Firebase",
        "Android Studio",
        "XML",
        "Firebase Auth",
        "Realtime Database",
        "Firebase Storage",
        "Adobe XD"
      ],
      links: {
        github: "https://github.com/sahansara/UOC-News-App.git",
        live: "https://www.linkedin.com/posts/widane-vihaga12_androiddevelopment-java-firebase-activity-7340617293363625987-pzDp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFT6xbcBmtSz4nLgg_k6dz62lsCYgJflNWg", 
      }
    },
   {
  id: 4,
  title: "Eco Tourism QR Explorer",
  category: "Team Project",
  image: ecoTourismThumbnail,
  mockupImage: ecoTourismMockup,
  description: "Eco Tourism QR Explorer is a Next.js, Firebase, and Gemini AI powered platform that enhances Sri Lanka's eco-tourism experience. Travelers can scan QR codes at destinations to access detailed information, photo galleries, and AI chatbot support with multi-language translation. This project promotes sustainable travel while delivering an immersive and inclusive digital experience.",
  technologies: [
    "Next.js",
    "Firebase",
    "Gemini AI",
    "Realtime Database",
    "Authentication",
    "Cloud Storage"
  ],
  links: {
    github: "https://www.linkedin.com/posts/widane-vihaga12_ecotourism-sustainabletravel-qrcodetechnology-activity-7361831165760057347-N_72?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFT6xbcBmtSz4nLgg_k6dz62lsCYgJflNWg", 
    live: "https://eco-tourism-qr-explorer.vercel.app/places/2pCnIWRY8PAJLjupzYdN"
  }

  
},
{
  id: 5,
  title: "Personal Portfolio Website",
  category: "Web Development",
  image: profileImg2, 
  mockupImage: portfolio_mokup, 
  description: "This is a responsive and modern portfolio website built using React and Tailwind CSS. It showcases my biography, skills, services, contact information, and featured projects in an elegant UI. The goal is to highlight my full-stack development expertise and design sense.",
  technologies: ["React", "Tailwind CSS", "JavaScript", "HTML"],
  links: {
        github: "https://github.com/sahansara/My_portfolio.git", 
        live: "http://localhost:5173/My_portfolio/#portfolio"   
      }
  
}
  ];

  // Dynamic projects per page based on screen size
  const projectsPerPage = isMobile ? 1 : 4;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const nextProjects = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + projectsPerPage >= projects.length ? 0 : prevIndex + projectsPerPage
    );
  };

  const prevProjects = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, projects.length - projectsPerPage) : prevIndex - projectsPerPage
    );
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + projectsPerPage);

  return (
    <section className="min-h-screen py-[10rem] px-[9%] w-full overflow-hidden max-md:py-[6rem] max-md:px-[5%] max-md:pb-28 relative" id="portfolio">

      <div className="absolute inset-0 bg-gradient-to-br from-[var(--second-bg-color)] via-[#2a3240] to-[var(--bg-color)] opacity-95"></div>
      

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[12%] left-[4%] w-2 h-2 bg-[var(--main-color)] rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-[38%] left-[7%] w-1 h-1 bg-[var(--main-color)] rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-[22%] right-[9%] w-1.5 h-1.5 bg-[var(--main-color)] rounded-full animate-ping opacity-30 animation-delay-1s"></div>
        <div className="absolute bottom-[28%] right-[5%] w-2 h-2 bg-[var(--main-color)] rounded-full animate-pulse opacity-50 animation-delay-2s"></div>
        <div className="absolute top-[65%] left-[13%] w-1 h-1 bg-[var(--main-color)] rounded-full animate-ping opacity-40 animation-delay-3s"></div>
        <div className="absolute bottom-[50%] right-[18%] w-1.5 h-1.5 bg-[var(--main-color)] rounded-full animate-pulse opacity-35 animation-delay-4s"></div>
      </div>

      <div className="relative z-10">
   
        <div className=" portfolio-content text-center mb-20 max-lg:mb-16 max-md:mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="flex space-x-1 mr-4">
              <div className="w-4 h-4 bg-[var(--main-color)] rounded-full animate-pulse"></div>
              <div className="w-4 h-4 bg-[var(--main-color)] rounded-full animate-pulse animation-delay-300ms"></div>
              <div className="w-4 h-4 bg-[var(--main-color)] rounded-full animate-pulse animation-delay-600ms"></div>
            </div>
            <span className="text-[1.6rem] max-md:text-[1.4rem] max-sm:text-[1.2rem] text-gray-400 font-[300] tracking-wide">My Work</span>
          </div>
          
          <h2 className="text-[6rem] max-lg:text-[4.5rem] max-md:text-[4rem] max-sm:text-[3rem] font-[900] leading-[0.9] mb-6">
            <span className="bg-gradient-to-r from-yellow-200 via-[var(--main-color)] to-yellow-200 bg-clip-text text-transparent">
              All
            </span>
            <span className="text-[var(--main-color)] ml-4">Projects</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--main-color)] to-transparent mx-auto mt-6"></div>
        </div>

     
        <div className="relative max-w-8xl mx-auto">
        
          {projects.length > projectsPerPage && (
            <button
              onClick={prevProjects}
              className="absolute left-[-80px] top-1/2 transform -translate-y-1/2 z-20 w-16 h-16 bg-gradient-to-br from-[var(--main-color)] to-[var(--main-color)]/80 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300  max-lg:left-[-60px] max-lg:w-12 max-lg:h-12  max-md:top-[200px] max-md:left-[-5px] max-md:w-10 max-md:h-10"
            >
              <i className="bx bx-chevron-left text-white text-2xl max-lg:text-xl max-md:text-lg"></i>
            </button>
          )}

        
          {projects.length > projectsPerPage && (
            <button
              onClick={nextProjects}
              className="absolute right-[-80px] top-1/2 transform -translate-y-1/2 z-20 w-16 h-16 bg-gradient-to-br from-[var(--main-color)] to-[var(--main-color)]/80 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-[var(--main-color)]/50 max-lg:right-[-60px] max-lg:w-12 max-lg:h-12 max-md:top-[200px] max-md:right-[-5px] max-md:w-10 max-md:h-10"
            >
              <i className="bx bx-chevron-right text-white text-2xl max-lg:text-xl max-md:text-lg"></i>
            </button>
          )}

          {/* Projects Grids */}
          <div className="overflow-hidden portfolio-box ">
            <div 
              className={`grid gap-8 max-md:gap-6 justify-items-center transition-transform duration-500 ease-in-out  max-md:py-[4rem] ${
                isMobile ? 'grid-cols-1' : 'grid-cols-4 max-xl:grid-cols-4 max-lg:grid-cols-2'
              }`}
              style={{ 
                transform: `translateX(0%)`,
                gridTemplateColumns: isMobile ? '1fr' : (projects.length < 4 ? `repeat(${Math.min(projects.length, 4)}, 1fr)` : 'repeat(4, 1fr)')
              }}
            >
              {visibleProjects.map(project => (
                <div 
                  className="group relative w-full max-w-[380px] bg-gradient-to-br from-[var(--second-bg-color)]/90 via-gray-800/80 to-[var(--second-bg-color)]/90 backdrop-blur-md rounded-3xl border-2 border-white/10 overflow-hidden cursor-pointer transition-all duration-500 hover:border-[var(--main-color)]/60 hover:scale-[1.02] hover:shadow-2xl shadow-lg max-sm:w-[280px]"
                  key={project.id} 
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-[var(--main-color)]/40 rounded-tl-3xl opacity-60 z-20"></div>
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-[var(--main-color)]/40 rounded-br-3xl opacity-60 z-20"></div>
                  
                  {/* Image container */}
                  <div className="relative overflow-hidden rounded-t-3xl">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-[280px] max-md:h-[250px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Category badge */}
                    <div className="absolute top-4 right-4 bg-[var(--main-color)]/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-[var(--main-color)]/30">
                      <span className="text-white font-[600] text-[1rem] max-sm:text-[0.9rem]">{project.category}</span>
                    </div>
                  </div>

                  {/* Content  */}
                  <div className="p-6 max-md:p-5 relative">
                    {/*  title */}
                    <h3 className="text-[1.8rem] max-md:text-[2rem] max-sm:text-[1.8rem] font-[700] text-white mb-3 group-hover:text-[var(--main-color)] transition-colors duration-300 line-clamp-2">
                      {project.title}
                    </h3>
                    
                    {/* Technologies  */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span 
                          key={index}
                          className="bg-[var(--bg-color)]/60 text-[var(--main-color)] px-3 py-1 rounded-lg text-[1.4rem] font-[500] border border-[var(--main-color)]/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="bg-[var(--main-color)]/20 text-[var(--main-color)] px-3 py-1 rounded-lg text-[1.2rem] font-[500]">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Description  */}
                    <p className="text-gray-300 text-[1.8rem] max-md:text-[1.5rem] max-xl:text[1.8rem] leading-[1.5] mb-6 line-clamp-3">
                      {project.description.length > 120 ? project.description.substring(0, 120) + '...' : project.description}
                    </p>

                    {/* Action button */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-14 h-14 bg-gradient-to-br from-[var(--main-color)]/20 to-[var(--main-color)]/40 rounded-xl flex items-center justify-center border border-[var(--main-color)]/30 group-hover:scale-110 transition-transform duration-300">
                          <i className="bx bx-show text-[var(--main-color)] text-2xl"></i>
                        </div>
                        <span className="text-gray-400 text-[1.4rem] font-[500]">View Details</span>
                      </div>
                      
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--main-color)] to-[var(--main-color)]/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--main-color)]/30 ">
                        <i className="bx bx-link-external text-[var(--bg-color)] text-lg "></i>
                      </div>
                    </div>
                  </div>

               
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--main-color)]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination dots */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12 space-x-3">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * projectsPerPage)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / projectsPerPage) === index
                      ? 'bg-[var(--main-color)] scale-125'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      <style jsx>{`
        .animation-delay-300ms { animation-delay: 300ms; }
        .animation-delay-600ms { animation-delay: 600ms; }
        .animation-delay-1s { animation-delay: 1s; }
        .animation-delay-2s { animation-delay: 2s; }
        .animation-delay-3s { animation-delay: 3s; }
        .animation-delay-4s { animation-delay: 4s; }

        /* Line clamp utility */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Enhanced hover effects */
        .group:hover .bx {
          animation: iconPulse 2s ease-in-out infinite;
        }

        @keyframes iconPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        /* Arrow button hover effects */
        button:hover {
          box-shadow: 0 8px 32px rgba(var(--main-color-rgb), 0.4);
        }
      `}</style>
    </section>
  );
};

export default Portfolio;