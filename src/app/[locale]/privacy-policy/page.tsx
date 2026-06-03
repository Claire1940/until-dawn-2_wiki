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
  const path = '/privacy-policy'
  const title = 'Privacy Policy - Until Dawn 2 Wiki'
  const description =
    'Learn how Until Dawn 2 Wiki collects limited analytics data, stores preferences, and handles external links across the fan-made site.'

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

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative border-b border-border px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mb-2 text-lg text-slate-300">
            How Until Dawn 2 Wiki handles limited analytics and site preferences
          </p>
          <p className="text-sm text-slate-400">Last Updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>1. Overview</h2>
            <p>
              Until Dawn 2 Wiki is an unofficial fan-made website. We collect only
              the minimum information needed to operate the site, understand broad
              traffic patterns, and remember a few user-facing preferences.
            </p>

            <h2>2. Information We Collect</h2>
            <ul>
              <li>Basic analytics data such as pages viewed, approximate location, device type, and referral source.</li>
              <li>Browser-stored preferences such as selected language or theme settings.</li>
              <li>Technical logs used to diagnose uptime, performance, and abuse issues.</li>
            </ul>

            <h2>3. How We Use Information</h2>
            <ul>
              <li>To keep Until Dawn 2 Wiki available, secure, and fast.</li>
              <li>To understand which release-date, trailer, and story pages help visitors most.</li>
              <li>To improve navigation, structured data, and article presentation over time.</li>
            </ul>

            <h2>4. Cookies and Analytics</h2>
            <p>
              We may use cookies or similar browser storage for analytics and site
              preferences. Third-party analytics providers may process anonymized or
              aggregated usage information on our behalf.
            </p>

            <h2>5. External Links</h2>
            <p>
              Until Dawn 2 Wiki links to third-party sites such as PlayStation,
              YouTube, Reddit, and X. Their privacy practices are governed by their
              own policies, not ours.
            </p>

            <h2>6. Data Retention</h2>
            <p>
              We keep analytics and technical records only as long as reasonably
              necessary for reporting, security review, and site maintenance.
            </p>

            <h2>7. Children&apos;s Privacy</h2>
            <p>
              This website is intended for a general audience and is not directed
              to children under 13. We do not knowingly collect personal
              information from children.
            </p>

            <h2>8. Security</h2>
            <p>
              We use reasonable administrative and technical safeguards, but no
              internet service can guarantee absolute security.
            </p>

            <h2>9. Policy Changes</h2>
            <p>
              We may revise this Privacy Policy when the site changes. The date at
              the top of this page reflects the latest update.
            </p>

            <h2>10. Contact</h2>
            <p>
              Questions about this policy can be sent to{' '}
              <a
                href="mailto:privacy@until-dawn-2.wiki"
                className="text-[hsl(var(--nav-theme-light))] hover:underline"
              >
                privacy@until-dawn-2.wiki
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
