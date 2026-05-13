"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/shared/ui/button"
import { cn } from "@/shared/lib/utils"
import { ChevronDown, Menu } from "lucide-react"
import Link from "next/link"
import { UniversalButton } from "@/shared/ui/UniversalButton"

export const Navbar = ({ theme = 'dark' }: { theme?: 'dark' | 'light' }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isLight = theme === 'light' && !scrolled;

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 lg:px-12 py-6 transition-all duration-500",
      scrolled ? "bg-black/60 backdrop-blur-2xl py-4 border-b border-white/5" : "bg-transparent"
    )}>
      {/* Logo */}
      <div className="flex items-center gap-3 group cursor-pointer">
        <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center transition-transform group-hover:rotate-12">
           <div className="w-4 h-4 bg-secondary rounded-sm rotate-45" />
        </div>
        <span className={cn(
          "text-2xl font-black tracking-tighter uppercase transition-colors duration-500",
          isLight ? "text-secondary" : "text-white"
        )}>Swachh Saathi</span>
      </div>

      {/* Menu - Centered Pill */}
      <div className={cn(
        "hidden lg:flex items-center gap-1 backdrop-blur-xl rounded-full p-1.5 border transition-all duration-500 shadow-2xl",
        isLight ? "bg-secondary/5 border-secondary/10" : "bg-white/5 border-white/10"
      )}>
        {[
          { name: "How it Works", href: "/#how-it-works" },
          { name: "Impact", href: "/#impact" },
          { name: "Community", href: "/#community" }
        ].map((item) => (
          <Link key={item.name} href={item.href}>
            <button className={cn(
              "px-6 py-2.5 text-[10px] font-black flex items-center gap-2 rounded-full transition-all uppercase tracking-[0.2em]",
              isLight ? "text-secondary/70 hover:text-secondary hover:bg-secondary/10" : "text-white/70 hover:text-white hover:bg-white/10"
            )}>
              {item.name}
            </button>
          </Link>
        ))}
        <div className={cn("w-[1px] h-4 mx-2", isLight ? "bg-secondary/10" : "bg-white/10")} />
        <Link href="/join">
          <button className={cn(
            "px-6 py-2.5 text-[10px] font-black rounded-full transition-all uppercase tracking-[0.2em]",
            isLight ? "text-secondary/70 hover:text-secondary hover:bg-secondary/10" : "text-white/70 hover:text-white hover:bg-white/10"
          )}>
            Contact Us
          </button>
        </Link>
      </div>

      {/* Action & Mobile Menu Toggle */}
      <div className="flex items-center gap-4">
        <div className="hidden md:block">
          <UniversalButton 
            text="Join the Movement" 
            href="/join"
            size="md"
          />
        </div>
        <button className={cn(
          "lg:hidden w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-500",
          isLight ? "bg-secondary/5 border-secondary/10 text-secondary" : "bg-white/5 border-white/10 text-white"
        )}>
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  )
}
