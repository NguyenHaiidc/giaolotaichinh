import type { Metadata } from "next";
import { layTrangTinh } from "@/lib/content";
import Content from "@content/trang-tinh/ve-toi.mdx";

const SLUG = "ve-toi";

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
      type: "profile",
    },
  };
}

export default function Page() {
  const { frontmatter } = layTrangTinh(SLUG);

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
        {frontmatter.title}
      </h1>
      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
        Cập nhật lần cuối: {frontmatter.ngayCapNhat}
      </p>
      <Content />
    </article>
  );
}
