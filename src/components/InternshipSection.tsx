import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HeaderSection } from './ui/header-section';
import { Carousel } from './ui/carousel';

const Internship = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

      const slideData = [
    {
      title: "Web Application",
      src: "/assets/webapp.png",
    },
    {
      title: "Motion Detection",
      src: "/assets/md.png",
    },
    {
      title: "ANPR",
      src: "/assets/anpr.png",
    },
    {
      title: "Notification",
      src: "/assets/notification.png",
    },
    {
      title: "Visualization",
      src: "/assets/vis.png",
    },
  ];
  
    return (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1], delay: 0.2 }}
          className='mt-10'
        >
      <div id="internship" className="dark:text-white w-10/12 md:w-8/12 mx-auto mt-60">
        <HeaderSection small='ANPR NOTIFICATION SYSTEM' big='Internship.' center={true}/>
        <p className='mt-10 text-justify text-textColorRose'>
          EpicData shares office space with several small businesses, creating challenges
          around managing client arrivals due to the absence of a dedicated front desk. To
          address this, I developed and deployed an Automatic Number Plate Recognition
          (ANPR) Notification System. Leveraging computer vision and deep learning, the
          system detects, tracks, and recognizes license plates using motion detection combined with Optical Character Recognition (OCR). It integrates with Azure for
          real-time image processing, utilizing the YOLO model for object detection and
          PaddleOCR for text extraction. Upon detecting motion, the system captures a
          batch of images, processes them via an API, and identifies license plates. Confirmed plates are sent to an Azure Function, which verifies their presence in a
          database and triggers a Microsoft Teams notification. To improve reliability, the
          system requires a license plate to be detected twice before sending a notification.
          Additionally, a Power BI dashboard provides consultants with real-time insights
          into system performance and historical data. A web application, built with NextJS, enables consultants to manage client meetings. Once the system was fully
          completed, I tested it in two different locations, and all tests were successful.
        </p>
        <p className='text-justify text-textColorRose mt-5'>
          Download the full report <a href="https://drive.google.com/file/d/17iYHz5FxVs1scPCnJf7Zac0sZhKg8uxt/view?usp=sharing" target="_blank" className='text-textColorBlue underline'>here</a>.
        </p>

          <div className="relative overflow-hidden pt-20">
            <Carousel slides={slideData} />
          </div>



      </div>
      </motion.div>
    );
  };
  
  export default Internship;