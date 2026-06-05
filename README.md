# Promptzoa

AI profile photo and lookbook generation platform — no prompts needed.

---

## Tech Stack

| Category | Package | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.2.6 |
| Language | TypeScript | ^5 |
| Styling | Tailwind CSS v4 | ^4 |
| UI Components | shadcn/ui + Radix UI | latest |
| Icons | Lucide React | ^1.17.0 |
| i18n | next-intl | ^4.13.0 |
| Animation | tw-animate-css | ^1.4.0 |

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
promptzoa.com/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx       # locale별 레이아웃 (폰트, NextIntlClientProvider)
│   │   └── page.tsx         # 메인 페이지
│   ├── globals.css          # 전역 스타일 + @font-face + Tailwind 테마
│   ├── layout.tsx           # 루트 레이아웃 (최소)
│   └── page.tsx             # / → /en 리다이렉트
│
├── components/
│   ├── ui/
│   │   └── button.tsx       # shadcn/ui Button
│   ├── Header.tsx           # 헤더 (로고, CTA, 다크모드 토글)
│   └── Hero.tsx             # 히어로 섹션
│
├── i18n/
│   ├── routing.ts           # 지원 로케일 정의 (en, ko)
│   └── request.ts           # 서버 요청별 locale/messages 설정
│
├── messages/
│   ├── en.json              # 영어 번역
│   └── ko.json              # 한국어 번역
│
├── public/
│   └── fonts/               # 로컬 폰트 (woff2)
│       ├── anyvid.woff2
│       ├── nanum-square-neo.woff2
│       ├── paperlogy-regular.woff2
│       ├── paperlogy-semibold.woff2
│       └── paperlogy-black.woff2
│
├── middleware.ts             # next-intl 로케일 감지 & 리다이렉트
└── next.config.ts            # next-intl 플러그인 적용
```

---

## Fonts

### Google Fonts (next/font/google)

- **Google Sans Flex** — 메인 폰트. Variable font (wght 1–1000, wdth, opsz, slnt, GRAD, ROND 축 지원)
  - Tailwind 클래스: `font-google-sans-flex`

### Local Fonts (public/fonts)

| 폰트명 | 파일 | weight | Tailwind 클래스 |
|---|---|---|---|
| Anyvid | anyvid.woff2 | 400 | `font-anyvid` |
| Nanum Square Neo | nanum-square-neo.woff2 | 400 | `font-nanum` |
| Paperlogy | paperlogy-regular.woff2 | 400 | `font-paperlogy` |
| Paperlogy | paperlogy-semibold.woff2 | 600 | `font-paperlogy` |
| Paperlogy | paperlogy-black.woff2 | 900 | `font-paperlogy` |

모든 폰트는 `app/globals.css`의 `@font-face` + `@theme inline`에 CSS 변수로 등록되어 있습니다.

---

## Internationalization (i18n)

**next-intl v4** 기반. 미들웨어가 브라우저 언어를 감지해 자동 리다이렉트합니다.

| URL | 언어 |
|---|---|
| `/en` | English |
| `/ko` | 한국어 |

번역 파일은 `messages/` 폴더에서 관리합니다. 새로운 문자열 추가 예시:

```json
// messages/en.json
{
  "Header": {
    "logo": "Prompt.zoa",
    "getStarted": "Get Started"
  },
  "Hero": {
    "title": "One photo. Infinite AI portraits, instantly.",
    "description": "Generate stunning AI profile photos..."
  }
}
```

컴포넌트에서 사용:

```tsx
import { useTranslations } from "next-intl";

export function MyComponent() {
  const t = useTranslations("Hero");
  return <h1>{t("title")}</h1>;
}
```

---

## Styling

Tailwind CSS v4 (`@theme inline` 방식).

- **CSS 변수** → `@theme inline` → **Tailwind 유틸리티 클래스** 자동 생성
- 다크모드: `@custom-variant dark (&:is(.dark *))`

---

## Scripts

```bash
npm run dev      # 개발 서버 (http://localhost:3000)
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버 실행
npm run lint     # ESLint 검사
```

---

## Deployment

Vercel 배포 권장. `main` 브랜치에 푸시하면 자동 배포됩니다.

```bash
npm run build
```
