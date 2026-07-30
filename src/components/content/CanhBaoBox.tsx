import type { ReactNode } from "react";

interface CanhBaoBoxProps {
  tieuDe?: string;
  children: ReactNode;
}

/** Hộp cảnh báo dùng lại trong bài hướng dẫn, bài cảnh báo lừa đảo, case-study,... */
export function CanhBaoBox({ tieuDe = "Cảnh báo", children }: CanhBaoBoxProps) {
  return (
    <div
      role="alert"
      className="my-6 rounded-xl border border-amber-300 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/40"
    >
      <p className="flex items-center gap-2 font-semibold text-amber-800 dark:text-amber-300">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5 shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v4m0 4h.01M10.29 3.86l-8.18 14.18A1.5 1.5 0 0 0 3.5 20.5h17a1.5 1.5 0 0 0 1.39-2.46L13.71 3.86a1.5 1.5 0 0 0-2.42 0Z"
          />
        </svg>
        {tieuDe}
      </p>
      <div className="mt-2 text-sm leading-relaxed text-amber-900/90 dark:text-amber-200/90">
        {children}
      </div>
    </div>
  );
}
