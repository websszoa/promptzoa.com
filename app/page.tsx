import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { SiteSidebar } from "@/components/home/site-sidebar";
import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
  alternates: { canonical: "/" },
};

const categories = [
  {
    href: "/photo",
    eyebrow: "PHOTO PROMPTS",
    title: "포토",
    description:
      "한 장의 사진을 시네마틱, 패션, 판타지 등 새로운 장면으로 바꿔보세요.",
    image: "/image-person/person_3-1.webp",
    alt: "들판을 배경으로 촬영한 시네마틱 인물 사진",
    count: "48 STYLES",
  },
  {
    href: "/illustration",
    eyebrow: "ILLUSTRATION PROMPTS",
    title: "일러스트",
    description:
      "사진 속 인물을 수채화, 스케치, 콜라주 등 원하는 그림체로 표현해보세요.",
    image: "/image-illust/illust_2-1.webp",
    alt: "꽃과 패턴이 어우러진 인물 일러스트",
    count: "07 STYLES",
  },
] as const;

export default function Home() {
  return (
    <div className="min-h-dvh overflow-x-clip wide:bg-[#713307] wide:bg-[radial-gradient(ellipse_at_65%_10%,#bc7a20,transparent_60%),radial-gradient(ellipse_at_70%_100%,#b8813f,transparent_50%)] wide:px-12 wide:py-16">
      <div className="mx-auto min-h-dvh max-w-[1720px] border-x border-studio-border bg-white shell:grid shell:grid-cols-[195px_minmax(0,1fr)] desktop:grid-cols-[250px_minmax(0,1fr)] wide:min-h-[calc(100dvh-128px)] wide:overflow-clip wide:rounded-[26px] wide:border-5 wide:border-[#baa087]">
        <SiteSidebar hideDetailsOnMobile />
        <main
          id="main-content"
          tabIndex={-1}
          className="min-w-0 px-4 py-10 min-[400px]:px-6 shell:px-7 shell:py-16 desktop:px-10 desktop:py-20 wide:px-9"
        >
          <section aria-labelledby="home-title">
            <div className="grid gap-7 border-b border-studio-divider pb-9 desktop:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] desktop:items-end desktop:gap-14 desktop:pb-11">
              <div>
                <p
                  className="mb-5 flex items-center gap-2 font-openai-sans text-[9px] font-semibold tracking-[1.5px] text-studio-accent-dark shell:text-[10px]"
                  lang="en"
                >
                  <Sparkles size={13} aria-hidden="true" />
                  IMAGINE IT, PROMPT IT, CREATE IT
                </p>
                <h1
                  id="home-title"
                  className="text-[clamp(30px,8vw,70px)] fontzoa-cafe24-dangdanghae leading-[1.12] tracking-[-1.8px] shell:leading-[1.08] shell:tracking-[-4px]"
                >
                  당신의 사진<span className="text-studio-accent">,</span>
                  <br />
                  어떤 모습이 될까요?
                </h1>
              </div>
              <p className="max-w-115 text-sm leading-7 text-studio-copy desktop:pb-1">
                마음에 드는 스타일을 선택하고 사진을 더해보세요. 좋은 프롬프트가
                평범한 한 장을 새로운 포토와 일러스트로 바꿔줍니다.
              </p>
            </div>

            <div className="mt-8 grid gap-5 shell:grid-cols-2 desktop:gap-7">
              {categories.map((category, index) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className="group relative min-h-135 overflow-hidden rounded-[18px] bg-studio-surface shell:min-h-160 desktop:min-h-180"
                  aria-label={`${category.title} 페이지로 이동`}
                >
                  <Image
                    src={category.image}
                    alt={category.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] motion-reduce:transition-none"
                    sizes="(max-width: 600px) 100vw, 50vw"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/10 to-black/15" />

                  <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-3 p-4 text-white/80 min-[400px]:p-5 shell:p-6">
                    <span className="min-w-0 truncate font-openai-sans text-[8px] font-semibold tracking-[1.1px] min-[400px]:text-[9px] min-[400px]:tracking-[1.4px]">
                      {category.eyebrow}
                    </span>
                    <span className="font-openai-sans text-[9px] tracking-[1px]">
                      {category.count}
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-4 text-white min-[400px]:p-5 shell:p-7 desktop:p-8">
                    <div className="flex items-end justify-between gap-3 shell:gap-5">
                      <div className="min-w-0">
                        <h2 className="text-[clamp(32px,5vw,54px)] font-semibold tracking-[-2px]">
                          {category.title}
                        </h2>
                        <p className="mt-2.5 max-w-105 text-[11px] leading-5 text-white/75 min-[400px]:text-xs min-[400px]:leading-6 shell:mt-3 shell:text-sm">
                          {category.description}
                        </p>
                      </div>
                      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-[#17130f] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 shell:size-11">
                        <ArrowUpRight
                          className="size-4 shell:size-5"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
