import React from "react";
import { MessageSquare, Zap, Database, CheckCircle } from "lucide-react";

const steps = [
  { icon: MessageSquare, label: "Raw Sources", sublabel: "WhatsApp, Email, PDF" },
  { icon: Zap, label: "AI Processing", sublabel: "NLP & Entity Extract" },
  { icon: Database, label: "Structured Data", sublabel: "Normalized Format" },
  { icon: CheckCircle, label: "Intelligence Layer", sublabel: "Ready for Action" },
];

const IngestionPipelineFlow: React.FC = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
      <h2 className="text-xl font-bold mb-8 text-slate-800">
        Ingestion Pipeline Flow
      </h2>

      <div className="flex items-center gap-10 overflow-x-auto pb-4 justify-between">

        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-10 flex-shrink-0">

            {/* ICON + LABEL */}
            <div className="text-center min-w-[130px]">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 
                              flex items-center justify-center shadow-md mb-3 mx-auto">
                <step.icon className="w-7 h-7 text-white" />
              </div>
              <div className="font-semibold text-sm text-slate-900">{step.label}</div>
              <div className="text-xs text-slate-500">{step.sublabel}</div>
            </div>

            {/* GRADIENT LINE + ARROW */}
            {index < steps.length - 1 && (
              <div className="flex items-center">
                <div className="w-16 h-1 bg-gradient-to-r from-indigo-400 to-violet-400 rounded-full" />
                <div className="w-0 h-0 
                                border-t-4 border-b-4 border-l-8 
                                border-t-transparent border-b-transparent 
                                border-l-violet-500"></div>
              </div>
            )}

          </div>
        ))}

      </div>
    </div>
  );
};

export default IngestionPipelineFlow;
