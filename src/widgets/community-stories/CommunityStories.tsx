"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/shared/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "It's easier than I expected. I just leave my bin out on my way to class, and it's gone by the time I'm back. Simple.",
    by: "Priya Varma, Sector 7 Student",
    imgSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya"
  },
  {
    tempId: 1,
    testimonial: "Now our whole apartment participates. It has become a healthy competition to see which floor recycles more each week.",
    by: "Rahul Mehta, Kudasan Resident",
    imgSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul"
  },
  {
    tempId: 2,
    testimonial: "The pickup process takes seconds. I get a notification on my app when they are nearby, and another one once it's collected.",
    by: "Sanjay Shah, GIFT City Professional",
    imgSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sanjay"
  },
  {
    tempId: 3,
    testimonial: "I never knew waste management could be this tech-driven. The real-time tracking gives me so much peace of mind.",
    by: "Ananya Iyer, Infocity Resident",
    imgSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya"
  },
  {
    tempId: 4,
    testimonial: "Clean Circle has transformed our neighborhood's culture. We take pride in our zero-waste status now.",
    by: "Vikram Rathore, Sector 21 Elder",
    imgSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram"
  },
  {
    tempId: 5,
    testimonial: "The rewards system is a great touch. Earning city points while doing the right thing is very motivating.",
    by: "Meera Patel, Sector 12 Resident",
    imgSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera"
  },
  {
    tempId: 6,
    testimonial: "Professional, punctual, and transparent. Gandhinagar finally has the waste management it deserves.",
    by: "Rajesh Gupta, Business Owner",
    imgSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh"
  },
  {
    tempId: 7,
    testimonial: "I've seen the bio-compost facility in Sector 7. Knowing my waste actually becomes a resource is amazing.",
    by: "Kavita Sharma, Environmentalist",
    imgSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kavita"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border p-12 transition-all duration-700 ease-in-out shadow-lg",
        isCenter 
          ? "z-10 bg-[#111] text-white border-white/10 scale-100 shadow-2xl" 
          : "z-0 bg-white text-black border-slate-200 opacity-100 scale-[0.85]"
      )}
      style={{
        width: cardSize,
        height: cardSize + 50,
        clipPath: isCenter 
          ? `polygon(0% 0%, 85% 0%, 100% 15%, 100% 100%, 0% 100%)`
          : `none`,
        transform: `
          translate(-50%, -50%) 
          translateX(${cardSize * 0.85 * position}px)
          translateY(${isCenter ? -30 : Math.abs(position) * 20}px)
          rotate(${position * 6}deg)
        `,
      }}
    >
      <div className="flex flex-col h-full relative">
        <div className="mb-8 shrink-0">
           <img
             src={testimonial.imgSrc}
             alt={testimonial.by}
             className="h-14 w-14 rounded-none bg-slate-100 object-cover border border-white/10 grayscale contrast-125"
           />
        </div>
        
        <h3 className={cn(
          "text-xl sm:text-[22px] font-medium tracking-tight mb-12 leading-snug",
          isCenter ? "text-white" : "text-black"
        )}>
          "{testimonial.testimonial}"
        </h3>
        
        <div className="mt-auto">
           <p className={cn(
             "text-[12px] font-normal italic opacity-60",
             isCenter ? "text-white/80" : "text-black/60"
           )}>
             - {testimonial.by}
           </p>
        </div>
      </div>
    </div>
  );
};

export const CommunityStories: React.FC = () => {
  const [cardSize, setCardSize] = useState(400);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 400 : 320);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <section id="community" className="py-48 bg-slate-50 overflow-hidden relative">
      <div className="container mx-auto px-12 mb-20 text-center">
        <div className="flex items-center justify-center gap-3 text-secondary font-bold text-[10px] uppercase tracking-[0.3em] mb-10">
          <Quote className="w-4 h-4 text-primary" />
          Community Voices
        </div>
        <h2 className="text-6xl font-bold text-secondary mb-12 tracking-tighter">
          People like me.
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Behavioral adoption increases when you see how your neighbors are making a difference effortlessly.
        </p>
      </div>

      <div
        className="relative w-full"
        style={{ height: 600 }}
      >
        {testimonialsList.map((testimonial, index) => {
          const position = index - Math.floor(testimonialsList.length / 2);
          
          // Only render cards close to the center to avoid clutter
          if (Math.abs(position) > 2) return null;

          return (
            <TestimonialCard
              key={testimonial.tempId}
              testimonial={testimonial}
              handleMove={handleMove}
              position={position}
              cardSize={cardSize}
            />
          );
        })}
        
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-4 z-20">
          <button
            onClick={() => handleMove(-1)}
            className={cn(
              "flex h-16 w-16 items-center justify-center text-secondary transition-all",
              "bg-white border-2 border-slate-100 hover:bg-primary hover:border-primary shadow-sm",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            )}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => handleMove(1)}
            className={cn(
              "flex h-16 w-16 items-center justify-center text-secondary transition-all",
              "bg-white border-2 border-slate-100 hover:bg-primary hover:border-primary shadow-sm",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            )}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};
