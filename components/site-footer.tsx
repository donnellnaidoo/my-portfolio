export const dynamic = "auto";

import { siteConfig } from "@/config/site";
import Link from "next/link";

export async function SiteFooter() {
  return (
    <footer className="py-2 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="container flex flex-col items-center justify-center py-4 space-y-2">
          <div className="max-w-3xl text-xs leading-relaxed text-center sm:text-sm text-balance text-muted-foreground">
            <span>©2026</span>
          </div>
          <div className="text-xs text-center sm:text-sm text-muted-foreground">
            Developed by{" "}
            <Link
              href={siteConfig.links.githubProfile}
              target="_blank"
              rel="noreferrer"
              className="font-medium transition-colors text-primary hover:text-primary/80"
            >
              Donnell Naidoo
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}