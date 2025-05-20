import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa6';
import { MdOutlineEmail } from "react-icons/md";

function FooterSection() {

  return (
    <div id="footer" className="bg-darkBackground text-white mt-48">
      <div className="w-8/12 mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="text-3xl font-bold">
            Sam <span className="text-primaryColor">Hufkens.</span>
          </div>
          <div className="flex space-x-2 mt-4 md:mt-0">
            <a href="https://www.instagram.com/shufkens/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primaryColor transition-colors duration-300">
              <FaInstagram size={20} />
            </a>
            <a href="mailto:samhufkens6@hotmail.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primaryColor transition-colors duration-300">
              <MdOutlineEmail size={20} />
            </a>
            <a href="https://www.linkedin.com/in/samhufkens/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primaryColor transition-colors duration-300">
              <FaLinkedinIn size={20} />
            </a>
            <a href="https://github.com/SamHufkens" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primaryColor transition-colors duration-300">
              <FaGithub size={20} />
            </a>
          </div>
        </div>
        <hr className="border-gray-700 mb-6" />
        <div className="flex flex-col items-center gap-4">
          <div className="flex space-x-4 text-lg">
            <a className="hover:text-primary transition-colors duration-300" href="#aboutMe">About Me</a>
            <a className="hover:text-primary transition-colors duration-300" href="#internship">Internship</a>
            <a className="hover:text-primary transition-colors duration-300" href="#projectSection">Projects</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
