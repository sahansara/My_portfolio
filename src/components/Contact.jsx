import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic with Web3Forms
    const form = e.target;
    const formData = new FormData(form);
    formData.append('access_key', 'bfee38f4-5c22-4310-ac7a-677839387e37');
    
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    }).then(response => {
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        alert('Failed to send message. Please try again.');
      }
    }).catch(error => {
      alert('An error occurred. Please try again.');
    });
  };

  return (
    <section className="min-h-screen py-[10rem] px-[9%] w-full overflow-hidden max-md:min-h-auto max-md:py-[6rem] max-md:px-[5%] relative" id="contact">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--second-bg-color) ] via-[#2a3240] to-[var(--bg-color)] opacity-95"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[5%] w-2 h-2 bg-[var(--main-color)] rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-[40%] left-[8%] w-1 h-1 bg-[var(--main-color)] rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-[25%] right-[10%] w-1.5 h-1.5 bg-[var(--main-color)] rounded-full animate-ping opacity-30 animation-delay-1s"></div>
        <div className="absolute bottom-[30%] right-[5%] w-2 h-2 bg-[var(--main-color)] rounded-full animate-pulse opacity-50 animation-delay-2s"></div>
        <div className="absolute top-[70%] left-[15%] w-1 h-1 bg-[var(--main-color)] rounded-full animate-ping opacity-40 animation-delay-3s"></div>
        <div className="absolute bottom-[60%] right-[20%] w-1.5 h-1.5 bg-[var(--main-color)] rounded-full animate-pulse opacity-35 animation-delay-4s"></div>
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="contact-content text-center mb-16 max-md:mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="flex space-x-1 mr-4">
              <div className="w-4 h-4 bg-[var(--main-color)] rounded-full animate-pulse"></div>
              <div className="w-4 h-4 bg-[var(--main-color)] rounded-full animate-pulse animation-delay-300ms"></div>
              <div className="w-4 h-4 bg-[var(--main-color)] rounded-full animate-pulse animation-delay-600ms"></div>
            </div>
            <span className="text-[1.6rem] max-md:text-[1.4rem] max-sm:text-[1.2rem] text-gray-300 font-[300] tracking-wide">Let's Connect</span>
          </div>
          
          <h2 className="text-[6rem] max-lg:text-[4.5rem] max-md:text-[4rem] max-sm:text-[3rem] font-[900] leading-[0.9] mb-6">
            <span className="bg-gradient-to-r from-yellow-300 via-[var(--main-color)] to-yellow-300 bg-clip-text text-transparent">
              Contact Me @
            </span>
           
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--main-color)] to-transparent mx-auto mt-6"></div>
          
          {/* Contact Introduction */}
          <p className="text-[1.4rem] max-md:text-[1.2rem] max-sm:text-[1.3rem] text-gray-300 font-[300] mt-8 max-w-3xl mx-auto leading-[1.6]">
            Ready to bring your ideas to life? Let's collaborate and create something amazing together. 
            <span className="text-[var(--main-color)] font-semibold"> Drop me a message</span> and I'll get back to you soon!
          </p>
        </div>

        {/* Contact Form Container */}
        <div className="max-w-5xl mx-auto contact-form">
          <div className="relative group">
           
            
            {/* Main form container */}
            <div className="relative bg-gradient-to-br from-[var(--second-bg-color)]  backdrop-blur-md rounded-3xl border-2 border-[var(--main-color)]/30 p-8 max-md:p-6 max-sm:p-4 shadow-2xl">
              
             
              
              {/* Form */}
              <div className="relative z-10 ">
                <div className="space-y-6">
                  {/* Personal Information Section */}
                  <div className="mb-8">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-[var(--main-color)]/20 to-[var(--main-color)]/40 rounded-xl flex items-center justify-center border border-[var(--main-color)]/30 mr-3">
                        <i className="bx bx-user text-[var(--main-color)] text-2xl"></i>
                      </div>
                      <h3 className="text-[1.8rem] max-md:text-[1.6rem] max-sm:text-[1.6rem] font-[600] text-[var(--main-color)]">
                        Personal Information
                      </h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative group/input">
                        <label className="block text-gray-300 text-[1.2rem] font-[400] mb-2 ml-2">Email Address</label>
                        <input 
                          type="email" 
                          name="email" 
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your Email Address" 
                          required 
                          className="w-full p-4 max-md:p-3 text-[1.3rem] max-md:text-[1.2rem] text-gray-300 bg-[var(--bg-color)] backdrop-blur-sm border-2 border-white/10 rounded-2xl transition-all duration-300 focus:border-[var(--main-color)]/60 focus:outline-none focus:bg-[var(--bg-color)]/80 placeholder-gray-500 group-hover/input:border-[var(--main-color)]/40"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Contact Details Section */}
                  <div className="mb-8">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-[var(--main-color)]/20 to-[var(--main-color)]/40 rounded-xl flex items-center justify-center border border-[var(--main-color)]/30 mr-3">
                        <i className="bx bx-phone text-[var(--main-color)] text-2xl"></i>
                      </div>
                      <h3 className="text-[1.8rem] max-md:text-[1.6rem] max-sm:text-[1.6rem] font-[600] text-[var(--main-color)]">
                        Contact Details
                      </h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative group/input">
                        <label className="block text-gray-300 text-[1.2rem] font-[400] mb-2 ml-2">Mobile Number</label>
                        <input 
                          type="number" 
                          name="phone" 
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your Mobile Number" 
                          required 
                          className="w-full p-4 max-md:p-3 text-[1.3rem] max-md:text-[1.2rem] text-gray-300 bg-[var(--bg-color)] backdrop-blur-sm border-2 border-white/10 rounded-2xl transition-all duration-300 focus:border-[var(--main-color)]/60 focus:outline-none focus:bg-[var(--bg-color)]/80 placeholder-gray-500 group-hover/input:border-[var(--main-color)]/40"
                        />
                      </div>
                      
                      <div className="relative group/input">
                        <label className="block text-gray-300 text-[1.2rem] font-[400] mb-2 ml-2">Subject</label>
                        <input 
                          type="text" 
                          name="subject" 
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Email Subject" 
                          required 
                          className="w-full p-4 max-md:p-3 text-[1.3rem] max-md:text-[1.2rem] text-gray-300 bg-[var(--bg-color)] backdrop-blur-sm border-2 border-white/10 rounded-2xl transition-all duration-300 focus:border-[var(--main-color)]/60 focus:outline-none focus:bg-[var(--bg-color)]/80 placeholder-gray-500 group-hover/input:border-[var(--main-color)]/40"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message Section */}
                  <div className="mb-8">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-[var(--main-color)]/20 to-[var(--main-color)]/40 rounded-xl flex items-center justify-center border border-[var(--main-color)]/30 mr-3">
                        <i className="bx bx-message-dots text-[var(--main-color)] text-2xl"></i>
                      </div>
                      <h3 className="text-[1.8rem] max-md:text-[1.6rem] max-sm:text-[1.6rem] font-[600] text-[var(--main-color)]">
                        Your Message
                      </h3>
                    </div>
                    
                    <div className="relative group/input">
                      <label className="block text-gray-300 text-[1.2rem] font-[400] mb-2 ml-2">Message</label>
                      <textarea 
                        name="message" 
                        rows="8"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project ideas, requirements, or any questions you have. I'm excited to hear from you!" 
                        required
                        className="w-full p-4 max-md:p-3 text-[1.3rem] max-md:text-[1.2rem] text-gray-300 bg-[var(--bg-color)] backdrop-blur-sm border-2 border-white/10 rounded-2xl transition-all duration-300 focus:border-[var(--main-color)]/60 focus:outline-none focus:bg-[var(--bg-color)]/80 placeholder-gray-500 group-hover/input:border-[var(--main-color)]/40 resize-none min-h-[120px]"
                      ></textarea>
                    </div>
                  </div>
                  
                  {/* Submit Button */}
                  <div className="text-center pt-4">
                    <button 
                      type="button"
                      onClick={(e) => {
                        // Create a form element programmatically and append it to the body
                        const form = document.createElement('form');
                        form.action = 'https://api.web3forms.com/submit';
                        form.method = 'POST';
                        
                        const fields = [
                          { name: 'access_key', value: 'bfee38f4-5c22-4310-ac7a-677839387e37' },
                          { name: 'name', value: formData.name },
                          { name: 'email', value: formData.email },
                          { name: 'phone', value: formData.phone },
                          { name: 'subject', value: formData.subject },
                          { name: 'message', value: formData.message }
                        ];
                        
                        fields.forEach(field => {
                          const input = document.createElement('input');
                          input.type = 'hidden';
                          input.name = field.name;
                          input.value = field.value;
                          form.appendChild(input);
                        });
                        
                        document.body.appendChild(form);
                        
                        const formData_web3 = new FormData(form);
                        
                        fetch('https://api.web3forms.com/submit', {
                          method: 'POST',
                          body: formData_web3
                        }).then(response => {
                          if (response.ok) {
                            alert('Message sent successfully!');
                            setFormData({
                              name: '',
                              email: '',
                              phone: '',
                              subject: '',
                              message: ''
                            });
                          } else {
                            alert('Failed to send message. Please try again.');
                          }
                        }).catch(error => {
                          alert('An error occurred. Please try again.');
                        }).finally(() => {
                          document.body.removeChild(form);
                        });
                      }}
                      className="group relative inline-flex items-center justify-center px-12 py-5 bg-gradient-to-r from-[var(--main-color)] to-[var(--main-color)] text-[var(--bg-color)] font-[700] text-[1.5rem] max-md:text-[1.3rem] rounded-2xl border-2 border-[var(--main-color)]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[var(--main-color)]/40 min-w-[200px] max-md:min-w-[180px]"
                    >
                      <i className="bx bx-paper-plane text-xl mr-3 group-hover:translate-x-1 transition-transform duration-300"></i>
                      <span>Send Message</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[var(--main-color)] to-transparent rounded-2xl opacity-0 group-hover:block transition-opacity duration-300"></div>
                    </button>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="mt-12 pt-8 border-t border-white/10">
                  <div className="text-center mb-8">
                    <h4 className="text-[1.6rem] max-md:text-[1.6rem] font-[600] text-[var(--main-color)] mb-4">
                      Other Ways to Reach Me
                    </h4>
                    <p className="text-gray-300 text-[1.2rem] max-md:text-[1.3rem]">
                      Prefer a different communication method? Feel free to reach out through any of these channels.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 max-md:flex max-md:flex-wrap max-md:justify-center max-md:gap-4 ">
                    <div className="group text-center p-6 bg-gradient-to-br from-gray-900/40 to-gray-800/40 rounded-2xl border border-white/10 hover:border-[var(--main-color)]/40 transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--main-color)]/20 to-[var(--main-color)]/40 rounded-xl flex items-center justify-center border border-[var(--main-color)]/30 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <i className="bx bx-envelope text-[var(--main-color)] text-xl"></i>
                      </div>
                      <h5 className="text-white font-[600] text-[1.2rem] mb-2">Email</h5>
                      <p className="text-gray-400 text-[1rem]">Quick Response</p>
                    </div>
                    
                    <div className="group text-center p-6 bg-gradient-to-br from-gray-900/40 to-gray-800/40 rounded-2xl border border-white/10 hover:border-[var(--main-color)]/40 transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--main-color)]/20 to-[var(--main-color)]/40 rounded-xl flex items-center justify-center border border-[var(--main-color)]/30 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <i className="bx bxl-linkedin text-[var(--main-color)] text-xl"></i>
                      </div>
                      <h5 className="text-white font-[600] text-[1.2rem] mb-2">LinkedIn</h5>
                      <p className="text-gray-400 text-[1rem]">Professional Network</p>
                    </div>
                    
                    <div className="group text-center p-6 bg-gradient-to-br from-gray-900/40 to-gray-800/40 rounded-2xl border border-white/10 hover:border-[var(--main-color)]/40 transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--main-color)]/20 to-[var(--main-color)]/40 rounded-xl flex items-center justify-center border border-[var(--main-color)]/30 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <i className="bx bx-phone text-[var(--main-color)] text-xl"></i>
                      </div>
                      <h5 className="text-white font-[600] text-[1.2rem] mb-2">Call</h5>
                      <p className="text-gray-400 text-[1rem]">Direct Communication</p>
                    </div>
                  </div>
                </div>
              </div>
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

        /* Enhanced input focus effects */
        input:focus, textarea:focus {
          box-shadow: 0 0 0 1px var(--main-color), 0 0 20px rgba(243, 156, 18, 0.2);
        }

        /* Button hover effects */
        button:hover {
          box-shadow: 0 10px 40px rgba(243, 156, 18, 0.4);
        }

        /* Smooth transitions for all interactive elements */
        input, textarea, button {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Enhanced responsive design */
        @media (max-width: 768px) {
          .grid {
            gap: 1rem;
          }
        }

        /* Form validation styling */
        input:invalid {
          border-color: rgba(239, 68, 68, 0.3);
        }

        input:valid {
          border-color: rgba(34, 197, 94, 0.3);
        }

        /* Custom scrollbar for textarea */
        textarea::-webkit-scrollbar {
          width: 8px;
        }

        textarea::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }

        textarea::-webkit-scrollbar-thumb {
          background: var(--main-color);
          border-radius: 4px;
        }

        /* Loading states */
        button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* Enhanced hover states for form sections */
        .group\/input:hover input,
        .group\/input:hover textarea {
          border-color: rgba(243, 156, 18, 0.4);
        }

        /* Responsive typography adjustments */
        @media (max-width: 480px) {
          input, textarea {
            font-size: 1.1rem;
            padding: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;