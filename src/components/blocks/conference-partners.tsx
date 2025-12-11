"use client"

import { CustomersSection } from "@/components/ui/customers-section"
import type { CustomerLogo } from "@/components/ui/customers-section"

const conferencePartners: CustomerLogo[] = [
  {
    src: "/assets/conference-partners/tawil2.jpg",
    alt: "Al-Tawil",
    height: 80,
  },
  {
    src: "/assets/conference-partners/Argeta-logotype-positive-Pantone-159-C.jpg.webp",
    alt: "Argeta",
    height: 24,
  },
  {
    src: "/assets/conference-partners/attachment-2.png",
    alt: "Conference Partner",
    height: 24,
  },
  {
    src: "/assets/conference-partners/Fintws-1024x143.png",
    alt: "Fintws",
    height: 24,
  },
  {
    src: "/assets/conference-partners/Franck-LOGO_uz-vas-od-1892_HR_poz-1.jpg.webp",
    alt: "Franck",
    height: 24,
  },
  {
    src: "/assets/conference-partners/Lukavac-cement-logo-red-back-RGB.png",
    alt: "Lukavac Cement",
    height: 24,
  },
  {
    src: "/assets/conference-partners/madi-Copy.png.webp",
    alt: "Madi",
    height: 24,
  },
  {
    src: "/assets/conference-partners/OAZA-logo-i-slogan2-1024x579.png.webp",
    alt: "Oaza",
    height: 24,
  },
  {
    src: "/assets/conference-partners/wiener_logo-1024x549.png",
    alt: "Wiener",
    height: 24,
  },
]

export function ConferencePartnersSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Partneri Konferencije
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Podržani od vodećih kompanija i organizacija
          </p>
        </div>
        <CustomersSection
          customers={conferencePartners}
          className="bg-white pt-0 pb-0"
        />
      </div>
    </section>
  )
}
