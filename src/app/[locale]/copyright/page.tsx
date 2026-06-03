import Link from 'next/link'
import type { Metadata } from 'next'
import { buildLanguageAlternates } from '@/lib/i18n-utils'
import { type Locale } from '@/i18n/routing'

interface Props {
  params: Promise<{ locale: string }>
}

const LAST_UPDATED = 'June 3, 2026'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://until-dawn-2.wiki'
  const path = '/copyright'
  const title = 'Copyright Notice - Until Dawn 2 Wiki'
  const description =
    'Review copyright, fair-use, and takedown guidance for Until Dawn 2 Wiki, including contact details for rights-related requests.'

  return {
    title,
    description,
    robots: {
      index: false,
      follow: true,
      googleBot: {
        index: false,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale,
      url: locale === 'en' ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`,
      siteName: 'Until Dawn 2 Wiki',
      title,
      description,
      images: [
        {
          url: `${siteUrl}/images/hero.webp`,
          width: 1088,
          height: 612,
          alt: 'Until Dawn 2 key art',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${siteUrl}/images/hero.webp`],
    },
    alternates: buildLanguageAlternates(path, locale as Locale, siteUrl),
  }
}

export default function Copyright() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative border-b border-border px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Copyright Notice
          </h1>
          <p className="mb-2 text-lg text-slate-300">
            Copyright, fair-use, and rights information for Until Dawn 2 Wiki
          </p>
          <p className="text-sm text-slate-400">Last Updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>1. Site Content</h2>
            <p>
              © 2026 Until Dawn 2 Wiki. Original site text, editorial summaries,
              and page organization are protected by copyright.
            </p>

            <h2>2. Game Assets and Trademarks</h2>
            <p>
              Until Dawn 2, PlayStation, Firesprite, and related names, logos, and
              media remain the property of their respective owners.
            </p>

            <h2>3. Fair Use</h2>
            <p>
              We may reference official trailers, screenshots, logos, and product
              details for commentary, identification, and informational purposes on
              this unofficial fan site.
            </p>

            <h2>4. Attribution</h2>
            <p>
              If you quote or reference original Until Dawn 2 Wiki content, provide
              clear attribution and link back to the relevant page where practical.
            </p>

            <h2>5. Takedown Requests</h2>
            <p>
              Rights holders who believe material on the site infringes their
              copyright may contact us with a clear description of the work,
              location of the material, and proof of authority to act.
            </p>

            <h2>6. Contact</h2>
            <p>
              General copyright inquiries:{' '}
              <a
                href="mailto:copyright@until-dawn-2.wiki"
                className="text-[hsl(var(--nav-theme-light))] hover:underline"
              >
                copyright@until-dawn-2.wiki
              </a>
              <br />
              DMCA and formal takedown notices:{' '}
              <a
                href="mailto:dmca@until-dawn-2.wiki"
                className="text-[hsl(var(--nav-theme-light))] hover:underline"
              >
                dmca@until-dawn-2.wiki
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border px-4 py-8">
        <div className="container mx-auto max-w-4xl text-center">
          <Link href="/" className="text-[hsl(var(--nav-theme-light))] hover:underline">
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  )
}
