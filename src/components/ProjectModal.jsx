import { useEffect } from 'react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  
 
  useEffect(() => {
  // Prevent background scrolling stop it
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';
  
  return () => {
    document.body.style.overflow = 'unset';
    document.documentElement.style.overflow = 'unset';
  };
}, []);
  
  return (
   <div 
  className="fixed inset-0 bg-gray-800 bg-opacity-80 backdrop-blur-sm z-[1000] flex items-center justify-center p-4 max-md:p-2 overflow-hidden"
  onClick={(e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }}
  onWheel={(e) => e.stopPropagation()}
  onTouchMove={(e) => e.stopPropagation()}
>
      <div className="relative w-full max-w-5xl h-[90vh] max-h-[800px] bg-gradient-to-br from-[var(--second-bg-color)]/95 via-gray-800/90 to-[var(--second-bg-color)]/95 backdrop-blur-md rounded-3xl border-2 border-[var(--main-color)]/30 shadow-2xl animate-modal-in flex flex-col">
        
        {/* Glowing border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-400 rounded-3xl blur-sm opacity-20"></div>
        
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-[var(--main-color)] rounded-tl-3xl opacity-60 z-10"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-[var(--main-color)] rounded-br-3xl opacity-60 z-10"></div>
        
        {/* Header - Fixed */}
        <div className="relative z-20 flex-shrink-0 p-6 max-md:p-4 bg-gradient-to-b from-[var(--second-bg-color)]/95 to-transparent backdrop-blur-md border-b border-white/10 rounded-t-3xl">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--main-color)]/20 to-[var(--main-color)]/40 rounded-xl flex items-center justify-center border border-[var(--main-color)]/30">
                <i className="bx bx-code-block text-[var(--main-color)] text-2xl"></i>
              </div>
              <div>
                <h3 className="text-[2.2rem] max-md:text-[1.8rem] max-sm:text-[1.6rem] font-[700] text-[var(--main-color)] leading-none">
                  {project.title}
                </h3>
                <span className="text-gray-400 text-[1.1rem] max-sm:text-[1rem] font-[400]">{project.category}</span>
              </div>
            </div>
            
            <button 
              onClick={onClose} 
              className="w-12 h-12 bg-gradient-to-br from-red-600/30 to-red-600 rounded-xl border border-red-400 text-red-400 hover:text-white hover:bg-red-500/30 transition-all duration-300 flex items-center justify-center group"
            >
              <i className="bx bx-x text-2xl group-hover:rotate-90 transition-transform duration-300"></i>
            </button>
          </div>
        </div>
        
        {/* Scrollable Content Container */}
        <div className="relative flex-1 overflow-y-auto scrollbar-hide rounded-b-3xl">
          <div className="p-6 max-md:p-4 space-y-8 pb-12">
            
            {/* Project Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--main-color)]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-6 max-md:p-4 border border-white/10">
                <img 
                  src={project.mockupImage} 
                  alt={`${project.title} mockup`}
                  className="w-full max-w-2xl mx-auto h-auto max-h-[400px] object-contain rounded-xl shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </div>
            
            {/* Project Description */}
            <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 rounded-2xl p-6 max-md:p-4 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[var(--main-color)]/20 to-[var(--main-color)]/40 rounded-xl flex items-center justify-center border border-[var(--main-color)]/30 mr-3">
                  <i className="bx bx-file-blank text-[var(--main-color)] text-2lg"></i>
                </div>
                <h4 className="text-[2rem] max-md:text-[1.9rem] max-lg:text-[1.9rem] max-sm:text-[1.8rem] font-[600] text-[var(--main-color)]">
                  Project Description
                </h4>
              </div>
              <p className="text-[1.3rem] max-lg:text-[1.8rem] max-md:text-[1.4rem] max-sm:text-[1.3rem] leading-[1.7] text-gray-300 font-[300]">
                {project.description}
              </p>
            </div>
            
            {/* Technologies im used */}
            <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 rounded-2xl p-6 max-md:p-4 border border-white/10">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[var(--main-color)]/20 to-[var(--main-color)]/40 rounded-xl flex items-center justify-center border border-[var(--main-color)]/30 mr-3">
                  <i className="bx bx-code-curly text-[var(--main-color)] text-lg"></i>
                </div>
                <h4 className="text-[1.8rem] max-md:text-[1.6rem] max-sm:text-[1.4rem] font-[600] text-[var(--main-color)]">
                  Technologies Used
                </h4>
              </div>
              <div className="grid grid-cols-2 gap-4 max-md:flex max-md:flex-wrap max-md:justify-center max-md:gap-4">
                {project.technologies.map((tech, index) => (
                  <div 
                    key={index} 
                    className="group/tech bg-gradient-to-br from-[var(--bg-color)]/60 to-gray-900/40 border border-[var(--main-color)]/20 text-[var(--main-color)] py-3 px-4 rounded-xl text-[1.1rem] max-lg:text-[1.3rem] max-sm:text-[1rem] font-[500] transition-all duration-300 hover:border-[var(--main-color)]/60 hover:bg-[var(--main-color)]/10 hover:-translate-y-1 hover:shadow-lg flex items-center justify-center text-center"
                  >
                    <span className="group-hover/tech:scale-105 transition-transform duration-200">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Project Links */}
            <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 rounded-2xl p-6 max-md:p-4 border border-white/10">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[var(--main-color)]/20 to-[var(--main-color)]/40 rounded-xl flex items-center justify-center border border-[var(--main-color)]/30 mr-3">
                  <i className="bx bx-link text-[var(--main-color)] text-lg"></i>
                </div>
                <h4 className="text-[1.8rem] max-md:text-[1.6rem] max-sm:text-[1.4rem] font-[600] text-[var(--main-color)]">
                  Project Links
                </h4>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={project.links.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-[var(--main-color)] to-[var(--main-color)]/80 px-6 py-4 rounded-2xl text-[var(--bg-color)] text-[1.3rem] max-sm:text-[1.2rem] font-[600] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[var(--main-color)]/30 group border border-[var(--main-color)]/50"
                >
                  <i className="bx bxl-github text-2xl group-hover:rotate-12 transition-transform duration-300"></i> 
                  <span>View Source Code</span>
                </a>
                <a 
                  href={project.links.live} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-3 bg-transparent border-2 border-[var(--main-color)] text-[var(--main-color)] px-6 py-4 rounded-2xl text-[1.3rem] max-sm:text-[1.2rem] font-[600] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[var(--main-color)]/30 hover:bg-[var(--main-color)]/10 group"
                >
                  <i className="bx bx-link-external text-2xl group-hover:scale-110 transition-transform duration-300"></i> 
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Hide scrollbar but keep functionality */
        .scrollbar-hide {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* Internet Explorer 10+ */
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* WebKit */
        }

        /* Modal entrance animation */
        @keyframes modal-in {
          from { 
            opacity: 0; 
            transform: scale(0.9) translateY(-20px);
          }
          to { 
            opacity: 1; 
            transform: scale(1) translateY(0);
          }
        }

        .animate-modal-in {
          animation: modal-in 0.4s ease-out forwards;
        }

        /* Smooth scrolling */
        .overflow-y-scroll {
          scroll-behavior: smooth;
        }

        /* Enhanced responsive design */
        @media (max-width: 640px) {
          .grid-cols-2 {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .flex-col {
            gap: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectModal;