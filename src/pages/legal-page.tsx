import { SeoHead } from '@/components/seo/seo-head'
import { breadcrumbJsonLd, webPageJsonLd } from '@/components/seo/json-ld'
import { siteConfig } from '@/lib/seo'

const description = 'Mentions légales et politique de confidentialité.'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Mentions légales', description, '/mentions-legales'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Mentions légales', path: '/mentions-legales' },
    ]),
  ],
}

export function LegalPage() {
  return (
    <>
      <SeoHead
        title="Mentions légales"
        description={description}
        canonical="/mentions-legales"
        noindex
        jsonLd={jsonLd}
      />

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <h1 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
            Mentions légales
          </h1>

          <article className="mt-10 space-y-10 text-sm leading-relaxed text-muted-foreground">
            <div className="space-y-3">
              <h2 className="font-display text-lg font-semibold text-foreground">
                Éditeur du site
              </h2>
              <p>
                {siteConfig.name}
                <br />
                {siteConfig.address.street}, {siteConfig.address.postalCode}{' '}
                {siteConfig.address.city}
                <br />
                Téléphone : {siteConfig.phone}
                <br />
                Email : {siteConfig.email}
              </p>
              <p>
                SIRET : [À compléter]
                <br />
                Directeur de la publication : [À compléter]
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-lg font-semibold text-foreground">
                Hébergement
              </h2>
              <p>
                [Nom de l'hébergeur]
                <br />
                [Adresse de l'hébergeur]
                <br />
                [Téléphone de l'hébergeur]
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-lg font-semibold text-foreground">
                Propriété intellectuelle
              </h2>
              <p>
                L'ensemble du contenu de ce site (textes, images, vidéos,
                éléments graphiques) est protégé par le droit d'auteur. Toute
                reproduction, même partielle, est interdite sans autorisation
                préalable.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-lg font-semibold text-foreground">
                Protection des données personnelles
              </h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données
                (RGPD), vous disposez d'un droit d'accès, de rectification et
                de suppression de vos données personnelles. Pour exercer ce
                droit, contactez-nous à {siteConfig.email}.
              </p>
              <p>
                Les données collectées via le formulaire de contact sont
                uniquement utilisées pour répondre à votre demande. Elles ne
                sont ni vendues, ni transmises à des tiers.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-lg font-semibold text-foreground">
                Cookies
              </h2>
              <p>
                Ce site utilise des cookies strictement nécessaires à son
                fonctionnement. Aucun cookie publicitaire ou de traçage n'est
                utilisé sans votre consentement explicite.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
