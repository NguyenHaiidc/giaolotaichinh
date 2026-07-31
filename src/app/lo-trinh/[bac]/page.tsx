import type { Metadata } from "next";
import { duongDanBaiViet, layBaiVietTheoBac, layBaiVietTheoSlug, layDanhSachSlug } from "@/lib/content";
import { layMucLuc } from "@/lib/muc-luc";
import { siteConfig } from "@/config/site";
import { BaiVietLayout } from "@/components/content/BaiVietLayout";

const COLLECTION = "lo-trinh";

export function generateStaticParams() {
  return layDanhSachSlug(COLLECTION).map((bac) => ({ bac }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ bac: string }>;
}): Promise<Metadata> {
  const { bac } = await params;
  const { frontmatter } = layBaiVietTheoSlug(COLLECTION, bac);
  const url = `/lo-trinh/${bac}`;
  return {
    title: frontmatter.title,
    description: frontmatter.description,
    alternates: { canonical: url },
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

export default async function Page({ params }: { params: Promise<{ bac: string }> }) {
  const { bac } = await params;
  const { frontmatter, noiDungTho, thoiGianDoc } = layBaiVietTheoSlug(COLLECTION, bac);
  const { default: NoiDung } = await import(`@content/lo-trinh/${bac}.mdx`);
  const mucLuc = layMucLuc(noiDungTho);
  const baiTrongBac = layBaiVietTheoBac(frontmatter.bac);
  const urlDayDu = `${siteConfig.url}${duongDanBaiViet({ ...frontmatter, collection: COLLECTION })}`;

  return (
    <BaiVietLayout
      frontmatter={frontmatter}
      thoiGianDoc={thoiGianDoc}
      mucLuc={mucLuc}
      urlDayDu={urlDayDu}
      baiLienQuan={baiTrongBac}
      tieuDeBaiLienQuan="Bài viết trong bước này"
    >
      <NoiDung />
    </BaiVietLayout>
  );
}
