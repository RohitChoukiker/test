import React from "react";

export type FieldProps = {
  label: string;
  value: string;
  highlight?: boolean;
  icon?: React.ReactNode;
};

const Field: React.FC<FieldProps> = ({ label, value, highlight, icon }) => (
  <div className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2">
    <p className="text-[11px] font-medium uppercase tracking-wide text-slate-500 flex items-center gap-1.5">
      {icon}
      {label}
    </p>
    <p
      className={`mt-0.5 text-sm ${
        highlight ? "font-semibold text-amber-700" : "text-slate-800"
      }`}
    >
      {value}
    </p>
  </div>
);

export default Field;
