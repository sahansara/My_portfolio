import { useState, useEffect } from "react";
import BlogModal from "./BlogModal";
import blog1 from "../assets/Blog/laravel/OIP.webp";
import blog2 from "../assets/Blog/talant/logo1.webp";
import blog3 from "../assets/Blog/talant/home.webp";

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
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

  // Ensure body scroll is restored when component unmounts
  useEffect(() => {
    return () => {
      
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, []);

 
  const blogPosts = [
    {
      id: 1,
      title: "Solving Common Laravel Email Issues:( SSL error suggested certificate verification issues)",
      date: "Mar 21, 2025",
      category: "Framework",
      thumbnail: blog1,
      excerpt: "A guide to troubleshooting common email issues in Laravel, including SSL errors and certificate verification problems.",
      content: "Debugging Laravel email errors and configuring SMTP settings in Laravel 11 for password reset and email verification When developing web applications, we often encounter unexpected challenges. As I worked on an agriculture-focused Laravel 11 and React-based project, I faced some frustrating email issues while setting up password reset and email verification functionalities. These problems stemmed from SMTP email configurations and SSL verification, preventing emails from being sent successfully.",
      postLink: "https://medium.com/@widanevihaga/solving-common-laravel-email-issues-ssl-error-suggested-certificate-verification-issues-35057c82c30f",
    },
    {
      id: 2,
      title: "Why and How My MERN Stack Project Talent Bridge Uses JWT Authentication",
      date: "May 04, 2025",
      category: "authentication",
      thumbnail: blog2,
      excerpt: "An exploration of the benefits and implementation of JWT authentication in a MERN stack project.",
      content: "In this article, we will explore the reasons behind using JWT authentication in our MERN stack project, Talent Bridge includes features like role-based dashboards, job search and filtering, secure login and registration, application tracking, and more. It's designed with scalability, user experience, and data security in mind.🔐 A key component of the platform is its robust JWT (JSON Web Token) authentication system, which ensures that user sessions are secure and efficiently managed. In this blog post, I'll walk you through how JWT is implemented in Talent Bridge with real code examples, tools used, and best practices followed.",
      postLink: "https://medium.com/@widanevihaga/%EF%B8%8F-why-and-how-my-mern-stack-project-talent-bridge-uses-jwt-authentication-73ed581a9a63", 
    }
,
    {
  id: 3,
  title: "Talent Bridge – Building a Full-Featured MERN Stack Job Board Platform",
  date: "Sep 15, 2025",
  category: "Full Stack Development",
  thumbnail: blog3,
  excerpt: "A deep dive into how I built Talent Bridge, a multirole job board platform using the MERN stack with real-world hiring workflows.",
  content: "In this blog, I share the full journey of building Talent Bridge – a MERN Stack job board platform that connects Job Seekers, Employers, and Admins. It features job post approvals, application tracking, role-based dashboards, CV management, and real-time notifications. I also explain why MongoDB was chosen over relational databases, how JWT and HTTPS authentication ensure security, and why this project is meaningful for society. The blog provides insights into both technical decisions and the real-world impact of building scalable recruitment systems.",
  postLink: "https://medium.com/@widanevihaga/what-is-talent-bright-3b26f41a4041", 
}

  ];

  // Dynamic blogs per page based on screen sizes
  const blogsPerPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(blogPosts.length / blogsPerPage);

  const nextBlogs = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + blogsPerPage >= blogPosts.length ? 0 : prevIndex + blogsPerPage
    );
  };

  const prevBlogs = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, blogPosts.length - blogsPerPage) : prevIndex - blogsPerPage
    );
  };

  const visibleBlogs = blogPosts.slice(currentIndex, currentIndex + blogsPerPage);

  const handleBlogClose = () => {
    setSelectedBlog(null);
   
    setTimeout(() => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }, 100);
  };

  return (
    <section className="min-h-screen py-[10rem] px-[9%] w-full overflow-hidden max-md:py-[6rem] max-md:px-[5%] relative" id="blog">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--second-bg-color)] via-[#2a3240] to-[var(--bg-color)] opacity-95"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[14%] left-[5%] w-2 h-2 bg-[var(--main-color)] rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-[40%] left-[8%] w-1 h-1 bg-[var(--main-color)] rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-[25%] right-[10%] w-1.5 h-1.5 bg-[var(--main-color)] rounded-full animate-ping opacity-30 animation-delay-1s"></div>
        <div className="absolute bottom-[30%] right-[5%] w-2 h-2 bg-[var(--main-color)] rounded-full animate-pulse opacity-50 animation-delay-2s"></div>
        <div className="absolute top-[70%] left-[15%] w-1 h-1 bg-[var(--main-color)] rounded-full animate-ping opacity-40 animation-delay-3s"></div>
        <div className="absolute bottom-[60%] right-[20%] w-1.5 h-1.5 bg-[var(--main-color)] rounded-full animate-pulse opacity-35 animation-delay-4s"></div>
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className=" blog-content text-center mb-20 max-lg:mb-16 max-md:mb-12 max-md:py-[1rem]">
          <div className="flex items-center justify-center mb-6">
            <div className="flex space-x-1 mr-4">
              <div className="w-4 h-4 bg-[var(--main-color)] rounded-full animate-pulse"></div>
              <div className="w-4 h-4 bg-[var(--main-color)] rounded-full animate-pulse animation-delay-300ms"></div>
              <div className="w-4 h-4 bg-[var(--main-color)] rounded-full animate-pulse animation-delay-600ms"></div>
            </div>
            <span className="text-[1.6rem] max-md:text-[1.4rem] max-sm:text-[1.2rem] text-gray-400 font-[300] tracking-wide">Latest Insights</span>
          </div>
          
          <h2 className="text-[6rem] max-lg:text-[4.5rem] max-md:text-[4rem] max-sm:text-[3rem] font-[900] leading-[0.9] mb-6">
            <span className="bg-gradient-to-r from-yellow-200 via-[var(--main-color)] to-yellow-200 bg-clip-text text-transparent">
              My
            </span>
            <span className="text-[var(--main-color)] ml-4">Blog</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--main-color)] to-transparent mx-auto mt-6"></div>
        </div>

        {/* Blog Posts Container with Navigation */}
        <div className="relative max-w-7xl mx-auto">
          
          {/* Navigation Arrows - only show when there are multiple pages */}
          {totalPages > 1 && (
            <button
              onClick={prevBlogs}
              className="absolute left-[-80px] top-1/2 transform -translate-y-1/2 z-20 w-16 h-16 bg-gradient-to-br from-[var(--main-color)] to-[var(--main-color)]/80 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-[var(--main-color)]/50 max-lg:left-[-60px] max-lg:w-12 max-lg:h-12 max-md:top-[200px] max-md:left-[-5px] max-md:w-10 max-md:h-10"
            >
              <i className="bx bx-chevron-left text-white text-2xl max-lg:text-xl max-md:text-lg"></i>
            </button>
          )}

          {totalPages > 1 && (
            <button
              onClick={nextBlogs}
              className="absolute right-[-80px] top-1/2 transform -translate-y-1/2 z-20 w-16 h-16 bg-gradient-to-br from-[var(--main-color)] to-[var(--main-color)]/80 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-[var(--main-color)]/50 max-lg:right-[-60px] max-lg:w-12 max-lg:h-12  max-md:w-10 max-md:h-10 max-md:top-[200px] max-md:right-[-5px]"
            >
              <i className="bx bx-chevron-right text-white text-2xl max-lg:text-xl max-md:text-lg"></i>
            </button>
          )}

          {/* Blog Posts Grid */}
          <div className="overflow-hidden blog-box">
            <div 
              className={`grid gap-8 max-md:gap-6 justify-items-center transition-transform duration-500  max-md:py-[6rem] ease-in-out ${
                isMobile ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'
              }`}
              style={{ 
                transform: `translateX(0%)`,
                gridTemplateColumns: isMobile ? '1fr' : (blogPosts.length < 3 ? `repeat(${Math.min(blogPosts.length, 3)}, 1fr)` : '1fr' + (blogPosts.length >= 2 ? ' 1fr' : '') + (blogPosts.length >= 3 ? ' 1fr' : ''))
              }}
            >
              {visibleBlogs.map(post => (
                <article 
                  className="group relative w-full max-w-[420px] bg-gradient-to-br from-[var(--second-bg-color)]/90 via-gray-800/80 to-[var(--second-bg-color)]/90 backdrop-blur-md rounded-3xl border-2 border-white/10 overflow-hidden cursor-pointer transition-all duration-500 hover:border-[var(--main-color)]/60 hover:scale-[1.02] hover:shadow-2xl shadow-lg max-sm:w-[280px]"
                  key={post.id} 
                  onClick={() => setSelectedBlog(post)}
                >
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-[var(--main-color)]/40 rounded-tl-3xl opacity-60 z-20"></div>
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-[var(--main-color)]/40 rounded-br-3xl opacity-60 z-20"></div>
                  
                  {/* Blog Thumbnail */}
                  <div className="relative overflow-hidden rounded-t-3xl">
                    <img 
                      src={post.thumbnail} 
                      alt={post.title}
                      className="w-full h-[220px] max-md:h-[200px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Category badge */}
                    <div className="absolute top-4 right-4 bg-[var(--main-color)]/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-[var(--main-color)]/30 ">
                      <span className="text-white font-[600] text-[0.95rem] max-sm:text-[0.85rem]">{post.category}</span>
                    </div>

                    {/* Date badge */}
                    <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-2 rounded-xl border border-white/20">
                      <div className="flex items-center space-x-2">
                        <i className="bx bx-calendar text-[var(--main-color)] text-sm"></i>
                        <span className="text-white font-[500] text-[0.9rem] max-sm:text-[0.8rem]">{post.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content section */}
                  <div className="p-6 max-md:p-5 relative flex flex-col h-full">
                    {/* Blog title */}
                    <h3 className="text-[1.6rem] max-md:text-[1.4rem] max-sm:text-[1.4rem] font-[700] text-white mb-4 group-hover:text-[var(--main-color)] transition-colors duration-300 leading-[1.3] line-clamp-3">
                      {post.title}
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="text-gray-300 text-[1.1rem] max-md:text-[1rem] max-sm:text-[1.1rem] leading-[1.6] mb-6 flex-grow line-clamp-4">
                      {post.excerpt}
                    </p>

                    {/* Read More Button */}
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[var(--main-color)]/20 to-[var(--main-color)]/40 rounded-xl flex items-center justify-center border border-[var(--main-color)]/30 group-hover:scale-110 transition-transform duration-300">
                          <i className="bx bx-book-reader text-[var(--main-color)] text-lg"></i>
                        </div>
                        <span className="text-gray-400 text-[1rem] font-[500]">Read Article</span>
                      </div>
                      
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--main-color)] to-[var(--main-color)]/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--main-color)]/30">
                        <i className="bx bx-right-arrow-alt text-[var(--bg-color)] text-lg group-hover:translate-x-1 transition-transform duration-300"></i>
                      </div>
                    </div>
                  </div>

                  {/* Hover overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--main-color)]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </article>
              ))}
            </div>
          </div>

          {/* Pagination dots */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12 space-x-3">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * blogsPerPage)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / blogsPerPage) === index
                      ? 'bg-[var(--main-color)] scale-125'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      
      {selectedBlog && (
        <BlogModal 
          blogPost={selectedBlog} 
          onClose={handleBlogClose} 
        />
      )}

      <style jsx>{`
        .animation-delay-300ms { animation-delay: 300ms; }
        .animation-delay-600ms { animation-delay: 600ms; }
        .animation-delay-1s { animation-delay: 1s; }
        .animation-delay-2s { animation-delay: 2s; }
        .animation-delay-3s { animation-delay: 3s; }
        .animation-delay-4s { animation-delay: 4s; }

        /* Line clamp utilities */
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
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

export default Blog;