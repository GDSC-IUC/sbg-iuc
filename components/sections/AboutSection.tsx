"use client";

import Image from "next/image";
import { useTranslation } from "../providers/LanguageProvider";

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="section-padding relative" style={{ backgroundColor: "transparent" }}>
      <div className="container-main scale-100">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="lg:w-5/12 flex flex-col justify-center space-y-8 lg:py-6">
            <h2 className="text-display-lg text-white">
              {t("about.title")}
            </h2>
            
            <div className="space-y-6 text-body-lg" style={{ color: "#999999", lineHeight: "1.7" }}>
              <p>
                {t("about.p1")}
              </p>
              <p>
                {t("about.p2")}
              </p>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-10 pt-4">
              <div>
                <div className="text-3xl font-bold text-gradient-aws mb-1" style={{ color: "#FF9900" }}>14</div>
                <div className="text-xs uppercase tracking-wider font-bold" style={{ color: "#666" }}>{t("about.stat1")}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient-aws mb-1" style={{ color: "#FF9900" }}>6+</div>
                <div className="text-xs uppercase tracking-wider font-bold" style={{ color: "#666" }}>{t("about.stat2")}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient-aws mb-1" style={{ color: "#FF9900" }}>100%</div>
                <div className="text-xs uppercase tracking-wider font-bold" style={{ color: "#666" }}>{t("about.stat3")}</div>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="lg:w-7/12 w-full max-w-2xl lg:max-w-none">
            <div 
              className="relative w-full aspect-[4/3] md:aspect-[3/2] lg:aspect-[1.4]"
              style={{
                filter: "drop-shadow(0 20px 40px rgba(106,76,245,0.25))"
              }}
            >
              <Image
                src="/team/cover-scd.png"
                alt="AWS Student Builder Group IUC"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Purplish Tint Overlay (Masked to transparent PNG) */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(to top right, rgba(144, 32, 184, 0.7), rgba(106, 76, 245, 0.4))",
                  mixBlendMode: "multiply",
                  WebkitMaskImage: "url('/team/cover-scd.png')",
                  WebkitMaskSize: "contain",
                  WebkitMaskPosition: "center",
                  WebkitMaskRepeat: "no-repeat"
                }}
              />
              
              {/* Secondary Gradient Overlay */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(to bottom, transparent 50%, rgba(5,5,5,0.85) 100%)",
                  WebkitMaskImage: "url('/team/cover-scd.png')",
                  WebkitMaskSize: "contain",
                  WebkitMaskPosition: "center",
                  WebkitMaskRepeat: "no-repeat"
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
