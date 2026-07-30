import type { MucMucLuc } from "@/lib/muc-luc";

interface MucLucProps {
  items: MucMucLuc[];
}

function DanhSach({ items }: MucLucProps) {
  return (
    <ul className="space-y-2 text-sm">
      {items.map((item) => (
        <li key={item.id} className={item.depth === 3 ? "pl-4" : undefined}>
          <a
            href={`#${item.id}`}
            className="text-zinc-600 hover:text-emerald-700 dark:text-zinc-400 dark:hover:text-emerald-400"
          >
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Mục lục tự sinh từ heading (h2/h3): thu gọn trên mobile, sticky trên desktop. */
export function MucLuc({ items }: MucLucProps) {
  if (items.length === 0) return null;

  return (
    <>
      <details className="my-6 rounded-xl border border-zinc-200 p-4 dark:border-zinc-800 lg:hidden">
        <summary className="cursor-pointer font-semibold text-zinc-900 dark:text-zinc-100">
          Mục lục
        </summary>
        <div className="mt-3">
          <DanhSach items={items} />
        </div>
      </details>

      <nav
        aria-label="Mục lục"
        className="hidden lg:sticky lg:top-24 lg:block lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto"
      >
        <p className="font-semibold text-zinc-900 dark:text-zinc-100">Mục lục</p>
        <div className="mt-3">
          <DanhSach items={items} />
        </div>
      </nav>
    </>
  );
}
