import React from "react";

export type Signal = {
  name: string;
  route: string;
  buyPrice: string;
  sellPrice: string;
  confidence: string;
  window: string;
  margin: string;
};

interface SignalsSectionProps {
  signals: Signal[];
}

const SignalsSection: React.FC<SignalsSectionProps> = ({ signals }) => {
  return (
    <div className="xl:col-span-2 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold text-slate-900">
            Active Arbitrage Signals
          </h2>
          <p className="text-xs text-slate-500">
            Real-time price opportunities across markets
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-xs font-medium text-emerald-600">
            Live
          </span>
        </div>
      </div>

      <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1">
        {signals.map((s) => (
          <div
            key={s.name}
            className="flex flex-col gap-3 rounded-xl border border-slate-100 bg-slate-50/60 p-4 md:flex-row md:items-center"
          >
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-900">
                {s.name}
              </p>
              <p className="text-xs text-slate-500">{s.route}</p>
              <div className="mt-3 grid grid-cols-2 gap-y-2 gap-x-4 text-xs">
                <div>
                  <p className="text-slate-500">Buy Price</p>
                  <p className="font-semibold text-slate-900">
                    {s.buyPrice}
                  </p>
                </div>
                <div>
                  <p className="text-slate-500">Sell Price</p>
                  <p className="font-semibold text-slate-900">
                    {s.sellPrice}
                  </p>
                </div>
                <div>
                  <p className="text-slate-500">Confidence</p>
                  <p className="font-semibold text-slate-900">
                    {s.confidence}
                  </p>
                </div>
                <div>
                  <p className="text-slate-500">Window</p>
                  <p className="font-semibold text-orange-500">
                    {s.window}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-3">
              <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-600">
                {s.margin}
              </span>
              <button className="rounded-full border border-indigo-100 px-3 py-1 text-xs font-medium text-indigo-600 hover:bg-indigo-50">
                Ask AI
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SignalsSection;
