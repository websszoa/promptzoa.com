import Image from "next/image";
import Link from "next/link";
import { prompts } from "@/lib/prompts";

interface ImageCardsProps {
  locale: string;
}

export function ImageCards({ locale }: ImageCardsProps) {
  return (
    <section className="">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8">
        {prompts.map((prompt, index) => (
          <Link
            key={prompt.id}
            href={`/${locale}/prompts/${prompt.id}`}
            className="group overflow-hidden rounded-xl bg-muted block"
          >
            <Image
              src={prompt.images[0].src}
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
