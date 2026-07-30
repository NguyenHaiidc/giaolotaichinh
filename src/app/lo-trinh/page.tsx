import type { Metadata } from "next";
import Link from "next/link";
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
  const cacBac = layTatCaBaiViet("lo-trinh").sort((a, b) => a.bac - b.bac);

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
        {frontmatter.title}
      </h1>
      <Content />

      <ol className="mt-8 space-y-3">
        {cacBac.map((bai) => (
          <li key={bai.slug}>
            <Link
              href={`/lo-trinh/${bai.slug}`}
              className="flex items-center gap-4 rounded-xl border border-zinc-200 p-4 transition-colors hover:border-emerald-500 dark:border-zinc-800"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                {bai.bac}
              </span>
              <span>
                <span className="block font-medium text-zinc-900 dark:text-zinc-100">
                  {bai.title}
                </span>
                <span className="mt-0.5 block text-sm text-zinc-500 dark:text-zinc-400">
                  {bai.description}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </article>
  );
}
