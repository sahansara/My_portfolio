import React, { useState, useEffect } from 'react';

const About = () => {
  const [displayedCode, setDisplayedCode] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const codeText = `const developer = {
  name: "Sahansara",
  passion: "Innovation", 
  mission: "Create Impact"
}`;

  useEffect(() => {
    if (currentIndex < codeText.length) {
      const timeout = setTimeout(() => {
        setDisplayedCode(prev => prev + codeText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50 + Math.random() * 50);
      
      return () => clearTimeout(timeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setDisplayedCode('');
        setCurrentIndex(0);
      }, 3000);
      
      return () => clearTimeout(resetTimeout);
    }
  }, [currentIndex, codeText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);

  const formatCodeWithSyntax = (code) => {
    const parts = [];
    let currentPart = '';
    let i = 0;
    
    while (i < code.length) {
      const char = code[i];
      const remaining = code.slice(i);
      
      if (remaining.startsWith('const') || remaining.startsWith('let') || remaining.startsWith('var')) {
        if (currentPart) {
          parts.push(<span key={parts.length} className="text-white">{currentPart}</span>);
          currentPart = '';
        }
        const keyword = remaining.match(/^(const|let|var)/)[0];
        parts.push(<span key={parts.length} className="text-purple-400">{keyword}</span>);
        i += keyword.length;
      }
      else if (remaining.match(/^(name|passion|mission):/)) {
        if (currentPart) {
          parts.push(<span key={parts.length} className="text-white">{currentPart}</span>);
          currentPart = '';
        }
        const prop = remaining.match(/^(name|passion|mission):/)[0];
        const propName = prop.slice(0, -1);
        parts.push(<span key={parts.length} className="text-blue-400">{propName}</span>);
        parts.push(<span key={parts.length} className="text-white">:</span>);
        i += prop.length;
      }
      else if (char === '"') {
        if (currentPart) {
          parts.push(<span key={parts.length} className="text-white">{currentPart}</span>);
          currentPart = '';
        }
        let stringContent = '"';
        i++;
        while (i < code.length && code[i] !== '"') {
          stringContent += code[i];
          i++;
        }
        if (i < code.length) {
          stringContent += '"';
          i++;
        }
        parts.push(<span key={parts.length} className="text-green-400">{stringContent}</span>);
      }
      else if (char === '{' || char === '}') {
        if (currentPart) {
          parts.push(<span key={parts.length} className="text-white">{currentPart}</span>);
          currentPart = '';
        }
        parts.push(<span key={parts.length} className="text-yellow-400">{char}</span>);
        i++;
      }
      else if (char === '=') {
        if (currentPart) {
          parts.push(<span key={parts.length} className="text-white">{currentPart}</span>);
          currentPart = '';
        }
        parts.push(<span key={parts.length} className="text-gray-400">{char}</span>);
        i++;
      }
      else {
        currentPart += char;
        i++;
      }
    }
    
    if (currentPart) {
      parts.push(<span key={parts.length} className="text-white">{currentPart}</span>);
    }
    
    return parts;
  };

  return (
    <section className="min-h-screen py-[10rem] px-[9%] w-full overflow-hidden flex justify-center items-center max-md:flex-col relative max-md:py-[5rem] max-md:px-[5%]" id="about">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--second-bg-color)] via-[#2a3240] to-[var(--bg-color)] opacity-95"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[5%] w-2 h-2 bg-[var(--main-color)] rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-[40%] left-[8%] w-1 h-1 bg-[var(--main-color)] rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-[25%] right-[10%] w-1.5 h-1.5 bg-[var(--main-color)] rounded-full animate-ping opacity-30 animation-delay-1s"></div>
        <div className="absolute bottom-[30%] right-[5%] w-2 h-2 bg-[var(--main-color)] rounded-full animate-pulse opacity-50 animation-delay-2s"></div>
        <div className="absolute top-[70%] left-[15%] w-1 h-1 bg-[var(--main-color)] rounded-full animate-ping opacity-40 animation-delay-3s"></div>
        <div className="absolute bottom-[60%] right-[20%] w-1.5 h-1.5 bg-[var(--main-color)] rounded-full animate-pulse opacity-35 animation-delay-4s"></div>
      </div>

      {/* LEFT SIDE - About Content  */}
      <div className=" about-content max-md:mt-16 relative z-10 max-w-2xl">
        {/* Modern geometric accent */}
        <div className="absolute -top-10 -left-10 w-20 h-20 border-l-2 border-t-2 border-[var(--main-color)] opacity-30"></div>
        <div className="absolute -bottom-10 -right-10 w-20 h-20 border-r-2 border-b-2 border-[var(--main-color)] opacity-30"></div>
        
        {/* Header Section */}
        <div className="mb-10">
          <div className="flex items-center mb-6">
            <div className="flex space-x-1 mr-4">
              <div className="w-2 h-2 bg-[var(--main-color)] rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-[var(--main-color)] rounded-full animate-pulse animation-delay-300ms"></div>
              <div className="w-2 h-2 bg-[var(--main-color)] rounded-full animate-pulse animation-delay-600ms"></div>
            </div>
            <h3 className="text-[2.4rem] font-[300] text-gray-300 tracking-wide max-md:text-[2rem]">
              Get to know
            </h3>
          </div>
          
          <h1 className="text-[8rem] font-[900] leading-[0.85] mb-6 max-md:text-[5rem] max-sm:text-[3.8rem] relative">
            <span className="bg-gradient-to-r from-yellow-200 via-[var(--main-color)] to-yellow-200 bg-clip-text text-transparent relative">
              About Me
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--main-color)] to-transparent opacity-60"></div>
            </span>
            
          </h1>
        </div>

        {/* Personal Introduction */}
        <div className="relative mb-12 p-6 top-10 backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10">
          <div className="absolute -left-1 top-6 w-1 h-16 bg-gradient-to-b from-[var(--main-color)] to-transparent rounded-full"></div>
          <h4 className="text-[2rem] max-md:text-[1.5rem] max-sm:text-[1.3rem] font-[600] text-white mb-4 max-md:mb-3 flex items-center pl-6">
            <i className='bx bx-user text-[var(--main-color)] mr-3 text-2xl max-md:text-lg max-sm:text-base'></i>
            Who Am I?
          </h4>
          <p className="text-[1.9rem] leading-[1.7] text-gray-300 font-[300] pl-6 max-md:text-[1.7rem] max-sm:text-[1.5rem]">
            I am <span className="text-[var(--main-color)] font-semibold">W.K.V Sahansara</span>, a passionate Software Developer with a drive for creating 
            <span className="text-white font-semibold bg-gradient-to-r from-[var(--main-color)]/20 to-transparent px-2 rounded"> innovative digital solutions</span>. Currently pursuing my Bachelor's in ICT at the <span className="text-[var(--main-color)] font-semibold">University of Colombo.</span>
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-12 py-12" >
          <h4 className="text-[2.0rem] max-md:text-[2rem] max-sm:text-[2rem] text-gray-400 mb-6 font-[300] flex items-center">
            <i className='bx bx-code-alt text-[var(--main-color)] mr-3 text-3xl '></i>
            Technical Expertise
          </h4>
          <div className="flex flex-wrap gap-5">
            {[
              'Python',
              'PHP & Laravel', 
              'JavaScript & React',
              'Flutter & Mobile',
              'MEAN Stack & mongoDB',
              'Android Studio',
              'node.js & Express.js',
              'nest.js & firebase',
            ].map((skill, index) => (
              <div key={index} 
                   className="group relative p-3 bg-[var(--second-bg-color)]/50 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[var(--main-color)]/50 transition-all duration-300 hover:scale-105 hover:bg-[var(--second-bg-color)]/80"
                   style={{animationDelay: `${index * 100}ms`}}>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[var(--main-color)] rounded-full"></div>
                  <span className="text-gray-300 text-[1.2rem] max-lg:text-[1.7rem] max-sm:text-[1.6rem] group-hover:text-[var(--main-color)] transition-colors duration-300">{skill}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

     
      </div>

      {/* Floating Tech Icons - Same as Home pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Desktop positioning */}
        <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-[var(--main-color)] rounded-full animate-ping opacity-40 max-md:hidden"></div>
        <div className="absolute top-[60%] left-[15%] w-1 h-1 bg-[var(--main-color)] rounded-full animate-pulse opacity-60 max-md:hidden"></div>
        <div className="absolute top-[30%] right-[20%] w-1.5 h-1.5 bg-[var(--main-color)] rounded-full animate-ping opacity-30 animation-delay-1s max-md:hidden"></div>
        <div className="absolute bottom-[40%] right-[10%] w-2 h-2 bg-[var(--main-color)] rounded-full animate-pulse opacity-50 animation-delay-2s max-md:hidden"></div>
        <div className="absolute top-[80%] left-[80%] w-1 h-1 bg-[var(--main-color)] rounded-full animate-ping opacity-40 animation-delay-3s max-md:hidden"></div>
      </div>

      {/* Enhanced floating tech icons */}
      <div className="absolute status-grid inset-0 pointer-events-none z-20">
        {/* Desktop positioning - large screens */}
        <div className="absolute top-[20%] left-[40%] w-14 h-14 bg-[var(--second-bg-color)]/80 backdrop-blur-sm rounded-2xl border border-[var(--main-color)]/30 flex items-center justify-center text-[var(--main-color)] text-3xl animate-float shadow-lg tech-icon max-md:hidden">
          <i className='bx bxl-react'></i>
        </div>
        
        <div className="absolute top-[15%] right-[15%] w-14 h-14 bg-[var(--second-bg-color)]/80 backdrop-blur-sm rounded-xl border border-[var(--main-color)]/30 flex items-center justify-center text-[var(--main-color)] text-3xl animate-float-delay-1 shadow-lg tech-icon max-md:hidden">
          <i className='bx bxl-python'></i>
        </div>
        
        <div className="absolute bottom-[25%] right-[8%] w-16 h-16 bg-[var(--second-bg-color)]/80 backdrop-blur-sm rounded-2xl border border-[var(--main-color)]/30 flex items-center justify-center text-[var(--main-color)] text-3xl animate-float-delay-2 shadow-lg tech-icon max-md:hidden">
          <i className='bx bxl-android'></i>
        </div>
        
        <div className="absolute bottom-[35%] left-[45%] w-14 h-14 bg-[var(--second-bg-color)]/80 backdrop-blur-sm rounded-xl border border-[var(--main-color)]/30 flex items-center justify-center text-[var(--main-color)] text-3xl animate-float-delay-3 shadow-lg tech-icon max-md:hidden">
          <i className='bx bxl-javascript'></i>
        </div>

        {/* Mobile Tech Icons */}
        <div className="hidden max-md:block  ">
          <div className="absolute top-[5%] left-[5%] w-12 h-12 max-sm:w-10 max-sm:h-10 bg-[var(--second-bg-color)]/80 backdrop-blur-sm rounded-2xl border border-[var(--main-color)]/30 flex items-center justify-center text-[var(--main-color)] text-xl max-sm:text-lg animate-float shadow-lg tech-icon">
            <i className='bx bxl-react'></i>
          </div>
          
          <div className="absolute top-[12%] right-[8%] w-12 h-12 max-sm:w-10 max-sm:h-10 bg-[var(--second-bg-color)]/80 backdrop-blur-sm rounded-xl border border-[var(--main-color)]/30 flex items-center justify-center text-[var(--main-color)] text-xl max-sm:text-lg animate-float-delay-1 shadow-lg tech-icon">
            <i className='bx bxl-python'></i>
          </div>
          
          <div className="absolute top-[50%] right-[3%] w-14 h-14 max-sm:w-12 max-sm:h-12 bg-[var(--second-bg-color)]/80 backdrop-blur-sm rounded-2xl border border-[var(--main-color)]/30 flex items-center justify-center text-[var(--main-color)] text-2xl max-sm:text-lg animate-float-delay-2 shadow-lg tech-icon">
            <i className='bx bxl-android'></i>
          </div>
          
          <div className="absolute bottom-[20%] left-[2%] w-12 h-12 max-sm:w-10 max-sm:h-10 bg-[var(--second-bg-color)]/80 backdrop-blur-sm rounded-xl border border-[var(--main-color)]/30 flex items-center justify-center text-[var(--main-color)] text-xl max-sm:text-lg animate-float-delay-3 shadow-lg tech-icon">
            <i className='bx bxl-javascript'></i>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - Interactive Visual */}
      <div className="home-img relative flex justify-end items-center w-full h-auto    p-5 max-md:mt-16 max-md:w-full max-md:justify-center z-10 max-lg:h-[55vw] max-md:h-[55vw]  max-sm:h-[45vw]">
        {/* Main code panel container */}
        <div className="relative group">
          <div className="relative w-[25vw] h-[30vw]  max-lg:w-[30vw]  max-lg:h-[45vw] max-md:w-[40vw] max-md:h-[45vw] max-sm:w-[50vw] max-sm:h-[45vw] max-[450px]:w-[60vw] max-[450px]:h-[60vw] bg-gradient-to-br from-slate-900 via-black-500 p-6 max-md:p-4 max-sm:p-3 rounded-3xl shadow-2xl border-2 border-[var(--main-color)]/60">
            
            {/* Terminal Header */}
            <div className="flex items-center space-x-2 mb-6 max-md:mb-4 max-sm:mb-3">
              <div className="w-3 h-3 max-md:w-2.5 max-md:h-2.5 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 max-md:w-2.5 max-md:h-2.5 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 max-md:w-2.5 max-md:h-2.5 bg-green-500 rounded-full"></div>
              <span className="text-gray-400 text-[1.1rem] max-md:text-[0.9rem] max-sm:text-[0.8rem] ml-3 font-mono">sahansara.dev</span> 
            </div>
            
            {/* Auto-typing Code  */}
            <div className="bg-black/60 rounded-2xl p-6 max-md:p-4 max-sm:p-3 font-mono mb-6 max-md:mb-4">
              <div className="text-[1.2rem] min-h-[120px] max-md:min-h-[100px] max-sm:min-h-[80px] leading-relaxed">
                <pre className="whitespace-pre-wrap">
                  {formatCodeWithSyntax(displayedCode)}
                  {showCursor && (
                    <span className="text-cyan-400 animate-pulse">|</span>
                  )}
                </pre>
              </div>
            </div>

             <div className="grid status-grid grid-cols-2 gap-4 max-md:gap-3 max-sm:gap-2">
              <div className="text-center p-4 max-md:p-3 max-sm:p-2 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                <div className="text-[2rem] max-md:text-[1.5rem] max-sm:text-[1.2rem] font-[800] text-[var(--main-color)] mb-1">3rd</div>
                <div className="text-[0.9rem] max-md:text-[0.8rem] max-sm:text-[0.7rem] text-gray-400">Year Student</div>
              </div>
              <div className="text-center p-4 max-md:p-3 max-sm:p-2 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                <div className="text-[2rem] max-md:text-[1.5rem] max-sm:text-[1.2rem] font-[800] text-[var(--main-color)] mb-1">ICT</div>
                <div className="text-[0.9rem] max-md:text-[0.8rem] max-sm:text-[0.7rem] text-gray-400">Degree Program</div>
              </div>
              <div className="text-center p-4 max-md:p-3 max-sm:p-2 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                <div className="text-[2rem] max-md:text-[1.5rem] max-sm:text-[1.2rem] font-[800] text-[var(--main-color)] mb-1">8+</div>
                <div className="text-[0.9rem] max-md:text-[0.8rem] max-sm:text-[0.7rem] text-gray-400">Technologies</div>
              </div>
              <div className="text-center p-4 max-md:p-3 max-sm:p-2 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                <div className="text-[2rem] max-md:text-[1.5rem] max-sm:text-[1.2rem] font-[800] text-[var(--main-color)] mb-1">UoC</div>
                <div className="text-[0.9rem] max-md:text-[0.8rem] max-sm:text-[0.7rem] text-gray-400">University</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Mission Statement */}
      <div className="  absolute  bottom-2 max-md:relative max-md:bottom-auto max-md:mt-32 left-1/2 transform -translate-x-1/2 max-md:left-0 max-md:transform-none w-full max-w-4xl px-8 max-md:px-4 max-sm:px-2 z-10">
        
      </div>
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          }
          50% { 
            transform: translateY(-12px) rotate(2deg) scale(1.05); 
            box-shadow: 0 20px 40px rgba(0,0,0,0.2);
          }
        }
        
        @keyframes float-delay-1 {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
            box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          }
          50% { 
            transform: translateY(-10px) rotate(-2deg) scale(1.03); 
            box-shadow: 0 15px 35px rgba(0,0,0,0.18);
          }
        }
        
        @keyframes float-delay-2 {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
            box-shadow: 0 12px 30px rgba(0,0,0,0.12);
          }
          50% { 
            transform: translateY(-15px) rotate(3deg) scale(1.08); 
            box-shadow: 0 25px 50px rgba(0,0,0,0.25);
          }
        }
        
        @keyframes float-delay-3 {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
            box-shadow: 0 6px 15px rgba(0,0,0,0.08);
          }
          50% { 
            transform: translateY(-8px) rotate(-1deg) scale(1.02); 
            box-shadow: 0 12px 25px rgba(0,0,0,0.15);
          }
        }

        @keyframes glow-pulse {
          0%, 100% { 
            filter: brightness(1) drop-shadow(0 0 5px currentColor);
          }
          50% { 
            filter: brightness(1.2) drop-shadow(0 0 15px currentColor);
          }
        }

        .animate-float { 
          animation: float 6s ease-in-out infinite, glow-pulse 4s ease-in-out infinite;
        }
        .animate-float-delay-1 { 
          animation: float-delay-1 5s ease-in-out infinite, glow-pulse 4s ease-in-out infinite;
        }
        .animate-float-delay-2 { 
          animation: float-delay-2 5s ease-in-out infinite, glow-pulse 4s ease-in-out infinite;
        }
        .animate-float-delay-3 { 
          animation: float-delay-3 5s ease-in-out infinite, glow-pulse 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;