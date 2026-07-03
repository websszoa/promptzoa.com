"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { illustrations } from "@/lib/illustrations";

interface IllustCardsProps {
  locale: string;
}

export function IllustCards({ locale }: IllustCardsProps) {
  const t = useTranslations("IllustCards");
  const [randomIndices, setRandomIndices] = useState<number[]>(
    illustrations.map(() => 0),
  );

  useEffect(() => {
    setRandomIndices(
      illustrations.map((item) =>
        Math.floor(Math.random() * item.images.length),
      ),
    );
  }, []);

  return (
    <section className="mt-16">
      <div className="mb-6 text-center">
        <h2 className="title text-2xl text-foreground sm:text-3xl">
          {t("title")}
        </h2>
        <p className="description mt-2 text-muted-foreground">
          {t("description")}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8">
        {illustrations.map((item, index) => {
          const image = item.images[randomIndices[index]];
          return (
            <Link
              key={item.id}
              href={`/${locale}/illustrations/${item.id}`}
              className="group overflow-hidden rounded-xl bg-muted block"
            >
              <Image
                src={image.src}
                alt={image.en.title}
                width={960}
                height={1280}
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, (max-width: 1536px) 17vw, 13vw"
                className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
