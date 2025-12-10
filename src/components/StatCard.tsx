import React from "react";

export type StatCard = {
  label: string;
  value: string;
  delta?: string;
  deltaTone?: "up" | "down" | "neutral";
};

interface StatCardComponentProps {
  card: StatCard;
}

const StatCardComponent: React.FC<StatCardComponentProps> = ({ card }) => {
  return (
    <div className="relative rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-slate-500">
            {card.label}
          </p>
          <p className="mt-2 text-2xl font-semibold tracking-tight">
            {card.value}
          </p>
        </div>
        {card.delta && (
          <div
            className={`rounded-full px-2 py-0.5 text-xs font-medium ${
              card.deltaTone === "down"
                ? "bg-rose-50 text-rose-600"
                : card.deltaTone === "up"
                ? "bg-emerald-50 text-emerald-600"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            {card.delta}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCardComponent;
