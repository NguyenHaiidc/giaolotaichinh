"use client";

import { useState } from "react";

const TAN_SUAT_GHEP_LAI = [
  { nhan: "Hàng năm", giaTri: 1 },
  { nhan: "Hàng quý", giaTri: 4 },
  { nhan: "Hàng tháng", giaTri: 12 },
];

function dinhDangTien(so: number): string {
  return `${so.toLocaleString("vi-VN", { maximumFractionDigits: 0 })} ₫`;
}

/** Máy tính lãi kép — công cụ tính toán thuần túy, không phải khuyến nghị đầu tư. */
export function MayTinhLaiKep() {
  const [soTienGoc, setSoTienGoc] = useState(10_000_000);
  const [laiSuatNam, setLaiSuatNam] = useState(8);
  const [soNam, setSoNam] = useState(10);
  const [tanSuat, setTanSuat] = useState(12);

  const laiSuatThapPhan = laiSuatNam / 100;
  const giaTriTuongLai = soTienGoc * Math.pow(1 + laiSuatThapPhan / tanSuat, tanSuat * soNam);
  const tongLai = giaTriTuongLai - soTienGoc;

  return (
    <div className="my-6 rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
      <p className="font-semibold text-zinc-900 dark:text-zinc-100">Máy tính lãi kép</p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="text-zinc-600 dark:text-zinc-400">Số tiền gốc (VNĐ)</span>
          <input
            type="number"
            min={0}
            value={soTienGoc}
            onChange={(su_kien) => setSoTienGoc(Number(su_kien.target.value))}
            className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 dark:border-zinc-700 dark:bg-zinc-900"
          />
        </label>

        <label className="block text-sm">
          <span className="text-zinc-600 dark:text-zinc-400">Lãi suất mỗi năm (%)</span>
          <input
            type="number"
            min={0}
            step={0.1}
            value={laiSuatNam}
            onChange={(su_kien) => setLaiSuatNam(Number(su_kien.target.value))}
            className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 dark:border-zinc-700 dark:bg-zinc-900"
          />
        </label>

        <label className="block text-sm">
          <span className="text-zinc-600 dark:text-zinc-400">Số năm đầu tư</span>
          <input
            type="number"
            min={0}
            value={soNam}
            onChange={(su_kien) => setSoNam(Number(su_kien.target.value))}
            className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 dark:border-zinc-700 dark:bg-zinc-900"
          />
        </label>

        <label className="block text-sm">
          <span className="text-zinc-600 dark:text-zinc-400">Tần suất ghép lãi</span>
          <select
            value={tanSuat}
            onChange={(su_kien) => setTanSuat(Number(su_kien.target.value))}
            className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 dark:border-zinc-700 dark:bg-zinc-900"
          >
            {TAN_SUAT_GHEP_LAI.map((tv) => (
              <option key={tv.giaTri} value={tv.giaTri}>
                {tv.nhan}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg bg-emerald-50 p-4 dark:bg-emerald-950/30">
          <p className="text-xs text-zinc-600 dark:text-zinc-400">Giá trị sau {soNam} năm</p>
          <p className="mt-1 text-xl font-bold text-emerald-800 dark:text-emerald-300">
            {Number.isFinite(giaTriTuongLai) ? dinhDangTien(giaTriTuongLai) : "—"}
          </p>
        </div>
        <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-900">
          <p className="text-xs text-zinc-600 dark:text-zinc-400">Tổng tiền lãi</p>
          <p className="mt-1 text-xl font-bold text-zinc-900 dark:text-zinc-100">
            {Number.isFinite(tongLai) ? dinhDangTien(tongLai) : "—"}
          </p>
        </div>
      </div>

      <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-400">
        Công cụ tính toán tham khảo, giả định lãi suất cố định suốt kỳ hạn — không phải cam kết lợi nhuận thực tế.
      </p>
    </div>
  );
}
