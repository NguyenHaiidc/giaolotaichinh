import { layBaiVietTheoSlug } from "@/lib/content";
import { ogImageContentType, ogImageSize, taoOgImageBaiViet } from "@/lib/og-image";

export const alt = "Thuật ngữ chứng khoán";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { frontmatter } = layBaiVietTheoSlug("thuat-ngu", slug);
  return taoOgImageBaiViet(frontmatter.title, "Thuật ngữ");
}
