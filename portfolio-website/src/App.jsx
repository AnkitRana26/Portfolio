import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';

// Lazy load components for better performance
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const FeaturedWork = lazy(() => import('./components/FeaturedWork'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-950">
    <div className="w-16 h-16 border-4 border-accent-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white">
      <Preloader />
      <Navbar />
      
      <Suspense fallback={<LoadingFallback />}>
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <FeaturedWork />
          <Contact />
        </main>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
