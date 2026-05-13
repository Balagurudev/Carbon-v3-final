"use client"

import React from "react"
import { motion } from "framer-motion"
import { Trophy, Star, Flame, Award, ChevronRight, Globe, Users } from "lucide-react"
import { UniversalButton } from "@/shared/ui/UniversalButton"

export const CleanCircleIdentity = () => {
  return (
    <section id="identity" className="py-24 bg-secondary text-white relative overflow-hidden">
      {/* Background Map Simulation (Line Art) - Removed */}

      <div className="container mx-auto px-12 relative z-10">
        <div className="max-w-6xl mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-[1.1] tracking-tight">
            Empowering citizens through smart, sustainable movement that drives urban growth and resilience.
          </h2>
          
          <UniversalButton 
            text="Join the Movement" 
            size="md"
            href="/join"
            className="w-fit"
          />
        </div>

        {/* Map Markers - Removed */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-20 pt-20 border-t border-white/10">
           <div>
              <p className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-6">Identity</p>
              <h4 className="text-2xl font-bold mb-4 tracking-tight">Bronze Recycler</h4>
              <p className="text-white/50 text-sm leading-relaxed">Every new citizen starts here, building their momentum toward a cleaner Gandhinagar and earning city rewards.</p>
           </div>
           <div>
              <p className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-6">Status</p>
              <h4 className="text-2xl font-bold mb-4 tracking-tight">Neighborhood Streaks</h4>
              <p className="text-white/50 text-sm leading-relaxed">Join your neighbors in maintaining participation streaks to unlock exclusive community infrastructure grants.</p>
           </div>
           <div>
              <p className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-6">Culture</p>
              <h4 className="text-2xl font-bold mb-4 tracking-tight">Modern City Movement</h4>
              <p className="text-white/50 text-sm leading-relaxed">Recycling is no longer just a responsibility. It's a statement of identity and pride in the capital city.</p>
           </div>
        </div>
      </div>
    </section>
  )
}
