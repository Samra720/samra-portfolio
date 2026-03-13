import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    link?: string;
  } | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ModalProps) {
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10">
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[rgba(0,0,0,0.7)] dark:bg-[rgba(0,0,0,0.85)] backdrop-blur-sm"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-regal text-main border border-muted/20 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl custom-scrollbar"
          >
            <button 
              onClick={onClose}
              className="absolute top-5 right-5 text-3xl hover:scale-110 transition-transform z-10 p-2"
            >
              <IoClose />
            </button>

            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-4 md:p-8 bg-muted/5">
                <div className="sticky top-0">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto rounded-2xl object-cover border border-muted/10" 
                  />
                </div>
              </div>

              <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-xs font-mono px-3 py-1 rounded-full border border-main/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {project.title}
                </h2>
                
                <p className="text-muted text-lg leading-relaxed mb-8 italic">
                  {project.description}
                </p>
                
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="px-8 py-4 rounded-full font-medium w-full md:w-fit text-center transition-all active:scale-95 shadow-lg"
                    style={{ 
                        backgroundColor: 'var(--btn-bg)', 
                        color: 'var(--btn-text)',
                        boxShadow: 'var(--btn-shadow)'
                    }}
                  >
                    Explore Project on GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
