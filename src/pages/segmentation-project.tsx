import { BiLeftArrow } from "react-icons/bi"
import { FaGithub } from "react-icons/fa6"
import { BsDatabase } from "react-icons/bs"



function SegmentationProject() {



  return (
    
      <div className='min-h-screen bg-darkBackground scroll-smooth flex  justify-center'>
            <div className="w-full max-w-screen-lg px-4 mx-auto mt-20 text-white">
      
                <a href="/#projectSection" className="flex items-center gap-1 cursor-pointer font-semibold mb-2">
                  <BiLeftArrow size={20}/> Back
                </a>
              
                <h1 className={`font-extrabold text-4xl`}>Skin Cancer Lesions
                  <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-slate-800 dark:border-neutral-700 border border-gray-200 ml-2">
                    Segmenation
                  </span> 
                </h1>

                <div className="mt-3">
                  <p><span className="font-bold">Project Type:</span > School Project - SUPSI Exchange Semester</p>
                  <p><span className="font-bold">Course:</span> Deep Learning and Computer Vision (SUPSI)</p>
                </div>
                
                

                <div className="mt-10">
                  <h2 className={`text-white font-extrabold text-xl`}>Background</h2>
                  <p className="text-textColorRose text-justify">During my exchange semester in Switzerland, I took a course called Deep Learning and Computer Vision. We started by learning the basics about what images are, how cameras work, and how visual data is represented. From there, we moved on to image classification and eventually focused on image segmentation. For the final project, we worked in groups of 2-3 students to build an image segmentation model. We were free to choose our own dataset, so we decided to use the HAM10000 dataset from Kaggle, which contains dermatoscopic images of pigmented skin lesions.</p>
                </div>

                <div className="mt-10">
                  <h2 className={`text-white font-extrabold text-xl`}>Group Project</h2>
                  <p className="text-textColorRose text-justify">Like I mentioned earlier, this was a group project, but our group was just me and one other student. We didn’t really assign roles, we just made a plan together on how to tackle this. The first step was to find a dataset and present it to the professor and the class. After that, we had to do three different segmentation approaches, which I’ll explain in the next section.</p><br />
                  <p className="text-textColorRose">Since it wasn’t like a web application project, it wasn’t easy to split up the work. We had two contact periods each week, one online and one in person and during the in class sessions, we always had time to work on the project. For each approach, we worked together to prep the data for the approach, and once that was done, we both tried to train the best models and compared results the next week.</p>
                </div>

                <div className="mt-5 text-justify">
                  <h2 className={`text-white font-extrabold text-xl`}>Approach</h2>
                  <p className="text-textColorRose">We had to apply image segmenation with three different methods from least ideal to the most ideal method.</p>
                  <ol className="text-textColorRose mt-3">
                    <li>1. <span className="font-bold">Logistic Regression</span> - The first approach was using logistic regression. Since logistic regression is good for binary classification tasks, it made sense for our case where each pixel had to be classified as either cancerous (white) or non-cancerous (black). The model took the RGB values of a single pixel as input and predicted either a 0 for non-cancerous or a 1 for cancerous. While this method technically works, it is not ideal for high resolution images because it does not take spatial context into account and can lead to very limited results.</li>
                    <li className="mt-2">2. <span className="font-bold">Patch-Based CNN</span> - The first approach did not capture any spatial context. This is exactly what the next approach addresses by using a Convolutional Neural Network (CNN). The network takes 33 by 33 pixel patches from the images as input and returns either 0 or 1.</li>
                    <li className="mt-2">3. <span className="font-bold">U-NET</span> - The final approach uses the U-NET architecture, a neural network specifically designed for image segmentation. It consists of an encoder and a decoder. The encoder reduces the spatial resolution to capture global, high-level features, while the decoder upsamples to restore spatial details. To prevent losing important details during upsampling, U-NET uses skip connections that transfer information directly from the encoder to the decoder. This makes sure the U-NET can understand both what is in the image and where it is located. U-NET processes the entire image at once and outputs a complete segmentation mask.</li>
                  </ol>
                </div>

                <div className="mt-5 text-justify">
                  <h2 className={`text-white font-extrabold text-xl`}>Results</h2>
                  <p className="text-textColorRose font-bold">Logistic regression</p>
                  <p className="text-textColorRose">This approach is definitely not ideal, but it still produced some decent results. It worked well on images where the cancer was clearly visible, but struggled with cases where the cancer was less obvious. We trained the model on only 100 images and achieved an AUC of 0.88. As shown in Image 1, where the cancer is clearly defined, the model performs well. However, in Image 2, the center of the cancer appears lighter rather than dark, which causes the model to misclassify it as non-cancerous.</p>
                  <img className="mt-2 w-[900px]" src="/assets/log1.png"/>
                  <img className="w-[900px]" src="/assets/log2.png"/>

                  <p className="text-textColorRose font-bold mt-3">Patch-Based CNN</p>
                  <p className="text-textColorRose">We again used 100 images to extract 33 by 33 patches. For each image, we extracted 200 patches. The image below shows an example and its predicted mask. Overall, the model performed quite well, although it was less confident when light red spots appeared, as seen in the raw prediction. However, after applying a threshold, the prediction became much more accurate. The model achieved an AUC of 0.93.</p>
                  <img className="mt-2 w-[900px]" src="/assets/patch1.png"/>

                  <p className="text-textColorRose font-bold mt-3">U-NET</p>
                  <p className="text-textColorRose">For the U-Net, we used 8,000 images for training. To speed up training, we reduced the image resolution. The model achieved good results. Below is a prediction on a test image, where it successfully identified the cancerous region. Overall, the model reached an AUC of 0.96.</p>
                  <img  className="mt-2 w-[900px]" src="/assets/u-net1.png"/>
                </div>

                <div className="mt-5">
                  <h2 className={`text-white font-extrabold text-xl`}>Takeaway</h2>
                  <p className="text-textColorRose">I gained experience with various segmentation strategies and developed a strong understanding of the U-NET architecture, both how to build it in TensorFlow and why it's so effective for segmenation.</p>
                </div>

                <div className="flex gap-8 mt-4 mb-8">
                  <a href="https://github.com/zenodarani/computer-vision-segmentation" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mt-4">
                    <FaGithub className="" size={20} /> Github Repository
                  </a>
                  <a href="https://www.kaggle.com/datasets/volodymyrpivoshenko/skin-cancer-lesions-segmentation" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mt-4">
                    <BsDatabase size={20} /> Dataset
                  </a>
                  
                  
                </div>
            </div>
          </div>
  
   
  )
}

export default SegmentationProject
