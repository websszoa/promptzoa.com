import Image from "next/image";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="py-20 text-center">
      <h1 className="title tracking-tight text-foreground text-3xl sm:text-5xl">
        {t("title")}
      </h1>
      <p className="description mt-4 text-muted-foreground">
        {t("description")}
      </p>
      <div className="mt-5">
        <Image
          src="/images/prompt-base1.webp"
          alt="base"
          width={200}
          height={200}
          className="mx-auto w-[100px] max-w-4xl rounded-xl"
          priority
        />
      </div>
    </section>
  );
}
