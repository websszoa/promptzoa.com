import Image from "next/image";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";

const heroImages = [
  {
    src: "/image-person/person_1-1.webp",
    alt: "밝은 실내 의자에 앉아 있는 인물 사진",
    label: "LIFESTYLE",
  },
  {
    src: "/image-person/person_1-2.webp",
    alt: "햇살이 드는 주방에 서 있는 인물 사진",
    label: "EDITORIAL",
  },
  {
    src: "/image-person/person_1-3.webp",
    alt: "밝은 거실 소파에 앉아 있는 인물 사진",
    label: "PORTRAIT",
  },
  {
    src: "/image-person/person_1-4.webp",
    alt: "새로운 공간과 구도로 변형된 인물 사진",
    label: "MOMENT",
  },
] as const;

export function HomeHero() {
  return (
    <section
      id="about"
      className="py-12 shell:py-16 desktop:py-20 wide:py-22"
      aria-labelledby="hero-title"
    >
      <div className="grid items-center gap-10 desktop:grid-cols-[minmax(0,0.85fr)_minmax(430px,1.15fr)] desktop:gap-12 wide:gap-18">
        <div className="max-w-155">
          <p
            className="mb-5 flex items-center gap-2 font-openai-sans text-[9px] font-semibold tracking-[1.4px] text-studio-accent-dark shell:text-[10px] shell:tracking-[1.7px]"
            lang="en"
          >
            <Sparkles size={13} aria-hidden="true" />
            ONE PHOTO, MANY POSSIBILITIES
          </p>
          <h1
            id="hero-title"
            className="wrap-break-word text-[clamp(35px,9.5vw,52px)] fontzoa-cafe24-dangdanghae leading-tight tracking-[-2px] shell:text-[clamp(43px,5vw,68px)] shell:tracking-[-3px]"
          >
            사진은 하나<span className="text-studio-accent">,</span>
            <br />
            <span className="font-normal text-[#85827c]">
              가능성은 여러 가지.
            </span>
          </h1>
          <p className="mt-6 max-w-120 text-sm leading-6 text-studio-copy shell:text-[15px]">
            같은 사진도 어떤 장면을 상상하고 어떻게 설명하느냐에 따라 전혀 다른
            결과가 됩니다. 원하는 분위기와 구도를 정확히 꺼내는 데 필요한 건, 잘
            만든 프롬프트입니다.
          </p>
          <a
            href="#prompts"
            className="group mt-7 inline-flex items-center gap-3 text-sm"
          >
            프롬프트 둘러보기
            <span className="grid size-9 place-items-center rounded-full border border-[#dedbd5] transition-colors group-hover:bg-[#f5f2ec]">
              <ArrowDown size={17} aria-hidden="true" />
            </span>
          </a>
        </div>

        <div className="relative rounded-[24px] bg-[#f3efe8] p-3 shell:p-4">
          <div className="grid grid-cols-[0.82fr_1.18fr] gap-2.5 shell:gap-3">
            <figure className="relative overflow-hidden rounded-[16px] bg-[#ddd6ca]">
              <div className="relative h-full min-h-75 shell:min-h-105">
                <Image
                  src="/image-person/person_base1.webp"
                  alt="다양한 이미지의 바탕이 된 원본 인물 사진"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1000px) 40vw, 20vw"
                  priority
                />
              </div>
              <figcaption className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-1 font-openai-sans text-[8px] font-semibold tracking-[1px] backdrop-blur-sm shell:text-[9px]">
                ORIGINAL
              </figcaption>
            </figure>

            <div className="grid grid-cols-2 grid-rows-2 gap-2.5 shell:gap-3">
              {heroImages.map((image) => (
                <figure
                  key={image.src}
                  className="relative min-h-36 overflow-hidden rounded-[16px] bg-[#ddd6ca] shell:min-h-51"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1000px) 55vw, 28vw"
                  />
                  <figcaption className="absolute right-2 bottom-2 rounded-full bg-white/90 px-2 py-1 font-openai-sans text-[7px] font-semibold tracking-[0.7px] backdrop-blur-sm shell:right-3 shell:bottom-3 shell:text-[8px]">
                    {image.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="absolute top-1/2 left-[42%] grid size-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-[#f3efe8] bg-studio-accent text-white shadow-sm shell:size-12">
            <ArrowRight size={19} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
