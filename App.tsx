
import React, { useState, useMemo } from 'react';
import Navigation from './components/Navigation';
import PhotoGrid from './components/PhotoGrid';
import Footer from './components/Footer';
import { Category } from './types';
import { PHOTOS } from './constants';

const App: React.FC = () => {
  const [currentCategory, setCategory] = useState<Category>(Category.HAYARKON);

  // Filter photos based on selected category
  const filteredPhotos = useMemo(() => {
    return PHOTOS.filter(photo => photo.category === currentCategory);
  }, [currentCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-pastel-bg selection:bg-pastel-darkBlue selection:text-white">
      <Navigation 
        currentCategory={currentCategory} 
        setCategory={setCategory} 
      />
      
      <main className="flex-grow animate-fade-in">
        <div className="mb-8 text-center space-y-2">
            <h2 className="text-4xl font-thin text-slate-600 tracking-tight lowercase first-letter:uppercase">
              {currentCategory}
            </h2>
            <div className="w-12 h-[1px] bg-pastel-darkBlue/50 mx-auto"></div>
        </div>
        
        <PhotoGrid photos={filteredPhotos} />
      </main>

      <Footer />
    </div>
  );
};

export default App;
