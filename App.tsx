
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Security from './components/Security';
import Support from './components/Support';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <Features />
        <Security />
        <Support />
      </main>
      <Footer />
    </div>
  );
};

export default App;
