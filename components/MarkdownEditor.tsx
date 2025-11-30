// components/MarkdownEditor.tsx
"use client";

import { motion } from "framer-motion";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function MarkdownEditor({ value, onChange }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.05 }}
      className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white/90 shadow-md shadow-slate-200/80 backdrop-blur-xl"
    >
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-2">
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
          Editor
        </span>
        <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] text-emerald-700">
          Markdown
        </span>
      </div>
      <textarea
        className="flex-1 resize-none bg-transparent p-4 text-xs font-mono leading-relaxed text-slate-900 outline-none placeholder:text-slate-400"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        spellCheck={false}
        placeholder="# Mulai tulis README kamu di sini..."
      />
    </motion.div>
  );
}
