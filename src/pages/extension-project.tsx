import { BiLeftArrow } from "react-icons/bi"
import { FaGithub } from "react-icons/fa6"


function ExtensionProject() {


  return (
    <div className='min-h-screen bg-darkBackground scroll-smooth flex  justify-center'>
     
      <div className="w-[1100px] mx-auto mt-20 text-white ">
 
          <a href="/#projectSection" className="flex items-center gap-1 cursor-pointer font-semibold mb-2">
            <BiLeftArrow size={20}/> Back
          </a>
        
          <h1 className={`font-extrabold text-4xl`}>VIBO/Integrado
            <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-slate-800 dark:border-neutral-700 border border-gray-200 ml-2">
              Chrome Extension
            </span> 
          </h1>

          <div className="mt-3">
            <p><span className="font-bold">Project Type:</span > Client Project - VIBO Sint-Barbara</p>
            <p><span className="font-bold">Course:</span > Web Advanced (Thomas More)</p>
          </div>
          

          <div className="mt-7 text-justify">
            <h2 className={`text-white font-extrabold text-xl`}>Background</h2>
            <p className="text-textColorRose">My mother is a teacher at VIBO Sint-Barbara, a school for children with special needs. Like all schools, student progress needs to be evaluated. The school uses a platform called Integrado to handle evaluations and administrative tasks. However, some teachers, including my mother, also use an 'Opdrachtenkaart'. Each student has their own card that states their tasks and goals they have to achieve. After completing the task(s), students indicate how well they believe they achieved the goal by marking smiley faces on the card.</p>
          </div>

          <div className="mt-5 text-justify">
            <h2 className={`text-white font-extrabold text-xl`}>Problem</h2>
            <p className="text-textColorRose">The problem lies in the creation of these cards. It’s a time consuming process because teachers have to make a separate card for each individual student, listing their specific goals. First, they enter the goals into the Integrado system for each lesson. Then, they manually recreate the same information in Microsoft Word to create the card, resulting in duplicated effort and significant time loss.</p>
          </div>

          <div className="mt-5 text-justify">
            <h2 className={`text-white font-extrabold text-xl`}>Solution</h2>
            <p className="text-textColorRose">To solve this problem, I developed a Chrome extension for the Integrado platform. I started by designing a PDF template of the Opdrachtenkaart with dynamic input fields. When the teacher clicks the save button in Integrado, the extension automatically generates a personalized PDF card for each selected student, pre-filled with all the necessary data. This completely eliminates the need to manually create the cards, saving time and effort.</p>
            <br />
            <p className="text-textColorRose">After the initial version, there were still some important aspects of the teachers' workflow to consider. Each student had both general goals and personalized goals. However, since personalized goals were entered elsewhere in the system, they couldn't be automatically extracted. To address this, I added a pop-up window that appears when the teacher clicks "save", allowing them to optionally enter a personalized goal for each student. Additionally, although teachers select multiple goals in Integrado, not all of them are intended to appear on the card. To handle this, the same window also lets teachers choose which goals they want to include on the card.</p>
            <div className="md:flex md:items-center gap-6 mt-4">
                <img src="assets/opdrachtenkaart.png" className="w-[400px] rounded-md"/>
                <img src="assets/ex2.png" className="w-[400px] h-[250px]  rounded-md"/>
            </div>
          </div>

          <div className="mt-5">
            <h2 className={`text-white font-extrabold text-xl`}>Takeaway</h2>
            <p className="text-textColorRose">Through this project, I learned how to develop a Chrome extension and deploy it to the Chrome developer store and work with web scraping techniques.</p>
          </div>

          <div className="flex gap-8 mt-4 mb-8">
            <a href="https://github.com/SamHufkens/vibo-integrado_extension" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mt-4">
              <FaGithub className="" size={20} /> Github Repository
            </a>
          </div>
      </div>
    </div>
  )
}

export default ExtensionProject
