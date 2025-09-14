import { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css"

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // ScrollReveal animation
    const sr = ScrollReveal({
      distance: "80px",
      duration: 2000,
      delay: 200,
      reset: true, 
    });

    sr.reveal(".home-content, .heading, .portfolio-content ,.contact-content , .services-container ,.blog-box ,.status-grid",   { origin: "top" });
    sr.reveal(".home-img,  .blog-content,.portfolio-box,  .about-box ", { origin: "bottom" });
    sr.reveal(".home-content h1  , .about-content , .services-content-left  ",  { origin: "left" });
    sr.reveal(".home-content p, .services-content-right ,.contact-form" ,  { origin: "right" });

    // Body lockScroll for modal
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);
  
  return (
    <div className="m-0 p-0 box-border no-underline border-none outline-none scroll-smooth font-['Poppins',sans-serif] bg-[#1f242d] text-white">
      <Header />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          text-decoration: none;
          border: none;
          outline: none;
          scroll-behavior: smooth;
          font-family: 'Poppins', sans-serif;
        }

        html {
          font-size: 62.5%;
          overflow-x: hidden;
          max-width: 100%;
        }

        body {
          background-color: #1f242d;
          color: #fff;
        }

        section {
          min-height: 100vh;
          padding: 10rem 9% 2rem;
          width: 100%;
          overflow: hidden;
        }

        /* Responsive font sizes */
        @media(max-width:1200px) {
          html {
            font-size: 55%;
          }
        }

        @media (max-width:991px) {
          section {
            padding: 8rem 3% 2rem;
          }
        }

        @media (max-width:768px) {
          section {
            min-height: auto;
            padding: 6rem 5% 3rem;
          }
        }

        @media (max-width:450px) {
          html {
            font-size: 50%;
          }
          
          section {
            padding: 4rem 4% 2rem;
          }
        }

        html, body {
          min-height: 100%;
          height: auto;
        }

        body {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
}

export default App;