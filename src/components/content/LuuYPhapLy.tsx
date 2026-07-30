import type { ReactNode } from "react";

interface LuuYPhapLyProps {
  tieuDe?: string;
  children: ReactNode;
}

/** Hộp lưu ý pháp lý (miễn trừ trách nhiệm, không phải khuyến nghị đầu tư,...). */
export function LuuYPhapLy({ tieuDe = "Lưu ý pháp lý", children }: LuuYPhapLyProps) {
  return (
    <div className="my-6 rounded-xl border border-zinc-300 bg-zinc-50 p-4 text-sm dark:border-zinc-700 dark:bg-zinc-900">
      <p className="font-semibold text-zinc-700 dark:text-zinc-300">{tieuDe}</p>
      <div className="mt-2 leading-relaxed text-zinc-600 dark:text-zinc-400">{children}</div>
    </div>
  );
}
