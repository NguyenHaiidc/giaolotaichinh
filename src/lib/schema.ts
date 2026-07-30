import { siteConfig } from "@/config/site";
import type { BaiVietFrontmatter, FaqItem } from "@/lib/types";

/** JSON-LD Organization, dùng trong layout gốc cho mọi trang. */
export function schemaToChuc() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.ten,
    url: siteConfig.url,
    description: siteConfig.moTaNgan,
  };
}

/** JSON-LD Article cho một bài viết, gắn trong page.tsx của route bài viết đó. */
export function schemaBaiViet(bai: BaiVietFrontmatter, urlDayDu: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: bai.title,
    description: bai.description,
    datePublished: bai.ngayDang,
    dateModified: bai.ngayCapNhat,
    author: { "@type": "Organization", name: siteConfig.tacGia },
    publisher: { "@type": "Organization", name: siteConfig.ten },
    mainEntityOfPage: urlDayDu,
    keywords: bai.tuKhoaChinh,
    inLanguage: siteConfig.ngonNgu,
  };
}

/** JSON-LD FAQPage cho bài viết có mục hỏi-đáp (frontmatter export `faq`). */
export function schemaFAQ(cacCauHoi: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cacCauHoi.map((muc) => ({
      "@type": "Question",
      name: muc.cauHoi,
      acceptedAnswer: { "@type": "Answer", text: muc.cauTraLoi },
    })),
  };
}
