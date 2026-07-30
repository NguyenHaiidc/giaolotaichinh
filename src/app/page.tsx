import Link from "next/link";
import { CTAMoTaiKhoan } from "@/components/content/CTAMoTaiKhoan";
import { siteConfig } from "@/config/site";
import { layTatCaBaiViet } from "@/lib/content";

export default function Home() {
  const cacBac = layTatCaBaiViet("lo-trinh").sort((a, b) => a.bac - b.bac);

  return (
    <>
      <section className="mx-auto max-w-3xl px-4 pb-10 pt-14 text-center sm:pt-20">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          {siteConfig.moTaNgan}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-zinc-600 dark:text-zinc-400">
          Học theo lộ trình 5 bậc, từ những khái niệm đầu tiên đến chiến lược đầu tư dài
          hạn — không thuật ngữ khó hiểu, không lời khuyên mua bán cổ phiếu cụ thể.
        </p>
        <div className="mt-6 flex justify-center">
          <CTAMoTaiKhoan nguon="trang-chu-hero" />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-14">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          Lộ trình học 5 bậc
        </h2>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          Học đến đâu chắc đến đó — mỗi bậc có bài hướng dẫn, thuật ngữ và công cụ riêng.
        </p>
        <ol className="mt-6 space-y-3">
          {cacBac.map((bai) => (
            <li key={bai.slug}>
              <Link
                href={`/lo-trinh/${bai.slug}`}
                className="flex items-center gap-4 rounded-xl border border-zinc-200 p-4 transition-colors hover:border-emerald-500 dark:border-zinc-800"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                  {bai.bac}
                </span>
                <span className="font-medium text-zinc-800 dark:text-zinc-200">{bai.title}</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-16">
        <div className="rounded-xl bg-zinc-50 p-6 dark:bg-zinc-900">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Trang chỉ mang tính giáo dục, không phải khuyến nghị đầu tư. Xem thêm tại{" "}
            <Link href="/mien-tru-trach-nhiem" className="font-medium text-emerald-700 underline dark:text-emerald-400">
              miễn trừ trách nhiệm
            </Link>{" "}
            và{" "}
            <Link href="/minh-bach-lien-ket" className="font-medium text-emerald-700 underline dark:text-emerald-400">
              minh bạch liên kết
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
