import Link from "next/link";
import { siteConfig } from "@/config/site";

const lienKetPhapLy = [
  { nhan: "Về tôi", href: "/ve-toi" },
  { nhan: "Minh bạch liên kết", href: "/minh-bach-lien-ket" },
  { nhan: "Miễn trừ trách nhiệm", href: "/mien-tru-trach-nhiem" },
];

export function Footer() {
  const namHienTai = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{siteConfig.ten}</p>
            <p className="mt-2 max-w-sm text-sm text-zinc-600 dark:text-zinc-400">
              {siteConfig.moTaNgan}
            </p>
          </div>

          <nav aria-label="Pháp lý">
            <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Pháp lý</p>
            <ul className="mt-3 space-y-2">
              {lienKetPhapLy.map((muc) => (
                <li key={muc.href}>
                  <Link
                    href={muc.href}
                    className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                  >
                    {muc.nhan}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-8 border-t border-zinc-200 pt-6 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
          © {namHienTai} {siteConfig.ten}. Nội dung chỉ mang tính giáo dục, không phải khuyến nghị đầu tư.
        </p>
      </div>
    </footer>
  );
}
