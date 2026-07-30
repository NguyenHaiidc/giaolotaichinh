import type { FaqItem } from "@/lib/types";

interface CauHoiThuongGapProps {
  items: FaqItem[] | undefined;
}

/** Khối câu hỏi thường gặp — nguồn dữ liệu này cũng dùng để sinh JSON-LD FAQPage. */
export function CauHoiThuongGap({ items }: CauHoiThuongGapProps) {
  if (!items || items.length === 0) return null;

  return (
    <section aria-labelledby="cau-hoi-thuong-gap" className="mt-10 border-t border-zinc-200 pt-6 dark:border-zinc-800">
      <h2 id="cau-hoi-thuong-gap" className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
        Câu hỏi thường gặp
      </h2>
      <div className="mt-4 space-y-3">
        {items.map((muc) => (
          <details
            key={muc.cauHoi}
            className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800"
          >
            <summary className="cursor-pointer font-medium text-zinc-900 dark:text-zinc-100">
              {muc.cauHoi}
            </summary>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {muc.cauTraLoi}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
