"use client";

import { Suspense, lazy } from "react";
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Check,
  ClipboardCheck,
  Clock,
  ExternalLink,
  Eye,
  Home,
  MessageCircle,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useMessages } from "next-intl";
import { VideoFeature } from "@/components/home/VideoFeature";
import { LatestGuidesAccordion } from "@/components/home/LatestGuidesAccordion";
import { NativeBannerAd, AdBanner } from "@/components/ads";
import { getPreferredMobileBannerSelection } from "@/components/ads/mobileAdConfigs";
import { SidebarAd } from "@/components/ads/SidebarAd";
import { scrollToSection } from "@/lib/scrollToSection";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import type { ContentItemWithType } from "@/lib/getLatestArticles";

const HeroStats = lazy(() => import("@/components/home/HeroStats"));
const FAQSection = lazy(() => import("@/components/home/FAQSection"));
const CTASection = lazy(() => import("@/components/home/CTASection"));

const LoadingPlaceholder = ({ height = "h-64" }: { height?: string }) => (
  <div
    className={`${height} rounded-xl border border-border bg-white/5 animate-pulse`}
  />
);

interface HomePageClientProps {
  latestArticles: ContentItemWithType[];
  locale: string;
}

export default function HomePageClient({
  latestArticles,
  locale,
}: HomePageClientProps) {
  const t = useMessages() as any;
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://until-dawn-2.wiki";
  const officialGameUrl = "https://www.playstation.com/en-us/games/until-dawn-2/";
  const officialWishlistUrl =
    "https://store.playstation.com/concept/10004067";
  const officialBlogUrl =
    "https://blog.playstation.com/2026/06/02/until-dawn-2-is-coming-to-ps5-in-2027/";
  const stateOfPlayUrl =
    "https://blog.playstation.com/2026/06/02/state-of-play-june-2026-all-announcements-trailers/";
  const officialTrailerUrl = "https://www.youtube.com/watch?v=QpVZ9OvRLZI";
  const firespriteUrl = "https://firesprite.com/games/untildawn2";
  const playStationXUrl = "https://x.com/PlayStation";
  const firespriteXUrl = "https://x.com/FirespriteGames";
  const communityRedditUrl = "https://www.reddit.com/r/untildawn/";
  const mobileBannerAd = getPreferredMobileBannerSelection();

  const releaseModule = t.modules.untilDawn2ReleaseDateAndPlatforms;
  const trailerModule = t.modules.untilDawn2TrailerAndAnnouncement;
  const storyModule = t.modules.untilDawn2StoryAndSetting;
  const gameplayModule = t.modules.untilDawn2GameplayAndButterflyEffect;
  const charactersModule = t.modules.untilDawn2CharactersAndCast;
  const beginnerModule = t.modules.untilDawn2BeginnerGuide;
  const choicesModule = t.modules.untilDawn2ChoicesAndEndings;
  const developerModule = t.modules.untilDawn2DeveloperAndSeriesBackground;
  const toolCards = t.tools.cards;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Until Dawn 2 Wiki",
        description:
          "Until Dawn 2 Wiki covers the 2027 PS5 release window, trailer, story, characters, choices, and wishlist updates.",
        image: {
          "@type": "ImageObject",
          url: `${siteUrl}/images/hero.webp`,
          width: 1088,
          height: 612,
          caption: "Until Dawn 2 key art",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Until Dawn 2 Wiki",
        alternateName: "Until Dawn 2",
        url: siteUrl,
        description:
          "Fan-made Until Dawn 2 wiki focused on official release details, trailer coverage, story setup, and survival-choice updates.",
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/android-chrome-512x512.png`,
          width: 512,
          height: 512,
        },
        image: {
          "@type": "ImageObject",
          url: `${siteUrl}/images/hero.webp`,
          width: 1088,
          height: 612,
          caption: "Until Dawn 2 Wiki hero image",
        },
        sameAs: [
          officialGameUrl,
          officialBlogUrl,
          officialTrailerUrl,
          playStationXUrl,
          firespriteXUrl,
        ],
      },
      {
        "@type": "VideoGame",
        name: "Until Dawn 2",
        gamePlatform: ["PS5"],
        applicationCategory: "Game",
        genre: ["Horror", "Narrative Adventure", "Interactive Drama"],
        publisher: "Sony Interactive Entertainment",
        author: {
          "@type": "Organization",
          name: "Firesprite",
        },
        numberOfPlayers: {
          minValue: 1,
          maxValue: 1,
        },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/PreOrder",
          url: officialWishlistUrl,
        },
      },
      {
        "@type": "VideoObject",
        name: "Until Dawn 2 - Announce Trailer | PS5 Games",
        description:
          "Official PlayStation reveal trailer for Until Dawn 2, introducing the ghost-hunter cast, island setting, and choice-driven survival premise.",
        uploadDate: "2026-06-02",
        thumbnailUrl: [`${siteUrl}/images/hero.webp`],
        embedUrl: "https://www.youtube.com/embed/QpVZ9OvRLZI",
        url: officialTrailerUrl,
      },
    ],
  };

  return (
    <div className="home-shell min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <aside
        className="fixed top-20 z-10 hidden w-40 xl:block"
        style={{ left: "calc((100vw - 1024px) / 2 - 180px)" }}
      >
        <SidebarAd
          type="sidebar-160x300"
          adKey={process.env.NEXT_PUBLIC_AD_SIDEBAR_160X300}
        />
      </aside>

      <aside
        className="fixed top-20 z-10 hidden w-40 xl:block"
        style={{ right: "calc((100vw - 1024px) / 2 - 180px)" }}
      >
        <SidebarAd
          type="sidebar-160x600"
          adKey={process.env.NEXT_PUBLIC_AD_SIDEBAR_160X600}
        />
      </aside>

      <section className="relative overflow-hidden px-4 pb-14 pt-24 md:pb-20 md:pt-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-[65%] rounded-full bg-[hsl(var(--nav-theme)/0.18)] blur-3xl" />
          <div className="absolute right-[12%] top-28 h-56 w-56 rounded-full bg-[hsl(var(--nav-theme-light)/0.12)] blur-3xl" />
        </div>
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8 text-center scroll-reveal">
            <div
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--nav-theme)/0.3)]
              bg-[hsl(var(--nav-theme)/0.1)] px-3 py-1.5 md:mb-6 md:px-4 md:py-2"
            >
              <Sparkles className="h-4 w-4 text-[hsl(var(--nav-theme-light))]" />
              <span className="text-xs font-medium md:text-sm">
                {t.hero.badge}
              </span>
            </div>

            <h1 className="mb-4 text-4xl font-bold leading-[1.02] sm:text-5xl md:mb-6 md:text-7xl">
              {t.hero.title}
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg md:mb-10 md:max-w-3xl md:text-2xl">
              {t.hero.description}
            </p>

            <div className="mb-10 flex flex-col justify-center gap-3 sm:flex-row md:mb-12 md:gap-4">
              <a
                href={officialGameUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[hsl(var(--nav-theme))]
                px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[hsl(var(--nav-theme)/0.9)]
                md:px-8 md:py-4 md:text-lg"
              >
                <BookOpen className="h-5 w-5" />
                {t.hero.getFreeCodesCTA}
              </a>
              <a
                href={officialWishlistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3.5
                text-base font-semibold transition-colors hover:bg-white/10 md:px-8 md:py-4 md:text-lg"
              >
                {t.hero.playOnSteamCTA}
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>

          <Suspense fallback={<LoadingPlaceholder height="h-32" />}>
            <HeroStats stats={Object.values(t.hero.stats)} />
          </Suspense>
        </div>
      </section>

      <section className="px-4 py-10 md:py-12">
        <div className="mx-auto max-w-5xl scroll-reveal">
          <div className="overflow-hidden rounded-2xl">
            <VideoFeature
              videoId="QpVZ9OvRLZI"
              title="Until Dawn 2 - Announce Trailer | PS5 Games"
            />
          </div>
        </div>
      </section>

      {/* Tools Grid - 8 Navigation Cards */}
      <section className="bg-white/[0.02] px-4 py-14 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center scroll-reveal md:mb-12">
            <h2 className="mb-3 text-3xl font-bold md:mb-4 md:text-5xl">
              {t.tools.title}{" "}
              <span className="text-[hsl(var(--nav-theme-light))]">
                {t.tools.titleHighlight}
              </span>
            </h2>
            <p className="text-base text-muted-foreground md:text-lg">
              {t.tools.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
            <a
              href="#release-date-platforms"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("release-date-platforms");
              }}
              className="group scroll-reveal rounded-xl border border-border bg-card p-4 text-left transition-all duration-300
              hover:border-[hsl(var(--nav-theme)/0.5)] hover:shadow-lg hover:shadow-[hsl(var(--nav-theme)/0.1)] md:p-6"
              style={{ animationDelay: "0ms" }}
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[hsl(var(--nav-theme)/0.1)] transition-colors group-hover:bg-[hsl(var(--nav-theme)/0.2)] md:mb-4 md:h-12 md:w-12">
                <DynamicIcon
                  name={toolCards[0].icon}
                  className="h-5 w-5 text-[hsl(var(--nav-theme-light))] md:h-6 md:w-6"
                />
              </div>
              <h3 className="mb-1.5 text-sm font-semibold md:text-base">
                {toolCards[0].title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {toolCards[0].description}
              </p>
            </a>

            <a
              href="#trailer-announcement"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("trailer-announcement");
              }}
              className="group scroll-reveal rounded-xl border border-border bg-card p-4 text-left transition-all duration-300
              hover:border-[hsl(var(--nav-theme)/0.5)] hover:shadow-lg hover:shadow-[hsl(var(--nav-theme)/0.1)] md:p-6"
              style={{ animationDelay: "50ms" }}
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[hsl(var(--nav-theme)/0.1)] transition-colors group-hover:bg-[hsl(var(--nav-theme)/0.2)] md:mb-4 md:h-12 md:w-12">
                <DynamicIcon
                  name={toolCards[1].icon}
                  className="h-5 w-5 text-[hsl(var(--nav-theme-light))] md:h-6 md:w-6"
                />
              </div>
              <h3 className="mb-1.5 text-sm font-semibold md:text-base">
                {toolCards[1].title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {toolCards[1].description}
              </p>
            </a>

            <a
              href="#story-setting"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("story-setting");
              }}
              className="group scroll-reveal rounded-xl border border-border bg-card p-4 text-left transition-all duration-300
              hover:border-[hsl(var(--nav-theme)/0.5)] hover:shadow-lg hover:shadow-[hsl(var(--nav-theme)/0.1)] md:p-6"
              style={{ animationDelay: "100ms" }}
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[hsl(var(--nav-theme)/0.1)] transition-colors group-hover:bg-[hsl(var(--nav-theme)/0.2)] md:mb-4 md:h-12 md:w-12">
                <DynamicIcon
                  name={toolCards[2].icon}
                  className="h-5 w-5 text-[hsl(var(--nav-theme-light))] md:h-6 md:w-6"
                />
              </div>
              <h3 className="mb-1.5 text-sm font-semibold md:text-base">
                {toolCards[2].title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {toolCards[2].description}
              </p>
            </a>

            <a
              href="#gameplay-butterfly-effect"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("gameplay-butterfly-effect");
              }}
              className="group scroll-reveal rounded-xl border border-border bg-card p-4 text-left transition-all duration-300
              hover:border-[hsl(var(--nav-theme)/0.5)] hover:shadow-lg hover:shadow-[hsl(var(--nav-theme)/0.1)] md:p-6"
              style={{ animationDelay: "150ms" }}
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[hsl(var(--nav-theme)/0.1)] transition-colors group-hover:bg-[hsl(var(--nav-theme)/0.2)] md:mb-4 md:h-12 md:w-12">
                <DynamicIcon
                  name={toolCards[3].icon}
                  className="h-5 w-5 text-[hsl(var(--nav-theme-light))] md:h-6 md:w-6"
                />
              </div>
              <h3 className="mb-1.5 text-sm font-semibold md:text-base">
                {toolCards[3].title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {toolCards[3].description}
              </p>
            </a>

            <a
              href="#characters-cast"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("characters-cast");
              }}
              className="group scroll-reveal rounded-xl border border-border bg-card p-4 text-left transition-all duration-300
              hover:border-[hsl(var(--nav-theme)/0.5)] hover:shadow-lg hover:shadow-[hsl(var(--nav-theme)/0.1)] md:p-6"
              style={{ animationDelay: "200ms" }}
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[hsl(var(--nav-theme)/0.1)] transition-colors group-hover:bg-[hsl(var(--nav-theme)/0.2)] md:mb-4 md:h-12 md:w-12">
                <DynamicIcon
                  name={toolCards[4].icon}
                  className="h-5 w-5 text-[hsl(var(--nav-theme-light))] md:h-6 md:w-6"
                />
              </div>
              <h3 className="mb-1.5 text-sm font-semibold md:text-base">
                {toolCards[4].title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {toolCards[4].description}
              </p>
            </a>

            <a
              href="#beginner-guide"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("beginner-guide");
              }}
              className="group scroll-reveal rounded-xl border border-border bg-card p-4 text-left transition-all duration-300
              hover:border-[hsl(var(--nav-theme)/0.5)] hover:shadow-lg hover:shadow-[hsl(var(--nav-theme)/0.1)] md:p-6"
              style={{ animationDelay: "250ms" }}
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[hsl(var(--nav-theme)/0.1)] transition-colors group-hover:bg-[hsl(var(--nav-theme)/0.2)] md:mb-4 md:h-12 md:w-12">
                <DynamicIcon
                  name={toolCards[5].icon}
                  className="h-5 w-5 text-[hsl(var(--nav-theme-light))] md:h-6 md:w-6"
                />
              </div>
              <h3 className="mb-1.5 text-sm font-semibold md:text-base">
                {toolCards[5].title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {toolCards[5].description}
              </p>
            </a>

            <a
              href="#choices-endings"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("choices-endings");
              }}
              className="group scroll-reveal rounded-xl border border-border bg-card p-4 text-left transition-all duration-300
              hover:border-[hsl(var(--nav-theme)/0.5)] hover:shadow-lg hover:shadow-[hsl(var(--nav-theme)/0.1)] md:p-6"
              style={{ animationDelay: "300ms" }}
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[hsl(var(--nav-theme)/0.1)] transition-colors group-hover:bg-[hsl(var(--nav-theme)/0.2)] md:mb-4 md:h-12 md:w-12">
                <DynamicIcon
                  name={toolCards[6].icon}
                  className="h-5 w-5 text-[hsl(var(--nav-theme-light))] md:h-6 md:w-6"
                />
              </div>
              <h3 className="mb-1.5 text-sm font-semibold md:text-base">
                {toolCards[6].title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {toolCards[6].description}
              </p>
            </a>

            <a
              href="#developer-series-background"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("developer-series-background");
              }}
              className="group scroll-reveal rounded-xl border border-border bg-card p-4 text-left transition-all duration-300
              hover:border-[hsl(var(--nav-theme)/0.5)] hover:shadow-lg hover:shadow-[hsl(var(--nav-theme)/0.1)] md:p-6"
              style={{ animationDelay: "350ms" }}
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[hsl(var(--nav-theme)/0.1)] transition-colors group-hover:bg-[hsl(var(--nav-theme)/0.2)] md:mb-4 md:h-12 md:w-12">
                <DynamicIcon
                  name={toolCards[7].icon}
                  className="h-5 w-5 text-[hsl(var(--nav-theme-light))] md:h-6 md:w-6"
                />
              </div>
              <h3 className="mb-1.5 text-sm font-semibold md:text-base">
                {toolCards[7].title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {toolCards[7].description}
              </p>
            </a>
          </div>
        </div>
      </section>

      <NativeBannerAd adKey={process.env.NEXT_PUBLIC_AD_NATIVE_BANNER || ""} />

      <LatestGuidesAccordion
        articles={latestArticles}
        locale={locale}
        max={12}
      />

      <AdBanner
        type="banner-300x250"
        adKey={process.env.NEXT_PUBLIC_AD_BANNER_300X250}
        className="md:hidden"
      />
      <AdBanner
        type="banner-728x90"
        adKey={process.env.NEXT_PUBLIC_AD_BANNER_728X90}
        className="hidden md:flex"
      />

      <section id="release-date-platforms" className="scroll-mt-24 px-4 py-14 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center scroll-reveal md:mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[hsl(var(--nav-theme-light))]">
              {releaseModule.eyebrow}
            </p>
            <h2 className="mb-3 text-3xl font-bold md:mb-4 md:text-5xl">
              {releaseModule.title}
            </h2>
            <p className="mx-auto max-w-3xl text-base text-muted-foreground md:text-lg">
              {releaseModule.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {releaseModule.items.map((item: any, index: number) => (
              <div
                key={`${item.label}-${index}`}
                className="scroll-reveal rounded-2xl border border-border bg-white/5 p-5 transition-colors hover:border-[hsl(var(--nav-theme)/0.5)]"
              >
                <div className="mb-3 flex items-center justify-between gap-4">
                  <span className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
                    {item.label}
                  </span>
                  <Clock className="h-4 w-4 text-[hsl(var(--nav-theme-light))]" />
                </div>
                <p className="mb-2 text-xl font-bold">{item.value}</p>
                <p className="text-sm text-muted-foreground">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="trailer-announcement" className="scroll-mt-24 bg-white/[0.02] px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center scroll-reveal md:mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[hsl(var(--nav-theme-light))]">
              {trailerModule.eyebrow}
            </p>
            <h2 className="mb-3 text-3xl font-bold md:mb-4 md:text-5xl">
              {trailerModule.title}
            </h2>
            <p className="mx-auto max-w-3xl text-base text-muted-foreground md:text-lg">
              {trailerModule.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {trailerModule.items.map((item: any, index: number) => (
              <a
                key={`${item.title}-${index}`}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="scroll-reveal rounded-2xl border border-border bg-white/5 p-6 transition-all hover:border-[hsl(var(--nav-theme)/0.5)] hover:shadow-lg hover:shadow-[hsl(var(--nav-theme)/0.08)]"
              >
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--nav-theme)/0.3)] bg-[hsl(var(--nav-theme)/0.1)] px-3 py-1 text-xs font-medium text-[hsl(var(--nav-theme-light))]">
                  <Eye className="h-3.5 w-3.5" />
                  {item.type}
                </div>
                <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-[hsl(var(--nav-theme-light))]">
                  {item.platform}
                  <ExternalLink className="h-4 w-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="story-setting" className="scroll-mt-24 px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center scroll-reveal md:mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[hsl(var(--nav-theme-light))]">
              {storyModule.eyebrow}
            </p>
            <h2 className="mb-3 text-3xl font-bold md:mb-4 md:text-5xl">
              {storyModule.title}
            </h2>
            <p className="mx-auto max-w-3xl text-base text-muted-foreground md:text-lg">
              {storyModule.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {storyModule.items.map((item: any, index: number) => (
              <div
                key={`${item.title}-${index}`}
                className="scroll-reveal rounded-2xl border border-border bg-white/5 p-6 transition-colors hover:border-[hsl(var(--nav-theme)/0.5)]"
              >
                <div className="mb-4 inline-flex rounded-full border border-[hsl(var(--nav-theme)/0.3)] bg-[hsl(var(--nav-theme)/0.1)] px-3 py-1 text-xs font-medium text-[hsl(var(--nav-theme-light))]">
                  Story Beat {index + 1}
                </div>
                <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                <p className="mb-3 text-sm text-muted-foreground">
                  {item.description}
                </p>
                <p className="text-sm text-foreground/85">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gameplay-butterfly-effect" className="scroll-mt-24 bg-white/[0.02] px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center scroll-reveal md:mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[hsl(var(--nav-theme-light))]">
              {gameplayModule.eyebrow}
            </p>
            <h2 className="mb-3 text-3xl font-bold md:mb-4 md:text-5xl">
              {gameplayModule.title}
            </h2>
            <p className="mx-auto max-w-3xl text-base text-muted-foreground md:text-lg">
              {gameplayModule.intro}
            </p>
          </div>

          <div className="space-y-4">
            {gameplayModule.items.map((item: any, index: number) => (
              <div
                key={`${item.title}-${index}`}
                className="scroll-reveal grid gap-4 rounded-2xl border border-border bg-white/5 p-5 transition-colors hover:border-[hsl(var(--nav-theme)/0.5)] md:grid-cols-[72px_minmax(0,1fr)_minmax(0,1fr)] md:p-6"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[hsl(var(--nav-theme)/0.45)] bg-[hsl(var(--nav-theme)/0.16)] text-xl font-bold text-[hsl(var(--nav-theme-light))]">
                  {item.step || index + 1}
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                <div className="rounded-xl border border-[hsl(var(--nav-theme)/0.25)] bg-[hsl(var(--nav-theme)/0.08)] p-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--nav-theme-light))]">
                    Player Impact
                  </p>
                  <p className="text-sm text-foreground/85">
                    {item.player_impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AdBanner
        type="banner-300x250"
        adKey={process.env.NEXT_PUBLIC_AD_BANNER_300X250}
        className="md:hidden"
      />
      <AdBanner
        type="banner-468x60"
        adKey={process.env.NEXT_PUBLIC_AD_BANNER_468X60}
        className="hidden md:flex"
      />

      <section id="characters-cast" className="scroll-mt-24 px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center scroll-reveal md:mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[hsl(var(--nav-theme-light))]">
              {charactersModule.eyebrow}
            </p>
            <h2 className="mb-3 text-3xl font-bold md:mb-4 md:text-5xl">
              {charactersModule.title}
            </h2>
            <p className="mx-auto max-w-3xl text-base text-muted-foreground md:text-lg">
              {charactersModule.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {charactersModule.items.map((item: any, index: number) => (
              <div
                key={`${item.name}-${index}`}
                className="scroll-reveal rounded-2xl border border-border bg-white/5 p-6 transition-colors hover:border-[hsl(var(--nav-theme)/0.5)]"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <Users className="h-5 w-5 text-[hsl(var(--nav-theme-light))]" />
                  <span className="rounded-full border border-[hsl(var(--nav-theme)/0.3)] bg-[hsl(var(--nav-theme)/0.1)] px-3 py-1 text-xs font-medium">
                    {item.status}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-bold">{item.name}</h3>
                <p className="mb-2 text-sm text-[hsl(var(--nav-theme-light))]">
                  {item.role}
                </p>
                <p className="mb-4 text-sm text-muted-foreground">
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {item.key_points.map((point: string, pointIndex: number) => (
                    <li
                      key={`${item.name}-point-${pointIndex}`}
                      className="flex items-start gap-2 text-sm text-foreground/85"
                    >
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[hsl(var(--nav-theme-light))]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="beginner-guide" className="scroll-mt-24 bg-white/[0.02] px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center scroll-reveal md:mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[hsl(var(--nav-theme-light))]">
              {beginnerModule.eyebrow}
            </p>
            <h2 className="mb-3 text-3xl font-bold md:mb-4 md:text-5xl">
              {beginnerModule.title}
            </h2>
            <p className="mx-auto max-w-3xl text-base text-muted-foreground md:text-lg">
              {beginnerModule.intro}
            </p>
          </div>

          <div className="mb-8 space-y-4">
            {beginnerModule.items.map((item: any, index: number) => (
              <div
                key={`${item.title}-${index}`}
                className="scroll-reveal rounded-2xl border border-border bg-white/5 p-5 transition-colors hover:border-[hsl(var(--nav-theme)/0.5)] md:p-6"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[hsl(var(--nav-theme)/0.45)] bg-[hsl(var(--nav-theme)/0.16)] text-lg font-bold text-[hsl(var(--nav-theme-light))]">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                    <div className="rounded-xl border border-[hsl(var(--nav-theme)/0.25)] bg-[hsl(var(--nav-theme)/0.08)] p-4">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--nav-theme-light))]">
                        Player Tip
                      </p>
                      <p className="text-sm text-foreground/85">
                        {item.player_tip}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="scroll-reveal rounded-2xl border border-[hsl(var(--nav-theme)/0.3)] bg-[hsl(var(--nav-theme)/0.06)] p-5 md:p-6">
            <div className="mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-[hsl(var(--nav-theme-light))]" />
              <h3 className="text-lg font-bold">{beginnerModule.tip_title}</h3>
            </div>
            <ul className="space-y-2">
              {beginnerModule.quick_tips.map((tip: string, index: number) => (
                <li
                  key={`quick-tip-${index}`}
                  className="flex items-start gap-2 text-sm text-foreground/85"
                >
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[hsl(var(--nav-theme-light))]" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="choices-endings" className="scroll-mt-24 px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center scroll-reveal md:mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[hsl(var(--nav-theme-light))]">
              {choicesModule.eyebrow}
            </p>
            <h2 className="mb-3 text-3xl font-bold md:mb-4 md:text-5xl">
              {choicesModule.title}
            </h2>
            <p className="mx-auto max-w-3xl text-base text-muted-foreground md:text-lg">
              {choicesModule.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {choicesModule.items.map((item: any, index: number) => (
              <div
                key={`${item.title}-${index}`}
                className="scroll-reveal rounded-2xl border border-border bg-white/5 p-6 transition-colors hover:border-[hsl(var(--nav-theme)/0.5)]"
              >
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--nav-theme)/0.3)] bg-[hsl(var(--nav-theme)/0.1)] px-3 py-1 text-xs font-medium">
                  <ClipboardCheck className="h-3.5 w-3.5 text-[hsl(var(--nav-theme-light))]" />
                  {item.summary}
                </div>
                <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="developer-series-background" className="scroll-mt-24 bg-white/[0.02] px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center scroll-reveal md:mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[hsl(var(--nav-theme-light))]">
              {developerModule.eyebrow}
            </p>
            <h2 className="mb-3 text-3xl font-bold md:mb-4 md:text-5xl">
              {developerModule.title}
            </h2>
            <p className="mx-auto max-w-3xl text-base text-muted-foreground md:text-lg">
              {developerModule.intro}
            </p>
          </div>

          <div className="relative space-y-6 border-l border-[hsl(var(--nav-theme)/0.25)] pl-6">
            {developerModule.items.map((item: any, index: number) => (
              <div
                key={`${item.year}-${index}`}
                className="scroll-reveal relative rounded-2xl border border-border bg-white/5 p-6 transition-colors hover:border-[hsl(var(--nav-theme)/0.5)]"
              >
                <div className="absolute -left-[1.9rem] top-8 h-4 w-4 rounded-full border-2 border-background bg-[hsl(var(--nav-theme))]" />
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-[hsl(var(--nav-theme)/0.3)] bg-[hsl(var(--nav-theme)/0.1)] px-3 py-1 text-xs font-medium text-[hsl(var(--nav-theme-light))]">
                    {item.year}
                  </span>
                  <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {item.type}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 scroll-reveal md:grid-cols-3">
            <a
              href={officialBlogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-border bg-white/5 p-5 transition-colors hover:border-[hsl(var(--nav-theme)/0.5)]"
            >
              <TrendingUp className="mb-3 h-5 w-5 text-[hsl(var(--nav-theme-light))]" />
              <h3 className="mb-2 font-bold">Official Reveal Article</h3>
              <p className="text-sm text-muted-foreground">
                Read Firesprite’s launch overview for the story, cast, and 2027
                release plan.
              </p>
            </a>
            <a
              href={firespriteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-border bg-white/5 p-5 transition-colors hover:border-[hsl(var(--nav-theme)/0.5)]"
            >
              <Home className="mb-3 h-5 w-5 text-[hsl(var(--nav-theme-light))]" />
              <h3 className="mb-2 font-bold">Firesprite Studio Page</h3>
              <p className="text-sm text-muted-foreground">
                Track the developer page that lists Until Dawn 2 alongside its
                PS5 release window.
              </p>
            </a>
            <a
              href={stateOfPlayUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-border bg-white/5 p-5 transition-colors hover:border-[hsl(var(--nav-theme)/0.5)]"
            >
              <MessageCircle className="mb-3 h-5 w-5 text-[hsl(var(--nav-theme-light))]" />
              <h3 className="mb-2 font-bold">State of Play Recap</h3>
              <p className="text-sm text-muted-foreground">
                Revisit the June 2026 State of Play roundup that introduced the
                sequel publicly.
              </p>
            </a>
          </div>
        </div>
      </section>

      {mobileBannerAd && (
        <AdBanner
          type={mobileBannerAd.type}
          adKey={mobileBannerAd.adKey}
          className="md:hidden"
        />
      )}

      <Suspense fallback={<LoadingPlaceholder />}>
        <FAQSection
          title={t.faq.title}
          titleHighlight={t.faq.titleHighlight}
          subtitle={t.faq.subtitle}
          questions={t.faq.questions}
        />
      </Suspense>

      <Suspense fallback={<LoadingPlaceholder />}>
        <CTASection
          title={t.cta.title}
          description={t.cta.description}
          joinCommunity={t.cta.joinCommunity}
          joinGame={t.cta.joinGame}
        />
      </Suspense>

      <AdBanner
        type="banner-300x250"
        adKey={process.env.NEXT_PUBLIC_AD_BANNER_300X250}
        className="md:hidden"
      />
      <AdBanner
        type="banner-728x90"
        adKey={process.env.NEXT_PUBLIC_AD_BANNER_728X90}
        className="hidden md:flex"
      />

      <footer className="border-t border-border bg-white/[0.02]">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-xl font-bold text-[hsl(var(--nav-theme-light))]">
                {t.footer.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t.footer.description}
              </p>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">{t.footer.resources}</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href={officialGameUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition hover:text-[hsl(var(--nav-theme-light))]"
                  >
                    Official Game Page
                  </a>
                </li>
                <li>
                  <a
                    href={officialWishlistUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition hover:text-[hsl(var(--nav-theme-light))]"
                  >
                    PlayStation Store Wishlist
                  </a>
                </li>
                <li>
                  <a
                    href={officialBlogUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition hover:text-[hsl(var(--nav-theme-light))]"
                  >
                    Reveal Article
                  </a>
                </li>
                <li>
                  <a
                    href={firespriteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition hover:text-[hsl(var(--nav-theme-light))]"
                  >
                    Firesprite Site
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">{t.footer.community}</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href={playStationXUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition hover:text-[hsl(var(--nav-theme-light))]"
                  >
                    {t.footer.discord}
                  </a>
                </li>
                <li>
                  <a
                    href={firespriteXUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition hover:text-[hsl(var(--nav-theme-light))]"
                  >
                    {t.footer.twitter}
                  </a>
                </li>
                <li>
                  <a
                    href={communityRedditUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition hover:text-[hsl(var(--nav-theme-light))]"
                  >
                    {t.footer.steamCommunity}
                  </a>
                </li>
                <li>
                  <a
                    href={officialTrailerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition hover:text-[hsl(var(--nav-theme-light))]"
                  >
                    {t.footer.steamStore}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">{t.footer.legal}</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="text-muted-foreground transition hover:text-[hsl(var(--nav-theme-light))]"
                  >
                    {t.footer.about}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-muted-foreground transition hover:text-[hsl(var(--nav-theme-light))]"
                  >
                    {t.footer.privacy}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="text-muted-foreground transition hover:text-[hsl(var(--nav-theme-light))]"
                  >
                    {t.footer.terms}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/copyright"
                    className="text-muted-foreground transition hover:text-[hsl(var(--nav-theme-light))]"
                  >
                    {t.footer.copyrightNotice}
                  </Link>
                </li>
              </ul>
              <div className="mt-6 rounded-xl border border-[hsl(var(--nav-theme)/0.25)] bg-[hsl(var(--nav-theme)/0.08)] p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[hsl(var(--nav-theme-light))]" />
                  <div>
                    <p className="mb-2 text-sm font-semibold">
                      Official Sources
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Use the PlayStation and Firesprite links above for primary
                      release, trailer, and store updates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 border-t border-border pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
            <p>{t.footer.copyright}</p>
            <p>{t.footer.disclaimer}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
