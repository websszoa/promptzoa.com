"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import promptImages from "@/data/prompt-image.json";

const BATCH_SIZE = 12;

function GalleryImage({
  src,
  alt,
  preload,
}: {
  src: string;
  alt: string;
  preload: boolean;
}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const [minimumElapsed, setMinimumElapsed] = useState(false);
  const settled = (imageLoaded || imageFailed) && minimumElapsed;

  useEffect(() => {
    const timer = window.setTimeout(() => setMinimumElapsed(true), 450);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className={`pointer-events-none absolute inset-0 z-10 grid place-items-center bg-[#e8e3dc] transition-opacity duration-500 ${
          settled ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden="true"
      >
        <span className="size-7 animate-spin rounded-full border-2 border-black/10 border-t-studio-accent motion-reduce:animate-none" />
      </div>
      <Image
        className={`object-cover transition-[opacity,transform,filter] duration-700 ease-out motion-reduce:transition-none ${
          imageLoaded && minimumElapsed
            ? "scale-100 opacity-100 blur-0"
            : "scale-[1.03] opacity-0 blur-[2px]"
        }`}
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 600px) 50vw, (max-width: 1000px) 33vw, 23vw"
        preload={preload}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageFailed(true)}
      />
      {imageFailed && minimumElapsed ? (
        <div className="absolute inset-0 grid place-items-center bg-[#eeeae4] px-4 text-center text-xs leading-5 text-studio-muted">
          이미지를 불러오지 못했습니다.
        </div>
      ) : null}
    </>
  );
}

export function PromptGallery() {
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const hasMore = visibleCount < promptImages.length;

  useEffect(() => {
    const target = loadMoreRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCount((count) =>
            Math.min(count + BATCH_SIZE, promptImages.length),
          );
        }
      },
      { rootMargin: "600px 0px" },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const visiblePrompts = promptImages.slice(0, visibleCount);

  return (
    <section id="prompts" className="pb-16" aria-labelledby="gallery-title">
      <div className="mb-8 flex flex-col gap-4 border-y border-studio-divider py-6 shell:flex-row shell:items-center shell:justify-between shell:gap-8 shell:py-5">
        <h2 id="gallery-title" className="whitespace-nowrap">
          어떤 스타일을 원하시나요<span className="text-studio-accent">?</span>
        </h2>
        <p className="max-w-140 text-xs leading-5 text-studio-copy shell:text-right shell:text-sm shell:leading-6">
          원하는 스타일을 고르고 본인의 사진을 넣어 새로운 이미지를
          만들어보세요.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 shell:grid-cols-3 desktop:grid-cols-4">
        {visiblePrompts.map((prompt, index) => (
          <article key={prompt.id}>
            <div className="relative aspect-3/4 overflow-hidden rounded-sm bg-studio-surface">
              <GalleryImage
                src={prompt.image[0]}
                alt={prompt.title}
                preload={index < 4}
              />
              <span className="absolute right-2.5 bottom-2.5 z-10 rounded-full bg-black/65 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm shell:right-3 shell:bottom-3 shell:text-[12px]">
                {prompt.style}
              </span>
            </div>
          </article>
        ))}
      </div>
      <div ref={loadMoreRef} className="mt-2 min-h-24" aria-live="polite">
        {hasMore ? (
          <div className="grid grid-cols-2 gap-4 shell:grid-cols-3 desktop:grid-cols-4">
            {Array.from({ length: 4 }, (_, index) => (
              <div
                key={index}
                className="grid aspect-3/4 place-items-center rounded-sm bg-[#e8e3dc]"
                aria-hidden="true"
              >
                <span className="size-7 animate-spin rounded-full border-2 border-black/10 border-t-studio-accent motion-reduce:animate-none" />
              </div>
            ))}
            <span className="sr-only">이미지를 불러오는 중입니다.</span>
          </div>
        ) : (
          <p className="py-8 text-center text-xs text-studio-muted">
            모든 이미지를 불러왔습니다.
          </p>
        )}
      </div>
    </section>
  );
}
