import type { Metadata } from "next";
import {
  duongDanBaiViet,
  layBaiLienQuan,
  layBaiTiepTheoTrongLoTrinh,
  layBaiVietTheoSlug,
} from "@/lib/content";
import { layMucLuc } from "@/lib/muc-luc";
import { siteConfig } from "@/config/site";
import type { Collection } from "@/lib/types";

/** generateMetadata dùng chung cho mọi route bài viết (huong-dan, thuat-ngu, canh-bao, case-study, cong-cu). */
export function taoMetadataBaiViet(collection: Collection, slug: string): Metadata {
  const { frontmatter } = layBaiVietTheoSlug(collection, slug);
  const url = duongDanBaiViet({ ...frontmatter, collection });
  return {
    title: frontmatter.title,
    description: frontmatter.description,
    alternates: { canonical: url },
    keywords: [frontmatter.tuKhoaChinh],
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      url,
      type: "article",
      publishedTime: frontmatter.ngayDang,
      modifiedTime: frontmatter.ngayCapNhat,
    },
  };
}

/** Toàn bộ dữ liệu (ngoài nội dung MDX) cần để render BaiVietLayout cho một bài viết. */
export function layDuLieuBaiViet(collection: Collection, slug: string) {
  const { frontmatter, noiDungTho, thoiGianDoc } = layBaiVietTheoSlug(collection, slug);
  return {
    frontmatter,
    thoiGianDoc,
    mucLuc: layMucLuc(noiDungTho),
    baiLienQuan: layBaiLienQuan(frontmatter.baiLienQuan),
    baiTiepTheo: layBaiTiepTheoTrongLoTrinh(frontmatter),
    urlDayDu: `${siteConfig.url}${duongDanBaiViet({ ...frontmatter, collection })}`,
  };
}
