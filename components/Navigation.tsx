
import React from 'react';
import { Category } from '../types';
import { Instagram } from 'lucide-react';

interface NavigationProps {
  currentCategory: Category;
  setCategory: (category: Category) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentCategory, setCategory }) => {
  const categories = Object.values(Category);

  return (
    <nav className="sticky top-0 z-50 bg-pastel-bg/90 backdrop-blur-md border-b border-white/40 py-6 mb-8 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        
        {/* Brand */}
        <div 
          className="flex flex-col items-center md:items-start cursor-pointer group" 
          onClick={() => setCategory(Category.HAYARKON)}
        >
            <h1 className="text-3xl font-extralight tracking-[0.1em] text-slate-700 group-hover:text-pastel-accent transition-colors duration-300">
              HEELA GOREN
            </h1>
            <div className="flex items-center gap-2 text-pastel-text/70 mt-1">
              <span className="text-[10px] font-medium tracking-[0.3em] uppercase">Photography</span>
              <span className="w-1 h-1 rounded-full bg-pastel-accent"></span>
              <a 
                href="https://instagram.com/heelago" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[10px] font-medium tracking-wider hover:text-pastel-accent flex items-center gap-1"
              >
                <Instagram size={10} />
                @heelago
              </a>
            </div>
        </div>

        {/* Categories */}
        <div className="flex gap-1 sm:gap-2 overflow-x-auto w-full md:w-auto justify-center pb-2 md:pb-0 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`
                px-5 py-2 rounded-full text-xs font-medium tracking-widest uppercase transition-all duration-500 ease-out
                ${currentCategory === cat 
                  ? 'bg-white text-pastel-text shadow-sm ring-1 ring-pastel-blue' 
                  : 'text-pastel-text/60 hover:text-pastel-text hover:bg-white/50'
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
