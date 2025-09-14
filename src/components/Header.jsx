import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const menuIcon = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar");
    const header = document.querySelector("header");

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
      removemenu();
      
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (menuIcon) {
        menuIcon.removeEventListener("click", handleMenuClick);
      }
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full px-[9%] py-6 bg-[#1f242d] flex justify-between items-center z-[100] [&.sticky]:border-b-[1rem] [&.sticky]:border-black/20">
      <i className="bx bx-menu text-3xl text-white hidden max-md:block" id="menu-icon"></i>
      <a href="#home" className="text-[2.5rem] font-bold text-white no-underline whitespace-nowrap overflow-hidden text-ellipsis">
        Portfolio
      </a>
      <nav className="flex gap-8 max-md:absolute max-md:top-full max-md:left-0 max-md:w-full max-md:px-[3%] max-md:py-4 max-md:bg-[#1f242d] max-md:border-t-[0.1rem] max-md:border-black/20 max-md:shadow-[0_0.5rem_1rem_rgba(0,0,0,0.2)] max-md:hidden [&.active]:max-md:block navbar">
        <a href="#home" className="text-[1.5rem] text-white no-underline transition-colors duration-300 hover:text-[#ffd036] [&.active]:text-[#ffd036] max-md:block max-md:text-[2rem] max-md:my-12">
          Home
        </a>
        <a href="#about" className="text-[1.5rem] text-white no-underline transition-colors duration-300 hover:text-[#ffd036] [&.active]:text-[#ffd036] max-md:block max-md:text-[2rem] max-md:my-12">
          About
        </a>
        <a href="#services" className="text-[1.5rem] text-white no-underline transition-colors duration-300 hover:text-[#ffd036] [&.active]:text-[#ffd036] max-md:block max-md:text-[2rem] max-md:my-12">
          Services
        </a>
        <a href="#portfolio" className="text-[1.5rem] text-white no-underline transition-colors duration-300 hover:text-[#ffd036] [&.active]:text-[#ffd036] max-md:block max-md:text-[2rem] max-md:my-12">
          Portfolio
        </a>
        <a href="#blog" className="text-[1.5rem] text-white no-underline transition-colors duration-300 hover:text-[#ffd036] [&.active]:text-[#ffd036] max-md:block max-md:text-[2rem] max-md:my-12">
          Blog
        </a>
        <a href="#contact" className="text-[1.5rem] text-white no-underline transition-colors duration-300 hover:text-[#ffd036] [&.active]:text-[#ffd036] max-md:block max-md:text-[2rem] max-md:my-12">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;