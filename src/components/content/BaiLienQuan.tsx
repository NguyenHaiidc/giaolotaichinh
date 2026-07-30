import Link from "next/link";
import { duongDanBaiViet } from "@/lib/content";
import type { BaiVietVoiCollection } from "@/lib/types";

interface BaiLienQuanProps {
  items: BaiVietVoiCollection[];
  tieuDe?: string;
}

/**
 * Danh sách bài liên quan, tự render ở cuối bài dựa trên frontmatter.baiLienQuan.
 * Cũng dùng lại cho "Bài viết trong bậc này" trên trang tổng quan lộ trình.
 */
export function BaiLienQuan({ items, tieuDe = "Bài liên quan" }: BaiLienQuanProps) {
  if (items.length === 0) return null;

  return (
    <aside aria-labelledby="bai-lien-quan" className="mt-10 border-t border-zinc-200 pt-6 dark:border-zinc-800">
      <h2 id="bai-lien-quan" className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
        {tieuDe}
      </h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {items.map((bai) => (
          <li key={bai.slug}>
            <Link
              href={duongDanBaiViet(bai)}
              className="block rounded-lg border border-zinc-200 p-4 transition-colors hover:border-emerald-500 dark:border-zinc-800"
            >
              <span className="block text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {bai.title}
              </span>
              <span className="mt-1 block text-sm text-zinc-500 dark:text-zinc-400">
                {bai.description}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
