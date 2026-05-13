"use client"

import React from "react"
import { motion } from "framer-motion"
import { Users, Building2, Activity, ShieldCheck, TrendingUp } from "lucide-react"
import { cn } from "@/shared/lib/utils"

export const LiveMomentum = () => {
  return (
    <section id="momentum" className="py-48 bg-white overflow-hidden">
      <div className="container mx-auto px-12">
        {/* Centered Header */}
        <div className="text-center max-w-5xl mx-auto mb-32">
           <h2 className="text-6xl md:text-8xl font-bold text-secondary mb-12 leading-[0.95] tracking-tighter">
              Making Gandhinagar <br className="hidden md:block" />
              a Zero-Waste City.
           </h2>
           <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Join thousands of citizens already participating in the movement. We are building a city where every piece of waste is a resource.
           </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {/* Card 1: Citizen Momentum */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="bg-white border border-slate-100 rounded-xl p-10 flex flex-col h-[450px] hover:shadow-xl hover:shadow-slate-100/50 transition-all duration-500"
           >
              <div className="flex items-center gap-3 text-secondary mb-12">
                 <Users className="w-5 h-5 text-primary" />
                 <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Citizen Momentum</span>
              </div>
              <div className="flex-grow flex flex-col justify-center">
                 <h3 className="text-5xl font-bold text-secondary mb-4 tracking-tighter">14,204+</h3>
                 <p className="text-muted-foreground font-medium leading-relaxed max-w-[200px]">
                    Citizens registered and active across the city today.
                 </p>
              </div>
              <div className="flex items-center gap-2 mt-auto">
                 <span className="bg-secondary text-white text-[8px] font-bold px-3 py-1 uppercase tracking-widest">Metric</span>
                 <span className="bg-slate-50 border border-slate-100 text-muted-foreground text-[8px] font-bold px-3 py-1 uppercase tracking-widest">Verified</span>
              </div>
           </motion.div>

           {/* Card 2: Apartment Engagement */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="bg-white border border-slate-100 rounded-xl p-10 flex flex-col h-[450px] hover:shadow-xl hover:shadow-slate-100/50 transition-all duration-500"
           >
              <div className="flex items-center gap-3 text-secondary mb-12">
                 <Building2 className="w-5 h-5 text-primary" />
                 <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Apartment Engagement</span>
              </div>
              <div className="flex-grow flex flex-col justify-center">
                 <h3 className="text-5xl font-bold text-secondary mb-4 tracking-tighter">182+</h3>
                 <p className="text-muted-foreground font-medium leading-relaxed max-w-[200px]">
                    Apartment communities fully integrated into the circle.
                 </p>
              </div>
              <div className="flex items-center gap-2 mt-auto">
                 <span className="bg-secondary text-white text-[8px] font-bold px-3 py-1 uppercase tracking-widest">Benchmark</span>
                 <span className="bg-slate-50 border border-slate-100 text-muted-foreground text-[8px] font-bold px-3 py-1 uppercase tracking-widest">City-Wide</span>
              </div>
           </motion.div>

           {/* Card 3: City Impact (Gradient) */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="bg-gradient-to-br from-primary to-[#bef264]/40 border border-primary/20 rounded-xl flex flex-col h-[450px] overflow-hidden shadow-2xl shadow-primary/20"
           >
              <div className="p-10 flex flex-col h-full">
                 <div className="flex items-center gap-3 text-secondary mb-12">
                    <Activity className="w-5 h-5" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">City Impact</span>
                 </div>
                 
                 <div className="flex-grow flex flex-col justify-center">
                    <h3 className="text-7xl font-bold text-secondary mb-4 tracking-tighter">92%</h3>
                    <p className="text-secondary/80 font-bold leading-tight max-w-[180px]">
                       Reduction in fixed landfill waste volume.
                    </p>
                 </div>

                 {/* Bottom Split Stats */}
                 <div className="mt-auto -mx-10 border-t border-secondary/10 flex h-24">
                    <div className="flex-1 border-r border-secondary/10 p-6 flex flex-col justify-center">
                       <span className="text-xl font-bold text-secondary">50%</span>
                       <span className="text-[8px] font-bold uppercase text-secondary/60 tracking-widest">Participation Rate</span>
                    </div>
                    <div className="flex-1 p-6 flex flex-col justify-center">
                       <span className="text-xl font-bold text-secondary">2.4k</span>
                       <span className="text-[8px] font-bold uppercase text-secondary/60 tracking-widest">Tons Saved Annually</span>
                    </div>
                 </div>
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  )
}
