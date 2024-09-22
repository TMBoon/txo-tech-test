'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageData {
  src: string;
  name: string;
  availability: string;
  location: string;
  size: string;
  description: string;
}

interface ImageCarouselProps {
  images?: ImageData[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullDetails, setShowFullDetails] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0});
  const imageRef = useRef<HTMLDivElement>(null);

  if (images.length === 0) {
    return <div className="text-center p-4">No images available</div>;
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setShowFullDetails(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setShowFullDetails(false);
  };

  const toggleDetails = () => {
    setShowFullDetails(!showFullDetails);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      setCursorPosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    }
  };

  const currentImage = images[currentIndex];

  return (
    <div className="max-w-full mx-auto relative p-8">
      <div className="relative" ref={imageRef} onMouseMove={handleMouseMove}>
        <img
          src={currentImage.src}
          alt={currentImage.name}
          className="w-full h-[600px] object-cover"
        />
        <div 
          className="absolute inset-0 flex"
          style={{ cursor: 'none' }}
        >
          <div
            className="w-1/2 h-full"
            onClick={prevSlide}
          />
          <div
            className="w-1/2 h-full"
            onClick={nextSlide}
          />
        </div>
        <div
          className='custom-cursor absolute pointer-events-none text-black text-opacity-80'
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
          }}
        >
          {cursorPosition.x < (imageRef.current?.clientWidth || 0) / 2 ? 'Previous' : 'Next'}
        </div>
      </div>
      <div className="bg-[#F9F5EF]">
        <div className='grid grid-cols-2 gap-4 text-[#736357]'>
          <div className='border-b border-[#736357] pt-4 pb-4'>
            <h2 className="text-[#736357] text-2xl font-medium">{currentImage.name}</h2>
          </div>
          <div className='border-b border-[#736357] pt-4 pb-4'>
            <p className="text-[#736357] text-2xl font-medium">Availability: {currentImage.availability}</p>
          </div>
        </div>
          <div className='grid grid-cols-2 gap-4 text-[#736357]'>
            <div className='border-b border-[#736357] pt-4 pb-4'>
              <p className='text-[#736357] text-2xl font-medium'>Location: {currentImage.location}</p>
            </div>
            <div className='border-b border-[#736357] pt-4 pb-4'>
              <p className='text-[#736357] text-2xl font-medium'>Size: {currentImage.size} sqft</p>
            </div>
          </div>
        </div>
        {showFullDetails && (
          <div className='grid grid-cols-2 gap-4 text-[#736357]'>
            <div className='border-b border-[#736357] pt-4 pb-4'>
              <p className="text-base"></p>
            </div>
            <div className='border-b border-[#736357] pt-6 pb-6'>
              <p className="text-[#736357] text-2xl font-medium">{currentImage.description}</p>
            </div>
          </div>
        )}
        <button
          onClick={toggleDetails}
          className="mt-2 text-[#736357] text-2xl opacity-30 hover:opacity-100 transition-opacity duration-300"
        >
          {showFullDetails ? 'Hide Text' : 'Read More'}
        </button>
      </div>

  );
};

export default ImageCarousel;