// Link mở tài khoản là placeholder — đổi tại đây khi có link đối tác thật,
// không hardcode trong component hay trong bài viết MDX.
export const ctaConfig = {
  url: "https://vidu-doi-tac-chung-khoan.vn/mo-tai-khoan",
  nhanMacDinh: "Mở tài khoản chứng khoán",
  utmSource: "edu-chungkhoan",
  utmMedium: "cta-bai-viet",
  utmCampaign: "mo-tai-khoan",
};

/**
 * Tạo link CTA gắn UTM riêng cho từng nơi hiển thị (`nguon`), ví dụ slug bài viết,
 * để theo dõi bài nào dẫn ra nhiều lượt mở tài khoản nhất.
 */
export function taoLinkCTA(nguon: string): string {
  const link = new URL(ctaConfig.url);
  link.searchParams.set("utm_source", ctaConfig.utmSource);
  link.searchParams.set("utm_medium", ctaConfig.utmMedium);
  link.searchParams.set("utm_campaign", ctaConfig.utmCampaign);
  link.searchParams.set("utm_content", nguon);
  return link.toString();
}
