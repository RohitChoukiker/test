import React from "react";
import { CardMetric } from "./types";

const MetricCard: React.FC<CardMetric> = ({ title, value, change }) => {
  const clean = change.trim().toLowerCase();
  const isPositive = clean.startsWith("+") || clean.includes("up ");

  return (
    <div className="rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <p className="text-xs font-medium text-slate-500">{title}</p>

        <span
          className={`rounded-full px-2 py-0.5 text-xs font-medium ${
            isPositive
              ? "bg-emerald-50 text-emerald-700"
              : "bg-rose-50 text-rose-700"
          }`}
        >
          {change}
        </span>
      </div>

      <p className="mt-2 text-2xl font-semibold text-slate-900">{value}</p>
    </div>
  );
};

export default MetricCard;
