import React, { useRef, useEffect, useState } from "react";

export type TabKey = "overview" | "dataIngestion";

interface HeaderSliderProps {
  activeTab: TabKey;
  onChange: (tab: TabKey) => void;
}

const TABS: { key: TabKey; label: string }[] = [
  { key: "overview", label: "Overview" },
  { key: "dataIngestion", label: "Data Ingestion" },
];

const HeaderSlider: React.FC<HeaderSliderProps> = ({ activeTab, onChange }) => {
  const buttonRefs = useRef<HTMLButtonElement[]>([]);
  const [sliderStyle, setSliderStyle] = useState({ width: 0, left: 0 });

  // Update slider width + position whenever activeTab changes
  useEffect(() => {
    const index = TABS.findIndex((t) => t.key === activeTab);
    const btn = buttonRefs.current[index];

    if (btn) {
      setSliderStyle({
        width: btn.offsetWidth,
        left: btn.offsetLeft,
      });
    }
  }, [activeTab]);

  return (
    <div className="flex items-center justify-between">
      <div className="relative inline-flex overflow-hidden rounded-2xl bg-slate-100 p-1">
        
        {/* Dynamic slider */}
        <span
          className="absolute inset-y-1 rounded-2xl bg-white shadow-sm transition-all duration-300 ease-out"
          style={{
            width: sliderStyle.width,
            transform: `translateX(${sliderStyle.left}px)`,
          }}
        />

        {TABS.map((tab, index) => {
          const isActive = tab.key === activeTab;

          return (
            <button
              key={tab.key}
              ref={(el) => {
                if (el) buttonRefs.current[index] = el;
              }}
              type="button"
              onClick={() => onChange(tab.key)}
              className={[
                "relative z-10 flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium transition-colors duration-200",
                isActive
                  ? "text-slate-900"
                  : "text-slate-500 hover:text-slate-700",
              ].join(" ")}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default HeaderSlider;
