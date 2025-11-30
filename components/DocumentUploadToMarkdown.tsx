// @ts-nocheck
"use client";

import { useState } from "react";
import * as mammoth from "mammoth/mammoth.browser";
import TurndownService from "turndown";

type Props = {
  onMarkdown: (content: string) => void;
};

const td = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
});

export default function DocumentUploadToMarkdown({ onMarkdown }: Props) {
  const [loading, setLoading] = useState(false);

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);

    const ext = file.name.split(".").pop()?.toLowerCase();

    try {
      if (ext === "md" || ext === "markdown" || ext === "txt") {
        const text = await file.text();
        onMarkdown(text);
      } else if (ext === "html" || ext === "htm") {
        const html = await file.text();
        const md = td.turndown(html);
        onMarkdown(md);
      } else if (ext === "docx") {
        const arrayBuffer = await file.arrayBuffer();
        const result = await mammoth.convertToHtml({ arrayBuffer });
        const html = result.value || "";
        const md = td.turndown(html);
        onMarkdown(md);
      } else {
        alert("Format tidak didukung. Gunakan .docx, .html, .txt, atau .md");
      }
    } catch (err) {
      console.error(err);
      alert("Gagal mengonversi dokumen ke Markdown.");
    } finally {
      setLoading(false);
      e.target.value = "";
    }
  }

  return (
    <label className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1.5 text-[11px] font-medium text-slate-800 shadow-sm shadow-slate-200 transition hover:border-emerald-400 hover:bg-emerald-50">
      <span>{loading ? "Mengonversi..." : "Upload Dokumen → Markdown"}</span>
      <input
        type="file"
        accept=".md,.markdown,.txt,.html,.htm,.docx"
        className="hidden"
        onChange={handleFileChange}
        disabled={loading}
      />
    </label>
  );
}
