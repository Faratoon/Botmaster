import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ParallaxSection } from './components/ParallaxSection';
import { Stats } from './components/Stats';

function App() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Features />
      <ParallaxSection />
      <Stats />
    </div>
  );
}

export default App;