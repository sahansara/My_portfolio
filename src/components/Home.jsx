import { useEffect } from "react";
import Typed from "typed.js";
import profileImg2 from "../assets/profile2.webp";

const Home = () => {
  useEffect(() => {
    new Typed(".multiple-text", {
      strings: ["Web Developer", "Software Developer", "Mobile App Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });
  }, []);

  return (
    <section className="min-h-screen py-[10rem] px-[9%] w-full overflow-hidden flex justify-center items-center max-md:flex-col relative" id="home">
      {/* Modern gradient background  */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-color)] via-[var(--second-bg-color)] to-[#1a1f28] opacity-95"></div>
      
      {/* Animated background  */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-[var(--main-color)] rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-[60%] left-[15%] w-1 h-1 bg-[var(--main-color)] rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-[30%] right-[20%] w-1.5 h-1.5 bg-[var(--main-color)] rounded-full animate-ping opacity-30 animation-delay-1s"></div>
        <div className="absolute bottom-[40%] right-[10%] w-2 h-2 bg-[var(--main-color)] rounded-full animate-pulse opacity-50 animation-delay-2s"></div>
        <div className="absolute top-[80%] left-[80%] w-1 h-1 bg-[var(--main-color)] rounded-full animate-ping opacity-40 animation-delay-3s"></div>
      </div>

      <div className="home-content max-md:mt-16 relative z-10 max-w-2xl">
        {/* Modern geometric  */}
        <div className="absolute -top-10 -left-10 w-20 h-20 border-l-2 border-t-2 border-[var(--main-color)] opacity-30"></div>
        <div className="absolute -bottom-10 -right-10 w-20 h-20 border-r-2 border-b-2 border-[var(--main-color)] opacity-30"></div>
        
        {/* Professional greeting with typed text overlay */}
        <div className="mb-10 max-md:order-1">
          <div className="flex items-center mb-6">
            <div className="flex space-x-1 mr-4">
              <div className="w-2 h-2 bg-[var(--main-color)] rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-[var(--main-color)] rounded-full animate-pulse animation-delay-300ms"></div>
              <div className="w-2 h-2 bg-[var(--main-color)] rounded-full animate-pulse animation-delay-600ms"></div>
            </div>
            <h3 className="text-[2.4rem] font-[300] text-gray-300 tracking-wide max-md:text-[2rem]">
              Hello, I'm
            </h3>
          </div>
          
          <h1 className="text-[8rem] font-[900] leading-[0.85] mb-6 max-md:text-[5rem] max-sm:text-[3.8rem] relative">
            <span className="bg-gradient-to-r from-yellow-200 via-[var(--main-color)] to-yellow-200 bg-clip-text text-transparent relative">
              Sahansara
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--main-color)] to-transparent opacity-60"></div>
            </span>
          </h1>
          
          <div className="flex flex-col space-y-2">
            <h3 className="text-[3.4rem] font-[600] max-md:text-[2.6rem] max-sm:text-[2.2rem]">
              <span className="text-gray-300">A passionate </span>
            </h3>
            <h3 className="text-[3.4rem] font-[700] max-md:text-[2.6rem] max-sm:text-[2.2rem]">
              <span className="text-[var(--main-color)] multiple-text"></span>
            </h3>
          </div>
        </div>

        {/* Enhanced description with modern styling */}
<div className="relative mb-12 p-6 backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 max-md:order-2">
  <div className="absolute -left-1 top-6 w-1 h-16 bg-gradient-to-b from-[var(--main-color)] to-transparent rounded-full"></div>
  <p className="text-[1.9rem] leading-[1.7] text-gray-300 font-[300] pl-6 max-md:text-[1.7rem] max-sm:text-[1.5rem]">
    Crafting <span className="text-white font-semibold bg-gradient-to-r from-[var(--main-color)]/20 to-transparent px-2 rounded">innovative digital solutions</span> with modern technologies. 
    I specialize in building 
    <span className="text-white font-semibold"> scalable architectures</span> and 
    <span className="text-white font-semibold"> seamless user experiences</span> that drive business growth.
  </p>
</div>


        {/* Enhanced CTA buttons */}
        <div className="flex gap-6 max-sm:flex-col max-md:order-4">
          <a href="/" className="group relative inline-flex items-center justify-center py-4 px-8 bg-gradient-to-r from-[var(--main-color)]  rounded-2xl text-[1.8rem] text-[var(--bg-color)] font-[600] transition-all duration-300 hover:shadow-xl hover:shadow-[var(--main-color)]/30 hover:-translate-y-1 max-md:py-3 max-md:px-6 max-md:text-[1.6rem] overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-[] to-[var(--main-color)] opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></span>
            <i className='bx bx-download mr-2 text-2xl relative z-10'></i>
            <span className="relative z-10">Download CV</span>
          </a>
          
          
        </div>

        {/* Modern social media section */}
        <div className="social-media mb-12 max-md:order-5 py-12">
          <h4 className="text-[2.0rem] text-gray-400 mb-6 font-[300]">Let's Connect</h4>
          <div className="flex gap-5 ">
            {[
              { href: "https://www.linkedin.com/in/widane-vihaga-a73579339/", icon: "bxl-linkedin", name: "LinkedIn", className:"w-20 h-20 " },
              { href: "https://github.com/sahansara", icon: "bxl-github", name: "GitHub" },
              { href: "https://medium.com/@widanevihaga", icon: "bxl-medium", name: "Medium" },
              { href: "/", icon: "bxl-discord-alt", name: "Discord" }
            ].map((social) => (
              <a key={social.name}
                 href={social.href} 
                 className="group relative inline-flex justify-center items-center w-20 h-20 bg-[var(--second-bg-color)]/50 backdrop-blur-sm border border-white/20 rounded-2xl text-2xl text-gray-300 transition-all duration-300 hover:bg-[var(--main-color)] hover:text-[var(--bg-color)] hover:border-[var(--main-color)] hover:scale-110 hover:shadow-lg hover:shadow-[var(--main-color)]/25 hover:-translate-y-1">
                <i className={`bx ${social.icon} text-4xl transition-transform group-hover:scale-110`}></i>
                <span className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-[var(--second-bg-color)] px-2 py-1 rounded-lg">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        
      </div>
     
      {/* Enhanced Image Section */}
      <div className="home-img relative flex justify-end items-center w-full h-auto p-5 max-md:mt-16 max-md:w-full max-md:justify-center z-10 max-md:order-3"> 
        {/* Advanced geometric background */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[var(--main-color)] transform rotate-45 rounded-2xl blur-xl animate-float"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-[var(--main-color)] to-blue-400 transform rotate-12 rounded-2xl blur-lg animate-float-delay-1"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-[var(--main-color)] rounded-full blur-2xl animate-float-delay-2"></div>
          <div className="absolute top-1/6 right-1/6 w-20 h-20 bg-gradient-to-tr from-[var(--main-color)] to-cyan-400 transform rotate-45 rounded-xl blur-lg animate-float-delay-3"></div>
        </div>
        
        {/* Main image container with advanced styling */}
        <div className="relative group">
          {/* Multiple layered */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--main-color)]/20 to-blue-400/20 backdrop-blur-lg rounded-[3rem] border border-white/30 shadow-2xl transform -translate-x-3 -translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 w-[25vw] h-[25vw] max-lg:w-[30vw] max-lg:h-[30vw] max-md:w-[40vw] max-md:h-[40vw] max-sm:w-[50vw] max-sm:h-[50vw] max-[450px]:w-[60vw] max-[450px]:h-[60vw]"></div>
          
          <div className="absolute inset-0 bg-gradient-to-tl from-white/10 to-[var(--main-color)]/10 backdrop-blur-sm rounded-[2.5rem] border border-[var(--main-color)]/40 shadow-xl transform translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 w-[25vw] h-[25vw] max-lg:w-[30vw] max-lg:h-[30vw] max-md:w-[40vw] max-md:h-[40vw] max-sm:w-[50vw] max-sm:h-[50vw] max-[450px]:w-[60vw] max-[450px]:h-[60vw]"></div>
          
          {/* Image with enhanced styling */}
          <div className="relative overflow-hidden rounded-[2rem] w-[25vw] h-[25vw] max-lg:w-[30vw] max-lg:h-[30vw] max-md:w-[40vw] max-md:h-[40vw] max-sm:w-[50vw] max-sm:h-[50vw] max-[450px]:w-[60vw] max-[450px]:h-[60vw]">
            <img 
              src={profileImg2} 
              alt="Sahansara - Professional Developer" 
              className="relative w-full h-full object-cover rounded-[2rem] border-2 border-[var(--main-color)]/60 shadow-2xl shadow-black/50 animate-float-image transition-all duration-500 hover:border-[var(--main-color)] hover:shadow-[0px_25px_50px_rgba(0,238,255,0.3)] z-[3] grayscale-[10%] hover:grayscale-0 hover:scale-105"
            />
            
            {/* Overlay gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--main-color)]/0 via-transparent to-[var(--main-color)]/0 group-hover:from-[var(--main-color)]/10 group-hover:to-blue-400/10 transition-all duration-500 rounded-[2rem] pointer-events-none"></div>
          </div>
          
          {/* Modern corner accents */}
          <div className="absolute -top-6 -right-6 w-24 h-2 bg-gradient-to-r from-[var(--main-color)] to-transparent animate-pulse rounded-full"></div>
          <div className="absolute -top-6 -right-6 w-2 h-24 bg-gradient-to-b from-[var(--main-color)] to-transparent animate-pulse rounded-full"></div>
          <div className="absolute -bottom-6 -left-6 w-24 h-2 bg-gradient-to-l from-[var(--main-color)] to-transparent animate-pulse animation-delay-1000ms rounded-full"></div>
          <div className="absolute -bottom-6 -left-6 w-2 h-24 bg-gradient-to-t from-[var(--main-color)] to-transparent animate-pulse animation-delay-1000ms rounded-full"></div>
        </div>
        
       
        
        {/* Advanced orbital rings system */}
        <div className="absolute top-1/2 left-[20%] transform -translate-x-1/2 -translate-y-1/2 w-[35vw] h-[35vw] border border-[var(--main-color)]/20 rounded-full animate-spin-slow z-[1] max-lg:w-[40vw] max-lg:h-[40vw] max-md:left-1/2 max-md:w-[50vw] max-md:h-[50vw] max-sm:w-[65vw] max-sm:h-[65vw] max-[450px]:w-[75vw] max-[450px]:h-[75vw]">
          <div className="absolute top-0 left-1/2 w-3 h-3 bg-[var(--main-color)] rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-[var(--main-color)]/50"></div>
          <div className="absolute bottom-0 right-1/4 w-2 h-2 bg-blue-400 rounded-full transform translate-x-1/2 translate-y-1/2 shadow-md shadow-blue-400/50"></div>
          <div className="absolute left-0 top-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute right-0 bottom-1/3 w-2.5 h-2.5 bg-[var(--main-color)]/70 rounded-full transform translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        {/* Secondary ring */}
        <div className="absolute top-1/2 left-[20%] transform -translate-x-1/2 -translate-y-1/2 w-[45vw] h-[45vw] border border-blue-400/10 rounded-full animate-spin-reverse z-[0] max-lg:w-[50vw] max-lg:h-[50vw] max-md:left-1/2 max-md:w-[60vw] max-md:h-[60vw] max-sm:w-[75vw] max-sm:h-[75vw] max-[450px]:w-[85vw] max-[450px]:h-[85vw]">
          <div className="absolute top-1/4 right-0 w-1 h-1 bg-blue-300 rounded-full transform translate-x-1/2"></div>
          <div className="absolute bottom-1/4 left-0 w-1.5 h-1.5 bg-[var(--main-color)]/60 rounded-full transform -translate-x-1/2"></div>
        </div>
      </div> 

      <style jsx>{`
        @keyframes float-image {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(1deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        
        @keyframes float-delay-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(90deg); }
        }
        
        @keyframes float-delay-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(270deg); }
        }
        
        @keyframes float-delay-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(45deg); }
        }

        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes spin-reverse {
          from { transform: translate(-50%, -50%) rotate(360deg); }
          to { transform: translate(-50%, -50%) rotate(0deg); }
        }

        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delay-1 { animation: float-delay-1 4s ease-in-out infinite; }
        .animate-float-delay-2 { animation: float-delay-2 5s ease-in-out infinite; }
        .animate-float-delay-3 { animation: float-delay-3 7s ease-in-out infinite; }
        .animate-float-image { animation: float-image 4s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 25s linear infinite; }
        
        .animation-delay-300ms { animation-delay: 300ms; }
        .animation-delay-600ms { animation-delay: 600ms; }
        .animation-delay-1s { animation-delay: 1s; }
        .animation-delay-1000ms { animation-delay: 1000ms; }
        .animation-delay-2s { animation-delay: 2s; }
        .animation-delay-3s { animation-delay: 3s; }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .home-content h1 { font-size: 4.5rem; }
          .home-content h3 { font-size: 2.2rem; }
          .tech-stack { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 450px) {
          .home-content h1 { font-size: 3.2rem; }
          .home-content h3 { font-size: 1.9rem; }
          .tech-stack { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </section>
  );
};

export default Home;