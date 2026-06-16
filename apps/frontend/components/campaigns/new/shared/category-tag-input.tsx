"use client";

import { useState, useRef } from "react";
import { X } from "lucide-react";

interface CategoryTagInputProps {
  selected: string[];
  options: string[];
  onChange: (tags: string[]) => void;
}

export function CategoryTagInput({ selected, options, onChange }: CategoryTagInputProps) {
  const [inputValue, setInputValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const remaining = options.filter(
    (o) => !selected.includes(o) && o.toLowerCase().includes(inputValue.toLowerCase())
  );

  function addTag(tag: string) {
    if (!selected.includes(tag)) {
      onChange([...selected, tag]);
    }
    setInputValue("");
    setShowDropdown(false);
    inputRef.current?.focus();
  }

  function removeTag(tag: string) {
    onChange(selected.filter((t) => t !== tag));
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      const match = remaining.find((o) => o.toLowerCase() === inputValue.toLowerCase());
      if (match) addTag(match);
      else if (!selected.includes(inputValue.trim())) addTag(inputValue.trim());
    }
    if (e.key === "Backspace" && !inputValue && selected.length > 0) {
      removeTag(selected[selected.length - 1]);
    }
  }

  return (
    <div className="relative">
      <div
        className="flex min-h-[44px] flex-wrap gap-2 rounded-lg border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.06)] p-2 focus-within:border-[rgba(255,255,255,0.3)]"
        onClick={() => inputRef.current?.focus()}
      >
        {selected.map((tag) => (
          <span
            key={tag}
            className="flex items-center gap-1 rounded px-2 py-0.5 text-sm font-medium"
            style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#f7f8f2" }}
          >
            {tag}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); removeTag(tag); }}
              className="ml-0.5 text-[rgba(255,255,255,0.5)] hover:text-[#f7f8f2]"
            >
              <X size={12} />
            </button>
          </span>
        ))}
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => { setInputValue(e.target.value); setShowDropdown(true); }}
          onFocus={() => setShowDropdown(true)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
          onKeyDown={handleKeyDown}
          placeholder={selected.length === 0 ? "Add categories..." : ""}
          className="min-w-[120px] flex-1 bg-transparent text-sm text-[#f7f8f2] outline-none placeholder:text-[rgba(255,255,255,0.3)]"
        />
      </div>

      {showDropdown && remaining.length > 0 && (
        <ul className="absolute left-0 right-0 top-full z-20 mt-1 max-h-48 overflow-y-auto rounded-lg border border-[rgba(255,255,255,0.12)] bg-[#1e1e1e] py-1 shadow-lg">
          {remaining.map((option) => (
            <li key={option}>
              <button
                type="button"
                onMouseDown={() => addTag(option)}
                className="w-full px-3 py-2 text-left text-sm text-[rgba(255,255,255,0.8)] hover:bg-[rgba(255,255,255,0.08)]"
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}

      <p className="mt-1.5 text-[11px] text-[rgba(255,255,255,0.4)]">
        Select at least 3 categories for better reach.
      </p>
    </div>
  );
}
