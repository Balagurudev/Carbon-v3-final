"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/shared/ui/button"
import { UniversalButton } from "@/shared/ui/UniversalButton"
import { CheckCircle, ShieldCheck, ArrowRight } from "lucide-react"

export const FinalSignup = () => {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto bg-white rounded-none shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
          
          {/* Left Side: Information */}
          <div className="p-8 md:p-12 lg:p-20 flex flex-col justify-center bg-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-none border border-primary/20 mb-6">
                <span className="text-[9px] font-bold text-primary uppercase tracking-[0.2em]">Join the Movement</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-secondary mb-8 leading-[0.95] tracking-tighter">
                Start recycling in <br />
                <span className="text-primary italic text-5xl md:text-6xl lg:text-8xl">under 30s.</span>
              </h2>
              
              <div className="space-y-4 mb-10">
                {[
                  "Free doorstep waste collection",
                  "Real-time tracking of your impact",
                  "GMC Integrated & Certified"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4 text-secondary/60 font-bold text-sm">
                    <div className="w-5 h-5 rounded-none bg-primary/20 flex items-center justify-center">
                       <CheckCircle className="w-3 h-3 text-primary" />
                    </div>
                    {text}
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 text-[10px] text-secondary/40 font-bold bg-slate-50 p-4 rounded-none border border-slate-100">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Secure data handled by Municipal Corporation.
              </div>
            </motion.div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-secondary p-8 md:p-12 lg:p-20 flex flex-col justify-center relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-none blur-3xl -mr-32 -mt-32" />
            
            <form className="relative z-10 space-y-8">
              <div className="space-y-2">
                <label className="text-[9px] font-bold text-white/40 uppercase tracking-[0.3em] px-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full h-14 bg-white/5 border border-white/10 rounded-none px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all font-bold text-lg"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[9px] font-bold text-white/40 uppercase tracking-[0.3em] px-1">Mobile Number</label>
                <input 
                  type="tel" 
                  placeholder="+91 00000 00000"
                  className="w-full h-14 bg-white/5 border border-white/10 rounded-none px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all font-bold text-lg"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-[9px] font-bold text-white/40 uppercase tracking-[0.3em] px-1">Pickup Address</label>
                <textarea 
                  placeholder="Enter your society or neighborhood"
                  className="w-full h-28 bg-white/5 border border-white/10 rounded-none px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all font-bold resize-none text-lg"
                />
              </div>

              <UniversalButton 
                text="Join the Movement" 
                size="lg"
                className="w-full"
                href="/join"
              />
              
              <p className="text-center text-[9px] text-white/20 font-bold uppercase tracking-widest">
                Zero fees. 100% Impact.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
