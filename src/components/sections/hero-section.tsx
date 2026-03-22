import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'

const ease = [0.22, 1, 0.36, 1] as const

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_circle_at_30%_-10%,oklch(0.62_0.18_285/0.14),transparent_55%),radial-gradient(800px_circle_at_80%_60%,oklch(0.58_0.14_220/0.1),transparent_50%)]"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
            Bienvenue
          </p>
          <h1 className="mt-6 font-display text-balance text-4xl leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-6xl">
            Votre partenaire pour{' '}
            <span className="text-primary">réussir en ligne</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Nous accompagnons les entreprises avec des solutions sur mesure,
            pensées pour durer. Présence digitale, performance et clarté.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg" className="group" asChild>
              <Link to="/contact">
                Prendre contact
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">
                <Phone className="size-4" />
                Découvrir nos services
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
