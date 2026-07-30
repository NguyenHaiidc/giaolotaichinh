import type { Metadata } from "next";
import { layDanhSachSlug } from "@/lib/content";
import { layDuLieuBaiViet, taoMetadataBaiViet } from "@/lib/bai-viet-page";
import { BaiVietLayout } from "@/components/content/BaiVietLayout";

const COLLECTION = "thuat-ngu";

export function generateStaticParams() {
  return layDanhSachSlug(COLLECTION).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return taoMetadataBaiViet(COLLECTION, slug);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { default: NoiDung } = await import(`@content/thuat-ngu/${slug}.mdx`);
  const duLieu = layDuLieuBaiViet(COLLECTION, slug);

  return (
    <BaiVietLayout {...duLieu}>
      <NoiDung />
    </BaiVietLayout>
  );
}
