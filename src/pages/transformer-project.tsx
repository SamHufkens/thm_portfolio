import { BiLeftArrow } from "react-icons/bi"
import { FaGithub } from "react-icons/fa6"
import { BsDatabase } from "react-icons/bs"



function TransformerProject() {



  return (
    <div className='min-h-screen bg-darkBackground scroll-smooth flex  justify-center'>
      <div className="w-full max-w-screen-lg px-4 mx-auto mt-20 text-white">
 
          <a href="/#projectSection" className="flex items-center gap-1 cursor-pointer font-semibold mb-2">
            <BiLeftArrow size={20}/> Back
          </a>
        
          <h1 className={`font-extrabold text-4xl`}>Transformer model from
            <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-slate-800 dark:border-neutral-700 border border-gray-200 ml-2">
              scratch
            </span> 
          </h1>

          <div className="mt-3">
            <p><span className="font-bold">Project Type:</span > Personal Project</p>
            <p><span className="font-bold">Course:</span > Supervised Learning (SUPSI)</p>
          </div>
          

          <div className="mt-7 text-justify">
            <h2 className={`text-white font-extrabold text-xl`}>Background</h2>
            <p className="text-textColorRose">I’ve always been curious about how ChatGPT actually works, so I decided to dig into the transformer model behind it. I wanted to understand not just what it does, but how it works, both the math and the architecture. I explored the core concepts behind transformers by building and training one from scratch using Python.</p>
          </div>

          <div className="mt-5 text-justify">
            <h2 className={`text-white font-extrabold text-xl`}>Approach</h2>
            <p className="text-textColorRose">First, I began by studying the architecture through online resources like YouTube videos and articles that break down the math and structure of transformers. Once I understood the theory, I implemented the model using NumPy and Tensorflow, building the key components like the attention mechanism and positional embedding manually.</p><br/>
            <p className="text-textColorRose">To test the model, I trained it on a movie review dataset. Given a movie title as input, the model should then generate a review for that movie. Because of limited computing power, training was constrained, but the model still produced a bit of sentence structure and review-like text.</p>
          </div>

          <div className="mt-5 text-justify">
            <h2 className={`text-white font-extrabold text-xl`}>Theory</h2>
            <p className="text-textColorRose">I found some really helpful resources online that explained how transformers work. It wasn’t too hard for me to understand because I already knew the basics of how regular neural networks work with math. The key idea behind transformers is something called the attention mechanism. When you turn words into embeddings, each word knows what it means on its own, but it doesn’t know how it fits into the sentence. For example, in the sentence “Apple released a new phone,” how do we know if “Apple” means the fruit or the tech company? The attention mechanism helps with this, it gives each word context based on the rest of the sentence. That way, the model can figure out that “Apple” in this case means the tech company.</p><br/>
            <p className="text-textColorRose">Before the attention step can happen, the word embeddings need to be turned into positional embeddings. This is important because it gives the model information about the order of the words in the sentence, something basic word embeddings don't include. After that, the input goes through what's called a transformer block. Each transformer block starts with an attention layer, which helps the model understand the context of each word based on the others around it. Then it goes through a feedforward neural network, which helps the model learn deeper patterns in the data.</p><br/>
            <p className="text-textColorRose">In the end, the main thing the transformer does is predict the next word in a sentence. It does this by looking at a predefined vocabulary and creating a probability distribution over all the possible words. The word with the highest probability is chosen as the next word.</p>
          </div>

          <div className="mt-5 text-justify">
            <h2 className={`text-white font-extrabold text-xl`}>Practical</h2>
            <p className="text-textColorRose">I wanted to build a model that could generate movie reviews. The idea was to give the model the name of a movie, and it would generate a review based on that input. I implemented the model from scratch using TensorFlow and NumPy. To simplify things, I created a custom class by subclassing TensorFlow’s Layer, which allowed me to avoid manually handling backpropagation, because that wasn’t the focus of this project. I started by implementing the Attention mechanism, followed by positional embeddings. The final model architecture takes the input, adds positional information, passes it through one Transformer block, and finishes with a fully connected layer and softmax activation to generate the predicted words.</p><br/>
            <p className="text-textColorRose">Training took a long time because I didn’t have enough computing power. Although the dataset wasn’t very large, I still needed enough data to get some decent results. I used Google Colab for training, and each epoch took about 1 hour and 20 minutes, so I only trained for 2 epochs and ended with a training loss of 0.5870. The results weren’t that great, the model was able to put together a few words that made some sense, but the main goal of this project was to understand the architecture rather than to train a perfect model. Overall, I’m satisfied with what I made and learned.</p>
            <div className="md:flex md:items-center md:justify-between mt-4">
                <img src="assets/transformer_diagram.png" className="w-[400px] rounded-md"/>
                <img src="assets/tr-out.png" className="w-[670px] h-[60px] rounded-md"/>
            </div>
            
          </div>

          <div className="mt-5">
            <h2 className={`text-white font-extrabold text-xl`}>Takeaway</h2>
            <p className="text-textColorRose">This project gave me a hands-on understanding of how transformers work. It also improved my skills in low-level model implementaiton by working with Tensorflow and NumPy.</p>
          </div>

          
        <div className="flex gap-8 mt-4 mb-8">
            <a href="https://github.com/SamHufkens/transformer_from_scratch" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mt-4">
              <FaGithub className="" size={20} /> Github Repository
            </a>
            <a href="https://www.kaggle.com/datasets/andrezaza/clapper-massive-rotten-tomatoes-movies-and-reviews" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mt-4">
              <BsDatabase size={20} /> Dataset
            </a>    
        </div>
          
      </div>
    </div>
  )
}

export default TransformerProject
