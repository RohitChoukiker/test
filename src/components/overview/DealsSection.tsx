import React from "react";

export type Deal = {
  company: string;
  product: string;
  likelihood: string;
  suggestedPrice: string;
  expectedMargin: string;
  tags: string[];
};

interface DealsSectionProps {
  deals: Deal[];
}

const DealsSection: React.FC<DealsSectionProps> = ({ deals }) => {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold text-slate-900">
            AI-Powered Deal Recommendations
          </h2>
          <p className="text-xs text-slate-500">
            Proactive opportunities based on customer behavior and market
            conditions
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {deals.map((d) => (
          <div
            key={d.company}
            className="flex flex-col justify-between rounded-xl border border-slate-100 bg-slate-50/70 p-4"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {d.company}
                </p>
                <p className="text-xs text-slate-500">{d.product}</p>
              </div>
              <span className="rounded-full bg-indigo-50 px-2 py-1 text-[11px] font-medium text-indigo-600">
                {d.likelihood}
              </span>
            </div>

            <div className="mt-3 flex gap-6 text-xs">
              <div>
                <p className="text-slate-500">Suggested Price</p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  {d.suggestedPrice}
                </p>
              </div>
              <div>
                <p className="text-slate-500">Expected Margin</p>
                <p className="mt-1 text-sm font-semibold text-emerald-600">
                  {d.expectedMargin}
                </p>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {d.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white px-2 py-1 text-[11px] text-slate-500 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4">
              <button className="rounded-full border border-indigo-100 bg-white px-3 py-1.5 text-xs font-medium text-indigo-600 hover:bg-indigo-50">
                Ask AI
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsSection;
