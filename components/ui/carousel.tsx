"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselProps {
  children: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  className?: string;
  cardsToShow?: number;
}

export function Carousel({
  children,
  autoPlay = true,
  interval = 5000,
  showArrows = true,
  showDots = true,
  className,
  cardsToShow = 3,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCardCount, setVisibleCardCount] = useState(cardsToShow);

  // Update visible card count based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 640) {
          setVisibleCardCount(1);
        } else if (window.innerWidth < 768) {
          setVisibleCardCount(2);
        } else {
          setVisibleCardCount(cardsToShow);
        }
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, [cardsToShow]);

  // Calculate the total number of "pages" based on the number of cards to show
  const totalPages = Math.ceil(children.length / visibleCardCount);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + visibleCardCount;
      return nextIndex >= children.length ? 0 : nextIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - visibleCardCount;
      return nextIndex < 0 ? Math.max(0, children.length - visibleCardCount) : nextIndex;
    });
  };

  const handleDotClick = (pageIndex: number) => {
    setCurrentIndex(pageIndex * visibleCardCount);
  };

  useEffect(() => {
    if (autoPlay && !isPaused) {
      const timer = setTimeout(() => {
        handleNext();
      }, interval);
      
      return () => clearTimeout(timer);
    }
  }, [currentIndex, autoPlay, interval, isPaused]);

  // Get the current visible cards
  const visibleCards = () => {
    const cards = [];
    for (let i = 0; i < visibleCardCount; i++) {
      const index = currentIndex + i;
      if (index < children.length) {
        cards.push(children[index]);
      }
    }
    return cards;
  };

  return (
    <div 
      className={cn("relative w-full overflow-hidden", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative h-full w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="grid h-full w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8"
          >
            {visibleCards().map((card, index) => (
              <div key={index} className="h-full w-full">
                {card}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {showArrows && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/50"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/50"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      {showDots && totalPages > 1 && (
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => {
            const pageStartIndex = index * visibleCardCount;
            return (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  currentIndex >= pageStartIndex && currentIndex < pageStartIndex + visibleCardCount
                    ? "bg-white w-4" 
                    : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}