import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type {
  BaiVietFrontmatter,
  BaiVietVoiCollection,
  Collection,
  TrangTinhFrontmatter,
} from "@/lib/types";

const CONTENT_ROOT = path.join(process.cwd(), "content");

const TAT_CA_COLLECTION: Collection[] = [
  "huong-dan",
  "thuat-ngu",
  "cong-cu",
  "canh-bao",
  "case-study",
  "lo-trinh",
];

function duongDanCollection(collection: Collection) {
  return path.join(CONTENT_ROOT, collection);
}

/** Danh sách slug (tên file không đuôi .mdx) trong một thư mục nội dung. */
export function layDanhSachSlug(collection: Collection): string[] {
  const thuMuc = duongDanCollection(collection);
  if (!fs.existsSync(thuMuc)) return [];
  return fs
    .readdirSync(thuMuc)
    .filter((ten) => ten.endsWith(".mdx"))
    .map((ten) => ten.replace(/\.mdx$/, ""));
}

/** Đọc frontmatter + nội dung thô (chưa compile) của một bài viết qua gray-matter. */
export function layBaiVietTheoSlug(
  collection: Collection,
  slug: string
): { frontmatter: BaiVietFrontmatter; noiDungTho: string; thoiGianDoc: string } {
  const duongDan = path.join(duongDanCollection(collection), `${slug}.mdx`);
  const file = fs.readFileSync(duongDan, "utf8");
  const { data, content } = matter(file);
  return {
    frontmatter: data as BaiVietFrontmatter,
    noiDungTho: content,
    thoiGianDoc: readingTime(content).text,
  };
}

/** Toàn bộ frontmatter trong một collection, sắp xếp theo ngày đăng mới nhất trước. */
export function layTatCaBaiViet(collection: Collection): BaiVietVoiCollection[] {
  return layDanhSachSlug(collection)
    .map((slug) => {
      const { frontmatter } = layBaiVietTheoSlug(collection, slug);
      return { ...frontmatter, collection };
    })
    .sort((a, b) => (a.ngayDang < b.ngayDang ? 1 : -1));
}

/** Gộp frontmatter của mọi collection bài viết, dùng để tra cứu bài liên quan xuyên mục. */
export function layTatCaBaiVietMoiCollection(): BaiVietVoiCollection[] {
  return TAT_CA_COLLECTION.flatMap((collection) => layTatCaBaiViet(collection));
}

/** Tra các slug trong `baiLienQuan` ra frontmatter đầy đủ, bỏ qua slug không tìm thấy. */
export function layBaiLienQuan(
  baiLienQuan: string[]
): BaiVietVoiCollection[] {
  if (baiLienQuan.length === 0) return [];
  const tatCa = layTatCaBaiVietMoiCollection();
  const theoSlug = new Map(tatCa.map((bai) => [bai.slug, bai]));
  return baiLienQuan
    .map((slug) => theoSlug.get(slug))
    .filter((bai): bai is BaiVietVoiCollection => Boolean(bai));
}

/**
 * Bài tiếp theo trong lộ trình: cùng bậc và cùng nhóm với bài hiện tại,
 * xếp theo ngày đăng tăng dần, trả về bài đứng ngay sau bài hiện tại.
 */
export function layBaiTiepTheoTrongLoTrinh(
  hienTai: BaiVietFrontmatter
): BaiVietVoiCollection | null {
  const cungNhom = layTatCaBaiVietMoiCollection()
    .filter((bai) => bai.bac === hienTai.bac && bai.nhom === hienTai.nhom)
    .sort((a, b) => (a.ngayDang > b.ngayDang ? 1 : -1));
  const viTri = cungNhom.findIndex((bai) => bai.slug === hienTai.slug);
  if (viTri === -1 || viTri === cungNhom.length - 1) return null;
  return cungNhom[viTri + 1];
}

const TIEN_TO_ROUTE_THEO_COLLECTION: Record<Collection, string> = {
  "huong-dan": "/huong-dan",
  "thuat-ngu": "/thuat-ngu",
  "cong-cu": "/cong-cu",
  "canh-bao": "/canh-bao",
  "case-study": "/case-study",
  "lo-trinh": "/lo-trinh",
};

/** Đường dẫn route của một bài viết, dựa trên collection chứa nó. */
export function duongDanBaiViet(bai: BaiVietVoiCollection): string {
  return `${TIEN_TO_ROUTE_THEO_COLLECTION[bai.collection]}/${bai.slug}`;
}

/** Toàn bộ bài viết (mọi collection trừ lo-trinh) thuộc đúng một bậc, dùng cho trang tổng quan bậc. */
export function layBaiVietTheoBac(bac: BaiVietFrontmatter["bac"]): BaiVietVoiCollection[] {
  return layTatCaBaiVietMoiCollection().filter(
    (bai) => bai.bac === bac && bai.collection !== "lo-trinh"
  );
}

/** Đọc frontmatter của một trang tĩnh (content/trang-tinh/{slug}.mdx). */
export function layTrangTinh(slug: string): {
  frontmatter: TrangTinhFrontmatter;
  noiDungTho: string;
} {
  const duongDan = path.join(CONTENT_ROOT, "trang-tinh", `${slug}.mdx`);
  const file = fs.readFileSync(duongDan, "utf8");
  const { data, content } = matter(file);
  return { frontmatter: data as TrangTinhFrontmatter, noiDungTho: content };
}
