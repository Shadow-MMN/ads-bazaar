"use client";

interface AssetSelectorProps {
  assets: string[];
  selected: string;
  onChange: (asset: string) => void;
}

export function AssetSelector({ assets, selected, onChange }: AssetSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {assets.map((asset) => {
        const isSelected = asset === selected;
        return (
          <button
            key={asset}
            type="button"
            onClick={() => onChange(asset)}
            className="rounded-full px-4 py-2 text-sm font-bold transition"
            style={{
              backgroundColor: isSelected ? "#131313" : "transparent",
              color: isSelected ? "#f7f8f2" : "rgba(255,255,255,0.4)",
              border: isSelected ? "1px solid rgba(255,255,255,0.3)" : "1px solid rgba(255,255,255,0.15)",
            }}
          >
            {asset}
          </button>
        );
      })}
    </div>
  );
}
