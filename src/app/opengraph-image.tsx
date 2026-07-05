import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Seri X Art 2026 — Create. Inspire. Compete.";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(to bottom, #20283A, #171D2D)",
          color: "#FFFFFF",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#A0A3B1",
          }}
        >
          Seri X Art 2026
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 92,
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1.15,
          }}
        >
          Create. Inspire. Compete.
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 28,
            fontWeight: 600,
            color: "#DF9621",
          }}
        >
          National Art Competition
        </div>
      </div>
    ),
    { ...size },
  );
}
