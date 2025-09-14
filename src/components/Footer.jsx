const Footer = () => {
  return (
    <footer className="flex justify-between items-center flex-wrap py-8 px-[9%] bg-[#323946] max-lg:py-8 max-lg:px-[3%] max-[365px]:flex-col-reverse">
      <div className="footer-text">
        <p className="text-[1.4rem] max-[365px]:text-center max-[365px]:mt-8">
          Copyright &copy; 2025 by <span className="text-[var(--main-color)]">Sahansara</span>  | All Rights Reserved.
        </p>
      </div>

      <div className="footer-iconTop">
        <a 
          href="#home" 
          className="inline-flex justify-center items-center p-[0.8rem] bg-[var(--main-color)] rounded-[8rem] transition-all duration-500 hover:shadow-[0_0_1rem_var(--main-color)]"
        >
          <i className="bx bx-up-arrow-alt text-[2.2rem] text-[#323946]"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;