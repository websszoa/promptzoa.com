import Link from "next/link";

interface FooterProps {
  locale: string;
}

export function Footer({ locale }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-16">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-2">
            <Link
              href={`/${locale}`}
              className="text-lg font-semibold uppercase tracking-tight text-foreground"
            >
              Prompt.zoa
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Turn one photo into infinite AI portraits, instantly.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12 text-sm">
            <div className="flex flex-col gap-2">
              <span className="font-medium text-foreground">Explore</span>
              <Link
                href={`/${locale}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                href={`/${locale}/prompts/1`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Prompts
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-medium text-foreground">Legal</span>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-1 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {year} Promptzoa. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">Made with AI</p>
        </div>
      </div>
    </footer>
  );
}
