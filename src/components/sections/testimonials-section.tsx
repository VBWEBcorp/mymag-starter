import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

import { SectionTitle } from '@/components/ui/section-title'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

const testimonials = [
  {
    name: 'Marie D.',
    role: 'Gérante — Boulangerie Le Fournil',
    quote:
      'Depuis le nouveau site, je reçois 3 fois plus d\'appels. Les clients nous trouvent enfin sur Google.',
  },
  {
    name: 'Thomas L.',
    role: 'Directeur — Cabinet Conseil TLR',
    quote:
      'Un travail soigné, un site clair et professionnel. Mes prospects comprennent immédiatement ce que je propose.',
  },
  {
    name: 'Sophie R.',
    role: 'Fondatrice — Studio Pilates Zen',
    quote:
      'L\'équipe a su capter l\'ambiance de mon studio. Le site reflète exactement mes valeurs, et les réservations ont décollé.',
  },
] as const

const ease = [0.22, 1, 0.36, 1] as const

export function TestimonialsSection() {
  return (
    <section className="border-b border-border/60 bg-muted/10">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionTitle
          eyebrow="Témoignages"
          title="Ils nous font confiance"
          description="Des entreprises de tous horizons qui ont gagné en visibilité et en crédibilité."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, ease, delay: i * 0.05 }}
            >
              <Card className="h-full rounded-2xl border-border/80 bg-card/70 shadow-[var(--shadow-sm)] ring-1 ring-foreground/5">
                <CardHeader>
                  <Quote className="size-6 text-primary/40" aria-hidden />
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm leading-relaxed text-foreground">
                    "{t.quote}"
                  </p>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
