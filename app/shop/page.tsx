"use client";

import Image from "next/image";
import { useTranslation } from "@/components/providers/LanguageProvider";
import TopNav from "@/components/layout/TopNav";
import Footer from "@/components/layout/Footer";

export default function ShopPage() {
  const { t } = useTranslation();

  const products = [
    {
      id: "toteBag",
      image1: "/items-shop/tote_bag.jpeg",
      price: "2500 XAF",
    },
    {
      id: "pen",
      image1: "/items-shop/custom_pen.jpeg",
      price: "200 XAF",
    },
    {
      id: "cap",
      image1: "/items-shop/white_cap.jpeg",
      image2: "/items-shop/cap_black.jpeg",
      price: "2000 XAF",
    },
    {
      id: "wristband",
      image1: "/items-shop/custom_silicone_bracelet.jpeg",
      price: "300 XAF",
    },
    {
      id: "tshirt",
      image1: "/items-shop/t-shirt-1.jpeg",
      image2: "/items-shop/t-shirt-2.jpeg",
      price: "2000 XAF",
    },
    {
      id: "hoodie",
      image1: "/items-shop/hoodie.jpeg",
      price: "15000 XAF",
    },
    {
      id: "mug",
      image1: "/items-shop/mug.jpeg",
      price: "2500 XAF",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <TopNav />
      <main className="flex-grow pt-24 pb-20">
        <div className="container-main">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 mb-4 border border-aws-orange/20 rounded-full bg-aws-orange/10 text-aws-orange text-xs font-bold font-mono tracking-widest uppercase">
              {t("shop.eyebrow")}
            </div>
            <h1 className="text-display-sm md:text-display-md font-bold mb-4">
              {t("shop.title")}
            </h1>
            <p className="text-body-lg text-ink-muted mb-8">
              {t("shop.description")}
            </p>
            <a 
              href="https://forms.gle/xC89b1mHKoqLPjQZ7" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary inline-flex"
            >
              {t("shop.preOrderBtn")}
            </a>
          </div>

          {/* Grip Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="group relative bg-[#111] rounded-2xl overflow-hidden border border-hairline-soft transition-all duration-300 hover:border-aws-orange/30 hover:shadow-[0_4px_30px_rgba(255,153,0,0.15)] flex flex-col h-full"
              >
                {/* Image Box */}
                <div className="relative aspect-[5/4] w-full overflow-hidden bg-[url('/items-shop/placeholder-bg.png')] bg-[#1a1a1a]">
                  <Image
                    src={product.image1}
                    alt={t(`shop.items.${product.id}.name`)}
                    fill
                    className={`object-cover transition-opacity duration-500 ease-in-out ${product.image2 ? "group-hover:opacity-0" : "group-hover:scale-105"}`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {product.image2 && (
                    <Image
                      src={product.image2}
                      alt={t(`shop.items.${product.id}.name`) + " variante"}
                      fill
                      className="object-cover absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-in-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  )}
                  {/* Dots indicator for hover items */}
                  {product.image2 && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 opacity-60">
                      <span className="w-1.5 h-1.5 rounded-full bg-aws-orange group-hover:bg-white/40 transition-colors"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-aws-orange transition-colors"></span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-body-lg font-bold text-white mb-2 line-clamp-1">
                    {t(`shop.items.${product.id}.name`)}
                  </h3>
                  <p className="text-body-sm text-ink-muted mb-6 flex-grow line-clamp-3">
                    {t(`shop.items.${product.id}.desc`)}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-[22px] font-display font-bold text-aws-orange">
                      {product.price}
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#1a1a1a] text-xs font-medium text-emerald-400 border border-emerald-400/20">
                      {t("shop.inStock")}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
