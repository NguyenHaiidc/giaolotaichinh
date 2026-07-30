/** 5 bậc của lộ trình học, từ 0 (mới bắt đầu) đến 4 (nâng cao). */
export type Bac = 0 | 1 | 2 | 3 | 4;

/** Tên các thư mục nội dung trong /content, khớp với tiền tố route tương ứng. */
export type Collection =
  | "huong-dan"
  | "thuat-ngu"
  | "cong-cu"
  | "canh-bao"
  | "case-study"
  | "lo-trinh";

/** Frontmatter bắt buộc cho mọi bài viết nội dung (không áp dụng cho trang tĩnh). */
export interface BaiVietFrontmatter {
  title: string;
  description: string;
  slug: string;
  bac: Bac;
  nhom: string;
  ngayDang: string;
  ngayCapNhat: string;
  tuKhoaChinh: string;
  baiLienQuan: string[];
  coFileTaiVe: boolean;
  /** Chỉ khai báo khi bài có mục hỏi-đáp; nguồn duy nhất cho cả JSON-LD FAQPage và khối hiển thị. */
  faq?: FaqItem[];
}

/** Một mục hỏi-đáp dùng cho JSON-LD FAQPage, khai báo trong MDX qua `export const faq`. */
export interface FaqItem {
  cauHoi: string;
  cauTraLoi: string;
}

/** Frontmatter tối giản cho các trang tĩnh (về tôi, minh bạch liên kết, miễn trừ trách nhiệm). */
export interface TrangTinhFrontmatter {
  title: string;
  description: string;
  ngayCapNhat: string;
}

export interface BaiVietVoiCollection extends BaiVietFrontmatter {
  collection: Collection;
}
