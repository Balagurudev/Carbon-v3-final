"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { ArrowUpRight, Zap, Leaf } from "lucide-react"

interface ProjectData {
  title: string;
  image: string;
  category: string;
  year: string;
  description: string;
  details: { label: string; value: string }[];
}

const PROJECT_DATA: ProjectData[] = [
  {
    title: "Sector 7 Bio-Compost Facility",
    image: "/impact/compost.png",
    category: "Organic Waste",
    year: "Active",
    description: "Turning household waste into wealth.",
    details: [
      { label: "Capacity", value: "120 Tons / Month" },
      { label: "Output", value: "Organic Compost" }
    ]
  },
  {
    title: "Kudasan Plastic Recovery",
    image: "/impact/plastic.png",
    category: "Polymer Recycling",
    year: "Active",
    description: "Closing the loop on plastic usage.",
    details: [
      { label: "Capacity", value: "85 Tons / Month" },
      { label: "Output", value: "Recycled Granules" }
    ]
  },
  {
    title: "Infocity E-Waste Center",
    image: "/impact/ewaste.png",
    category: "Electronic Waste",
    year: "Deploying",
    description: "Safe extraction of rare earth minerals.",
    details: [
      { label: "Status", value: "Pilot Phase" },
      { label: "Goal", value: "Zero Landfill E-Waste" }
    ]
  },
  {
    title: "GIFT City Water Reclamation",
    image: "/impact/water.png",
    category: "Water Systems",
    year: "Active",
    description: "Smart water recycling for a smart city.",
    details: [
      { label: "Volume", value: "2M Liters / Day" },
      { label: "Efficiency", value: "98% Recovery" }
    ]
  }
];

export const ImpactVisualization = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Calculate the current project index (0 to 3) based on scroll progress
  const projectIndex = useTransform(smoothProgress, [0, 1], [0, PROJECT_DATA.length - 1]);
  
  // Create unique transforms for each project to achieve the parallax stack effect
  const projectPositions = PROJECT_DATA.map((_, i) => {
    return useTransform(smoothProgress, [0, 1], [
       (i * 100), // Start position (percentage of viewport)
       (i * 100) - ((PROJECT_DATA.length - 1) * 100) // End position
    ]);
  });

  // Minimap Y transform
  const minimapY = useTransform(smoothProgress, [0, 1], [0, -750]); // 250px per item (approx)

  return (
    <div id="impact" ref={containerRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background Projects List */}
        <div className="parallax-container h-full w-full">
          {PROJECT_DATA.map((project, i) => (
            <motion.div
              key={i}
              className="project absolute inset-0"
              style={{
                y: useTransform(smoothProgress, [0, 1], [
                   (i * 100) + "%", 
                   ((i - (PROJECT_DATA.length - 1)) * 100) + "%"
                ])
              }}
            >
              <motion.img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
                style={{
                  y: useTransform(smoothProgress, [0, 1], [
                     (i * 20) + "%", 
                     ((i - (PROJECT_DATA.length - 1)) * 20) + "%"
                  ])
                }}
              />
              <div className="absolute inset-0 bg-black/30" />
            </motion.div>
          ))}
        </div>

        {/* Static Header Overlay */}
        <div className="absolute top-24 left-12 z-50 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 text-primary font-bold text-[10px] uppercase tracking-[0.3em] mb-10"
          >
            <Leaf className="w-4 h-4 text-primary" />
            City Progress
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold text-white tracking-tighter"
          >
            Local Impact Projects
          </motion.h2>
        </div>

        {/* Minimap UI Overlay */}
        <div className="minimap pointer-events-auto bottom-12 right-12">
          <div className="minimap-wrapper bg-black/60 backdrop-blur-2xl p-8 rounded-2xl border border-white/10 shadow-2xl flex items-center gap-8">
            <div className="minimap-img-preview rounded-lg overflow-hidden border border-white/20 w-[160px] h-[200px] relative">
              <motion.div 
                className="flex flex-col h-full"
                style={{
                  y: useTransform(smoothProgress, [0, 1], [
                    "0%", 
                    `-${(PROJECT_DATA.length - 1) * 100}%`
                  ])
                }}
              >
                {PROJECT_DATA.map((project, i) => (
                  <div key={i} className="h-[200px] w-full flex-shrink-0">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  </div>
                ))}
              </motion.div>
            </div>
            
            <div className="minimap-info-list w-[300px] h-[200px] overflow-hidden relative">
              <motion.div 
                className="flex flex-col h-full"
                style={{
                  y: useTransform(smoothProgress, [0, 1], [
                    "0%", 
                    `-${(PROJECT_DATA.length - 1) * 100}%`
                  ])
                }}
              >
                {PROJECT_DATA.map((project, i) => (
                  <div key={i} className="h-[200px] flex flex-col justify-between py-2">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-bold text-white/40">{(i + 1).toString().padStart(2, "0")}</span>
                      <h4 className="text-primary font-bold text-lg leading-tight text-right uppercase tracking-tighter w-2/3">{project.title}</h4>
                    </div>
                    
                    <div className="space-y-4">
                       <div className="flex justify-between items-center border-t border-white/10 pt-4">
                          <span className="text-[9px] font-bold text-white/50 uppercase tracking-widest">Category</span>
                          <span className="text-[10px] font-bold text-white uppercase tracking-widest">{project.category}</span>
                       </div>
                       <div className="flex justify-between items-center border-t border-white/10 pt-4">
                          <span className="text-[9px] font-bold text-white/50 uppercase tracking-widest">Status</span>
                          <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{project.year}</span>
                       </div>
                    </div>

                    <p className="text-white/60 text-[10px] italic leading-relaxed mt-4 border-t border-white/10 pt-4">
                       {project.description}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Progress Indicator */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
           {PROJECT_DATA.map((_, i) => (
             <div 
               key={i} 
               className="w-1 h-8 bg-white/10 relative overflow-hidden"
             >
                <motion.div 
                  className="absolute inset-0 bg-primary origin-top"
                  style={{ 
                    scaleY: useTransform(smoothProgress, 
                      [i / PROJECT_DATA.length, (i + 1) / PROJECT_DATA.length], 
                      [0, 1]
                    ) 
                  }}
                />
             </div>
           ))}
        </div>
      </div>
    </div>
  )
}
