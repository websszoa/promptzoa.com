import Image from "next/image";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";

const heroImages = [
  {
    src: "/image-illust/illust_1-1.webp",
    alt: "빈티지 수채화 스타일로 변형한 인물 일러스트",
    label: "WATERCOLOR",
  },
  {
    src: "/image-illust/illust_2-1.webp",
    alt: "플로럴 콜라주 스타일로 변형한 인물 일러스트",
    label: "COLLAGE",
  },
  {
    src: "/image-illust/illust_3-1.webp",
    alt: "워터컬러 스케치 스타일로 변형한 인물 일러스트",
    label: "SKETCH",
  },
  {
    src: "/image-illust/illust_4-1.webp",
    alt: "파스텔 플로럴 스타일로 변형한 인물 일러스트",
    label: "PASTEL",
  },
] as const;

export function IllustHero() {
  return (
    <section
      id="about"
      className="py-12 shell:py-16 desktop:py-20 wide:py-22"
      aria-labelledby="illust-hero-title"
    >
      <div className="grid items-center gap-10 desktop:grid-cols-[minmax(0,0.85fr)_minmax(430px,1.15fr)] desktop:gap-12 wide:gap-18">
        <div className="max-w-155">
          <p
            className="mb-5 flex items-center gap-2 font-openai-sans text-[9px] font-semibold tracking-[1.4px] text-studio-accent-dark shell:text-[10px] shell:tracking-[1.7px]"
            lang="en"
          >
            <Sparkles size={13} aria-hidden="true" />
            ONE PHOTO, MANY ILLUSTRATIONS
          </p>
          <h1
            id="illust-hero-title"
            className="wrap-break-word text-[clamp(35px,9.5vw,52px)] fontzoa-cafe24-dangdanghae leading-tight tracking-[-2px] shell:text-[clamp(43px,5vw,68px)] shell:tracking-[-3px]"
          >
            사진은 하나<span className="text-studio-accent">,</span>
            <br />
            <span className="font-normal text-[#85827c]">
              그림은 여러 스타일.
            </span>
          </h1>
          <p className="mt-6 max-w-120 text-sm leading-6 text-studio-copy shell:text-[15px]">
            같은 사진도 수채화, 스케치, 콜라주처럼 어떤 스타일을 선택하느냐에
            따라 전혀 다른 일러스트가 됩니다. 원하는 그림체를 프롬프트로
            시작해보세요.
          </p>
          <a
            href="#illust"
            className="group mt-7 inline-flex items-center gap-3 text-sm"
          >
            일러스트 둘러보기
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
                  alt="여러 일러스트의 바탕이 된 원본 인물 사진"
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
