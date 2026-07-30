// Mô tả ngắn vẫn tập trung vào chứng khoán — cập nhật khi nội dung mở rộng
// sang tài sản số, vàng, ETF để khớp với phạm vi thương hiệu mới.
export const siteConfig = {
  ten: "Giao Lộ Tài Chính",
  moTaNgan: "Kiến thức chứng khoán nền tảng cho nhà đầu tư mới bắt đầu tại Việt Nam.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://giaolotaichinh.vn",
  ngonNgu: "vi" as const,
  locale: "vi_VN",
  tacGia: "Giao Lộ Tài Chính",
  mangXaHoi: {
    facebook: "",
    youtube: "",
  },
};

export type SiteConfig = typeof siteConfig;
