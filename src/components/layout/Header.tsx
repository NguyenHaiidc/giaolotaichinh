"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { CTAMoTaiKhoan } from "@/components/content/CTAMoTaiKhoan";

const dieuHuongChinh: { nhan: string; href: string }[] = [
  { nhan: "Lộ trình", href: "/lo-trinh" },
  { nhan: "Thuật ngữ", href: "/thuat-ngu" },
  { nhan: "Công cụ", href: "/cong-cu" },
];

export function Header() {
  const [moMenu, setMoMenu] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/90 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/90">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
          {siteConfig.ten}
        </Link>

        <nav aria-label="Điều hướng chính" className="hidden items-center gap-6 md:flex">
          {dieuHuongChinh.map((muc) => (
            <Link
              key={muc.href}
              href={muc.href}
              className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              {muc.nhan}
            </Link>
          ))}
          <CTAMoTaiKhoan nguon="header" nhan="Mở tài khoản" />
        </nav>

        <button
          type="button"
          onClick={() => setMoMenu((truoc) => !truoc)}
          aria-expanded={moMenu}
          aria-controls="menu-di-dong"
          aria-label={moMenu ? "Đóng menu" : "Mở menu"}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900 md:hidden"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
            {moMenu ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {moMenu && (
        <nav
          id="menu-di-dong"
          aria-label="Điều hướng di động"
          className="border-t border-zinc-200 px-4 pb-4 dark:border-zinc-800 md:hidden"
        >
          <ul className="flex flex-col gap-1 pt-2">
            {dieuHuongChinh.map((muc) => (
              <li key={muc.href}>
                <Link
                  href={muc.href}
                  onClick={() => setMoMenu(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
                >
                  {muc.nhan}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3">
            <CTAMoTaiKhoan nguon="header-mobile" nhan="Mở tài khoản" />
          </div>
        </nav>
      )}
    </header>
  );
}
