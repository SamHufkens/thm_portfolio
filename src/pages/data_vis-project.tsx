import { BiLeftArrow } from "react-icons/bi"
import { BsDatabase } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6"


function DataVisProject() {


  return (
    <div className='min-h-screen bg-darkBackground scroll-smooth flex  justify-center'>
     
      <div className="w-full max-w-screen-lg px-4 mx-auto mt-20 text-white">
 
          <a href="/#projectSection" className="flex items-center gap-1 cursor-pointer font-semibold mb-2">
            <BiLeftArrow size={20}/> Back
          </a>
        
          <h1 className={`font-extrabold text-4xl`}>Analyzing Factors Influencing
            <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-slate-800 dark:border-neutral-700 border border-gray-200 ml-2 mr-2">
              the Box Office
            </span>
            <br /> 
              of a Movie
          </h1>

          <div className="mt-3">
            <p><span className="font-bold">Project Type:</span > School Project - SUPSI Exchange Semester</p>
            <p><span className="font-bold">Course:</span > Data Visualization (Thomas More & SUPSI)</p>
          </div>
          

          <div className="mt-7 text-justify">
            <h2 className={`text-white font-extrabold text-xl`}>Background</h2>
            <p className="text-textColorRose">As part of the Data Visualization course at SUPSI, we were tasked with a final group project centered around the theme "Human Made." This project was a group project and we chose to explore the factors that influence a movie's box office performance. We used Flourish to create the visualizations. With Flourish you can easily create interactable visualizations for websites.</p>
          </div>

          <div className="mt-7 text-justify">
            <h2 className={`text-white font-extrabold text-xl`}>Group Project</h2>
            <p className="text-textColorRose">Our group project consisted of four members. I have to admit that the beginning was a bit challenging, as most of my group members had little to no experience with data visualization. Because of this, I decided to take the initiative and lead the group. Taking charge isn’t something I usually do, but when I notice a group project isn't progressing well, I tend to step up. Looking back, I’m glad I did, as we ultimately received a good grade for our work.</p>
            <br />
            <p className="text-textColorRose">We divided the workload into different tasks. First, we all collaborated to define the research questions we wanted to explore. Two members focused primarily on data retrieval, cleaning, and preparation for visualization. I was responsible for creating the visualizations, which I then shared with the group for feedback to ensure they were clear and effective. Toward the end of the project, another group member and I took charge of building the website to present our findings.</p>
          </div>

          <div className="mt-7 text-justify">
            <h2 className="text-white font-extrabold text-xl">Visualizations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <img src="assets/box_office_trend.png" alt="Box Office Trend" className="w-full h-[350px]" />
              <img src="assets/gen_dir.png" alt="Genre and Director" className="w-full h-[350px]" />
              <img src="assets/best_month.png" alt="Best Month" className="w-full h-[350px]" />
              <img src="assets/b_vs_b.png" alt="Budget vs Box Office" className="w-full h-[350px]" />
            </div>
          </div>

          <div className="mt-5 text-justify">
            <h2 className={`text-white font-extrabold text-xl`}>Conclusion from the visualizations</h2>
            <p className="text-textColorRose">Focus on movie releases during the summer months (May to July) and the holiday season (November and December) to take advantage of the higher movie attendance during school vacations and holidays.</p>
            <br />
            <p className="text-textColorRose">Prioritize producing movies in Adventure, Action, Animation, Comedy, and Drama genres, as these have consistently generated high box office returns. Collaborate with top-performing directors within these genres to leverage their successful track records.</p>
            <br />
            <p className="text-textColorRose">Investing heavily in a movie's budget can significantly boost its box office potential. However, historical data shows that higher budgets don't always guarantee success, as other factors like marketing and audience reception also play crucial roles</p>
          </div>

          

          <div className="mt-5">
            <h2 className={`text-white font-extrabold text-xl`}>Takeaway</h2>
            <p className="text-textColorRose">This project really helped me get better at researching a specific topic in depth. I also learned what it’s like to lead a group project and delegate tasks. It definitely wasn’t perfect, but I learned a lot from the experience. Next time I’m in charge of a group, I’ll know what to do better and feel more confident taking the lead.</p>
          </div>

          <div className="flex gap-8 mt-4 mb-8">
            <a href="https://github.com/SamHufkens/data_vis_project_website" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mt-4">
              <FaGithub className="" size={20} /> Github Repository
            </a>
            <a href="https://www.kaggle.com/datasets/alanvourch/tmdb-movies-daily-updates" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mt-4">
              <BsDatabase size={20} /> Dataset
            </a>  
          </div>
      </div>
    </div>
  )
}

export default DataVisProject;
