import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {
  APP_NAME,
  APP_DESCRIPTION,
  APP_KEYWORDS,
  APP_SLOGAN,
  APP_SITE_URL,
} from "@/lib/constants";

const paperlogy = localFont({
  src: [
    { path: "../public/fonts/paperlogy-regular.woff2", weight: "400" },
    { path: "../public/fonts/paperlogy-semibold.woff2", weight: "600" },
    { path: "../public/fonts/paperlogy-black.woff2", weight: "900" },
  ],
  variable: "--font-paperlogy-variable",
  display: "swap",
});

const openAISans = localFont({
  src: [
    { path: "../public/fonts/OpenAISans-Regular.woff2", weight: "400" },
    { path: "../public/fonts/OpenAISans-Semibold.woff2", weight: "600" },
  ],
  variable: "--font-openai",
  display: "swap",
  preload: false,
});

const nanumSquareNeo = localFont({
  src: "../public/fonts/nanum-square-neo.woff2",
  variable: "--font-nanum-square-neo-variable",
  display: "swap",
  preload: false,
});

const anyvid = localFont({
  src: "../public/fonts/anyvid.woff2",
  variable: "--font-anyvid-variable",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(APP_SITE_URL),
  title: {
    default: `${APP_NAME} — ${APP_SLOGAN}`,
    template: `%s | ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  applicationName: APP_NAME,
  keywords: APP_KEYWORDS.split(",").map((keyword) => keyword.trim()),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${paperlogy.variable} ${openAISans.variable} ${nanumSquareNeo.variable} ${anyvid.variable} scroll-smooth scroll-pt-6 shell:scroll-pt-8 motion-reduce:scroll-auto antialiased`}
    >
      <body className="m-0 bg-studio-canvas selection:bg-[#f5dab7] selection:text-[#27211a]">
        <a
          className="fixed left-3 top-3 z-100 translate-y-[-160%] rounded-md bg-[#171717] px-5 py-3 text-white focus:translate-y-0"
          href="#main-content"
        >
          본문 바로가기
        </a>
        {children}
      </body>
    </html>
  );
}
