"use client";

import { useTranslation } from "../providers/LanguageProvider";

export default function VenueSection() {
  const { t } = useTranslation();

  return (
    <section
      id="venue"
      className="section-padding"
      style={{ backgroundColor: "#090909", borderTop: "1px solid #1a1a1a" }}
    >
      <div className="container-main">
        {/* Header */}
        <div className="mb-10">
          <span className="eyebrow mb-4 block">{t("venue.eyebrow")}</span>
          <h2 className="text-display-xl text-ink">
            {t("venue.titleP1")}<br />{t("venue.titleP2")}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-6">
          {/* Left: info */}
          <div className="flex flex-col gap-4">
            {/* Address card */}
            <div className="card-surface-1" style={{ padding: "28px" }}>
              <div className="flex items-start gap-4">
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #FF9900, #ff7a3d)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M10 2C7.24 2 5 4.24 5 7C5 11 10 18 10 18C10 18 15 11 15 7C15 4.24 12.76 2 10 2ZM10 9C8.9 9 8 8.1 8 7C8 5.9 8.9 5 10 5C11.1 5 12 5.9 12 7C12 8.1 11.1 9 10 9Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-headline text-ink" style={{ fontSize: "16px", marginBottom: "6px" }}>
                    {t("venue.addressTitle")}
                  </h3>
                  <p className="text-body" style={{ color: "#888", lineHeight: "1.6" }}>
                    {t("venue.addressDesc.0")}<br />
                    {t("venue.addressDesc.1")}<br />
                    {t("venue.addressDesc.2")}
                  </p>
                </div>
              </div>
            </div>

            {/* Date & Time */}
            <div className="card-surface-1" style={{ padding: "28px" }}>
              <div className="flex items-start gap-4">
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #6a4cf5, #4f35d4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="3" y="4" width="14" height="13" rx="2" stroke="white" strokeWidth="1.5" />
                    <path d="M7 2V5M13 2V5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M3 8H17" stroke="white" strokeWidth="1.5" />
                    <rect x="7" y="11" width="2" height="2" rx="0.5" fill="white" />
                    <rect x="11" y="11" width="2" height="2" rx="0.5" fill="white" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-headline text-ink" style={{ fontSize: "16px", marginBottom: "6px" }}>
                    {t("venue.dateTitle")}
                  </h3>
                  <p className="text-body" style={{ color: "#888", lineHeight: "1.6" }}>
                    {t("venue.dateDesc.0")}<br />
                    {t("venue.dateDesc.1")}
                  </p>
                </div>
              </div>
            </div>

            {/* Access info */}
            <div className="card-surface-2" style={{ padding: "28px" }}>
              <h3 className="text-headline text-ink mb-4" style={{ fontSize: "16px" }}>
                {t("venue.accessTitle")}
              </h3>
              <div className="flex flex-col gap-3">
                {[
                  { icon: "🚌", titleKey: "venue.access1Title", descKey: "venue.access1Desc" },
                  { icon: "🚗", titleKey: "venue.access2Title", descKey: "venue.access2Desc" },
                  { icon: "📍", titleKey: "venue.access3Title", descKey: "venue.access3Desc" },
                ].map((item) => (
                  <div key={item.titleKey} className="flex items-start gap-3">
                    <span className="text-lg">{item.icon}</span>
                    <div>
                      <div className="text-caption text-ink" style={{ marginBottom: "2px" }}>
                        {t(item.titleKey)}
                      </div>
                      <div className="text-caption" style={{ color: "#666", lineHeight: "1.5" }}>
                        {t(item.descKey)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Google Map */}
          <div
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid #1a1a1a",
              minHeight: "420px",
              position: "relative",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.6384610758623!2d9.735969199999998!3d4.0937785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610e0842bf9ab3%3A0x126ffff28db52c06!2sISMA-INSTITUT%20SUPERIEUR%20DE%20MANAGEMENT!5e0!3m2!1sfr!2sza!4v1790096719087!5m2!1sfr!2sza"
              width="100%"
              height="100%"
              style={{
                border: 0,
                display: "block",
                minHeight: "420px",
                filter: "invert(90%) hue-rotate(180deg) saturate(0.8) brightness(0.85)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Campus IUC Denver, Douala"
            />
            {/* Overlay label */}
            <div
              style={{
                position: "absolute",
                bottom: "16px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "max-content",
                background: "rgba(9,9,9,0.88)",
                backdropFilter: "blur(12px)",
                border: "1px solid #262626",
                borderRadius: "10px",
                padding: "10px 16px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "#FF9900", boxShadow: "0 0 8px #FF9900" }}
              />
              <span className="text-caption text-ink">Campus IUC Denver (Anciennement ISMA) · Douala</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
