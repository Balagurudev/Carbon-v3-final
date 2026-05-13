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
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-10 transition-all duration-500 ease-in-out rounded-lg",
        isCenter 
          ? "z-10 bg-primary text-secondary border-primary shadow-2xl" 
          : "z-0 bg-white text-secondary border-slate-100 hover:border-primary/50 opacity-40 scale-90"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(40px 0%, calc(100% - 40px) 0%, 100% 40px, 100% 100%, calc(100% - 40px) 100%, 40px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.4) * position}px)
          translateY(${isCenter ? -40 : position % 2 ? 10 : -10}px)
          rotate(${isCenter ? 0 : position % 2 ? 3 : -3}deg)
        `,
      }}
    >
      <div className={cn(
        "mb-8 w-10 h-10 flex items-center justify-center rounded-lg",
        isCenter ? "bg-secondary text-primary" : "bg-primary/20 text-primary"
      )}>
        <Quote className="w-5 h-5 fill-current" />
      </div>
      
      <h3 className={cn(
        "text-xl sm:text-2xl font-bold tracking-tight mb-6 leading-tight",
        isCenter ? "text-secondary" : "text-secondary"
      )}>
        "{testimonial.testimonial}"
      </h3>
      
      <div className="flex items-center gap-4 mt-auto absolute bottom-10 left-10">
        <img
          src={testimonial.imgSrc}
          alt={testimonial.by}
          className="h-12 w-12 rounded-full bg-muted object-cover border-2 border-white shadow-sm"
        />
        <div>
           <p className={cn(
             "font-bold text-sm",
             isCenter ? "text-secondary" : "text-secondary"
           )}>
             {testimonial.by.split(',')[0]}
           </p>
           <p className={cn(
             "text-[10px] uppercase tracking-widest font-bold opacity-60",
             isCenter ? "text-secondary" : "text-muted-foreground"
           )}>
             {testimonial.by.split(',')[1]}
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
          const position = testimonialsList.length % 2
            ? index - (testimonialsList.length + 1) / 2
            : index - testimonialsList.length / 2;
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
