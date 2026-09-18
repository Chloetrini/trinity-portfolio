import type { Metadata } from "next";

import { ThemeProvider } from "@/context/theme.context";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trinity Egbukwu · Full-Stack Developer",
  description: "Trinity Egbukwu — Full-stack developer. First Class Honours grad turned software engineer.",
  icons: { icon: "/favicon.svg" },
};

// Applies the saved/preferred theme before first paint, so there's no
// flash of the wrong theme and no hydration mismatch once React mounts
// (ThemeProvider reads this same class back on its first effect).
const THEME_INIT_SCRIPT = `
(function () {
  try {
    var saved = localStorage.getItem("trinity-portfolio-theme");
    var isLight = saved === "light" || (!saved && window.matchMedia("(prefers-color-scheme: light)").matches);
    if (isLight) document.documentElement.classList.add("light");
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider>
          <div className="relative min-h-screen">
            <div
              aria-hidden
              className="pointer-events-none fixed inset-0 z-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 15% 0%, color-mix(in srgb, var(--accent) 12%, transparent), transparent 40%), radial-gradient(circle at 85% 20%, rgba(240,168,208,0.06), transparent 40%)",
              }}
            />
            <Navbar />
            <main className="relative z-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
