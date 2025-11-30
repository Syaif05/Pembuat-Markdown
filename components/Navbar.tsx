// components/Navbar.tsx
"use client";

import { motion } from "framer-motion";

type Props = {
  onDownload: () => void;
  onCopy: () => void;
};

export default function Navbar({ onDownload, onCopy }: Props) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mt-4 w-full px-4 lg:px-8"

    >
      <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 shadow-lg shadow-slate-200/70 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 via-sky-500 to-purple-500 shadow-md shadow-emerald-500/40">
            <span className="text-lg font-bold text-white">R</span>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-tight text-slate-900">
              Readme Builder
            </p>
            <p className="text-xs text-slate-500">
              Editor README / Markdown versi kamu
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onCopy}
            className="rounded-full border border-slate-300 bg-white px-4 py-1.5 text-xs font-medium text-slate-800 shadow-sm shadow-slate-200 transition hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-800"
          >
            Copy Markdown
          </button>
          <button
            onClick={onDownload}
            className="rounded-full bg-gradient-to-r from-emerald-400 via-sky-500 to-purple-500 px-4 py-1.5 text-xs font-semibold text-white shadow-md shadow-emerald-500/40 transition hover:brightness-110"
          >
            Download README.md
          </button>
        </div>
      </div>
    </motion.header>
  );
}
