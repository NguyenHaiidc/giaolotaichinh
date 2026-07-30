import GithubSlugger from "github-slugger";

export interface MucMucLuc {
  id: string;
  text: string;
  depth: 2 | 3;
}

function docSachTieuDe(dong: string): string {
  return dong
    .replace(/`([^`]*)`/g, "$1")
    .replace(/\*\*([^*]*)\*\*/g, "$1")
    .replace(/\*([^*]*)\*/g, "$1")
    .replace(/_([^_]*)_/g, "$1")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .trim();
}

/**
 * Trích mục lục (h2, h3) từ nội dung MDX thô. Id sinh bằng github-slugger,
 * cùng thuật toán mà rehype-slug dùng lúc compile, để anchor luôn khớp.
 */
export function layMucLuc(noiDungTho: string): MucMucLuc[] {
  const slugger = new GithubSlugger();
  const ketQua: MucMucLuc[] = [];
  for (const dong of noiDungTho.split("\n")) {
    const khop = /^(#{2,3})\s+(.+)$/.exec(dong.trim());
    if (!khop) continue;
    const depth = khop[1].length as 2 | 3;
    const text = docSachTieuDe(khop[2]);
    if (!text) continue;
    ketQua.push({ id: slugger.slug(text), text, depth });
  }
  return ketQua;
}
