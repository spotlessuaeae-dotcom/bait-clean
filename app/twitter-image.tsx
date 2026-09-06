/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Bait Clean — Premium Home Cleaning in Sharjah & Ajman";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const photoPath = join(process.cwd(), "public", "hero-interior.png");
  const photoBuffer = await readFile(photoPath);
  const photoBase64 = `data:image/png;base64,${photoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#25231f",
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          color: "#f5f2ea",
          overflow: "hidden",
        }}
      >
        {/* Background photo right-aligned */}
        <img
          src={photoBase64}
          alt=""
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "58%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        {/* Gradient veil */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to right, #25231f 0%, #25231f 46%, rgba(37, 35, 31, 0.88) 60%, rgba(37, 35, 31, 0.3) 100%)",
          }}
        />
        {/* Text column */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "56%",
            height: "100%",
            padding: "60px 54px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "2px",
                  backgroundColor: "#cbb592",
                }}
              />
              <span
                style={{
                  fontSize: "14px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#cbb592",
                  fontWeight: 600,
                }}
              >
                Sharjah · Ajman
              </span>
            </div>

            <h1
              style={{
                fontSize: "52px",
                lineHeight: "1.05",
                fontWeight: 600,
                margin: 0,
                color: "#f5f2ea",
                letterSpacing: "-0.02em",
              }}
            >
              Bait Clean
            </h1>

            <p
              style={{
                fontSize: "21px",
                lineHeight: "1.45",
                color: "rgba(245, 242, 234, 0.82)",
                marginTop: "18px",
                maxWidth: "460px",
              }}
            >
              A quieter standard of residential and office cleaning, kept the
              same way every visit.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              borderTop: "1px solid rgba(203, 181, 146, 0.3)",
              paddingTop: "22px",
            }}
          >
            <span
              style={{
                fontSize: "15px",
                color: "#cbb592",
                fontWeight: 600,
              }}
            >
              Vetted &amp; Insured Housekeeping
            </span>
            <span style={{ color: "rgba(245, 242, 234, 0.4)" }}>•</span>
            <span
              style={{
                fontSize: "15px",
                color: "rgba(245, 242, 234, 0.75)",
              }}
            >
              +971 58 124 9910
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
