import { useRef, useEffect } from "react";
import { useInView, motion } from "framer-motion";
import { HeaderSection } from "./ui/header-section";
import { useLocation } from "react-router-dom"; 

 

const ProjectSection = () => {

  const ref = useRef(null);
  const location = useLocation();
  const isInView = useInView(ref, { once: true });


  useEffect(() => {
    if (location.hash === "#projectSection") {
      const el = document.getElementById("projectSection");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const projects = [
      {
        title: "Skin Cancer Lesions",
        highlight: "Segmentation",
        link: "segmentation-project",
        image: (
          <img
          src="/assets/skin_cancer.png"
          alt="skin cancer"
            className="rounded w-full h-[200px]"
          />
        )
      },
      {
        title: "VIBO/Integrado",
        highlight: "Chrome Extension",
        link: "extension-project",
        image: (
          <img
          src="/assets/opdrachtenkaart.png"
          alt="skin cancer"
            className="rounded  w-full h-[200px] "
          />
        )
      },
      {
        title: "Transformer model from",
        highlight: "scratch",
        link: "transformer-project",
        image: (
          <img
          src="/assets/transformer_diagram.png"
          alt="skin cancer"
            className="rounded  w-full h-[200px] "
          />
        )
      }
    ];

      

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
      transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1], delay: 0.2 }}
      className="mt-40"
    >
      <div id="projectSection" className="w-10/12 md:w-8/12 mx-auto max-w-6xl mt-52">
          <HeaderSection small='MY OTHER WORK' big='Projects.' center={true}/>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {projects.map((project, index) => (
            <div key={index} className="dark:bg-gray-900 text-white border border-transparent rounded-lg p-4 shadow-md flex flex-col justify-between">
              {project.image}
              <h3 className="text-lg font-bold my-2">{project.title} {project.highlight}</h3>

              <a href={project.link} className="text-center mt-4 px-4 py-2 bg-white text-black dark:bg-neutral-100 dark:text-black rounded hover:bg-neutral-200 transition">
                Learn More
              </a>
            </div>

          ))}
          </div>

      </div>
    </motion.div>
    
  )
}

export default ProjectSection