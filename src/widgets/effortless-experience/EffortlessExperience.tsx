"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Plus, Minus, Zap, DoorOpen, Truck, Recycle } from "lucide-react"

export const EffortlessExperience = () => {
  const [activeIndex, setActiveIndex] = React.useState(0)

  const steps = [
    {
      title: "Keep waste outside",
      description: "No need to travel. Just place your segregated waste outside your door. Our team ensures daily pickups from every registered household in your neighborhood.",
      image: "/steps/step1.png"
    },
    {
      title: "Pickup team collects",
      description: "Our professional fleet visits your neighborhood with precision. Every collection is tracked via our citizen app for complete transparency and peace of mind.",
      image: "/steps/step2.png"
    },
    {
      title: "Recycled responsibly",
      description: "Everything we collect is processed in our state-of-the-art facility in Gandhinagar, transforming your household waste into rich compost and raw materials.",
      image: "/steps/step3.png"
    }
  ]

  return (
    <section id="how-it-works" className="py-48 bg-white">
      <div className="container mx-auto px-12">
        <div className="flex items-center gap-3 text-secondary font-bold text-[10px] uppercase tracking-[0.3em] mb-10">
          <Recycle className="w-4 h-4 text-primary" />
          Effortless Experience
        </div>
        <h2 className="text-6xl font-bold text-secondary mb-24 tracking-tighter">
          Recycling is now effortless.
        </h2>

        <div className="flex flex-col">
          {steps.map((step, i) => (
            <div 
              key={i}
              className={`relative overflow-hidden transition-all duration-700 border-b border-slate-100 ${activeIndex === i ? 'bg-primary border-transparent' : 'bg-transparent'}`}
              onMouseEnter={() => setActiveIndex(i)}
            >
              <div className="px-12 py-12 flex items-center gap-20 group cursor-pointer relative z-10">
                {/* Title Column */}
                <h3 className={`text-4xl font-black tracking-tighter w-1/4 transition-colors duration-500 uppercase ${activeIndex === i ? 'text-secondary' : 'text-secondary/20'}`}>
                  {step.title}
                </h3>
                
                {/* Content & Image Column */}
                <div className="flex-1 flex items-center justify-between gap-12">
                   <AnimatePresence mode="wait">
                      {activeIndex === i ? (
                        <motion.div 
                          key="active-content"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center gap-12 w-full"
                        >
                           <p className="text-sm font-bold text-secondary/80 leading-relaxed max-w-sm">
                              {step.description}
                           </p>
                           
                           <motion.div 
                             layoutId="step-image"
                             className="w-48 h-32 rounded-none overflow-hidden shadow-2xl border border-secondary/10"
                           >
                             <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                           </motion.div>
                        </motion.div>
                      ) : (
                        <div className="h-32" /> // Spacer to maintain height
                      )}
                   </AnimatePresence>
                </div>

                {/* Arrow Column */}
                <div className={`w-14 h-14 rounded-none flex items-center justify-center transition-all duration-500 ${activeIndex === i ? 'bg-secondary text-primary' : 'bg-slate-50 text-secondary/20'}`}>
                   <ArrowUpRight className={`w-6 h-6 transition-transform duration-500 ${activeIndex === i ? 'rotate-0' : '-rotate-45'}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
