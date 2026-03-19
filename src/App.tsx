import { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import ThemeButton from './components/ThemeButton'; 
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ExperienceSection from './components/ExperienceSection';
import CaseStudySection from './components/CaseStudySection';
import ClientFeedbackSection from './components/ClientFeedbackSection';
import StatsSection from './components/StatsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { Toaster } from "react-hot-toast";
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');
  const [showScroll, setShowScroll] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Toaster position="top-right" />
      
      <button 
        onClick={toggleTheme}
        className="fixed bottom-5 left-5 z-50 p-3 rounded-full bg-main text-regal shadow-lg cursor-pointer font-bold"
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>

      <AnimatePresence>
        {showScroll && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            className="fixed bottom-5 right-5 z-50"
          >
            <ThemeButton 
              onClick={scrollToTop} 
              className="p-4! rounded-full! aspect-square flex items-center justify-center shadow-glow"
            >
              <FaArrowUp className="text-xl" />
            </ThemeButton>
          </motion.div>
        )}
      </AnimatePresence>

      <HeroSection />
      <ServicesSection />
      <ExperienceSection />
      <CaseStudySection />
      <ClientFeedbackSection />
      <StatsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;



// adding a comment to check access control



// TO SHOW MY FORMER SUPERVISOR HOW THE CODE LOOKS THE WAY HE THOUGHT I WROTE IT, I HAVE COMMENTED OUT THE CODE BELOW AND UNCOMMENTED THE CODE ABOVE. THE CODE BELOW IS THE WAY HE THOUGHT I WROTE IT, BUT IN REALITY, I WROTE THE CODE ABOVE. hahaha I wrote it for you myself, not AI!!! tbh I only wrote till the first comma and got the rest auto suggested lol

// import {
//   HeroSection,
//   GradientCarouselBar,
//   ServicesSection,
//   ExperienceTimeline,
//   CaseStudiesGrid,
//   TestimonialSection,
//   StatsSection,
//   ContactSection,
// } from './components/Chatgpt';

// function App() {
//   return (
//     <>
//       <HeroSection />
//       <GradientCarouselBar />
//       <ServicesSection />
//       <ExperienceTimeline />
//       <CaseStudiesGrid />
//       <TestimonialSection />
//       <StatsSection />
//       <ContactSection />
//     </>
//   );
// }

// export default App;
