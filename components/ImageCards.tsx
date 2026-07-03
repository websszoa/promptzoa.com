"use client";

import Image from "next/image";
import Link from "next/link";
import { prompts } from "@/lib/prompts";
import { useState, useEffect } from "react";

interface ImageCardsProps {
  locale: string;
}

export function ImageCards({ locale }: ImageCardsProps) {
  const [randomIndices, setRandomIndices] = useState<number[]>(
    prompts.map(() => 0),
  );

  useEffect(() => {
    setRandomIndices(
      prompts.map((p) => Math.floor(Math.random() * p.images.length)),
    );
  }, []);

  return (
    <section>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8">
        {prompts.map((prompt, index) => (
          <Link
            key={prompt.id}
            href={`/${locale}/prompts/${prompt.id}`}
            className="group overflow-hidden rounded-xl bg-muted block"
          >
            <Image
              src={prompt.images[randomIndices[index]].src}
              alt={prompt.en.title}
              width={960}
              height={1280}
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, (max-width: 1536px) 17vw, 13vw"
              className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
              priority={index === 0}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
