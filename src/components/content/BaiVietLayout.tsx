import type { ReactNode } from "react";
import { BaiLienQuan } from "@/components/content/BaiLienQuan";
import { BaiTiepTheo } from "@/components/content/BaiTiepTheo";
import { CauHoiThuongGap } from "@/components/content/CauHoiThuongGap";
import { FormTaiFile } from "@/components/content/FormTaiFile";
import { MucLuc } from "@/components/content/MucLuc";
import { JsonLd } from "@/components/seo/JsonLd";
import type { MucMucLuc } from "@/lib/muc-luc";
import { schemaBaiViet, schemaFAQ } from "@/lib/schema";
import type { BaiVietFrontmatter, BaiVietVoiCollection } from "@/lib/types";

interface BaiVietLayoutProps {
  frontmatter: BaiVietFrontmatter;
  thoiGianDoc?: string;
  mucLuc: MucMucLuc[];
  urlDayDu: string;
  baiLienQuan: BaiVietVoiCollection[];
  tieuDeBaiLienQuan?: string;
  baiTiepTheo?: BaiVietVoiCollection | null;
  children: ReactNode;
}

/**
 * Khung bài viết dùng chung cho mọi collection (huong-dan, thuat-ngu, cong-cu,
 * canh-bao, case-study, lo-trinh): tiêu đề + meta, mục lục, nội dung MDX,
 * FAQ, form tải file, bài tiếp theo, bài liên quan, và 2 script JSON-LD.
 */
export function BaiVietLayout({
  frontmatter,
  thoiGianDoc,
  mucLuc,
  urlDayDu,
  baiLienQuan,
  tieuDeBaiLienQuan,
  baiTiepTheo = null,
  children,
}: BaiVietLayoutProps) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
      <JsonLd data={schemaBaiViet(frontmatter, urlDayDu)} />
      {frontmatter.faq && frontmatter.faq.length > 0 && <JsonLd data={schemaFAQ(frontmatter.faq)} />}

      <header>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          {frontmatter.title}
        </h1>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          Đăng {frontmatter.ngayDang} · Cập nhật {frontmatter.ngayCapNhat}
          {thoiGianDoc ? ` · ${thoiGianDoc}` : ""}
        </p>
      </header>

      <div className="lg:float-right lg:ml-10 lg:w-64">
        <MucLuc items={mucLuc} />
      </div>

      <div className="mt-6 min-w-0">{children}</div>

      <CauHoiThuongGap items={frontmatter.faq} />

      {frontmatter.coFileTaiVe && (
        <FormTaiFile fileHref={`/files/${frontmatter.slug}.pdf`} nguon={frontmatter.slug} />
      )}

      <BaiTiepTheo item={baiTiepTheo} />
      <BaiLienQuan items={baiLienQuan} tieuDe={tieuDeBaiLienQuan} />
    </article>
  );
}
