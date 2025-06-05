import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { FaDownload } from 'react-icons/fa';
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/star-bg";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const HeroSection = () => {
  return (
    <div className="min-h-screen h-screen rounded-md bg-darkBackground flex flex-col items-center justify-center relative w-full">
      <div className="relative flex-col md:flex-row z-10 text-2xl sm:text-3xl md:text-4xl lg:text-[5.5rem] md:leading-tight  mx-auto text-center font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
        <HeroHighlight>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [20, -5, 0] }}
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
            className="text-center mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [20, -5, 0] }}
              transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
              className="text-[2.0rem] sm:text-5xl md:text-6xl lg:text-[5.6rem] font-bold text-neutral-700 dark:text-white  leading-relaxed lg:leading-snug"
            >
              <p className="dark:text-white text-center sm:text-lg md:text-xl lg:text-2xl mb-2 text-sm">
                Hi, I'm Sam Hufkens{" "}
                <span className="inline-block hover:animate-wiggle origin-bottom">👋</span>
              </p>

              Welcome to my{" "}
              <Highlight className="text-black dark:text-white">
                Portfolio
              </Highlight>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [20, 0] }}
              transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1], delay: 0.2 }}
              className="flex justify-center mt-8 text-sm gap-5 items-center">
              <a href="https://www.instagram.com/shufkens/" target="_blank" className="text-white hover:text-primaryColor transition-colors duration-300 hidden md:block lg:block">
                  <FaInstagram size={20} />
              </a>
              <a href="mailto:samhufkens6@hotmail.com" className="text-white hover:text-primaryColor transition-colors duration-300 hidden md:block lg:block">
                  <MdOutlineEmail size={20} />
              </a>
              <a href="https://drive.google.com/file/d/14EaCfLWBTx5_48YQA0DozJmFM23i6J7i/view?usp=sharing" target="_blank">
                <button className="border border-primaryColor text-sm shadow-[inset_0_0_0_2px_theme('colors.primaryColor')] text-black px-12 py-4 rounded-full font-medium bg-transparent hover:bg-primaryColor hover:text-white dark:text-neutral-200 transition duration-200 items-center space-x-2 flex">
                  <FaDownload size={19} />
                  <span>Curriculum Vitae</span>
                </button>
              </a>
              <a href="https://www.linkedin.com/in/samhufkens/" target="_blank" className="text-white hover:text-primaryColor transition-colors duration-300 hidden md:block lg:block">
                  <FaLinkedinIn size={20} />
              </a>
              <a href="https://github.com/SamHufkens" target="_blank" className="text-white hover:text-primaryColor transition-colors duration-300 hidden md:block lg:block">
                  <FaGithub size={20} />
              </a>
            </motion.div>
          </motion.div>
        </HeroHighlight>
      </div>
  <ShootingStars />
  <StarsBackground />
</div>


    
  );
}

export default HeroSection;

