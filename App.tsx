import React from 'react';
import Hero from './components/Hero';
import ActionButtons from './components/ActionButtons';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex justify-center font-sans">
      <div className="w-full max-w-lg bg-white min-h-screen shadow-2xl relative flex flex-col">
        <Hero />
        
        <main className="flex-grow flex flex-col">
          <ActionButtons />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default App;