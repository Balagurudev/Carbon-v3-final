"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/shared/ui/button"
import { ArrowUpRight, Play, ArrowRight } from "lucide-react"
import Link from "next/link"
import { UniversalButton } from "@/shared/ui/UniversalButton"

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/20 to-transparent z-20" />
      </div>


      <div className="container mx-auto px-6 md:px-12 relative z-30">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-[120px] font-bold text-white leading-[0.9] mb-8 tracking-tighter">
            Gandhinagar is <br />
            going Zero Waste. <br />
            <span className="text-primary italic">Are you in?</span>
          </h1>
          
          <div className="max-w-2xl">
            <p className="text-lg md:text-xl text-white/60 mb-10 leading-relaxed font-medium">
              Join the Clean Circle and get free doorstep waste collection across your neighborhood. Building a sustainable city for future generations.
            </p>
  
            <div className="flex items-center gap-4">
               <UniversalButton 
                  text="Join the Movement" 
                  href="/join"
                  size="lg"
               />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Overlapping Cards at Bottom Right */}
      <div className="absolute bottom-12 right-12 z-30 hidden xl:flex items-end gap-6">
         {/* Video Card */}
         <motion.div
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.5 }}
           className="w-80 bg-white/10 backdrop-blur-2xl rounded-lg p-2 border border-white/10 group cursor-pointer"
         >
            <div className="relative aspect-video rounded-md overflow-hidden mb-4">
               <img src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Recycling" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                     <Play className="w-4 h-4 fill-secondary text-secondary ml-1" />
                  </div>
               </div>
               <div className="absolute bottom-2 right-2 w-8 h-8 bg-white rounded-md flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-secondary" />
               </div>
            </div>
            <div className="px-4 pb-4">
               <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest mb-1">Live Momentum</p>
               <h4 className="text-white font-bold text-lg leading-tight">Sector 7 Collection Live</h4>
            </div>
         </motion.div>

         {/* Stats Card */}
         <motion.div
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.7 }}
           className="w-72 bg-white/10 backdrop-blur-2xl rounded-lg p-8 border border-white/10"
         >
            <div className="flex items-center gap-2 mb-6">
               <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-4 border-[#1a1a1a] overflow-hidden bg-slate-200">
                       <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+20}`} alt="user" />
                    </div>
                  ))}
               </div>
            </div>
            <h4 className="text-white font-bold text-2xl mb-1 tracking-tight">12,482+ Joined</h4>
            <p className="text-[10px] text-white/40 font-medium leading-relaxed uppercase tracking-widest">
               Citizens participating across 24 neighborhoods today.
            </p>
         </motion.div>
      </div>

      {/* Progress Line */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-white/10 w-full overflow-hidden">
         <motion.div 
           initial={{ x: "-100%" }}
           animate={{ x: "0%" }}
           transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
           className="h-full bg-primary w-1/3" 
         />
      </div>
    </section>
  )
}
