import { layBaiVietTheoSlug } from "@/lib/content";
import { ogImageContentType, ogImageSize, taoOgImageBaiViet } from "@/lib/og-image";

export const alt = "Bài hướng dẫn";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { frontmatter } = layBaiVietTheoSlug("huong-dan", slug);
  return taoOgImageBaiViet(frontmatter.title, "Hướng dẫn");
}
