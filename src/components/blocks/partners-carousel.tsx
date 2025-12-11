"use client"

import { LogoCarousel } from "@/components/ui/logo-carousel"
import Image from "next/image"
import BlurText from "@/components/ui/BlurText"

// Wrapper component to make Image work with the carousel
function ImageLogo({ src, alt }: { src: string; alt: string }) {
  return function LogoComponent(props: React.SVGProps<SVGSVGElement>) {
    return (
      <div className={props.className}>
        <Image
          src={src}
          alt={alt}
          width={200}
          height={100}
          className="object-contain w-full h-full"
        />
      </div>
    )
  }
}

// Replace these with your actual sponsor logos
// Place your logo files in /public/assets/sponsors/
const logos = [
  { name: "Sponsor 1", id: 1, img: ImageLogo({ src: "/assets/sponsors/logo1.png", alt: "Sponsor 1" }) },
  { name: "Sponsor 2", id: 2, img: ImageLogo({ src: "/assets/sponsors/logo2.png", alt: "Sponsor 2" }) },
]

export function PartnersCarousel() {
  return (
    <section className="bg-white py-20 overflow-hidden relative">
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-12">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <BlurText
            text="Zlatni Sponzori"
            className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 text-center"
            delay={50}
            animateBy="words"
          />
          <BlurText
            text="Ponosno podržani od strane vodećih brendova i organizacija"
            className="text-lg md:text-xl text-gray-600 max-w-2xl text-center"
            delay={30}
            animateBy="words"
          />
        </div>

        <div className="flex justify-center">
          <LogoCarousel columnCount={2} logos={logos} />
        </div>
      </div>
    </section>
  )
}
