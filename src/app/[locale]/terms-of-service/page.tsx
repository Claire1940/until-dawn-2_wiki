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
  const path = '/terms-of-service'
  const title = 'Terms of Service - Until Dawn 2 Wiki'
  const description =
    'Read the terms that govern use of Until Dawn 2 Wiki, including content usage, external-link disclaimers, and acceptable use rules.'

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

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative border-b border-border px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Terms of Service
          </h1>
          <p className="mb-2 text-lg text-slate-300">
            Terms and conditions for using Until Dawn 2 Wiki
          </p>
          <p className="text-sm text-slate-400">Last Updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By using Until Dawn 2 Wiki, you agree to these Terms of Service. If
              you do not agree, do not use the site.
            </p>

            <h2>2. Site Purpose</h2>
            <p>
              Until Dawn 2 Wiki is an unofficial fan-made reference site focused on
              release details, trailers, story setup, characters, choices, and
              related coverage for Until Dawn 2.
            </p>

            <h2>3. Acceptable Use</h2>
            <ul>
              <li>Do not use the site for unlawful activity or abuse.</li>
              <li>Do not attempt to disrupt the site, scrape it aggressively, or bypass access controls.</li>
              <li>Do not misrepresent our content as official PlayStation or Firesprite material.</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>
              Original site copy, layout, and editorial work belong to Until Dawn 2
              Wiki unless otherwise noted. Game trademarks, logos, artwork, and
              related assets belong to their respective owners.
            </p>

            <h2>5. Unofficial Status</h2>
            <p>
              Until Dawn 2 Wiki is not affiliated with, endorsed by, or sponsored
              by Sony Interactive Entertainment, PlayStation, Firesprite, or any
              official rights holder.
            </p>

            <h2>6. Accuracy Disclaimer</h2>
            <p>
              We aim to keep information accurate, but trailers, release windows,
              platform details, and official announcements can change. Use the
              linked official sources when a confirmed statement matters.
            </p>

            <h2>7. External Links</h2>
            <p>
              The site links to third-party services such as PlayStation, YouTube,
              Reddit, and X. We are not responsible for their content, availability,
              or policies.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              Until Dawn 2 Wiki is provided on an &quot;as is&quot; basis without
              warranties. To the maximum extent permitted by law, we are not liable
              for damages arising from your use of the site.
            </p>

            <h2>9. Changes to These Terms</h2>
            <p>
              We may update these terms when the site evolves. Continued use after
              updates means you accept the revised terms.
            </p>

            <h2>10. Contact</h2>
            <p>
              Questions about these terms can be sent to{' '}
              <a
                href="mailto:legal@until-dawn-2.wiki"
                className="text-[hsl(var(--nav-theme-light))] hover:underline"
              >
                legal@until-dawn-2.wiki
              </a>
              .
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
