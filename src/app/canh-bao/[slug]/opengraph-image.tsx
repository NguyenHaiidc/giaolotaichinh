import { layBaiVietTheoSlug } from "@/lib/content";
import { ogImageContentType, ogImageSize, taoOgImageBaiViet } from "@/lib/og-image";

export const alt = "Cảnh báo lừa đảo";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { frontmatter } = layBaiVietTheoSlug("canh-bao", slug);
  return taoOgImageBaiViet(frontmatter.title, "Cảnh báo");
}
