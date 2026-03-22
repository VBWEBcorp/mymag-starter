import { motion } from 'framer-motion'
import { Heart, Lightbulb, Users } from 'lucide-react'

import { SeoHead } from '@/components/seo/seo-head'
import { breadcrumbJsonLd, webPageJsonLd } from '@/components/seo/json-ld'
import { CtaSection } from '@/components/sections/cta-section'
import { SectionTitle } from '@/components/ui/section-title'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const ease = [0.22, 1, 0.36, 1] as const

const values = [
  {
    icon: Heart,
    title: 'Proximité',
    desc: 'Un interlocuteur unique, disponible, qui connaît votre projet sur le bout des doigts.',
  },
  {
    icon: Lightbulb,
    title: 'Clarté',
    desc: 'Pas de jargon inutile. Des explications simples, des livrables concrets.',
  },
  {
    icon: Users,
    title: 'Sur mesure',
    desc: "Chaque projet est différent. Nous adaptons nos solutions à votre réalité, pas l'inverse.",
  },
] as const

const description =
  'Découvrez notre histoire, nos valeurs et notre équipe. Nous accompagnons les entreprises dans leur développement digital.'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('À propos', description, '/a-propos'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'À propos', path: '/a-propos' },
    ]),
  ],
}

export function AboutPage() {
  return (
    <>
      <SeoHead
        title="À propos"
        description={description}
        canonical="/a-propos"
        jsonLd={jsonLd}
      />

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
              À propos
            </p>
            <h1 className="mt-6 font-display text-balance text-4xl leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl">
              Une équipe engagée à vos côtés
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Nous croyons que chaque entreprise mérite une présence en ligne à
              la hauteur de ses ambitions. Depuis notre création, nous
              accompagnons artisans, PME et indépendants avec des solutions
              simples, efficaces et soignées.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-muted/10">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <SectionTitle
            eyebrow="Nos valeurs"
            title="Ce qui nous guide au quotidien"
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, ease, delay: i * 0.05 }}
              >
                <Card className="h-full rounded-2xl border-border/80 bg-card/70 shadow-[var(--shadow-sm)] ring-1 ring-foreground/5">
                  <CardHeader>
                    <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15">
                      <v.icon className="size-5" aria-hidden />
                    </span>
                    <CardTitle className="font-display text-base">
                      {v.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {v.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
