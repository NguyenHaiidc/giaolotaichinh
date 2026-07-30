import { layBaiVietTheoSlug } from "@/lib/content";
import { ogImageContentType, ogImageSize, taoOgImageBaiViet } from "@/lib/og-image";

export const alt = "Lộ trình học";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function Image({ params }: { params: Promise<{ bac: string }> }) {
  const { bac } = await params;
  const { frontmatter } = layBaiVietTheoSlug("lo-trinh", bac);
  return taoOgImageBaiViet(frontmatter.title, "Lộ trình");
}
