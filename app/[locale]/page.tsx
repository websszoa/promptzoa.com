import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ImageCards } from "@/components/ImageCards";
import { Footer } from "@/components/Footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header locale={locale} />
      <main className="flex-1 px-6">
        <Hero />
        <ImageCards locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
