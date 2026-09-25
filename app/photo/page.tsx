import type { Metadata } from "next";
import { SiteSidebar } from "@/components/home/site-sidebar";
import { HomeHero } from "@/components/home/home-hero";
import { PromptGallery } from "@/components/home/prompt-gallery";
import { APP_NAME, APP_SITE_URL } from "@/lib/constants";

const title = `포토 프롬프트 | ${APP_NAME}`;
const description =
  "한 장의 사진을 다양한 분위기와 장면으로 바꿔주는 AI 포토 프롬프트 모음입니다.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/photo" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/photo",
    siteName: APP_NAME,
    title,
    description,
    images: [
      {
        url: "/image-person/person_22-1.webp",
        alt: "프롬프트조아의 AI 포토 프롬프트 영감",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/image-person/person_22-1.webp"],
  },
};

export default function PhotoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    url: `${APP_SITE_URL}/photo`,
    description,
    inLanguage: "ko-KR",
  };

  return (
    <div className="min-h-dvh wide:bg-[#713307] wide:bg-[radial-gradient(ellipse_at_65%_10%,#bc7a20,transparent_60%),radial-gradient(ellipse_at_70%_100%,#b8813f,transparent_50%)] wide:px-12 wide:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="mx-auto min-h-dvh max-w-[1720px] border-x border-studio-border bg-white shell:grid shell:grid-cols-[195px_minmax(0,1fr)] desktop:grid-cols-[250px_minmax(0,1fr)] wide:min-h-[calc(100dvh-128px)] wide:overflow-clip wide:rounded-[26px] wide:border-5 wide:border-[#baa087]">
        <SiteSidebar hideDetailsOnMobile />
        <main
          id="main-content"
          tabIndex={-1}
          className="min-w-0 px-6 shell:px-7 desktop:px-10 wide:px-9"
        >
          <HomeHero />
          <PromptGallery />
        </main>
      </div>
    </div>
  );
}
