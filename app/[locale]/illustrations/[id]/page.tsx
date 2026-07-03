import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/Header";
import { IllustDetail } from "@/components/IllustDetail";
import { Footer } from "@/components/Footer";
import { getIllustrationById, illustrations } from "@/lib/illustrations";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    illustrations.map((illustration) => ({ locale, id: illustration.id })),
  );
}

export default async function IllustrationPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  setRequestLocale(locale);

  const illustration = getIllustrationById(id);
  if (!illustration) notFound();

  return (
    <>
      <Header locale={locale} />
      <main className="flex-1">
        <IllustDetail illustration={illustration} locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
