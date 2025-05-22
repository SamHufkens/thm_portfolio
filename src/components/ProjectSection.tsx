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
          linkTitle: "Github",
          link: "https://github.com/zenodarani/computer-vision-segmentation",
          description: "This project was created with a fellow student at SUPSI during my exchange semester. In this project, we focused on the problem of skin lesion segmentation using pixel-level dense classification. The goal is to automatically identify cancerous regions in images by classifying each pixel as either lesion or background. ",
          datasetLink: "https://www.kaggle.com/datasets/volodymyrpivoshenko/skin-cancer-lesions-segmentation",
          assignment: (
            <>

              <p>We used a segmentation-by-classification approach, where the goal was to classify each pixel based on its surrounding context. Initially, we used a logistic regression model that took only the RGB values of the center pixel as input. We then improved performance by training a simple convolutional neural network (CNN) on 15×15 patches centered around each pixel, allowing the model to learn spatial features. Patches were sampled from training images with labels corresponding to the class of the center pixel.</p><br/>
              <p>The next step was to use a U-NET architecture. This architecture is commonly used for segmentation. We evaluated model performance using loss, accuracy, AUC and ROC curve on a test set. Finally, we applied the trained model across full images in a sliding window fashion to generate segmentation masks. In this project, I learned to implement segmentation in three different ways.</p>
            
            </>
          ),
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
          linkTitle: "Github",
          link: "https://github.com/SamHufkens/vibo-integrado_extension",
          description: "At VIBO Sint-Barbara, teachers use the Integrado platform for administrative tasks. Some also use a manually created Word document called the 'Opdrachtenkaart' to track individual student goals. In this project, I learned to develop a chrome extension and deploy it to the Chrome developer store.",
          problem: "The process of creating these 'Opdrachtenkaart' cards is time consuming and repetitive. Teachers always need to manually input data into Word documents for each student, which is takes a lot of time.",
          solution: "To solve this problem, I developed a Chrome extension that automates the creation of these cards. With the extension installed, relevant student data is automatically pulled from Integrado and inserted into a pre-designed PDF. This results in a significant time savings, as teachers no longer need to manually generate these cards.",
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
          link: "https://github.com/SamHufkens/transformer_from_scratch",
          datasetLink: "https://www.kaggle.com/datasets/andrezaza/clapper-massive-rotten-tomatoes-movies-and-reviews",
          description: (
            <>
              <p>
                I’ve always been curious about how ChatGPT actually works, so I decided to dig into the transformer model behind it. I wanted to understand not just what it does, but how it works, both the math and the architecture.
              </p>
              <br />
              <p>
                I started by learning the theory, watching YouTube videos and reading articles that explained the transformer architecture in simple terms. Once I felt like I had a good understanding, I started coding. I used NumPy and TensorFlow to build the model from scratch, creating custom layers based on how transformers work. Training the model was not easy becuause it was difficult to access enough compute power to train.
              </p>
              <br />
              <p>
                I trained the model on a dataset of movie reviews. The goal is to give the model a movie title from the dataset, then the model should have to generate the review for that movie. I didn’t expect the model to do well at all with the limited training time. The primary goal of this project was still to better understand how a Transformer works. When I tested it, it was able to put together words into sentences that actually made sense some sense or a review.
              </p>
              <br />
              <p>
                Overall, this project helped me understand how transformers work on a deeper level, and it was really interesting to build and train one myself using Python.
              </p>
            </>

          ),
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
      <div id="projectSection" className="w-10/12 md:w-8/12 mx-auto ">
          <HeaderSection small='MY OTHER WORK' big='Projects.' center={false}/>


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
                      <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold mb-8">
                        {project.title}{" "}
                        <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-slate-800 dark:border-neutral-700 border border-gray-200">
                          {project.highlight}
                        </span>
                      </h4>
                      <div className="text-white">
                        <p>{project.description}</p>

                        {project.problem && (
                          <div>
                            <h5 className="text-xl text-bold underline mt-4">Problem</h5>
                            <p>{project.problem}</p>
                          </div>
                        )}

                        {project.solution && (
                          <div>
                            <h5 className="text-xl text-bold underline mt-4">Solution</h5>
                            <p>{project.solution}</p>
                          </div>
                        )}

                        {project.assignment && (
                          <div>
                            <h5 className="text-xl text-bold underline mt-4">Assignment</h5>
                            {project.assignment}
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