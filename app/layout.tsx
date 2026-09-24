import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import "./globals.css";
import CursorGlow from "../components/layout/CursorGlow";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { getDictionary } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "AWS Student Community Day IUC 2026 — Learn. Build. Deploy. | Douala",
  description:
    "Rejoins la plus grande conférence cloud étudiante du Cameroun. AWS Student Community Day IUC 2026 — Mains sur les labs Amazon Bedrock, Serverless, DevSecOps. Campus IUC Denver, Douala. 31 Octobre 2026. Gratuit pour les étudiants.",
  keywords: [
    "AWS Community Day",
    "AWS Student Community Day",
    "SBG IUC",
    "cloud Cameroun",
    "Amazon Web Services",
    "Douala tech",
    "AWS certification",
    "Denver",
    "IUC Cameroun",
    "cloud computing Afrique",
    "Andy Tchouta",
    "AWS Student Builder Group",
  ],
  authors: [{ name: "AWS Student Builder Group IUC" }],
  creator: "AWS Student Builder Group IUC",
  openGraph: {
    title: "AWS Student Community Day IUC 2026 — Learn. Build. Deploy.",
    description:
      "La conférence cloud étudiante de référence au Cameroun. Hands-on Labs, Speakers experts, Networking. 31 Octobre 2026 — Campus IUC Denver, Douala.",
    url: "https://scd.awssbgiuc.com",
    siteName: "AWS SCD IUC 2026",
    locale: "fr_CM",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AWS Student Community Day IUC 2026",
    description: "La conférence cloud étudiante de référence au Cameroun. 31 Octobre 2026.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo/AWS_SBG_RGB_Program Icon_Amber.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090909",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const locale = (cookieStore.get("NEXT_LOCALE")?.value as "fr" | "en") || "fr";
  const dictFr = await getDictionary("fr");
  const dictEn = await getDictionary("en");

  return (
    <html lang={locale} className="scroll-smooth">
      <body className="bg-canvas text-ink antialiased">
        <LanguageProvider locale={locale} dictionaries={{ fr: dictFr, en: dictEn }}>
          <CursorGlow />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
