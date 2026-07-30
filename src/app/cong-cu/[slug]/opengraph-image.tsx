import { layBaiVietTheoSlug } from "@/lib/content";
import { ogImageContentType, ogImageSize, taoOgImageBaiViet } from "@/lib/og-image";

export const alt = "Công cụ tính toán";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { frontmatter } = layBaiVietTheoSlug("cong-cu", slug);
  return taoOgImageBaiViet(frontmatter.title, "Công cụ");
}
