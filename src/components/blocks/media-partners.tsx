"use client"

import { CustomersSection } from "@/components/ui/customers-section"
import type { CustomerLogo } from "@/components/ui/customers-section"

const mediaPartners: CustomerLogo[] = [
  {
    src: "/assets/media-partners/logo1.svg",
    alt: "Media Partner 1",
    height: 24,
  },
  {
    src: "/assets/media-partners/logo2.webp",
    alt: "Media Partner 2",
    height: 24,
    invert: true, // White logo, needs inversion
  },
  {
    src: "/assets/media-partners/logo3.png",
    alt: "Media Partner 3",
    height: 24,
  },
  {
    src: "/assets/media-partners/logo4.png",
    alt: "Media Partner 4",
    height: 24,
  },
  {
    src: "/assets/media-partners/logo5.png",
    alt: "Media Partner 5",
    height: 24,
  },
  {
    src: "/assets/media-partners/logo6.png",
    alt: "Media Partner 6",
    height: 24,
  },
]

export function MediaPartnersSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Medijski Partneri
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Podržani od vodećih medijskih kuća u regiji
          </p>
        </div>
        <CustomersSection
          customers={mediaPartners}
          className="bg-white pt-0 pb-0"
        />
      </div>
    </section>
  )
}
