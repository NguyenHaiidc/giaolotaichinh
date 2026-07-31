import Link from "next/link";
import type { BaiVietVoiCollection } from "@/lib/types";

interface LoTrinhTimelineProps {
  items: BaiVietVoiCollection[];
}

// Mỗi bước một tông màu riêng cho đỡ đơn điệu, vẫn trong dải màu lạnh hợp thương hiệu.
const MAU_THEO_BUOC = [
  { nen: "bg-emerald-600", vien: "group-hover:border-emerald-500" },
  { nen: "bg-teal-600", vien: "group-hover:border-teal-500" },
  { nen: "bg-cyan-600", vien: "group-hover:border-cyan-500" },
  { nen: "bg-sky-600", vien: "group-hover:border-sky-500" },
  { nen: "bg-indigo-600", vien: "group-hover:border-indigo-500" },
];

/** Lộ trình 5 bước dạng timeline dọc — dùng cho trang chủ và trang tổng quan /lo-trinh. */
export function LoTrinhTimeline({ items }: LoTrinhTimelineProps) {
  return (
    <ol className="relative ml-4 space-y-6 border-l-2 border-zinc-200 pl-8 dark:border-zinc-800">
      {items.map((bai, chiSo) => {
        const mau = MAU_THEO_BUOC[chiSo % MAU_THEO_BUOC.length];
        return (
          <li key={bai.slug}>
            <Link href={`/lo-trinh/${bai.slug}`} className="group block">
              <span
                className={`absolute -left-[19px] flex h-9 w-9 items-center justify-center rounded-full border-4 border-white text-sm font-bold text-white shadow-sm dark:border-zinc-950 ${mau.nen}`}
              >
                {chiSo + 1}
              </span>
              <div
                className={`rounded-xl border border-zinc-200 p-4 transition-all group-hover:-translate-y-0.5 group-hover:shadow-md dark:border-zinc-800 ${mau.vien}`}
              >
                <p className="font-semibold text-zinc-900 dark:text-zinc-100">{bai.title}</p>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{bai.description}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
