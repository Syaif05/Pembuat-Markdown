// components/MarkdownPreview.tsx
"use client";

import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  value: string;
};

export default function MarkdownPreview({ value }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white/90 shadow-md shadow-slate-200/80 backdrop-blur-xl"
    >
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-2">
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
          Preview
        </span>
        <span className="flex items-center gap-1 text-[10px] text-emerald-700">
          <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.9)]" />
          Live
        </span>
      </div>

      <div className="prose prose-sm prose-slate max-w-none flex-1 overflow-y-auto px-4 pb-4 pt-3">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {value || "*Belum ada konten. Tulis sesuatu di editor...*"}
        </ReactMarkdown>
      </div>
    </motion.div>
  );
}
