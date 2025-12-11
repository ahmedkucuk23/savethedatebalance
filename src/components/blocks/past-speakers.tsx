'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Users } from 'lucide-react'
import { motion } from 'framer-motion'
import { LinesPatternCard, LinesPatternCardBody } from '@/components/ui/card-with-lines-patter'
import { Eyebrow } from '@/components/ui/eyebrow'
import Aurora from '@/components/Aurora'

type Speaker = {
  name: string
  image: string
  slug: string
  description: string
}

export function PastSpeakers() {
  const [speakers, setSpeakers] = useState<Speaker[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch speakers from Balance Conference 2026
    fetch('/api/speakers?conferenceSlug=BalanceConference2026', {
      cache: 'no-store'
    })
      .then(res => res.json())
      .then(data => {
        if (data.speakers) {
          const formattedSpeakers: Speaker[] = data.speakers.map((speaker: any) => ({
            name: speaker.name,
            slug: speaker.slug,
            description: speaker.shortDescription || speaker.location || '',
            image: speaker.image || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=1066&fit=crop',
          }))
          setSpeakers(formattedSpeakers)
        }
      })
      .catch(err => console.error('Error fetching speakers:', err))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="bg-[#0A031B] py-32 overflow-hidden relative">
      {/* Aurora background */}
      <div className="absolute inset-0 z-[0] pointer-events-none">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-start justify-center mb-8"
        >
          <h2 className="text-5xl sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter text-white text-left">
            Predavači
          </h2>
          <p className="text-left mt-5 text-white">
            Najbolji svjetski, regionalni i domaći predavači na jednom mjestu
          </p>
        </motion.div>

        {loading ? (
          <div className="text-center py-20 text-balance-200">Loading speakers...</div>
        ) : (
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {speakers.map((speaker, index) => (
              <Link
                key={index}
                href={`/speakers/${speaker.slug}`}
                className="group overflow-hidden block"
              >
                <img
                  className="h-[22.5rem] w-full rounded-xl object-cover object-top grayscale-0 transition-all duration-500 md:h-96 md:grayscale md:rounded-md md:hover:grayscale-0 md:group-hover:h-[22.5rem] md:group-hover:rounded-xl"
                  src={speaker.image}
                  alt={speaker.name}
                  loading="lazy"
                />
                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                  <div className="flex justify-between">
                    <h3 className="text-3xl font-semibold transition-all duration-500 tracking-wider md:text-2xl md:tracking-normal md:group-hover:tracking-wider text-white">
                      {speaker.name}
                    </h3>
                    <span className="text-xs text-balance-200">
                      _0{index + 1}
                    </span>
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-balance-200 inline-block translate-y-0 text-lg font-light opacity-100 transition duration-300 md:text-sm md:translate-y-6 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                      {speaker.description}
                    </span>
                  </div>
                </div>
              </Link>
            ))}

            {/* Coming Soon Cards - Always show 3 */}
            {[1, 2, 3].map((num) => (
              <div key={`coming-soon-${num}`} className="group overflow-hidden">
                <LinesPatternCard
                  className="h-full border-balance-300/20 bg-[#0A031B]"
                  gradientClassName="bg-transparent"
                >
                  <LinesPatternCardBody className="flex flex-col items-center justify-center h-[22.5rem] md:h-96">
                    <div className="text-center space-y-4">
                      <div className="w-20 h-20 mx-auto rounded-full border-2 border-dashed border-balance-300/50 flex items-center justify-center">
                        <Users className="w-10 h-10 text-balance-300/70" />
                      </div>
                      <h3 className="text-2xl font-semibold text-white">
                        Uskoro
                      </h3>
                      <p className="text-balance-200 text-sm">
                        Bit će objavljeno još govornika
                      </p>
                    </div>
                  </LinesPatternCardBody>
                </LinesPatternCard>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default PastSpeakers
