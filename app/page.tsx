// app/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import SidebarSections from "@/components/SidebarSections";
import MarkdownEditor from "@/components/MarkdownEditor";
import MarkdownPreview from "@/components/MarkdownPreview";
import FileUploadZone from "@/components/FileUploadZone";
import DocumentUploadToMarkdown from "@/components/DocumentUploadToMarkdown";


export default function HomePage() {
  const [markdown, setMarkdown] = useState<string>("# README\n");

  function handleAddSnippet(snippet: string) {
    setMarkdown((prev) => (prev.trimEnd() + "\n\n" + snippet).trimStart());
  }

  function handleFileContent(content: string) {
    setMarkdown(content);
  }

  function handleDownload() {
    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "README.md";
    a.click();
    URL.revokeObjectURL(url);
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(markdown);
    } catch {
      alert("Gagal menyalin ke clipboard.");
    }
  }

  return (
    <div className="min-h-screen pb-8">
      <Navbar onDownload={handleDownload} onCopy={handleCopy} />

      <motion.main
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.05 }}
        className="mt-4 w-full px-4 lg:px-8"

      >
        <div className="mb-4 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 shadow-md shadow-slate-200/80 backdrop-blur-xl md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-900">
              Buat README dengan cepat ✨
            </p>
            <p className="text-[11px] text-slate-500">
              Tambah section, edit konten, lihat preview real-time, lalu
              download file README.md siap pakai.
            </p>
          </div>
          <div className="mb-4 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 shadow-md shadow-slate-200/80 backdrop-blur-xl md:flex-row md:items-center md:justify-between">
  <div>
    <p className="text-xs font-semibold text-slate-900">
      Buat README dengan cepat ✨
    </p>
    <p className="text-[11px] text-slate-500">
      Tambah section, edit konten, lihat preview real-time, lalu download file README.md siap pakai.
    </p>
  </div>
  <div className="flex flex-wrap items-center gap-3">
    <FileUploadZone onFileContent={handleFileContent} />
    <DocumentUploadToMarkdown onMarkdown={setMarkdown} />
  </div>
</div>

        </div>

        <div className="grid min-h-[calc(100vh-11rem)] gap-4 md:grid-cols-[260px,1fr,1fr]">
  <SidebarSections onAddSnippet={handleAddSnippet} />
  <MarkdownEditor value={markdown} onChange={setMarkdown} />
  <MarkdownPreview value={markdown} />
</div>

      </motion.main>
    </div>
  );
}
