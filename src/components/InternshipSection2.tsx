import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { HeaderSection } from './ui/header-section';
import { CgWebsite } from "react-icons/cg";
import { FaCarSide } from "react-icons/fa";
import { TbNumber123 } from "react-icons/tb";
import { BsMicrosoftTeams } from "react-icons/bs";
import { GoGraph } from "react-icons/go";


const components = [
  {
    title: 'Web Application',
    image: 'assets/st_web_app.png',
    description: 'Consultants log in to the meeting portal using their Microsoft Entra ID from EpicData. When they create a meeting, they will be able to be notified upon client arrival.',
    icon: (<><CgWebsite/></>)
  },
  {
    title: 'Motion Detection',
    image: 'assets/st_motion_detection.png',
    description: 'The first step involves capturing snapshots of vehicles as they enter the parking lot. This is achieved using motion detection, where I use background subtraction to identify motion. When the motion area is above a pre-defined threshold, a snapshot is taken and added to the batch of snapshots.',
    icon: (<><FaCarSide/></>)
  },
  {
    title: 'ANPR',
    image: 'assets/st_anpr.png',
    description: 'Once motion stops for a short period, the snapshots are sent to the ANPR component, hosted via FastAPI in an Azure Container Instance. Each image undergoes object detection using a YOLO model that I trained on Belgian license plates. If a license plate is found, the ROI is extracted and passed as input for OCR. A plate is confirmed when it appears twice across multiple snapshots.',
    icon: (<><TbNumber123/></>)
  },
  {
    title: 'Notification',
    image: 'assets/st_not.png',
    description: 'Once a valid license plate is detected, it is sent to the notification component, hosted in an Azure function that is HTTP-triggered. First, it queries the database for a matching record. If found, the relevant information is retrieved and a notification is sent to the corresponding consultant via Microsoft Teams. After the notification is sent, data from the detection is stored in the database for the next component.',
    icon: (<><BsMicrosoftTeams/></>)
  },
  {
    title: 'Visualization',
    image: 'assets/st_vis.png',
    description: 'The final component is a Power BI report that visualizes data collected from the detection system. It includes three pages: an overview page, a detailed table of all historical detection records, and a performance page showcasing average confidence scores for object detection, OCR, and processing time, along with a scatter plot comparing object detection and OCR confidence levels.',
    icon: (<><GoGraph/></>)
  }
];

const Internship = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleTab = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
      transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1], delay: 0.2 }}
      className='mt-10'
    >
      <div id="internship" className="dark:text-white w-10/12 md:w-8/12 max-w-6xl mx-auto mt-60">
        <HeaderSection small='ANPR NOTIFICATION SYSTEM' big='Internship.' center={true}/>

        <p className='mt-5 text-center text-textColorRose mx-auto md:w-[910px] w-[400px]'>
          EpicData shares office space with other small businesses and doesn’t have a front desk, which made it difficult to manage client arrivals. To help with this, I built an ANPR Notification System made up of the components below.
        </p>

        {/* Accordion + Image */}
        <div className="mt-10 flex flex-col md:flex-row gap-6 items-center">
          {/* Accordion (Left) */}
          <div className="md:w-1/2 space-y-2">
            {components.map((comp, idx) => (
              <div key={idx} className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleTab(idx)}
                  className={`w-full text-left px-4 py-3 font-semibold flex justify-between items-center transition-colors duration-300 ${
                    activeIndex === idx
                      ? 'bg-primaryColor text-white'
                      : 'bg-gray-100 dark:bg-gray-900 text-black dark:text-white hover:bg-primaryColor-lighter dark:hover:bg-gray-700'
                  }`}
                >
                  <div className='flex items-center gap-2'>
                    {comp.icon}
                    {comp.title}
                  </div>

                  
                  
                </button>

                <AnimatePresence initial={false}>
                  {activeIndex === idx && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden bg-white dark:bg-gray-900"
                    >
                      <div className="px-4 py-3 text-textColorRose">{comp.description}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Smooth Animated Image (Right) */}
          <div className="md:w-1/2 h-full flex items-center justify-center min-h-[400px] max-h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={components[activeIndex >= 0 ? activeIndex : 0].image}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="w-full h-full flex items-center justify-center"
              >
                <img
                  src={components[activeIndex >= 0 ? activeIndex : 0].image}
                  alt={components[activeIndex >= 0 ? activeIndex : 0].title}
                  className="w-full h-full max-w-[500px] max-h-[400px] object-contain shadow-lg rounded-lg"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>


        <p className='text-justify text-textColorRose mt-5'>
          Download the full report <a href="https://drive.google.com/file/d/1z1w9wdz5SrECRyaK2zonUgCWtp8qfuUz/view?usp=sharing" target="_blank" className='text-textColorBlue underline'>here</a>.
        </p>
      </div>
    </motion.div>

    
  );
};

export default Internship;
