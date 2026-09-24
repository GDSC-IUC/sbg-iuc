"use client";

import Image from "next/image";
import { useTranslation } from "../providers/LanguageProvider";

export default function Footer() {
  const { t } = useTranslation();

  type FooterLink = {
    labelKey?: string | null;
    label?: string;
    href: string;
    target?: string;
  };

  type FooterSection = {
    titleKey: string;
    links: FooterLink[];
  };

  const FOOTER_SECTIONS: FooterSection[] = [
    {
      titleKey: "footer.sections.event",
      links: [
        { labelKey: "footer.links.programme", href: "#programme" },
        { labelKey: "footer.links.speakers", href: "#speakers" },
        { labelKey: "footer.links.team", href: "#team" },
        { labelKey: "footer.links.venue", href: "#venue" },
      ],
    },
    {
      titleKey: "footer.sections.participate",
      links: [
        { labelKey: "footer.links.register", href: "https://ly.reckot.com/aws-scd-iuc", target: "_blank" },
        { labelKey: "footer.links.submitTalk", href: "https://forms.gle/1KwnJWoy5jM3L97B9", target: "_blank" },
        { labelKey: "footer.links.volunteer", href: "https://forms.gle/4mabCrhG5cRfVCdF9", target: "_blank" },
        { labelKey: "footer.links.sponsoring", href: "#sponsoring" },
      ],
    },
    {
      titleKey: "footer.sections.community",
      links: [
        { labelKey: null, label: "Meetup (AWS SBG IUC)", href: "https://www.meetup.com/aws-sbg-at-univ-institute-of-the-coast-logbessou-campus/", target: "_blank" },
        { labelKey: null, label: "AWS re:Post", href: "https://repost.aws", target: "_blank" },
        { labelKey: null, label: "AWS Training", href: "https://aws.amazon.com/training", target: "_blank" },
        { labelKey: null, label: "AWS Certifications", href: "https://aws.amazon.com/certification", target: "_blank" },
      ],
    },
    {
      titleKey: "footer.sections.contact",
      links: [
        { labelKey: null, label: "awscloudclubiuc@gmail.com", href: "mailto:awscloudclubiuc@gmail.com" },
        { labelKey: null, label: "LinkedIn", href: "https://www.linkedin.com/in/aws-sbg-iuc/", target: "_blank" },
        { labelKey: null, label: "Instagram", href: "https://www.instagram.com/awssbgiuc/", target: "_blank" },
        { labelKey: null, label: "X", href: "https://x.com/awscloudclubiuc", target: "_blank" },
      ],
    },
  ];

  return (
    <footer
      style={{
        backgroundColor: "#090909",
        borderTop: "1px solid #1a1a1a",
        padding: "64px 0 32px",
      }}
    >
      <div className="container-main">
        {/* Top grid */}
        <div className="flex flex-col lg:flex-row gap-10 mb-16 justify-between">
          {/* Brand column */}
          <div className="lg:max-w-xs">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="relative w-8 h-8">
                <Image
                  src="/logo/AWS_SBG_RGB_Program Icon_Amber.png"
                  alt="AWS SBG IUC"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="font-mono text-ink-muted" style={{ fontSize: "10px", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  AWS SBG IUC
                </div>
                <div className="font-body font-bold text-ink" style={{ fontSize: "13px", letterSpacing: "-0.02em" }}>
                  Student Community Day 2026
                </div>
              </div>
            </div>
            <p className="text-caption" style={{ color: "#555", lineHeight: "1.7", maxWidth: "220px" }}>
              {t("footer.tagline")}
            </p>
            {/* AWS Badge */}
            <div
              className="mt-5 inline-flex items-center gap-2"
              style={{
                padding: "6px 12px",
                borderRadius: "6px",
                background: "#141414",
                border: "1px solid #1a1a1a",
              }}
            >
              <span className="font-mono" style={{ fontSize: "10px", letterSpacing: "0.05em", color: "#FF9900", textTransform: "uppercase" }}>
                AWS ✓ Official Community
              </span>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {FOOTER_SECTIONS.map((section) => (
              <div key={section.titleKey}>
                <h4 className="text-caption text-ink mb-4" style={{ letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  {t(section.titleKey)}
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target={"target" in link ? link.target : undefined}
                        rel={"target" in link ? "noopener noreferrer" : undefined}
                        className="text-caption transition-colors duration-200 hover:text-ink"
                        style={{ color: "#555" }}
                      >
                        {link.labelKey ? t(link.labelKey) : link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="divider mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-caption" style={{ color: "#444" }}>
            {t("footer.copyright")}
          </p>
          <div className="flex items-center gap-4">
            <span className="text-caption" style={{ color: "#333" }}>
              {t("footer.disclaimer")}
            </span>
          </div>
        </div>
      </div>

    </footer>
  );
}
