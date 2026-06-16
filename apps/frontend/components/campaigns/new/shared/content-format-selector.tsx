"use client";

import { Video, FileText, MessageSquare, MoreHorizontal } from "lucide-react";

const FORMAT_ICONS: Record<string, React.ReactNode> = {
  Video: <Video size={24} />,
  Post: <FileText size={24} />,
  Thread: <MessageSquare size={24} />,
  Other: <MoreHorizontal size={24} />,
};

interface ContentFormatSelectorProps {
  formats: string[];
  selected: string[];
  onChange: (formats: string[]) => void;
}

export function ContentFormatSelector({ formats, selected, onChange }: ContentFormatSelectorProps) {
  function toggle(format: string) {
    if (selected.includes(format)) {
      onChange(selected.filter((f) => f !== format));
    } else {
      onChange([...selected, format]);
    }
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {formats.map((format) => {
        const isSelected = selected.includes(format);
        return (
          <button
            key={format}
            type="button"
            onClick={() => toggle(format)}
            className="flex h-20 flex-col items-center justify-center gap-2 rounded-lg border transition"
            style={{
              borderColor: isSelected ? "#c8f232" : "rgba(255,255,255,0.12)",
              color: isSelected ? "#c8f232" : "rgba(255,255,255,0.4)",
              backgroundColor: isSelected ? "rgba(200,242,50,0.06)" : "rgba(255,255,255,0.03)",
            }}
          >
            {FORMAT_ICONS[format] ?? <MoreHorizontal size={24} />}
            <span className="text-[13px] font-medium" style={{ color: isSelected ? "#f7f8f2" : "rgba(255,255,255,0.5)" }}>
              {format}
            </span>
          </button>
        );
      })}
    </div>
  );
}
