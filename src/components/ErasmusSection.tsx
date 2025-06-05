import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HeaderSection } from './ui/header-section';

const ErasmusSection = () => {
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
      <div id="erasmus" className="dark:text-white w-10/12 md:w-8/12 mx-auto max-w-6xl mt-52">
        <HeaderSection small='SWITZERLAND, LUGANO - SUPSI' big='Erasmus.' center={false}/>
        <div className="flex flex-col items-center md:flex-row justify-center gap-10 mt-9 text-justify">
            
            <div>
                <p className="text-textColorRose">
                    During the first semester, I completed an exchange program in Lugano, a city in southern Switzerland just one hour by train from Milan.
                </p>
                <br />
                <p className="text-textColorRose">
                  I studied at the University of Applied Sciences and Arts of Southern Switzerland (SUPSI) in the academic bachelor's program "Data Science and Artificial Intelligence." I selected courses from the second and third year. In total, I took seven: Algorithm Design, Ethics, Supervised Learning, Data Visualization, Data Management, Deep Learning and Computer Vision, and Game Development. In my opinion, Algorithm Design was the most challenging. 
                </p>
                <br />
                <p className="text-textColorRose">
                    I chose to participate in this exchange program because I’ve always wanted to live and study abroad, and this was the perfect opportunity. It was an amazing experience, both academically and personally.
                </p>
            </div>
            <img className="rounded-lg w-[400px] md:w-[420px]" src="/assets/supsi.jpg"  loading="lazy" />
        </div>
          
      </div>
      </motion.div>
    );
  };
  
  export default ErasmusSection;
  
