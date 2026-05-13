"use client"

import React from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/widgets/navbar/Navbar"
import { Footer } from "@/widgets/footer/Footer"
import { Button } from "@/shared/ui/button"
import { UniversalButton } from "@/shared/ui/UniversalButton"
import { CheckCircle, ArrowRight, ShieldCheck, Globe, Zap, Users } from "lucide-react"
import Link from "next/link"

export default function JoinPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar theme="light" />
      
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-12">
          <div className="max-w-6xl mx-auto bg-white rounded-none shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[800px] border border-slate-100">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 p-12 lg:p-20 flex flex-col justify-center border-r border-slate-100">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-black text-secondary/70 uppercase tracking-[0.3em] mb-12 hover:text-primary transition-colors group">
                  <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                  Back to Overview
                </Link>

                <h1 className="text-6xl lg:text-8xl font-black text-secondary leading-[0.85] tracking-tighter mb-12">
                  Be part of the <br />
                  <span className="text-primary italic">Zero Waste</span> <br />
                  revolution.
                </h1>

                <p className="text-xl text-secondary/60 font-bold leading-relaxed mb-16 max-w-lg">
                  Join 12,000+ citizens in Gandhinagar who are transforming their neighborhood into a sustainable ecosystem.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {[
                    { icon: Globe, title: "Zero Landfill", desc: "100% of your waste is processed." },
                    { icon: Zap, title: "Daily Pickup", desc: "Consistent doorstep collection." },
                    { icon: Users, title: "Community", desc: "Connect with green neighbors." },
                    { icon: CheckCircle, title: "Certified", desc: "GMC Integrated & Verified." }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col gap-3">
                      <div className="w-10 h-10 bg-primary/10 flex items-center justify-center text-primary">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">{item.title}</h4>
                      <p className="text-[10px] font-bold text-secondary/70 uppercase tracking-[0.1em]">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-5 bg-secondary p-12 lg:p-20 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="mb-12">
                  <h2 className="text-3xl font-black text-white tracking-tighter mb-4 uppercase">Registration</h2>
                  <p className="text-[10px] font-bold text-white/70 uppercase tracking-[0.3em]">Fill in your details to start free pickup.</p>
                </div>

                <form className="space-y-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-white/70 uppercase tracking-[0.3em] px-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full h-18 bg-white/10 border border-white/20 rounded-none px-6 py-5 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all font-bold text-xl"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-white/70 uppercase tracking-[0.3em] px-1">Mobile Number</label>
                    <input 
                      type="tel" 
                      placeholder="+91 00000 00000"
                      className="w-full h-18 bg-white/10 border border-white/20 rounded-none px-6 py-5 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all font-bold text-xl"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-white/70 uppercase tracking-[0.3em] px-1">Pickup Address</label>
                    <textarea 
                      placeholder="Flat/House No, Building, Sector"
                      className="w-full h-32 bg-white/10 border border-white/20 rounded-none px-6 py-5 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all font-bold resize-none text-xl"
                    />
                  </div>

                  <UniversalButton 
                    text="Register" 
                    size="lg"
                    className="w-full"
                  />
                  
                  <div className="flex items-center gap-3 p-4 bg-white/10 border border-white/20 rounded-none">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    <p className="text-[9px] font-bold text-white/70 uppercase tracking-widest">
                      Your data is encrypted and secure.
                    </p>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
