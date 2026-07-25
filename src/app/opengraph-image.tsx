import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "LEAD GLOBAL CONSULTS — Capacity-Building, Training & Leadership Development";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0D2346 0%, #0f2d5a 50%, #091a35 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "64px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gold circle decoration */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 360,
            height: 360,
            borderRadius: "50%",
            border: "2px solid rgba(197,160,89,0.3)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -40,
            right: -40,
            width: 220,
            height: 220,
            borderRadius: "50%",
            border: "2px solid rgba(197,160,89,0.15)",
          }}
        />
        {/* Gold left accent bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 80,
            bottom: 80,
            width: 4,
            background: "linear-gradient(to bottom, transparent, #C5A059, transparent)",
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            color: "#C5A059",
            fontSize: 14,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: 20,
            fontFamily: "monospace",
          }}
        >
          CENTER FOR EXCELLENCE IN LEADERSHIP AND LEARNING — CELL
        </div>

        {/* Main title */}
        <div
          style={{
            color: "#F9F9FB",
            fontSize: 58,
            fontWeight: 800,
            lineHeight: 1.05,
            marginBottom: 24,
            maxWidth: 820,
          }}
        >
          LEAD GLOBAL CONSULTS
        </div>

        {/* Tagline */}
        <div
          style={{
            color: "rgba(249,249,251,0.7)",
            fontSize: 22,
            maxWidth: 680,
            lineHeight: 1.5,
            marginBottom: 40,
          }}
        >
          Equipping Educators, Learners, Leaders &amp; Organizations to Excel
          in a Dynamic World
        </div>

        {/* Program tags */}
        <div style={{ display: "flex", gap: 12 }}>
          {["TEACH4IMPACT", "STUDY4SUCCESS", "LEAD4TRANSFORMATION"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  background: "rgba(197,160,89,0.15)",
                  border: "1px solid rgba(197,160,89,0.4)",
                  color: "#C5A059",
                  fontSize: 12,
                  letterSpacing: "0.15em",
                  padding: "6px 14px",
                  fontFamily: "monospace",
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
