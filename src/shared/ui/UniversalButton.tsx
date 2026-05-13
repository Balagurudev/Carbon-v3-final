"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, LucideIcon } from "lucide-react"
import { cn } from "@/shared/lib/utils"
import { Button } from "./button"

interface UniversalButtonProps {
  text: string
  href?: string
  icon?: LucideIcon
  className?: string
  variant?: "primary" | "secondary" | "outline"
  size?: "md" | "lg"
}

export const UniversalButton = ({
  text,
  href,
  icon: Icon = ArrowRight,
  className,
  variant = "primary",
  size = "lg"
}: UniversalButtonProps) => {
  const content = (
    <Button 
      className={cn(
        "group relative flex items-stretch overflow-hidden rounded-full border border-white/10 p-0 transition-all duration-500 shadow-xl",
        size === "lg" ? "h-14 md:h-16" : "h-10 md:h-12",
        variant === "primary" ? "bg-primary text-secondary" : "bg-secondary text-white",
        className
      )}
    >
      <span className={cn(
        "flex-1 px-8 md:px-10 flex items-center justify-center h-full font-black uppercase tracking-[0.1em] transition-all duration-500 text-center leading-none",
        size === "lg" ? "text-[10px] md:text-[11px]" : "text-[9px]",
        variant === "primary" ? "group-hover:bg-white/10" : "group-hover:bg-primary/10"
      )}>
        {text}
      </span>
      <span className={cn(
        "flex items-center justify-center h-full transition-all duration-500 flex-shrink-0 aspect-square",
        variant === "primary" ? "bg-white text-black group-hover:bg-primary" : "bg-primary text-secondary group-hover:bg-white"
      )}>
        <Icon className={cn(
          "transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110",
          size === "lg" ? "w-4 h-4 md:w-5 md:h-5" : "w-3.5 h-3.5"
        )} />
      </span>
    </Button>
  )

  if (href) {
    return (
      <Link href={href} className="block w-full h-full">
        {content}
      </Link>
    )
  }

  return content
}
