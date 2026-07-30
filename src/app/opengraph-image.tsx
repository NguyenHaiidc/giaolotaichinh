import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = siteConfig.ten;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#065f46",
          color: "white",
          textAlign: "center",
          padding: "80px",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 700 }}>{siteConfig.ten}</div>
        <div style={{ fontSize: 32, fontWeight: 400, marginTop: 24, color: "#d1fae5" }}>
          {siteConfig.moTaNgan}
        </div>
      </div>
    ),
    { ...size }
  );
}
