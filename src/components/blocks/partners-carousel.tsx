"use client"

import { LogoCarousel } from "@/components/ui/logo-carousel"
import { GradientHeading } from "@/components/ui/gradient-heading"
import Aurora from "@/components/Aurora"

// Example SVG logos - these can be replaced with actual partner/sponsor logos
function AppleLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 512 512" fill="currentColor" {...props}>
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  )
}

function BMWLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 512 512" fill="currentColor" {...props}>
      <circle cx="256" cy="256" r="256" fill="currentColor" />
      <path
        d="M256 70v186h186c0-102.8-83.2-186-186-186zm0 372c102.8 0 186-83.2 186-186H256v186z"
        fill="#fff"
      />
    </svg>
  )
}

function VercelLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 512 512" fill="currentColor" {...props}>
      <path d="M256 48L496 464H16L256 48z" />
    </svg>
  )
}

function StripeLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 512 512" fill="currentColor" {...props}>
      <path d="M414 113.4c0-25.6-12.4-45.8-36.1-45.8-23.6 0-38.2 20.2-38.2 45.6 0 30.1 17 45.3 41.4 45.3 11.9 0 20.9-2.7 27.7-6.5v-20c-6.8 3.4-14.6 5.5-24.5 5.5-9.7 0-18.3-3.4-19.4-15.2h48.9c0-1.3.2-6.5.2-8.9zm-49.4-9.5c0-11.3 6.9-16 13.2-16 6.1 0 12.6 4.7 12.6 16h-25.8zm-63.9-45.7c-9.4 0-15.6 4.5-19.1 7.6l-1.3-6h-22v116.6l25-5.3.1-28.3c3.6 2.6 8.8 6.3 17.4 6.3 17.7 0 33.7-14.3 33.7-46.2-.1-29.2-16.2-44.7-33.8-44.7zm-6 68.9c-5.9 0-9.4-2.1-11.8-4.7l-.1-37.1c2.6-2.9 6.2-4.9 11.9-4.9 9.1 0 15.4 10.2 15.4 23.3 0 13.4-6.2 23.4-15.4 23.4zm-71.3-51.2c0-9.8 7.5-14.2 15.8-14.2 11.8 0 21.2 4.5 27.7 10.6l14.7-18.6c-9.5-8.6-22.6-13.7-42.4-13.7-24.4 0-41 14.2-41 35.8 0 35.2 48.4 29.6 48.4 44.8 0 5.8-5.1 11.7-17.9 11.7-10.8 0-22.6-4.5-31.7-11.3L114 159c11.5 9.8 27.9 15.1 45.3 15.1 25.9 0 42.8-13.2 42.8-36.1 0-37.4-48.4-31.5-48.4-46z" />
    </svg>
  )
}

function NetflixLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 512 512" fill="currentColor" {...props}>
      <path d="M340.7 32H171.3L32 464h109.3l29.9-96.1 30.1 96.1h109.3L340.7 32zM171.3 80h109.3v336l-54.6-175.3L171.3 416V80z" />
    </svg>
  )
}

function SpotifyLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 512 512" fill="currentColor" {...props}>
      <circle cx="256" cy="256" r="256" />
      <path
        d="M200.1 287c42.9-25.8 113.4-28.2 154.3-15.6 6.5 2 13.4-1.7 15.4-8.2s-1.7-13.4-8.2-15.4c-46.1-14.2-123.8-11.5-172.6 17.9-5.9 3.6-7.8 11.3-4.2 17.2 3.5 5.9 11.2 7.8 17.2 4.2zm-12.7 50.5c3 4.9 9.4 6.5 14.3 3.5 37.6-22.7 94.3-29.3 138.5-16 5.4 1.6 11.1-1.4 12.7-6.8s-1.4-11.1-6.8-12.7c-50.1-15.1-112.4-7.8-155.7 18.4-4.9 2.9-6.5 9.3-3.5 14.3zm-14.1-52c-4.1 2.4-5.5 7.7-3.1 11.8 2.4 4.1 7.7 5.5 11.8 3.1 45-27.1 119.3-29.5 162.3-16.3 5.4 1.7 11.1-1.4 12.8-6.8 1.7-5.4-1.4-11.1-6.8-12.8-48.6-14.9-129.2-12.2-180 21z"
        fill="#fff"
      />
    </svg>
  )
}

function GoogleLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 512 512" fill="currentColor" {...props}>
      <path d="M473.16 221.48l-2.26-9.59H262.46v88.22H387c-12.93 61.4-72.93 93.72-121.94 93.72-35.66 0-73.25-15-98.13-39.11a140.08 140.08 0 01-41.8-98.88c0-37.16 16.7-74.33 41-98.78s61.5-38.13 97.49-38.13c41.79 0 71.74 22.19 82.94 32.31l62.69-62.36C390.86 72.72 340.34 32 261.6 32c-60.75 0-119 23.27-161.58 65.71C58 139.5 36.25 199.93 36.25 256s21.72 116.5 63.77 158.29c42.51 42.43 100.83 65.71 161.58 65.71 77.55 0 133.26-31.45 170.67-82.93 32.55-44.84 42.82-101.72 42.82-149.09 0-11.9-.81-23.1-2.25-33.5z" />
    </svg>
  )
}

function AmazonLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 512 512" fill="currentColor" {...props}>
      <path d="M340.2 366.7c-73.7 54.4-180.9 83.3-272.9 83.3-129.1 0-245.4-47.8-333.3-127.3-6.9-6.2-0.7-14.7 7.6-9.9 94.8 55.2 212 88.4 333.1 88.4 81.7 0 171.5-16.9 254.2-52 12.5-5.3 23 8.2 10.6 17.5zm28.8-32.8c-9.4-12.1-62.3-5.7-86.1-2.9-7.2 0.9-8.3-5.4-1.8-10 42.1-29.6 111.2-21.1 119.2-11.1 8 10.1-2.1 80.1-42.1 113.5-6.2 5.2-12.1 2.4-9.4-4.4 8.9-22.9 28.9-74.3 19.4-85.1z" />
    </svg>
  )
}

const logos = [
  { name: "Apple", id: 1, img: AppleLogo },
  { name: "BMW", id: 2, img: BMWLogo },
  { name: "Vercel", id: 3, img: VercelLogo },
  { name: "Stripe", id: 4, img: StripeLogo },
  { name: "Netflix", id: 5, img: NetflixLogo },
  { name: "Spotify", id: 6, img: SpotifyLogo },
  { name: "Google", id: 7, img: GoogleLogo },
  { name: "Amazon", id: 8, img: AmazonLogo },
]

export function PartnersCarousel() {
  return (
    <section className="bg-[#0A031B] py-20 overflow-hidden relative">
      {/* Aurora background */}
      <div className="absolute inset-0 z-[0] pointer-events-none">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-12">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <GradientHeading className="text-4xl md:text-5xl font-bold tracking-tight">
            Partneri
          </GradientHeading>
          <p className="text-lg md:text-xl text-balance-200 max-w-2xl">
            Ponosno podržani od strane vodećih brendova i organizacija
          </p>
        </div>

        <div className="flex justify-center">
          <LogoCarousel columnCount={4} logos={logos} />
        </div>
      </div>
    </section>
  )
}
