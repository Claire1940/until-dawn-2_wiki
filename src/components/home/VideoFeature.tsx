"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Play } from "lucide-react";

interface VideoFeatureProps {
  videoId: string;
  title: string;
}

export function VideoFeature({ videoId, title }: VideoFeatureProps) {
  const [shouldPlay, setShouldPlay] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const previewUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&playsinline=1&rel=0`;

  useEffect(() => {
    const node = containerRef.current;
    if (!node || shouldPlay) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldPlay(true);
          observer.disconnect();
        }
      },
      { threshold: 0.45 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [shouldPlay]);

  return (
    <div className="space-y-4">
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-lg border border-border bg-black"
        style={{ paddingBottom: "56.25%" }}
      >
        {shouldPlay ? (
          <iframe
            className="absolute left-0 top-0 h-full w-full"
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setShouldPlay(true)}
            className="absolute inset-0 flex h-full w-full items-center justify-center bg-black/35 transition hover:bg-black/25"
            aria-label={`Play ${title}`}
          >
            <img
              src={previewUrl}
              alt={title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <span
              className="relative z-10 inline-flex items-center gap-3 rounded-full border border-white/20
              bg-black/65 px-5 py-3 text-sm font-semibold text-white backdrop-blur"
            >
              <Play className="h-4 w-4 fill-current" />
              Play Trailer
            </span>
          </button>
        )}
      </div>

      <div className="flex justify-center">
        <button
          type="button"
          onClick={() => setShouldPlay(true)}
          className="inline-flex items-center gap-2 rounded-lg border border-[hsl(var(--nav-theme)/0.3)] bg-[hsl(var(--nav-theme)/0.08)] px-4 py-2 text-sm font-medium text-[hsl(var(--nav-theme-light))] transition-colors hover:bg-[hsl(var(--nav-theme)/0.14)]"
        >
          <Play className="h-4 w-4 fill-current" />
          Play Here
        </button>
        <a
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-3 inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
        >
          Watch on YouTube
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
