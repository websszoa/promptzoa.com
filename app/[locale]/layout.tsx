import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { LangSetter } from "@/components/LangSetter";


const metaByLocale: Record<string, { title: string; description: string; keywords: string[] }> = {
  en: {
    title: "Promptzoa — Turn One Photo Into Infinite AI Portraits",
    description:
      "Upload one photo and instantly generate stunning AI profile photos, lookbook images, and creative portraits. Browse curated prompts and recreate any style.",
    keywords: [
      "AI portrait",
      "AI photo generator",
      "profile photo AI",
      "AI lookbook",
      "image prompt",
      "AI image",
      "portrait generator",
      "promptzoa",
    ],
  },
  ko: {
    title: "Promptzoa — 사진 한 장으로 AI 프로필·화보 자동 생성",
    description:
      "내 사진 한 장으로 AI 프로필 사진, 화보, 창의적인 포트레이트를 즉시 생성하세요. 다양한 스타일의 프롬프트를 확인하고 원하는 이미지를 만들어보세요.",
    keywords: [
      "AI 프로필 사진",
      "AI 이미지 생성",
      "프로필 사진 AI",
      "AI 화보",
      "이미지 프롬프트",
      "AI 포트레이트",
      "사진 생성기",
      "promptzoa",
    ],
  },
  ja: {
    title: "Promptzoa — 写真1枚でAIポートレートを無限に生成",
    description:
      "1枚の写真からAIプロフィール写真、ルックブック、クリエイティブなポートレートを瞬時に生成。厳選されたプロンプトを確認して、理想のイメージを作成しましょう。",
    keywords: [
      "AIポートレート",
      "AI画像生成",
      "プロフィール写真AI",
      "AIルックブック",
      "画像プロンプト",
      "AI写真",
      "ポートレートジェネレーター",
      "promptzoa",
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = metaByLocale[locale] ?? metaByLocale.en;
  const ogLocale = locale === "ko" ? "ko_KR" : locale === "ja" ? "ja_JP" : "en_US";

  return {
    title: {
      default: meta.title,
      template: `%s — Promptzoa`,
    },
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: "Promptzoa" }],
    creator: "Promptzoa",
    metadataBase: new URL("https://promptzoa.com"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "en": "/en",
        "ko": "/ko",
        "ja": "/ja",
      },
    },
    openGraph: {
      type: "website",
      locale: ogLocale,
      url: `https://promptzoa.com/${locale}`,
      siteName: "Promptzoa",
      title: meta.title,
      description: meta.description,
      images: [
        {
          url: "/images/prompt1.webp",
          width: 960,
          height: 1280,
          alt: "Promptzoa AI Portrait",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/images/prompt1.webp"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <LangSetter lang={locale} />
      {children}
    </NextIntlClientProvider>
  );
}
