import type { Metadata } from "next";
import { LoTrinhTimeline } from "@/components/content/LoTrinhTimeline";
import { layTatCaBaiViet, layTrangTinh } from "@/lib/content";
import Content from "@content/trang-tinh/lo-trinh.mdx";

const SLUG = "lo-trinh";

export function generateMetadata(): Metadata {
  const { frontmatter } = layTrangTinh(SLUG);
  return {
    title: frontmatter.title,
    description: frontmatter.description,
    alternates: { canonical: `/${SLUG}` },
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      url: `/${SLUG}`,
      type: "website",
    },
  };
}

export default function Page() {
  const { frontmatter } = layTrangTinh(SLUG);
  const cacBuoc = layTatCaBaiViet("lo-trinh").sort((a, b) => a.bac - b.bac);

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
        {frontmatter.title}
      </h1>
      <Content />

      <div className="mt-8">
        <LoTrinhTimeline items={cacBuoc} />
      </div>
    </article>
  );
}
