import { ImageResponse } from "next/og";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export const alt = "Andrey Badalin developer portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function OpenGraphImage({ params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const isRussian = locale === "ru";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #09090b 0%, #18181b 52%, #312e81 100%)",
          color: "#fafafa",
          padding: "72px 84px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 76,
              height: 76,
              border: "2px solid #a5b4fc",
              borderRadius: 18,
              color: "#c7d2fe",
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: "-1px",
            }}
          >
            AB
          </div>
          <div
            style={{
              display: "flex",
              color: "#a5b4fc",
              fontSize: 24,
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            GitHub + Vercel
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              display: "flex",
              fontSize: 66,
              fontWeight: 700,
              letterSpacing: "-2px",
              lineHeight: 1.05,
            }}
          >
            {isRussian ? "Андрей Бадалин" : "Andrey Badalin"}
          </div>
          <div
            style={{
              display: "flex",
              color: "#d4d4d8",
              fontSize: 38,
              lineHeight: 1.2,
            }}
          >
            {isRussian
              ? "Junior Frontend / Fullstack разработчик"
              : "Junior Frontend / Fullstack Developer"}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            color: "#e4e4e7",
            fontSize: 26,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#818cf8",
            }}
          />
          {isRussian
            ? "8 развёрнутых case studies"
            : "8 deployed case studies"}
        </div>
      </div>
    ),
    size,
  );
}
