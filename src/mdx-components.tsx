import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { CanhBaoBox } from "@/components/content/CanhBaoBox";
import { LuuYPhapLy } from "@/components/content/LuuYPhapLy";
import { CTAMoTaiKhoan } from "@/components/content/CTAMoTaiKhoan";
import { MayTinhLaiKep } from "@/components/tools/MayTinhLaiKep";

// Kiểu dáng + shortcode dùng chung cho MỌI file MDX trong dự án.
// <CanhBao>, <LuuYPhapLy>, <CTA>, <MayTinhLaiKep> có thể dùng trực tiếp trong
// nội dung MDX mà không cần import thủ công ở từng bài.
const components: MDXComponents = {
  h1: (props) => (
    <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100" {...props} />
  ),
  h2: (props) => (
    <h2 className="mt-10 scroll-mt-24 text-2xl font-semibold text-zinc-900 dark:text-zinc-100" {...props} />
  ),
  h3: (props) => (
    <h3 className="mt-8 scroll-mt-24 text-xl font-semibold text-zinc-900 dark:text-zinc-100" {...props} />
  ),
  p: (props) => <p className="mt-4 leading-relaxed text-zinc-700 dark:text-zinc-300" {...props} />,
  ul: (props) => (
    <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-700 dark:text-zinc-300" {...props} />
  ),
  ol: (props) => (
    <ol className="mt-4 list-decimal space-y-2 pl-6 text-zinc-700 dark:text-zinc-300" {...props} />
  ),
  a: ({ href = "", ...props }) => {
    const className = "font-medium text-emerald-700 underline underline-offset-2 dark:text-emerald-400";
    if (href.startsWith("/")) {
      return <Link href={href} className={className} {...props} />;
    }
    if (href.startsWith("#")) {
      return <a href={href} className={className} {...props} />;
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...props} />
    );
  },
  img: ({ alt = "", ...props }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} loading="lazy" className="mt-6 rounded-lg" {...props} />
  ),
  blockquote: (props) => (
    <blockquote
      className="mt-4 border-l-4 border-emerald-500 pl-4 italic text-zinc-600 dark:text-zinc-400"
      {...props}
    />
  ),
  code: (props) => (
    <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-800" {...props} />
  ),
  hr: (props) => <hr className="my-8 border-zinc-200 dark:border-zinc-800" {...props} />,
  table: (props) => (
    <div className="mt-4 overflow-x-auto rounded-lg border border-zinc-200 dark:border-zinc-800">
      <table className="w-full border-collapse text-left text-sm" {...props} />
    </div>
  ),
  thead: (props) => <thead className="bg-zinc-50 dark:bg-zinc-900" {...props} />,
  th: (props) => (
    <th
      className="border-b border-zinc-200 px-4 py-2 font-semibold text-zinc-900 dark:border-zinc-800 dark:text-zinc-100"
      {...props}
    />
  ),
  td: (props) => (
    <td
      className="border-b border-zinc-100 px-4 py-2 text-zinc-700 last:border-b-0 dark:border-zinc-900 dark:text-zinc-300"
      {...props}
    />
  ),
  CanhBao: CanhBaoBox,
  LuuYPhapLy,
  CTA: CTAMoTaiKhoan,
  MayTinhLaiKep,
};

export function useMDXComponents(overrides: MDXComponents = {}): MDXComponents {
  return { ...components, ...overrides };
}
