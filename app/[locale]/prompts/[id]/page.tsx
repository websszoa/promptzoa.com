import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/Header";
import { PromptDetail } from "@/components/PromptDetail";
import { Footer } from "@/components/Footer";
import { getPromptById, prompts } from "@/lib/prompts";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    prompts.map((prompt) => ({ locale, id: prompt.id }))
  );
}

export default async function PromptPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  setRequestLocale(locale);

  const prompt = getPromptById(id);
  if (!prompt) notFound();

  return (
    <>
      <Header locale={locale} />
      <main className="flex-1">
        <PromptDetail prompt={prompt} locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
