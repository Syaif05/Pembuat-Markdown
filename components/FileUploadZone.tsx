// components/FileUploadZone.tsx
"use client";

type Props = {
  onFileContent: (content: string) => void;
};

export default function FileUploadZone({ onFileContent }: Props) {
  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const text = await file.text();
    onFileContent(text);
  }

  return (
    <label className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1.5 text-[11px] font-medium text-slate-800 shadow-sm shadow-slate-200 transition hover:border-emerald-400 hover:bg-emerald-50">
      <span>Pilih README.md</span>
      <input
        type="file"
        accept=".md,.markdown,.txt"
        className="hidden"
        onChange={handleFileChange}
      />
    </label>
  );
}
