import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import { MdOutlineEmail } from "react-icons/md";
import { HeaderSection } from './ui/header-section';

const AboutMeSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1], delay: 0.2 }}
          className='mt-10'
        >
      <div id="aboutMe" className="dark:text-white w-10/12 md:w-8/12 lg:w-8/12 mx-auto mt-14">
        <HeaderSection small='INTRODUCTION' big='About Me.' center={false}/>
        <div className="flex flex-col items-center md:flex-row justify-center gap-10 mt-9 text-justify">
            <img className="rounded-lg w-[250px] md:w-[360px]" src="/assets/me.jpg"  loading="lazy" />
            <div>
              <p className='text-textColorRose'>Hi, my name is Sam. I am passionate about Artificial Intelligence and the technology of the future.</p>
              <br />
              <p className='text-textColorRose'>
              My interest in programming began in my last year of high school, and since then, I have been eager to explore and develop new technologies.
              I specialize in Artificial Intelligence because I believe it is shaping the future of technology. I enjoy working with the latest advancements in AI, applying cutting-edge models and techniques to real-world problems. While I have experience with modern web development, my main focus is on AI.
              </p> <br/>
              <p className='text-textColorRose'>
                At the start of my bachelor’s, I wasn't great with soft skills. But over time, through group projects and my exchange semester in Switzerland, I’ve really worked on improving my communication and teamwork.
              </p>

              <div className='flex gap-4 justify-center md:justify-start mt-4'>
                <a href="mailto:samhufkens6@hotmail.com">
                  <MdOutlineEmail size={40} className='duration-300 border border-textColorRose rounded-full p-2 text-textColorRose hover:bg-textColorRose hover:text-textColorWhite'/>
                </a>

                <a href="https://www.linkedin.com/in/samhufkens/" target="_blank">
                    <FaLinkedinIn size={40} className='duration-300 border border-textColorRose rounded-full p-2 text-textColorRose hover:bg-textColorRose hover:text-textColorWhite' />
                </a>

                <a href="https://github.com/SamHufkens" target="_blank">
                    <FaGithub size={40} className='duration-300 border border-textColorRose rounded-full p-2 text-textColorRose hover:bg-textColorRose hover:text-textColorWhite' />
                </a>

                <a href="https://www.instagram.com/shufkens/" target="_blank">
                    <FaInstagram size={40} className='duration-300 border border-textColorRose rounded-full p-2 text-textColorRose hover:bg-textColorRose hover:text-textColorWhite' />
                </a>
              </div>
              
            </div>
            
        </div>
          
      </div>
      </motion.div>
    );
  };
  
  export default AboutMeSection;
  
