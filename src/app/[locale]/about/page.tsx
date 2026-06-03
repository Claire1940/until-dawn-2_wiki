import Link from 'next/link'
import type { Metadata } from 'next'
import { buildLanguageAlternates } from '@/lib/i18n-utils'
import { type Locale } from '@/i18n/routing'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://until-dawn-2.wiki'
  const path = '/about'
  const title = 'About Until Dawn 2 Wiki'
  const description =
    'Learn about Until Dawn 2 Wiki, an unofficial fan-made site focused on release coverage, trailers, characters, and choice-driven survival updates.'

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

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative border-b border-border px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            About Until Dawn 2 Wiki
          </h1>
          <p className="text-lg text-slate-300">
            An unofficial fan-made reference site for Until Dawn 2
          </p>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>What This Site Covers</h2>
            <p>
              Until Dawn 2 Wiki tracks the core topics players care about most:
              the 2027 release window, PS5 platform details, official trailers,
              story setup, characters, and how choice-driven systems shape the
              horror experience.
            </p>

            <h2>Our Goal</h2>
            <p>
              We aim to turn scattered official announcements into a clean,
              searchable fan resource that is easy to browse whether you want a
              quick trailer recap or deeper article coverage.
            </p>

            <h2>Editorial Approach</h2>
            <ul>
              <li>We prioritize official PlayStation, Firesprite, and trailer sources.</li>
              <li>We separate confirmed facts from speculation wherever possible.</li>
              <li>We update release, trailer, and story pages as new information becomes public.</li>
            </ul>

            <h2>Important Disclaimer</h2>
            <p>
              Until Dawn 2 Wiki is unofficial and is not affiliated with Sony
              Interactive Entertainment, PlayStation, or Firesprite.
            </p>

            <h2>Contact</h2>
            <p>
              General questions:{' '}
              <a
                href="mailto:contact@until-dawn-2.wiki"
                className="text-[hsl(var(--nav-theme-light))] hover:underline"
              >
                contact@until-dawn-2.wiki
              </a>
              <br />
              Corrections and support:{' '}
              <a
                href="mailto:support@until-dawn-2.wiki"
                className="text-[hsl(var(--nav-theme-light))] hover:underline"
              >
                support@until-dawn-2.wiki
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
