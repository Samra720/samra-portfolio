import { useState } from 'react';
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

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <>
      <Toaster position="top-right" />
      
      <button 
        onClick={toggleTheme}
        className="fixed bottom-5 right-5 z-50 p-3 rounded-full bg-main text-regal shadow-lg cursor-pointer font-bold"
      >
        {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
      </button>

      <HeroSection />
      <ServicesSection />
      <ExperienceSection />
      <CaseStudySection />
      <ClientFeedbackSection />
      <StatsSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App;









// import HeroSection from './components/HeroSection';
// import ServicesSection from './components/ServicesSection';
// import ExperienceSection from './components/ExperienceSection';
// import CaseStudySection from './components/CaseStudySection';
// import ClientFeedbackSection from './components/ClientFeedbackSection';
// import StatsSection from './components/StatsSection';
// import ContactSection from './components/ContactSection';
// import Footer from './components/Footer';
// import { Toaster } from "react-hot-toast";


// import './App.css'

// function App() {

//   return (
//     <>
//       <Toaster position="top-right" />
//       <HeroSection />
//       <ServicesSection />
//       <ExperienceSection />
//       <CaseStudySection />
//       <ClientFeedbackSection />
//       <StatsSection />
//       <ContactSection />
//       <Footer />
//     </>
//   )
// }

// export default App








// TO SHOW MY FORMER SUPERVISOR HOW THE CODE LOOKS THE WAY HE THOUGHT I WROTE IT, I HAVE COMMENTED OUT THE CODE ABOVE AND UNCOMMENTED THE CODE BELOW. THE CODE BELOW IS THE WAY HE THOUGHT I WROTE IT, BUT IN REALITY, I WROTE THE CODE ABOVE.
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
