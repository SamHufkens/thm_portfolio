import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { HeaderSection } from "./ui/header-section";
import { Modal,
  ModalBody,
  ModalContent,
  ModalTrigger, } from "./ui/animated-model";

import { FaGithub } from "react-icons/fa6";
import { BsDatabase } from "react-icons/bs";

 

const ProjectSection = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

    const projects = [
        {
          title: "Skin Cancer Lesions",
          highlight: "Segmentation",
          projectType: "School Project - SUPSI Exchange Semester",
          course: "Computer Vision and Deep Learning",
          linkTitle: "Github",
          link: "https://github.com/zenodarani/computer-vision-segmentation",
          description: "In collaboration with a fellow student during my exchange at SUPSI, I worked on a skin lesion segmentation project. The goal was to automatically detect cancerous regions in skin images by performing pixel-level classification.",
          datasetLink: "https://www.kaggle.com/datasets/volodymyrpivoshenko/skin-cancer-lesions-segmentation",
          approach: (
            <>

              <p>We had to do the following three segmentation methods:</p>
              <p>1. Logistic Regression - Classified pixels only on their RGB values.</p>
              <p>2. Patch-Based CNN - Trained on 15x15 image patches to capture local spatial context.</p>
              <p>3. U-NET - Full convolutional architecture designed specifically for segmentaiton tasks.</p>
              <p>For each method, we evaluated performance using loss, accuracy, AUC, and ROC curves.</p>
            </>
          ),
          takeaway: "I gained hands on experience with multiple segmentation strategies, deepened my understanding of CNNs and U-Net, and improved my skills in evaluation metrics and model comparison.",
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
          projectType: "Client Project - VIBO Sint-Barbara",
          linkTitle: "Github",
          link: "https://github.com/SamHufkens/vibo-integrado_extension",
          description: "At VIBO Sint-Barbara, teachers use the Integrado platform for administrative tasks. Some also use a manually created Word document called the 'Opdrachtenkaart' to track individual student goals. In this project, I learned to develop a chrome extension and deploy it to the Chrome developer store.",
          problem: "The process of creating these 'Opdrachtenkaart' cards is time consuming and repetitive. Teachers always need to manually input data into Word documents for each student, which is takes a lot of time.",
          solution: "To solve this problem, I developed a Chrome extension that automates the creation of these cards. With the extension installed, relevant student data is automatically pulled from Integrado and inserted into a pre-designed PDF. This results in significant time savings, as teachers no longer need to manually create these word documents.",
          takeaway: "Through this project, I learned how to develop a Chrome extension and deploy it to the Chrome developer store and work with web scraping techniques.",
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
          linkTitle: "Github",
          projectType: "Personal Project",
          link: "https://github.com/SamHufkens/transformer_from_scratch",
          datasetLink: "https://www.kaggle.com/datasets/andrezaza/clapper-massive-rotten-tomatoes-movies-and-reviews",
          description: (
            <>
              <p>
                I’ve always been curious about how ChatGPT actually works, so I decided to dig into the transformer model behind it. I wanted to understand not just what it does, but how it works, both the math and the architecture. I explored the core concepts behind transformers by building and training one from scratch using Python.
              </p>
            </>

          ),
          approach: (
            <>
              <p>First, I began by studying the architecture through online resources like YouTube videos and articles that break down the math and structure of transformers. Once I understood the theory, I implemented the model using NumPy and Tensorflow, building the key components like the attention mechanism and positional embedding manually.</p><br/>
              <p>To test the model, I trained it on a movie review dataset. Given a movie title as input, the model should then generate a review for that movie. Because of limited computing power, training was constrained, but the model still produced a bit of sentence structure and review-like text.</p>
            </>
          ),
          takeaway: "This project gave me a hands-on understanding of how transformers work. It also improved my skills in low-level model implementaiton by working with Tensorflow and NumPy.",
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
            <div key={index} className="bg-gray-900 text-white border border-transparent rounded-lg p-4 shadow-md flex flex-col justify-between">
              {project.image}
              <h3 className="text-lg font-bold my-2">{project.title} {project.highlight}</h3>

              <Modal>
                <ModalTrigger className="mt-4 px-4 py-2 bg-white text-black dark:bg-neutral-100 dark:text-black rounded hover:bg-neutral-200 transition">
                  Learn More
                </ModalTrigger>
                <ModalBody>
                  <ModalContent>
                    <div>
                      <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold ">
                        {project.title}{" "}
                        <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-slate-800 dark:border-neutral-700 border border-gray-200">
                          {project.highlight}
                        </span>
                      </h4>


                      <h5 className="text-md mt-2">
                        <span className="font-bold">Project Type: </span>{project.projectType}</h5>

                      {project.course && (
                        <h5 className="text-md mb-2">
                        <span className="font-bold">Course: </span>{project.course}</h5>
                      )}
                      

                      <div className="text-white">
                        <h5 className="text-md font-bold mt-4">Overview</h5>
                        <p>{project.description}</p>

                        {project.approach && (
                          <div>
                            <h5 className="text-md font-bold mt-4">Approach</h5>
                            {project.approach}
                          </div>
                        )}

                        

                        {project.problem && (
                          <div>
                            <h5 className="text-md font-bold mt-4">Problem</h5>
                            <p>{project.problem}</p>
                          </div>
                        )}

                        {project.solution && (
                          <div>
                            <h5 className="text-md font-bold mt-4">Solution</h5>
                            <p>{project.solution}</p>
                          </div>
                        )}

                        {project.takeaway && (
                          <div>
                            <h5 className="text-md font-bold mt-4">Takeaway</h5>
                            {project.takeaway}
                          </div>
                        )}
                        

                        {project.link && (
                          <div className="flex gap-8 mt-4">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mt-4">
                              <FaGithub className="" size={20} /> Github Repository
                            </a>
                            {project.datasetLink && (
                              <a href={project.datasetLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mt-4">
                                <BsDatabase size={20} /> Dataset
                              </a>
                            )}
                            
                            
                          </div>
                          
                        )}
                      </div>
                    </div>
                  </ModalContent>
                </ModalBody>
              </Modal>
            </div>

          ))}
          </div>
          


          




      </div>
    </motion.div>
    
  )
}

export default ProjectSection