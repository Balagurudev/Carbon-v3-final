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

      {/* Stylized Background Arrow Shapes (Replicating the screenshot) */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
         <motion.div 
           initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
           animate={{ opacity: 0.15, rotate: -45, scale: 1 }}
           transition={{ duration: 2 }}
           className="absolute top-[10%] left-[20%] w-[500px] h-[500px] border-[40px] border-primary opacity-20 rounded-[100px] border-r-0 border-b-0"
         />
         <motion.div 
           initial={{ opacity: 0, rotate: 135, scale: 0.8 }}
           animate={{ opacity: 0.1, rotate: 135, scale: 1 }}
           transition={{ duration: 2.5, delay: 0.5 }}
           className="absolute bottom-[5%] right-[10%] w-[400px] h-[400px] border-[30px] border-primary opacity-20 rounded-[80px] border-r-0 border-b-0"
         />
      </div>

      <div className="container mx-auto px-10 md:px-20 relative z-30 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          <h1 className="text-6xl md:text-8xl lg:text-[110px] font-bold text-white leading-[1] mb-10 tracking-tight">
            Gandhinagar is <br />
            going Zero Waste.
          </h1>
          
          <div className="max-w-2xl">
            <p className="text-lg md:text-xl text-white/50 mb-12 leading-relaxed font-normal tracking-wide">
              Join the Clean Circle and get free doorstep waste collection across your neighborhood. <br className="hidden md:block" />
              Building a sustainable city for future generations.
            </p>
  
            <div className="flex items-center gap-4">
               <UniversalButton 
                  text="Join the Movement" 
                  href="/join"
                  size="lg"
                  showIcon={true}
               />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Right Cards (Replicating the screenshot's style) */}
      <div className="absolute bottom-16 right-10 md:right-20 z-30 hidden xl:flex items-stretch gap-6">
         {/* Project/Momentum Card */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.8, duration: 0.8 }}
           className="w-[440px] bg-white/5 backdrop-blur-3xl rounded-2xl p-4 border border-white/10 flex items-center gap-6 group cursor-pointer hover:bg-white/10 transition-all shadow-2xl"
         >
            <div className="w-44 h-28 rounded-xl overflow-hidden shrink-0 relative">
               <img src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Recycling" />
               <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="flex flex-col justify-between py-1 h-full flex-grow">
               <div>
                  <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-2">Live Momentum</p>
                  <h4 className="text-white font-bold text-xl leading-snug">Sector 7 <br />Collection Live</h4>
               </div>
               <div className="self-end">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover:rotate-45 transition-transform">
                     <ArrowUpRight className="w-5 h-5 text-black" />
                  </div>
               </div>
            </div>
         </motion.div>

         {/* Community/Stats Card */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 1, duration: 0.8 }}
           className="w-[340px] bg-white/5 backdrop-blur-3xl rounded-2xl p-8 border border-white/10 flex flex-col justify-between shadow-2xl"
         >
            <div className="flex items-center gap-2 mb-6">
               <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white/10 overflow-hidden bg-slate-200 shadow-sm">
                       <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+20}`} alt="user" />
                    </div>
                  ))}
               </div>
            </div>
            <div>
               <h4 className="text-white font-bold text-lg mb-2 tracking-tight">Community Impact</h4>
               <p className="text-[12px] text-white/40 font-normal leading-relaxed">
                  12,482+ citizens participating across 24 neighborhoods today. Structured deployment.
               </p>
            </div>
         </motion.div>
      </div>

      {/* Subtle Progress Indicator */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-white/5 overflow-hidden">
         <motion.div 
           initial={{ x: "-100%" }}
           animate={{ x: "0%" }}
           transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
           className="h-full bg-primary w-1/4 opacity-50" 
         />
      </div>
    </section>
  )
}
