"use client";

import Image from "next/image";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { useTranslations } from "next-intl";
import type { Illustration } from "@/lib/illustrations";

interface IllustDetailProps {
  illustration: Illustration;
  locale: string;
}

export function IllustDetail({ illustration, locale }: IllustDetailProps) {
  const t = useTranslations("IllustDetail");
  const [activeIndex, setActiveIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const activeImage = illustration.images[activeIndex];
  const content =
    locale === "ko"
      ? activeImage.ko
      : locale === "ja"
        ? activeImage.ja
        : activeImage.en;

  function handleCopy() {
    navigator.clipboard.writeText(content.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function handleSelectImage(index: number) {
    setActiveIndex(index);
    setCopied(false);
  }

  return (
    <div className="mx-auto max-w-full py-10 px-6">
      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Image Gallery - centered within the left half */}
        <div className="flex w-full flex-col items-center gap-3 bg-gray-100/50 rounded-3xl p-6 lg:w-1/2">
          <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-muted">
            <Image
              src={activeImage.src}
              alt={content.title}
              width={960}
              height={1280}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full object-cover"
              priority
            />
            <span className="absolute top-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs text-white backdrop-blur-sm">
              {activeImage.ai}
            </span>
            {activeImage.baseImage && (
              <div className="absolute bottom-3 right-3 h-28 w-20 overflow-hidden rounded-xl border-3 border-white shadow-lg">
                <Image
                  src={activeImage.baseImage}
                  alt="Reference"
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>

          {/* 썸네일 - 9개일 때 기준 크기로 고정 */}
          {illustration.images.length > 1 && (
            <div className="flex w-full max-w-2xl flex-wrap gap-2">
              {illustration.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => handleSelectImage(index)}
                  className={`relative h-[84px] w-[67px] shrink-0 cursor-pointer overflow-hidden rounded-lg transition-all ${
                    activeIndex === index
                      ? "ring-2 ring-foreground opacity-100"
                      : "opacity-50 hover:opacity-80"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={`${content.title} ${index + 1}`}
                    fill
                    sizes="67px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Prompt - right half, pinned to the right */}
        <div className="flex w-full flex-col gap-6 lg:w-1/2 lg:shrink-0 lg:sticky lg:top-20 lg:self-start bg-gray-100/40 p-6 rounded-3xl">
          <h1 className="title text-3xl tracking-tight text-foreground">
            {content.title}
          </h1>

          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {t("promptLabel")}
              </span>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              >
                {copied ? (
                  <>
                    <Check className="size-3.5" />
                    {t("copied")}
                  </>
                ) : (
                  <>
                    <Copy className="size-3.5" />
                    {t("copy")}
                  </>
                )}
              </button>
            </div>
            <div className="description font-light flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
              {content.prompt.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
