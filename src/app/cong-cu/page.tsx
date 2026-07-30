import type { Metadata } from "next";
import Link from "next/link";
import { layTatCaBaiViet, layTrangTinh } from "@/lib/content";
import Content from "@content/trang-tinh/cong-cu.mdx";

const SLUG = "cong-cu";

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
  const cacCongCu = layTatCaBaiViet(SLUG);

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
        {frontmatter.title}
      </h1>
      <Content />

      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {cacCongCu.map((bai) => (
          <li key={bai.slug}>
            <Link
              href={`/cong-cu/${bai.slug}`}
              className="block rounded-lg border border-zinc-200 p-4 transition-colors hover:border-emerald-500 dark:border-zinc-800"
            >
              <span className="block font-medium text-zinc-900 dark:text-zinc-100">{bai.title}</span>
              <span className="mt-1 block text-sm text-zinc-500 dark:text-zinc-400">
                {bai.description}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
