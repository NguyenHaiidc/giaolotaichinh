import { ctaConfig, taoLinkCTA } from "@/config/cta";

interface CTAMoTaiKhoanProps {
  /** Định danh nơi hiển thị CTA (thường là slug bài viết), gắn vào utm_content. */
  nguon: string;
  nhan?: string;
}

export function CTAMoTaiKhoan({ nguon, nhan = ctaConfig.nhanMacDinh }: CTAMoTaiKhoanProps) {
  return (
    <a
      href={taoLinkCTA(nguon)}
      target="_blank"
      rel="noopener noreferrer"
      className="my-6 inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-800"
    >
      {nhan}
      <span aria-hidden="true">→</span>
    </a>
  );
}
