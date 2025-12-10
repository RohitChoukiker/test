import React from "react";

export type Activity = {
  label: string;
  time: string;
  color: string;
};

interface ActivitySectionProps {
  activities: Activity[];
}

const ActivitySection: React.FC<ActivitySectionProps> = ({ activities }) => {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm flex flex-col h-full">
      <div className="mb-4 flex-shrink-0">
        <h2 className="text-sm font-semibold text-slate-900">
          Live Activity
        </h2>
        <p className="text-xs text-slate-500">
          Latest optimifzation and customer behavior signals
        </p>
      </div>

      <div className="space-y-3 overflow-y-auto flex-1 pr-1">
        {activities.map((a, idx) => (
          <div key={idx} className="flex items-start justify-between">
            <div className="flex items-start gap-3">
              <span
                className={`mt-1 h-2 w-2 rounded-full ${a.color}`}
              />
              <div>
                <p className="text-xs font-medium text-slate-800">
                  {a.label}
                </p>
                <p className="text-[11px] text-slate-400">{a.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitySection;
