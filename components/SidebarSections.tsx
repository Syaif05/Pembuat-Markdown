// components/SidebarSections.tsx
"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { templates } from "@/lib/templates";

type Props = {
  onAddSnippet: (snippet: string) => void;
};

export default function SidebarSections({ onAddSnippet }: Props) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return templates;
    return templates.filter((t) => t.label.toLowerCase().includes(q));
  }, [query]);

  function handleCustomSection() {
    const title = prompt("Nama section baru:");
    if (!title) return;
    const snippet = `## ${title}\n\nTuliskan konten untuk bagian **${title}** di sini.\n\n`;
    onAddSnippet(snippet);
  }

  return (
    <motion.aside
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="flex h-full w-full flex-col rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-md shadow-slate-200/80 backdrop-blur-xl"
    >
      <div className="mb-3 flex items-center justify-between gap-2 border-b border-slate-200 pb-2">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
          Bagian
        </p>
        {query && (
          <button
            onClick={() => setQuery("")}
            className="text-[11px] text-emerald-600 hover:underline"
          >
            Reset
          </button>
        )}
      </div>

      <div className="mb-2 space-y-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a section"
          className="h-8 w-full rounded-lg border border-slate-200 bg-white px-2 text-xs text-slate-800 shadow-inner shadow-slate-100 outline-none placeholder:text-slate-400 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-300"
        />

        <button
          onClick={handleCustomSection}
          className="w-full rounded-lg border border-dashed border-emerald-300 bg-emerald-50 px-3 py-2 text-left text-xs font-medium text-emerald-700 transition hover:bg-emerald-100"
        >
          + Custom Section
        </button>
      </div>

      <div className="flex-1 space-y-1 overflow-y-auto pr-1 text-sm">
        {filtered.map((section) => (
          <motion.button
            key={section.key}
            onClick={() => onAddSnippet(section.snippet)}
            className="flex w-full items-center justify-between rounded-xl border border-transparent bg-white px-3 py-2 text-left text-xs text-slate-800 shadow-sm shadow-slate-100 transition hover:border-emerald-300 hover:bg-emerald-50"
            whileHover={{ x: 2 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <span>{section.label}</span>
          </motion.button>
        ))}

        {filtered.length === 0 && (
          <p className="pt-4 text-center text-[11px] text-slate-400">
            Tidak ada section yang cocok.
          </p>
        )}
      </div>
    </motion.aside>
  );
}
