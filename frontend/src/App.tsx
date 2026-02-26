import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ExperienceSection from './components/ExperienceSection';
import CaseStudySection from './components/CaseStudySection';
import ClientFeedbackSection from './components/ClientFeedbackSection';
import StatsSection from './components/StatsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { Toaster } from "react-hot-toast";


import './App.css'

function App() {

  return (
    <>
      <Toaster position="top-right" />
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

export default App

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
