"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
        "absolute left-1/2 top-1/2 cursor-pointer border p-8 transition-all duration-700 ease-in-out",
        isCenter 
          ? "z-20 bg-[#111] text-white border-white/10" 
          : "z-0 bg-white text-black border-slate-200 hover:border-black/20"
      )}
      style={{
        width: cardSize,
        height: cardSize + 40,
        clipPath: `polygon(0% 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, 0% 100%)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.25) * position}px)
          translateY(${isCenter ? -65 : Math.abs(position) * 20}px)
          rotate(${position * 6}deg)
        `,
        boxShadow: isCenter ? "0px 8px 30px rgba(0,0,0,0.3)" : "0px 4px 10px rgba(0,0,0,0.05)"
      }}
    >
      <span
        className={cn(
            "absolute block origin-top-right rotate-45",
            isCenter ? "bg-white/20" : "bg-black/10"
        )}
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 1
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={testimonial.by}
        className={cn(
            "mb-6 h-14 w-12 object-cover object-top border",
            isCenter ? "border-white/20" : "border-black/10"
        )}
        style={{
          boxShadow: isCenter ? "3px 3px 0px rgba(255,255,255,0.1)" : "3px 3px 0px rgba(0,0,0,0.05)"
        }}
      />
      <h3 className={cn(
        "text-base sm:text-[19px] font-medium leading-snug tracking-tight",
        isCenter ? "text-white" : "text-black"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-[11px] italic font-normal",
        isCenter ? "text-white/60" : "text-black/40"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const CommunityStories: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
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
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <section id="community" className="py-48 bg-white overflow-hidden relative">
      <div className="container mx-auto px-12 mb-20 text-center">
        <h2 className="text-6xl font-bold text-secondary mb-6 tracking-tighter">
          People like me.
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Real stories from citizens who have embraced the zero-waste lifestyle in Gandhinagar.
        </p>
      </div>

      <div
        className="relative w-full"
        style={{ height: 600 }}
      >
        {testimonialsList.map((testimonial, index) => {
          const position = index - Math.floor(testimonialsList.length / 2);
          
          // Only render nearby cards for better performance and look
          if (Math.abs(position) > 3) return null;

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
        
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-3 z-30">
          <button
            onClick={() => handleMove(-1)}
            className={cn(
              "flex h-14 w-14 items-center justify-center text-secondary transition-all",
              "bg-white border border-slate-200 hover:bg-black hover:text-white shadow-sm"
            )}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleMove(1)}
            className={cn(
              "flex h-14 w-14 items-center justify-center text-secondary transition-all",
              "bg-white border border-slate-200 hover:bg-black hover:text-white shadow-sm"
            )}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

