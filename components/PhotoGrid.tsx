
import React, { useState } from 'react';
import { Photo } from '../types';

interface PhotoGridProps {
  photos: Photo[];
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ photos }) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => new Set(prev).add(id));
  };

  if (photos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-pastel-darkBlue">
        <p className="text-lg font-light tracking-wide">Collection coming soon.</p>
      </div>
    );
  }

  return (
    <div className="max-w-[1800px] mx-auto px-2 sm:px-4 pb-12">
      {/* 
        Masonry Layout (CSS Columns)
        - Automatically handles mixed aspect ratios (Portrait & Landscape)
        - 'break-inside-avoid' prevents images from being split across columns
      */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 space-y-3">
        {photos.map((photo) => (
          <div 
            key={photo.id} 
            className="break-inside-avoid relative group mb-3"
            onContextMenu={(e) => e.preventDefault()} // Disable right click
          >
            <div className="relative overflow-hidden bg-pastel-blue/10 rounded-sm">
              
              {/* Loading State - Simple blur/fade, no fixed height to allow portrait photos to expand */}
              <img
                src={photo.url}
                alt={photo.description || 'Heela Goren Photography'}
                className={`
                  w-full h-auto block
                  transition-all duration-700 ease-out
                  ${loadedImages.has(photo.id) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                  pointer-events-none select-none
                `}
                loading="lazy"
                onLoad={() => handleImageLoad(photo.id)}
                draggable="false"
              />
              
              {/* Transparent overlay to deter drag/save on mobile */}
              <div className="absolute inset-0 z-20 bg-transparent" />
              
              {/* Hover Effect */}
              <div className="absolute inset-0 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-slate-900/10" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGrid;
