import { useEffect, useState } from "react";
import "./App.css";

import profileImg2 from "./assets/profile2.png";
import profileImg3 from "./assets/logo.png";
import asswenna_mokup from "./assets/asswenna_mokup.png";
import portfolio_mokup from "./assets/portfolio.png";

import ScrollReveal from "scrollreveal";  
import Typed from "typed.js"; 


function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Project data
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      category: "Web Development",
      image: profileImg2, 
      mockupImage:portfolio_mokup , 
      description: "This is a responsive and modern portfolio website built using React and CSS. It showcases my biography, skills, services, contact information, and featured projects in an elegant UI. The goal is to highlight my full-stack development expertise and design sense.",
      technologies: ["React", "CSS", "JavaScript", "HTML"],
      links: {
        github: "https://github.com/sahansara/My_portfolio.git", 
        live: "http://localhost:5173/My_portfolio/#portfolio"   
      }
    }
    ,
    { 


      
      id: 2,
      title: "Agricultural Information Platform",
      category: "Web Development",
      image: profileImg3,
      mockupImage: asswenna_mokup, 
      description: "The platform is a digital agricultural solution built with Laravel, React, and MySQL that offers farmers personalized crop calendars and management tools. It features an AI chatbot for instant support and an intelligent disease detection system that identifies plant diseases from images.",
      technologies: ["Laravel", "React", "MySQL", "AI", "Chatbot", "Image Processing"],
      links: {
        github: "https://github.com/sahansara/Agricultural-Information-Platform-with-Crop-Calendar.git",
        live: "https://www.linkedin.com/posts/widane-vihaga12_reactjs-laravel-agritech-activity-7321262961413558272-L9ve?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFT6xbcBmtSz4nLgg_k6dz62lsCYgJflNWg"
      }
    },

    
   
    
  ];

  // Project Modal Component
  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;
    
    return (
    
      <div className="modal-overlay">
        
        <div className="project-modal">
        <div className="mockup-page">
          <div className="modal-header">
          
            <h3>{project.title}</h3>
            <button onClick={onClose} className="close-modal">&times;</button>
          </div>
          
          <div className="modal-body">
            <div className="project-mockup">
              <img src={project.mockupImage} alt={`${project.title} mockup`} />
            </div>
            
            <div className="project-info">
              <div className="project-description">
                <h4>Project Description</h4>
                <p>{project.description}</p>
              </div>
              
              <div className="project-tech">
                <h4>Technologies Used</h4>
                <div className="tech-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-links">
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn project-btn">
                  <i className="bx bxl-github"></i> View Code
                </a>
                <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="btn secondary-btn">
                  <i className="bx bx-link-external"></i> Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

    );
  };

  useEffect(() => {
    const menuIcon = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar");
    const header = document.querySelector("header");
     
     // ScrollReveal animation
     const sr = ScrollReveal({
      distance: "80px",
      duration: 2000,
      delay: 200,
      reset: true, 
    });

    sr.reveal(".home-content, .heading",  { origin: "top" } );

    sr.reveal(".home-img , .services-container, .portfolio-box, .contact form", { origin: "bottom" });
    sr.reveal(".home-content h1 , .about-img",  { origin: "left" } );
    sr.reveal(".home-content p , .about-content",  { origin: "right" } );
   
    new Typed(".multiple-text", {
      strings: ["Web Developer", "Software Developer", "Mobile App Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

   
    const handleMenuClick = () => {
      menuIcon.classList.toggle("bx-x");
      navbar.classList.toggle("active");
    };
  

    const removemenu = () => {
      header.classList.toggle("sticky", window.scrollY > 100);
      menuIcon.classList.remove("bx-x");
      navbar.classList.remove("active");
    };
  
    const handleScroll = () => {
      removemenu(); // Call removemenu inside handleScroll
      
      let sections = document.querySelectorAll("section");
      let navLinks = document.querySelectorAll("header nav a");
  
      sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");
  
        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            let activeLink = document.querySelector(`header nav a[href="#${id}"]`);
            if (activeLink) {
              activeLink.classList.add("active");
            }
          });
        }
      });
    };
  
    if (menuIcon) {
      menuIcon.addEventListener("click", handleMenuClick);
    }
    
    window.addEventListener("scroll", handleScroll); 
  
    // Body lockScroll for modal
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (menuIcon) {
        menuIcon.removeEventListener("click", handleMenuClick);
      }
      document.body.style.overflow = "";
    };
  }, [selectedProject]);
  
  return (
    <>
      
      <header className="header">
        <i className="bx bx-menu" id="menu-icon"></i>
        <a href="#home" className="logo">
          Portfolio
        </a>
        <nav className="navbar">
          <a href="#home" className="active">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="home" id="home">
        <div className="home-content">
          <h3> Hello, It's Me</h3>
          <h1>Sahansara</h1>
          <h3>
            and I'm a <span className="multiple-text"></span>
          </h3>
          <p>As a skilled Software , Web and Mobile App Developer, I specialize in creating dynamic and efficient applications using modern frameworks like React, Laravel, and Flutter. With expertise in both front-end and back-end development, I build scalable web applications and intuitive mobile solutions that enhance user experiences. My passion for software development drives me to create innovative, secure, and high-performance applications that meet real-world needs.</p>

          <div className="social-media">

          <a href="https://www.linkedin.com/in/widane-vihaga-a73579339/">
              <i className="bx bxl-linkedin"></i>
          </a>

            <a href="https://github.com/sahansara">
            <i className='bx bxl-github'></i>
            </a>

            <a href="https://medium.com/@widanevihaga">
              <i className='bx bxl-medium'></i>
            </a>
 
            <a href="/">
            <i className='bx bxl-discord-alt'></i>
            </a>
            
           
          </div>

          <a href="/" className="btn">
            Download CV
          </a>
        </div>
       
        <div className="home-img"> 
        
          <img src={profileImg2} alt="back-img" />
          <span className="circle-spin"></span>
        </div> 
      </section>

      <section className="about" id="about">
        <div className="about-img">
          <img src={profileImg2} alt="back2-img" />
        </div>
        <div className="about-content">
          <h2 className="heading">
            About <span>Me</span>
          </h2>
          <h3>Software Developer</h3>
          <p>I am W.K.V Sahansara, a passionate Software Developer skilled in Python, PHP, and JavaScript, with expertise in React, Laravel, MEAN Stack, and Django for web development. I also specialize in mobile app development using Android Studio and Flutter.
           Currently pursuing a Bachelor of Information and Communication Technology at the University of Colombo, I am constantly expanding my knowledge in software engineering and emerging technologies. My goal is to become a Software Engineer or Web Developer, creating secure, high-performance, and user-friendly applications.
           I am eager to contribute my skills, collaborate with innovative teams, and develop cutting-edge digital solutions. 🚀</p>
          <a href="https://www.linkedin.com/in/widane-vihaga-a73579339/" className="btn">
            Read More
          </a>
        </div>
      </section>

      <section className="services" id="services">
        <h2 className="heading">
          My <span>Services</span>
        </h2>
        <div className="services-container">
          <div className="services-box">
            <i className="bx bx-code-alt"></i>
            <h3>Web Development</h3>
            <p> Web app development involves creating interactive, dynamic applications that run on web browsers. Using technologies like HTML, CSS, JavaScript, and frameworks such as React, Angular, and Vue.js, developers create responsive and user-friendly web applications. On the backend, Node.js, Laravel, Ruby on Rails, and Django are popular choices, ensuring high performance and security. Database management systems like MySQL, MongoDB, and PostgreSQL are commonly used to manage data efficiently.</p>
            <a href="https://www.linkedin.com/in/widane-vihaga12/" className="btn">
              Read More
            </a>
          </div>

          <div className="services-box">
            <i className="bx bx-code-alt"></i>
            <h3>Software Development</h3>
            <p> Software development includes the creation of applications or systems that run on desktop computers or servers. It involves a range of programming languages such as Java, C#, C++, Python, and Swift for building robust, scalable solutions. Integrated Development Environments (IDEs) like Visual Studio and Eclipse streamline the development process. Developers also rely on tools like Git for version control and Docker for containerization to improve software deployment and maintainability.</p>
            <a href="https://www.linkedin.com/in/widane-vihaga12/" className="btn">
              Read More
            </a>
          </div>

          <div className="services-box">
            <i className="bx bx-mobile-alt"></i>
            <h3>Mobile App Development</h3>
            <p> Mobile app development focuses on creating applications for smartphones and tablets. For native mobile apps, developers use Swift (for iOS) and Kotlin or Java (for Android) to ensure optimal performance and user experience. Cross-platform development frameworks such as Flutter and React Native enable building apps for both iOS and Android from a single codebase. Xcode and Android Studio are the primary IDEs for mobile development, while cloud-based backends like Firebase and AWS are often integrated for storage and real-time capabilities.</p>
            <a href="https://www.linkedin.com/in/widane-vihaga12/" className="btn">
              Read More
            </a>
          </div>

          <div className="services-box">
            <i className='bx bxl-medium'></i>
            <h3>Blogging </h3>
            <p> I write informative, engaging blogs to share my knowledge and experiences with others. As a passionate hobbyist writer, I create content on topics I'm knowledgeable about, helping readers learn new skills and perspectives. My blogs combine personal insights with practical information, making complex topics accessible to everyone. Through my writing, I aim to build a community of like-minded individuals interested in learning and growing together.</p>
            <a href="https://medium.com/@widanevihaga" className="btn">
              Read More
            </a>
          </div>


        </div>
      </section>
      
      
      <section className="portfolio" id="portfolio">
        <h2 className="heading">
          All <span>Projects</span>
        </h2>

        <div className="portfolio-container">
          {projects.map(project => (
            <div className="portfolio-box" key={project.id} onClick={() => setSelectedProject(project)}>
              <img src={project.image} alt={project.title} />
              <div className="portfolio-layer">
                <h4>{project.category}</h4>
                <p>{project.title}</p>
                <a href="#" onClick={(e) => {
                  e.preventDefault();
                  setSelectedProject(project);
                }}>
                  <i className="bx bx-link-external"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
        

        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </section>

      

      <section className="contact" id="contact">
        <h2 className="heading">
          Contact <span>Me @</span>
        </h2>
         <br/> <br/> 
         <form action="https://api.web3forms.com/submit" method="POST">
         <input type="hidden" name="access_key" value="bfee38f4-5c22-4310-ac7a-677839387e37"/>

  <div className="input-box">
    <input type="text" name="name" placeholder="Enter your Full Name" required />
    <input type="email" name="email" placeholder="Enter your Email Address" required />
  </div>

  <div className="input-box">
    <input type="number" name="phone" placeholder="Enter your Mobile Number" required />
    <input type="text" name="subject" placeholder="Email Subject" required />
  </div>

  <textarea name="message" cols="30" rows="10" placeholder="Enter your Message" required></textarea>
  
  <input type="submit" value="Send Message" className="btn" />
</form>

      </section>

      <footer className="footer">
        <div className="footer-text">
          <p> Copyright &copy;2025 by Sahansara | All Rights Reserved.</p>
        </div>

        <div className="footer-iconTop">
          <a href="#home">
            {" "}
            <i className="bx bx-up-arrow-alt"></i>
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;