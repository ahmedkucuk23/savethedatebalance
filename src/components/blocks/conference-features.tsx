"use client"

import { Badge } from "@/components/ui/badge";
import { Users, Calendar, Award, Coffee, Lightbulb, Network } from "lucide-react";
import Image from "next/image";
import BlurText from "@/components/ui/BlurText";

function ConferenceFeatures() {
  const features = [
    {
      icon: Lightbulb,
      title: "Inspiracija kroz stvarne priče",
      description: "Slušajte inspirativne priče ljudi koji su prevladali životne izazove promjenom životnih navika, prehrane i načina razmišljanja te pronašli svoj balans.",
      image: "https://balanceconference.ba/wp-content/uploads/2025/02/image11.png.webp"
    },
    {
      icon: Award,
      title: "Pristup vrhunskim stručnjacima",
      description: "Učite od vodećih svjetskih, regionalnih i domaćih stručnjaka iz oblasti zdravlja, wellnessa, psihologije i osobnog razvoja.",
      image: "https://balanceconference.ba/wp-content/uploads/2025/02/image12.png.webp"
    },
    {
      icon: Coffee,
      title: "Praktični alati za svakodnevni život",
      description: "Otkrijte konkretne metode i alate koji će vam pomoći da poboljšate svoje fizičko i mentalno zdravlje te održite ravnotežu u svakodnevnom životu.",
      image: "https://balanceconference.ba/wp-content/uploads/2025/02/images3.png.webp"
    },
    {
      icon: Network,
      title: "Umrežavanje i nova poznanstva",
      description: "Povežite se s ljudima koji dijele slične vrijednosti i interese te proširite svoj krug kontakata u području zdravlja, osobnog rasta i produktivnosti.",
      image: "https://balanceconference.ba/wp-content/uploads/2025/02/image5.png.webp"
    },
    {
      icon: Users,
      title: "Osobni rast i samospoznaja",
      description: "Kroz predavanja, radionice i interaktivne sesije, steknite dublje razumijevanje sebe, svojih potreba i ciljeva te napravite korake ka ispunjenijem životu.",
      image: "https://balanceconference.ba/wp-content/uploads/2025/02/image6.png.webp"
    },
    {
      icon: Calendar,
      title: "Prilika za promjenu",
      description: "Započnite ili osnažite svoj put ka zdravijem i uravnoteženijem životu uz podršku zajednice i stručnjaka koji vas motiviraju i inspirišu.",
      image: "https://balanceconference.ba/wp-content/uploads/2025/02/image7.png.webp"
    }
  ];

  return (
    <section className="w-full py-20 lg:py-40 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge className="bg-balance-300 text-white hover:bg-balance-400">Iskustvo</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <BlurText
                text="Benefiti za učesnike"
                className="text-3xl md:text-5xl tracking-tighter max-w-xl font-bold text-left text-gray-900"
                delay={50}
                animateBy="words"
              />
              <BlurText
                text="Balance Conference nudi jedinstveno iskustvo kroz inspirativne priče, praktične radionice i networking sa najuspješnijim ljudima u regiji."
                className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-gray-600 text-left"
                delay={30}
                animateBy="words"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex flex-col gap-2 group">
                  <div className="relative rounded-xl aspect-video mb-2 overflow-hidden bg-gray-100">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-balance-300/20 group-hover:bg-balance-300/30 transition-colors duration-300" />
                    <div className="absolute top-4 left-4 bg-white rounded-lg p-2">
                      <Icon className="w-6 h-6 text-balance-300" />
                    </div>
                  </div>
                  <h3 className="text-xl tracking-tight font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-base">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export { ConferenceFeatures };
