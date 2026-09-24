"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "../providers/LanguageProvider";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item">
      <button className="faq-trigger" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            background: "#141414",
            border: "1px solid #262626",
            flexShrink: 0,
            transition: "transform 0.3s ease",
            transform: open ? "rotate(45deg)" : "none",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 2V10M2 6H10" stroke="#999999" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div className={`faq-content ${open ? "open" : ""}`}>
        {a}
      </div>
    </div>
  );
}

export default function RegistrationFAQ() {
  const { t } = useTranslation();

  const faqItems = (t("faq.items") as unknown as { q: string; a: string }[]);

  return (
    <section
      id="register"
      className="section-padding"
      style={{ backgroundColor: "#090909", borderTop: "1px solid #1a1a1a" }}
    >
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Registration */}
          <div>
            <span className="eyebrow mb-4 block">{t("faq.eyebrow")}</span>
            <h2 className="text-display-lg text-ink mb-4">
              {t("faq.titleP1")}<br />{t("faq.titleP2")}
            </h2>
            <p className="text-body-lg mb-8" style={{ color: "#999", lineHeight: "1.6" }}>
              {t("faq.desc")}
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="https://ly.reckot.com/aws-scd-iuc"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-1 w-max"
                style={{ padding: "14px 28px", fontSize: "15px", display: "inline-flex", width: "fit-content" }}
              >
                <span className="flex items-center gap-1">{t("faq.btn")} <ArrowRight className="w-4 h-4 inline-block" /></span>
              </a>
              <p className="text-caption" style={{ color: "#444" }}>
                {t("faq.subbtn")}
              </p>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3 mt-6">
              <div className="flex -space-x-2">
                {["#6a4cf5", "#d44df0", "#ff7a3d", "#22c55e"].map((c, i) => (
                  <div
                    key={i}
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      backgroundColor: c,
                      border: "2px solid #090909",
                    }}
                  />
                ))}
              </div>
              <p className="text-caption" style={{ color: "#666" }}>
                {t("faq.proof")}
              </p>
            </div>
          </div>

          {/* Right: FAQ */}
          <div>
            <span className="eyebrow mb-4 block">{t("faq.faqEyebrow")}</span>
            <h2 className="text-display-lg text-ink mb-8">
              {t("faq.faqTitleP1")}<br />{t("faq.faqTitleP2")}
            </h2>
            <div>
              {Array.isArray(faqItems) && faqItems.map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
