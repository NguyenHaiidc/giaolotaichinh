import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

/** Ảnh OG dùng chung cho mọi route bài viết, chỉ khác nhãn mục và tiêu đề. */
export function taoOgImageBaiViet(tieuDe: string, nhanMuc: string) {
  const coChuTieuDe = tieuDe.length > 50 ? 44 : 56;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#065f46",
          color: "white",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            fontSize: 28,
            fontWeight: 600,
            color: "#065f46",
            backgroundColor: "#d1fae5",
            padding: "10px 28px",
            borderRadius: 999,
          }}
        >
          {nhanMuc}
        </div>
        <div style={{ display: "flex", fontSize: coChuTieuDe, fontWeight: 700, lineHeight: 1.25 }}>
          {tieuDe}
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#d1fae5" }}>{siteConfig.ten}</div>
      </div>
    ),
    ogImageSize
  );
}
