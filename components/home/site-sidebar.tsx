import Link from "next/link";
import { ArrowRight, AtSign, Mail } from "lucide-react";
import { navigation } from "@/lib/navigation";
import {
  APP_NAME,
  APP_COPYRIGHT,
  APP_EMAIL,
  APP_INSTAGRAM_URL,
  APP_THREADS_URL,
} from "@/lib/constants";

const contactLinks = [
  {
    key: "email",
    label: "이메일 문의",
    href: `mailto:${APP_EMAIL}`,
    external: false,
    icon: <Mail size={15} aria-hidden="true" />,
  },
  {
    key: "instagram",
    label: "인스타그램",
    href: APP_INSTAGRAM_URL,
    external: true,
    icon: (
      <svg
        width={15}
        height={15}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle
          cx="17.25"
          cy="6.75"
          r="0.75"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    ),
  },
  {
    key: "threads",
    label: "스레드",
    href: APP_THREADS_URL,
    external: true,
    icon: <AtSign size={15} aria-hidden="true" />,
  },
].filter((link) => link.href);

export function SiteSidebar({
  hideDetailsOnMobile = false,
}: {
  hideDetailsOnMobile?: boolean;
}) {
  return (
    <aside className="border-b border-studio-divider shell:border-r shell:border-b-0">
      <div className="flex h-auto flex-col p-4 shell:sticky shell:top-0 shell:h-dvh shell:px-5.5 shell:py-10.5 desktop:px-8 desktop:pb-0 wide:h-[calc(100dvh-128px)] wide:min-h-170">
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-2.25 text-2xl"
          aria-label={`${APP_NAME} 홈`}
        >
          <span className="font-paperlogy uppercase font-black">
            prompt.zoa
          </span>
        </Link>
        <nav
          className={hideDetailsOnMobile ? "hidden shell:block" : undefined}
          aria-label="주요 메뉴"
        >
          <ul className="mt-5 flex justify-between gap-3 shell:mt-10 shell:grid shell:gap-2">
            {navigation.map(({ href, label, icon: Icon }) => (
              <li key={label}>
                <Link
                  className="flex min-h-11 items-center gap-2.5 py-2 font-openai-sans text-[13px] transition-colors hover:text-studio-accent-dark shell:text-base"
                  href={href}
                  aria-label={label}
                >
                  <Icon
                    className="hidden shell:block"
                    size={17}
                    aria-hidden="true"
                  />
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div
          className={`mt-8 flex-col gap-6 border-t border-studio-divider pt-7 shell:mt-auto ${hideDetailsOnMobile ? "hidden shell:flex" : "flex"}`}
        >
          <div>
            <p className="text-sm font-semibold">
              마음에 드는 프롬프트가 있나요?
            </p>
            <p className="mt-1 text-xs text-studio-copy">
              지금 바로 둘러보세요.
            </p>
            <Link
              href="/photo#prompts"
              className="group mt-3 inline-flex w-fit items-center gap-1.5 border-b border-current pb-0.5 text-xs font-medium hover:text-studio-accent-dark"
            >
              프롬프트 보기
              <ArrowRight
                size={13}
                className="transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
          <div className="flex items-center gap-2">
            {contactLinks.map(({ key, label, href, icon, external }) => (
              <a
                key={key}
                href={href}
                aria-label={label}
                className="grid size-9 shrink-0 place-items-center rounded-full border border-[#e3e0db] text-studio-muted hover:bg-[#f5f2ec] hover:text-studio-accent-dark"
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {icon}
              </a>
            ))}
          </div>
          <p className="wrap-break-word font-openai-sans text-[12px] leading-[1.6] text-studio-muted">
            {APP_COPYRIGHT}
          </p>
        </div>
      </div>
    </aside>
  );
}
