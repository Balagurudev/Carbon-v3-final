"use client"

import React from "react"
import { motion } from "framer-motion"
import { Play, ArrowUpRight } from "lucide-react"
import { UniversalButton } from "@/shared/ui/UniversalButton"

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black font-sans">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/20 to-transparent z-20" />
      </div>



      <div className="container mx-auto px-10 md:px-24 relative z-30 pt-20 flex flex-col items-start">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex flex-col items-start"
        >
          <h1 className="text-5xl md:text-7xl lg:text-[96px] font-semibold text-white leading-[1.05] mb-8 tracking-tight text-left">
            Gandhinagar is <br />
            going Zero Waste.
          </h1>
          
          <div className="max-w-xl flex flex-col items-start">
            <p className="text-sm md:text-[16px] text-white/70 mb-10 leading-relaxed font-normal tracking-normal text-left">
              Join the Clean Circle and get free doorstep waste collection across your neighborhood. <br className="hidden md:block" />
              Building a sustainable city for future generations.
            </p>
  
            <div className="flex items-center gap-4">
               <UniversalButton 
                  text="Join the Movement" 
                  href="/join"
                  size="md"
               />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Right Cards (Replicating the screenshot's style) */}
      <div className="absolute bottom-12 right-10 md:right-24 z-30 hidden xl:flex items-stretch gap-5">
         {/* Project/Momentum Card */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.8, duration: 0.8 }}
           className="w-[380px] bg-white/5 backdrop-blur-3xl rounded-xl p-3 border border-white/10 flex items-center gap-5 group cursor-pointer hover:bg-white/10 transition-all shadow-2xl"
         >
            <div className="w-36 h-24 rounded-lg overflow-hidden shrink-0 relative">
               <img src="/momentum-img.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Recycling" />
               <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="flex flex-col justify-between py-1 h-full flex-grow">
               <div>
                  <p className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em] mb-1.5">Live Momentum</p>
                  <h4 className="text-white font-semibold text-lg leading-snug">Sector 7 <br />Collection Live</h4>
               </div>
               <div className="self-end">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover:rotate-45 transition-transform">
                     <ArrowUpRight className="w-4 h-4 text-black" />
                  </div>
               </div>
            </div>
         </motion.div>

         {/* Community/Stats Card */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 1, duration: 0.8 }}
           className="w-[300px] bg-white/5 backdrop-blur-3xl rounded-xl p-6 border border-white/10 flex flex-col justify-between shadow-2xl"
         >
            <div className="flex items-center gap-2 mb-4">
               <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white/10 overflow-hidden bg-slate-200 shadow-sm">
                       <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+20}`} alt="user" />
                    </div>
                  ))}
               </div>
            </div>
            <div>
               <h4 className="text-white font-semibold text-base mb-1.5 tracking-tight">Community Impact</h4>
               <p className="text-[11px] text-white/40 font-normal leading-relaxed">
                  12,482+ citizens participating across 24 neighborhoods.
               </p>
            </div>
         </motion.div>
      </div>

    </section>
  )
}
