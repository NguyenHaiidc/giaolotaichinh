"use client";

import { useState, type FormEvent } from "react";

interface FormTaiFileProps {
  fileHref: string;
  nhanFile?: string;
  nguon: string;
}

type TrangThai = "cho" | "dang-gui" | "xong" | "loi";

/** Form thu email đổi lấy file tải về (vd: mẫu nhật ký giao dịch). */
export function FormTaiFile({
  fileHref,
  nhanFile = "Mẫu nhật ký giao dịch (PDF)",
  nguon,
}: FormTaiFileProps) {
  const [email, setEmail] = useState("");
  const [trangThai, setTrangThai] = useState<TrangThai>("cho");
  const [thongBaoLoi, setThongBaoLoi] = useState("");

  async function xuLySubmit(su_kien: FormEvent<HTMLFormElement>) {
    su_kien.preventDefault();
    setTrangThai("dang-gui");
    setThongBaoLoi("");
    try {
      const phanHoi = await fetch("/api/dang-ky-tai-file", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, nguon }),
      });
      if (!phanHoi.ok) {
        const du_lieu = (await phanHoi.json().catch(() => null)) as { loi?: string } | null;
        throw new Error(du_lieu?.loi ?? "Có lỗi xảy ra, vui lòng thử lại.");
      }
      setTrangThai("xong");
    } catch (err) {
      setTrangThai("loi");
      setThongBaoLoi(err instanceof Error ? err.message : "Có lỗi xảy ra, vui lòng thử lại.");
    }
  }

  if (trangThai === "xong") {
    return (
      <div className="my-6 rounded-xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950/30">
        <p className="font-medium text-emerald-800 dark:text-emerald-300">
          Cảm ơn bạn! Tải file tại đây:
        </p>
        <a
          href={fileHref}
          download
          className="mt-3 inline-block rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-800"
        >
          Tải {nhanFile}
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={xuLySubmit}
      className="my-6 rounded-xl border border-zinc-200 p-5 dark:border-zinc-800"
    >
      <p className="font-medium text-zinc-900 dark:text-zinc-100">Nhận miễn phí: {nhanFile}</p>
      <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
        Để lại email, chúng tôi gửi file ngay cho bạn.
      </p>
      <div className="mt-3 flex flex-col gap-2 sm:flex-row">
        <label htmlFor={`email-${nguon}`} className="sr-only">
          Email
        </label>
        <input
          id={`email-${nguon}`}
          type="email"
          required
          value={email}
          onChange={(su_kien) => setEmail(su_kien.target.value)}
          placeholder="email@vidu.com"
          className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
        />
        <button
          type="submit"
          disabled={trangThai === "dang-gui"}
          className="shrink-0 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-700 disabled:opacity-60 dark:bg-zinc-100 dark:text-zinc-900"
        >
          {trangThai === "dang-gui" ? "Đang gửi..." : "Nhận file"}
        </button>
      </div>
      {trangThai === "loi" && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-400">{thongBaoLoi}</p>
      )}
    </form>
  );
}
