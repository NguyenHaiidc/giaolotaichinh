import Link from "next/link";
import { duongDanBaiViet } from "@/lib/content";
import type { BaiVietVoiCollection } from "@/lib/types";

interface BaiTiepTheoProps {
  item: BaiVietVoiCollection | null;
}

/** "Bài tiếp theo trong lộ trình", tự render ở cuối bài dựa trên bậc + nhóm hiện tại. */
export function BaiTiepTheo({ item }: BaiTiepTheoProps) {
  if (!item) return null;

  return (
    <div className="mt-10 rounded-xl bg-emerald-50 p-5 dark:bg-emerald-950/30">
      <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
        Bài tiếp theo trong lộ trình
      </p>
      <Link
        href={duongDanBaiViet(item)}
        className="mt-1 flex items-center gap-2 text-lg font-semibold text-zinc-900 hover:underline dark:text-zinc-100"
      >
        {item.title}
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
