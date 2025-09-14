const Services = () => {
  return (
    <section className="min-h-screen py-[10rem] px-[8%] w-full overflow-hidden max-md:py-[6rem] max-md:px-[5%] max-md:pb-28 relative" id="services">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--second-bg-color)] via-[#2a3240] to-[var(--bg-color)] opacity-95"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[3%] w-2 h-2 bg-[var(--main-color)] rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-[35%] left-[6%] w-1 h-1 bg-[var(--main-color)] rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-[20%] right-[8%] w-1.5 h-1.5 bg-[var(--main-color)] rounded-full animate-ping opacity-30 animation-delay-1s"></div>
        <div className="absolute bottom-[25%] right-[4%] w-2 h-2 bg-[var(--main-color)] rounded-full animate-pulse opacity-50 animation-delay-2s"></div>
        <div className="absolute top-[60%] left-[12%] w-1 h-1 bg-[var(--main-color)] rounded-full animate-ping opacity-40 animation-delay-3s"></div>
        <div className="absolute bottom-[45%] right-[15%] w-1.5 h-1.5 bg-[var(--main-color)] rounded-full animate-pulse opacity-35 animation-delay-4s"></div>
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className=" services-container text-center mb-20 max-lg:mb-16 max-md:mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="flex space-x-1 mr-4">
              <div className="w-4 h-4 bg-[var(--main-color)] rounded-full animate-pulse"></div>
              <div className="w-4 h-4 bg-[var(--main-color)] rounded-full animate-pulse animation-delay-300ms"></div>
              <div className="w-4 h-4 bg-[var(--main-color)] rounded-full animate-pulse animation-delay-600ms"></div>
            </div>
            <span className="text-[1.6rem] max-md:text-[1.4rem] max-sm:text-[1.2rem] text-gray-400 font-[300] tracking-wide">What I Offer</span>
          </div>
          
          <h2 className="text-[7rem] max-lg:text-[5rem] max-md:text-[4rem] max-sm:text-[3rem] font-[900] leading-[0.9] mb-6">
            <span className="bg-gradient-to-r from-yellow-200 via-[var(--main-color)] to-yellow-200 bg-clip-text text-transparent">
              My
            </span>
            <span className="text-[var(--main-color)] ml-4">Services</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--main-color)] to-transparent mx-auto mt-6"></div>
        </div>

        {/* Services Grid */}
        <div className="grid  grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-12 max-md:gap-8 justify-items-center max-w-8xl max-h-[1000vw] mx-auto  ">
          
          {/* Web Development Service */}
          <div className="group services-content-left relative w-full max-w-[320px] bg-gradient-to-br from-[var(--second-bg-color)]/90 via-gray-800/80 to-[var(--second-bg-color)]/90 backdrop-blur-md rounded-3xl border-2 border-white/10 p-8 max-md:p-6 text-center transition-all duration-500 hover:border-[var(--main-color)]/60 hover:scale-[1.02] hover:shadow-2xl min-h-[620px] max-md:min-h-[580px] max-sm:min-h-auto">
            {/* Glowing effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--main-color)]/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-[var(--main-color)]/40 rounded-tl-3xl opacity-60"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-[var(--main-color)]/40 rounded-br-3xl opacity-60"></div>
            
            <div className="relative z-10">
              {/* Icon with modern styling */}
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[var(--main-color)]/20 to-[var(--main-color)]/40 rounded-2xl flex items-center justify-center border border-[var(--main-color)]/30 group-hover:scale-110 transition-transform duration-300">
                <i className="bx bx-code-alt text-[4rem] text-[var(--main-color)] max-sm:text-[3rem]"></i>
              </div>
              
              <h3 className="text-[2.4rem] max-md:text-[2rem] max-sm:text-[1.8rem] font-[700] text-white mb-4 group-hover:text-[var(--main-color)] transition-colors duration-300">
                Web Development
              </h3>
              
              <p className="text-[1.5rem] max-md:text-[1.4rem] max-sm:text-[1.4rem] leading-[1.6] text-gray-300 font-[300] mb-8">
              Web app development is about building interactive, dynamic, and responsive applications for browsers. It combines front-end tools like React or Vue with back-end frameworks such as Node.js or Laravel, supported by databases like MySQL or MongoDB to ensure performance, security, and scalability.
            </p>

              
              <a 
                href="https://www.linkedin.com/in/widane-vihaga12/" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[var(--main-color)] to-[var(--main-color)]/80 text-[var(--bg-color)] font-[600] text-[1.4rem] max-sm:text-[1.2rem] rounded-2xl hover:shadow-lg hover:shadow-[var(--main-color)]/30 transition-all duration-300 hover:-translate-y-1 border border-[var(--main-color)]/50"
              >
                <span>Read More</span>
                <i className="bx bx-right-arrow-alt text-xl ml-2"></i>
              </a>
            </div>
          </div>

          {/* Software Development Service */}
          <div className="group services-content-left relative w-full max-w-[320px] bg-gradient-to-br from-[var(--second-bg-color)]/90 via-gray-800/80 to-[var(--second-bg-color)]/90 backdrop-blur-md rounded-3xl border-2 border-white/10 p-8 max-md:p-6 text-center transition-all duration-500 hover:border-[var(--main-color)]/60 hover:scale-[1.02] hover:shadow-2xl min-h-[620px] max-md:min-h-[580px] max-sm:min-h-auto">
            {/* Glowing effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--main-color)]/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-[var(--main-color)]/40 rounded-tl-3xl opacity-60"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-[var(--main-color)]/40 rounded-br-3xl opacity-60"></div>
            
            <div className="relative z-10">
              {/* Icon with modern styling */}
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[var(--main-color)]/20 to-[var(--main-color)]/40 rounded-2xl flex items-center justify-center border border-[var(--main-color)]/30 group-hover:scale-110 transition-transform duration-300">
                <i className="bx bx-desktop text-[4rem] text-[var(--main-color)] max-sm:text-[3rem]"></i>
              </div>
              
              <h3 className="text-[2.4rem] max-md:text-[2rem] max-sm:text-[1.8rem] font-[700] text-white mb-4 group-hover:text-[var(--main-color)] transition-colors duration-300">
                Software Development
              </h3>
              
              <p className="text-[1.5rem] max-md:text-[1.4rem] max-sm:text-[1.4rem] leading-[1.6] text-gray-300 font-[300] mb-8">
              Software development is the process of creating desktop or server applications using languages like Java, C#, C++, Python, and Swift. Tools such as Visual Studio, Eclipse, Git, and Docker help developers build, manage, and deploy scalable, reliable solutions efficiently.
            </p>

              
              <a 
                href="https://www.linkedin.com/in/widane-vihaga12/" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[var(--main-color)] to-[var(--main-color)]/80 text-[var(--bg-color)] font-[600] text-[1.4rem] max-sm:text-[1.2rem] rounded-2xl hover:shadow-lg hover:shadow-[var(--main-color)]/30 transition-all duration-300 hover:-translate-y-1 border border-[var(--main-color)]/50"
              >
                <span>Read More</span>
                <i className="bx bx-right-arrow-alt text-xl ml-2"></i>
              </a>
            </div>
          </div>

          {/* Mobile App Development Service */}
          <div className="group services-content-right relative w-full max-w-[320px] bg-gradient-to-br from-[var(--second-bg-color)]/90 via-gray-800/80 to-[var(--second-bg-color)]/90 backdrop-blur-md rounded-3xl border-2 border-white/10 p-8 max-md:p-6 text-center transition-all duration-500 hover:border-[var(--main-color)]/60 hover:scale-[1.02] hover:shadow-2xl min-h-[620px] max-md:min-h-[580px] max-sm:min-h-auto">
            {/* Glowing effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--main-color)]/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-[var(--main-color)]/40 rounded-tl-3xl opacity-60"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-[var(--main-color)]/40 rounded-br-3xl opacity-60"></div>
            
            <div className="relative z-10">
              {/* Icon with modern styling */}
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[var(--main-color)]/20 to-[var(--main-color)]/40 rounded-2xl flex items-center justify-center border border-[var(--main-color)]/30 group-hover:scale-110 transition-transform duration-300">
                <i className="bx bx-mobile-alt text-[4rem] text-[var(--main-color)] max-sm:text-[3rem]"></i>
              </div>
              
              <h3 className="text-[2.4rem] max-md:text-[2rem] max-sm:text-[1.8rem] font-[700] text-white mb-4 group-hover:text-[var(--main-color)] transition-colors duration-300">
                Mobile App Development
              </h3>
              
             <p className="text-[1.5rem] max-md:text-[1.4rem] max-sm:text-[1.4rem] leading-[1.6] text-gray-300 font-[300] mb-8">
              Mobile app development builds apps for iOS and Android using native tools like Swift or Kotlin, or cross-platform frameworks like Flutter and React Native. IDEs such as Xcode and Android Studio, along with cloud backends like Firebase and AWS, power performance, storage, and real-time features.
            </p>

              
              <a 
                href="https://www.linkedin.com/in/widane-vihaga12/" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[var(--main-color)] to-[var(--main-color)]/80 text-[var(--bg-color)] font-[600] text-[1.4rem] max-sm:text-[1.2rem] rounded-2xl hover:shadow-lg hover:shadow-[var(--main-color)]/30 transition-all duration-300 hover:-translate-y-1 border border-[var(--main-color)]/50"
              >
                <span>Read More</span>
                <i className="bx bx-right-arrow-alt text-xl ml-2"></i>
              </a>
            </div>
          </div>

          {/* Blogging Service */}
          <div className="group services-content-right relative w-full max-w-[320px] bg-gradient-to-br from-[var(--second-bg-color)]/90 via-gray-800/80 to-[var(--second-bg-color)]/90 backdrop-blur-md rounded-3xl border-2 border-white/10 p-8 max-md:p-6 text-center transition-all duration-500 hover:border-[var(--main-color)]/60 hover:scale-[1.02] hover:shadow-2xl min-h-[620px] max-md:min-h-[580px] max-sm:min-h-auto">
            {/* Glowing effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--main-color)]/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-[var(--main-color)]/40 rounded-tl-3xl opacity-60"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-[var(--main-color)]/40 rounded-br-3xl opacity-60"></div>
            
            <div className="relative z-10">
              {/* Icon with modern styling */}
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[var(--main-color)]/20 to-[var(--main-color)]/40 rounded-2xl flex items-center justify-center border border-[var(--main-color)]/30 group-hover:scale-110 transition-transform duration-300">
                <i className='bx bxl-medium text-[4rem] text-[var(--main-color)] max-sm:text-[3rem]'></i>
              </div>
              
              <h3 className="text-[2.4rem] max-md:text-[2rem] max-sm:text-[1.8rem] font-[700] text-white mb-4 group-hover:text-[var(--main-color)] transition-colors duration-300">
                Blogging
              </h3>
              
              <p className="text-[1.5rem] max-md:text-[1.4rem] max-sm:text-[1.4rem] leading-[1.6] text-gray-300 font-[300] mb-8">
                I write engaging blogs that share knowledge, personal insights, and practical tips. My goal is to make complex topics simple and connect with a community of learners and creators.
              </p>

              
              <a 
                href="https://medium.com/@widanevihaga" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[var(--main-color)] to-[var(--main-color)]/80 text-[var(--bg-color)] font-[600] text-[1.4rem] max-sm:text-[1.2rem] rounded-2xl hover:shadow-lg hover:shadow-[var(--main-color)]/30 transition-all duration-300 hover:-translate-y-1 border border-[var(--main-color)]/50"
              >
                <span>Read More</span>
                <i className="bx bx-right-arrow-alt text-xl ml-2"></i>
              </a>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .animation-delay-300ms { animation-delay: 300ms; }
        .animation-delay-600ms { animation-delay: 600ms; }
        .animation-delay-1s { animation-delay: 1s; }
        .animation-delay-2s { animation-delay: 2s; }
        .animation-delay-3s { animation-delay: 3s; }
        .animation-delay-4s { animation-delay: 4s; }

        /* Enhanced hover effects */
        .group:hover .bx {
          animation: iconPulse 2s ease-in-out infinite;
        }

        @keyframes iconPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        /* Responsive grid adjustments */
        @media (max-width: 1279px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 767px) {
          .services-grid {
            grid-template-columns: 0.5fr;
          }
        }

        /* Button hover effects */
        .group a:hover {
          transform: translateY(-2px);
       
        }
      `}</style>
    </section>
  );
};

export default Services;