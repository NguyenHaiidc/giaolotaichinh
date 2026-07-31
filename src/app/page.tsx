import Link from "next/link";
import { CTAMoTaiKhoan } from "@/components/content/CTAMoTaiKhoan";
import { LoTrinhTimeline } from "@/components/content/LoTrinhTimeline";
import { siteConfig } from "@/config/site";
import { layTatCaBaiViet } from "@/lib/content";

export default function Home() {
  const cacBuoc = layTatCaBaiViet("lo-trinh").sort((a, b) => a.bac - b.bac);

  return (
    <>
      <section className="mx-auto max-w-3xl px-4 pb-10 pt-14 text-center sm:pt-20">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          {siteConfig.moTaNgan}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-zinc-600 dark:text-zinc-400">
          Học theo lộ trình 5 bước, từ những khái niệm đầu tiên đến chiến lược đầu tư dài
          hạn — không thuật ngữ khó hiểu, không lời khuyên mua bán cổ phiếu cụ thể.
        </p>
        <div className="mt-6 flex justify-center">
          <CTAMoTaiKhoan nguon="trang-chu-hero" />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-14">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          Lộ trình học 5 bước
        </h2>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          Học đến đâu chắc đến đó — mỗi bước có bài hướng dẫn, thuật ngữ và công cụ riêng.
        </p>
        <div className="mt-6">
          <LoTrinhTimeline items={cacBuoc} />
        </div>
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
