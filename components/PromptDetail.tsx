"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import type { Prompt } from "@/lib/prompts";

interface PromptDetailProps {
  prompt: Prompt;
  locale: string;
}

export function PromptDetail({ prompt, locale }: PromptDetailProps) {
  const t = useTranslations("PromptDetail");
  const [copied, setCopied] = useState(false);
  const [copiedVariation, setCopiedVariation] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const content =
    locale === "ko" ? prompt.ko : locale === "ja" ? prompt.ja : prompt.en;

  const activeImage = prompt.images[activeIndex];

  function handleCopy() {
    navigator.clipboard.writeText(content.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function handleCopyVariation(index: number, text: string) {
    navigator.clipboard.writeText(text);
    setCopiedVariation(index);
    setTimeout(() => setCopiedVariation(null), 2000);
  }

  return (
    <div className="mx-auto max-w-6xl py-10 px-6">
      <Link
        href={`/${locale}`}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="size-4" />
        {t("back")}
      </Link>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* Image Gallery */}
        <div className="flex flex-col gap-3 lg:sticky lg:top-20 lg:self-start">
          {/* 메인 이미지 */}
          <div className="relative overflow-hidden rounded-2xl bg-muted">
            <Image
              src={activeImage.src}
              alt={content.title}
              width={960}
              height={1280}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full object-cover"
              priority
            />
            <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs text-white backdrop-blur-sm">
              {activeImage.ai}
            </span>
          </div>

          {/* 썸네일 */}
          {prompt.images.length > 1 && (
            <div
              className="grid gap-2"
              style={{ gridTemplateColumns: "repeat(auto-fill, minmax(64px, 1fr))" }}
            >
              {prompt.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`relative overflow-hidden rounded-lg aspect-[4/5] w-full transition-all ${
                    activeIndex === index
                      ? "ring-2 ring-foreground opacity-100"
                      : "opacity-50 hover:opacity-80"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={`${content.title} ${index + 1}`}
                    fill
                    sizes="(max-width: 1024px) 16vw, 8vw"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-2">
            {content.tags.map((tag) => (
              <span
                key={tag}
                className="tag rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="title text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {content.title}
          </h1>

          <div className="rounded-xl border border-border bg-muted/50 p-5">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {t("promptLabel")}
              </span>
              <button
                onClick={handleCopy}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              >
                {copied ? t("copied") : t("copy")}
              </button>
            </div>
            <p className="description text-sm leading-relaxed text-muted-foreground whitespace-pre-wrap">
              {content.prompt}
            </p>
          </div>

          {content.variations && content.variations.length > 0 && (
            <div className="flex flex-col gap-3">
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {t("variationsLabel")}
              </span>
              {content.variations.map((variation, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border bg-muted/50 p-4"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-medium text-muted-foreground">
                      {index + 2}
                    </span>
                    <button
                      onClick={() => handleCopyVariation(index, variation)}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-red-500 hover:text-red-500"
                    >
                      {copiedVariation === index ? t("copied") : t("copy")}
                    </button>
                  </div>
                  <p className="description text-sm leading-relaxed text-muted-foreground">
                    {variation}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
