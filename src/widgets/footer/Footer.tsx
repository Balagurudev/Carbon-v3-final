"use client"

import React from "react"
import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Globe, Users, Smartphone, ArrowUpRight } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-48 pb-12 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] -mt-48" />

      <div className="container mx-auto px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-10 group cursor-pointer">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center transition-transform group-hover:rotate-12">
                <div className="w-5 h-5 bg-secondary rounded-sm rotate-45" />
              </div>
              <span className="text-3xl font-black text-white tracking-tighter uppercase">Swachh Saathi</span>
            </div>
            <p className="text-white/40 text-[11px] font-bold uppercase tracking-[0.2em] leading-loose max-w-xs mb-10">
              Transforming Gandhinagar into a model zero-waste city through community-led sustainability and technology.
            </p>
            <div className="flex items-center gap-4">
              {[Globe, Users, Smartphone].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary/40 transition-all group">
                  <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Simplified Navigation */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-12 lg:pl-20">
            {[
              {
                title: "Navigate",
                links: ["Our Approach", "Impact Reports", "Community Guidelines"]
              },
              {
                title: "Connect",
                links: ["hello@verden.gnr.in", "1800-CLEAN-CITY", "Privacy Policy"]
              }
            ].map((section, idx) => (
              <div key={idx}>
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-10">{section.title}</h4>
                <ul className="space-y-4">
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a href="#" className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors flex items-center gap-2 group">
                        {link}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 group-hover:translate-y-0" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Large Prominent Branding */}
        <div className="pt-32 border-t border-white/5">
           <div className="flex flex-col items-center mb-24">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 0.1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="text-[12vw] font-black tracking-tighter text-white leading-none text-center select-none"
              >
                 SWACHH SAATHI
              </motion.div>
           </div>
           
           {/* Legal Footer Section (Pill Aesthetic) */}
           <div className="flex flex-col md:flex-row justify-between items-center w-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full px-12 py-6 gap-6">
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30">
                © 2026 MUNICIPAL CORPORATION OF GANDHINAGAR
              </p>
              
              <div className="flex items-center gap-12">
                 <div className="flex gap-8 text-[9px] font-black uppercase tracking-[0.3em] text-white/30">
                    <span className="hover:text-primary cursor-pointer transition-colors">Design</span>
                    <span className="hover:text-primary cursor-pointer transition-colors">Build</span>
                 </div>
                 <div className="w-[1px] h-4 bg-white/10" />
                 <span className="text-[9px] font-black uppercase tracking-[0.3em] text-primary animate-pulse">Live Dashboard</span>
              </div>
           </div>
        </div>
      </div>
    </footer>
  )
}
