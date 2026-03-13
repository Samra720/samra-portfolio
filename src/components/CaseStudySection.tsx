import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Particles from "./Particles";
import ProjectModal from "./ProjectModal";

function CaseStudySection() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
  {
    id: 1,
    title: "HTML, CSS & JS E-commerce Web Page",
    type: "WEB APP",
    description: "A detailed dive into a jewellery e-commerce interface. Focused on high-end aesthetics, smooth transitions, and a mobile-first user experience using vanilla web technologies.",
    image: "/images/ecommerce_jewellery_page.png",
    tags: ["HTML5", "CSS3", "JavaScript"],
    link: "https://github.com/Samra720/portfolio1.git"
  },
  {
    id: 2,
    title: "MERN Stack Task Manager",
    type: "FULL STACK",
    description: "A robust Todo application featuring full CRUD functionality. Designed with a sleek Tailwind CSS interface, it handles persistent data storage with MongoDB and provides a seamless user experience.",
    image: "/images/todo_mern_app.png",
    tags: ["MongoDB", "Express", "React", "Node", "Tailwind"],
    link: "https://github.com/Samra720/mern_task_manager.git"
  },
  {
    id: 3,
    title: "Interactive JavaScript Quiz",
    type: "WEB APP",
    description: "A dynamic quiz application featuring real-time feedback. Implements logic to instantly validate answers with red/green indicators and calculates a final score summary upon completion.",
    image: "/images/js_quiz_app.png",
    tags: ["HTML5", "CSS3", "JavaScript"],
    link: "https://github.com/Samra720/js-quiz.git"
  },
];

  return (
    <div id="my-projects" className="px-6 md:px-12 xl:px-25 pt-10 relative overflow-hidden">
      <div className="inset-0 -z-10 pointer-events-none">
        <div style={{ width: '100%', height: '1400px', position: 'absolute', top: '0', right: '0' }}>
          <Particles
            particleColors={["#ffffff"]}
            particleCount={100}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={1}
          />
        </div>
      </div>

      <div className="h-auto md:h-40 flex flex-col justify-between items-center text-center mb-10">
        <div className="h-3 w-3 border rounded-full shadow-glow"></div>
        <h2 className="text-3xl md:text-5xl font-bold mt-6">CASE STUDY</h2>
        <p className="max-w-xl mt-4 opacity-80">
          A selection of projects where I've applied the MERN stack to solve real-world e-commerce and UI challenges.
        </p>
      </div>

      <div className="mt-10 md:mt-15 space-y-16 md:space-y-24">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <div 
              key={project.id} 
              className="flex flex-col xl:flex-row justify-between items-center gap-8 xl:gap-10"
            >
              <img
                src={project.image}
                alt={project.title}
                className={`w-full xl:w-160 h-auto lg:h-90 object-contain rounded-lg ${!isEven ? 'xl:order-2' : ''}`}
              />

              <div className={`px-2 xl:px-15 py-6 xl:py-8 w-full xl:w-160 flex flex-col items-center xl:items-start text-center xl:text-left ${!isEven ? 'xl:order-1' : ''}`}>
                <p 
                  className="font-semibold text-base md:text-xl bg-main px-6 md:px-9 py-2 rounded-full" 
                  style={{ color: 'var(--btn-text)' }}
                >
                  {project.type}
                </p>
                <h3 className="text-2xl md:text-4xl font-bold mt-4 md:mt-6">
                  {project.title}
                </h3>
                
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="mt-6 text-lg md:text-xl border-b-2 pb-2 hover:pb-1 transition-all flex items-center gap-2"
                >
                  See Details <FiArrowUpRight className="text-2xl" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <ProjectModal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        project={selectedProject} 
      />
    </div>
  );
}

export default CaseStudySection;
