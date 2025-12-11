"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useBannerVisibility } from "@/components/blocks/announcement-banner"

export interface TopNavigationProps {
  scrollThreshold?: number // Pixel value for when color should change. If undefined, uses 80% of viewport height
  hasBanner?: boolean // Whether the page has a banner above the navigation
}

export function TopNavigation({ scrollThreshold, hasBanner = false }: TopNavigationProps = {}) {
  const [scrolledPastHero, setScrolledPastHero] = React.useState(false)
  const { isBannerVisible } = useBannerVisibility()

  React.useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Use custom threshold if provided, otherwise default to 80% of viewport height
          const threshold = scrollThreshold ?? window.innerHeight * 0.8
          setScrolledPastHero(window.scrollY > threshold)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollThreshold])

  return (
    <>
      <header className={cn("fixed left-0 right-0 z-[10000] w-full", hasBanner && isBannerVisible && "top-[85px] md:top-[44px]")} style={{ position: 'fixed', top: (hasBanner && isBannerVisible) ? undefined : 0, left: 0, right: 0 }}>
        <nav
          className={cn(
            "w-full transition-all duration-300 relative",
            scrolledPastHero
              ? "backdrop-blur-lg bg-white/90"
              : "backdrop-blur-lg bg-balance-500/10"
          )}
          style={{ minHeight: '56px' }}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 flex items-center justify-between relative z-10 py-0.5">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-0 relative flex-shrink-0">
              <div className="relative h-20 sm:h-20 md:h-20 w-auto transition-all duration-300">
                <Image
                  src="/assets/img/logo-balance.png"
                  alt="Balance Conference 2026"
                  width={300}
                  height={96}
                  className={cn(
                    "h-full w-auto object-contain transition-all duration-300",
                    scrolledPastHero ? "brightness-0" : "brightness-100"
                  )}
                  priority
                />
              </div>
            </Link>

            {/* Kupi kartu Button */}
            <div className="flex items-center">
              <Button
                asChild
                className={cn(
                  "rounded-md px-6 py-2 transition-colors duration-300",
                  "bg-accent-gold hover:bg-accent-gold/90 text-black font-medium"
                )}
              >
                <Link href="/conferences">Kupi kartu</Link>
              </Button>
            </div>
          </div>
        </nav>
      </header>

    </>
  )
}
