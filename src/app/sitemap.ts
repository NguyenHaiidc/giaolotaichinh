import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { duongDanBaiViet, layTatCaBaiVietMoiCollection } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const trangTinh: MetadataRoute.Sitemap = [
    { url: siteConfig.url, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/lo-trinh`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/thuat-ngu`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteConfig.url}/cong-cu`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteConfig.url}/ve-toi`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteConfig.url}/minh-bach-lien-ket`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteConfig.url}/mien-tru-trach-nhiem`, changeFrequency: "yearly", priority: 0.3 },
  ];

  // Tự động thêm khi các collection bài viết (huong-dan, thuat-ngu,...) có nội dung thật.
  const baiViet: MetadataRoute.Sitemap = layTatCaBaiVietMoiCollection().map((bai) => ({
    url: `${siteConfig.url}${duongDanBaiViet(bai)}`,
    lastModified: bai.ngayCapNhat,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...trangTinh, ...baiViet];
}
