import type { Metadata } from "next";
import { SiteSidebar } from "@/components/home/site-sidebar";
import { IllustHero } from "@/components/illust/illust-hero";
import { IllustGallery } from "@/components/illust/illust-gallery";
import { APP_NAME, APP_SITE_URL } from "@/lib/constants";

const title = `일러스트 프롬프트 | ${APP_NAME}`;
const description =
  "인물 사진을 원하는 일러스트 스타일로 바꿔주는 AI 프롬프트 모음입니다.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/illustration" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/illustration",
    siteName: APP_NAME,
    title,
    description,
    images: [
      {
        url: "/image-illust/illust_1-1.webp",
        alt: "프롬프트조아의 AI 일러스트 프롬프트 영감",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/image-illust/illust_1-1.webp"],
  },
};

export default function IllustrationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    url: `${APP_SITE_URL}/illustration`,
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
          <IllustHero />
          <IllustGallery />
        </main>
      </div>
    </div>
  );
}
