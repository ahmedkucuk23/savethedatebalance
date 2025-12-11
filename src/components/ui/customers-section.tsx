import React from "react"
import { AnimatedGroup } from "@/components/ui/animated-group"

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
}

export interface CustomerLogo {
  src: string
  alt: string
  height: number
  invert?: boolean
  darken?: boolean
  maxWidth?: string
}

interface CustomersSectionProps {
  customers: CustomerLogo[]
  className?: string
}

export function CustomersSection({ customers = [], className }: CustomersSectionProps) {
  return (
    <section className={`bg-background pb-16 pt-16 md:pb-32 ${className ?? ""}`}>
      <div className="relative m-auto max-w-5xl px-6">
        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.75,
                },
              },
            },
            ...transitionVariants,
          }}
          className="mx-auto mt-4 grid max-w-2xl grid-cols-2 gap-x-12 gap-y-8 sm:grid-cols-3 sm:gap-x-16 sm:gap-y-14 justify-items-center"
        >
          {customers.map((logo, index) => (
            <div key={index} className="flex items-center justify-center h-20">
              <img
                className={`h-auto w-auto max-h-16 object-contain ${logo.invert ? 'invert' : ''}`}
                style={{
                  ...(logo.darken ? { filter: 'grayscale(100%) brightness(0)' } : {}),
                  ...(logo.maxWidth ? { maxWidth: logo.maxWidth } : {})
                }}
                src={logo.src}
                alt={logo.alt}
                width="auto"
              />
            </div>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  )
}