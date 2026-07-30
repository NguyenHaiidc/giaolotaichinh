import { layBaiVietTheoSlug } from "@/lib/content";
import { ogImageContentType, ogImageSize, taoOgImageBaiViet } from "@/lib/og-image";

export const alt = "Case study";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { frontmatter } = layBaiVietTheoSlug("case-study", slug);
  return taoOgImageBaiViet(frontmatter.title, "Case Study");
}
