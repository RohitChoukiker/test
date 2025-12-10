import React from "react";

const SourceBadge: React.FC<{ source: string }> = ({ source }) => {
  const base =
    "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium";

  switch (source) {
    case "WHATSAPP":
      return (
        <span className={`${base} bg-emerald-50 text-emerald-700`}>
          
          WhatsApp
        </span>
      );
    case "EMAIL":
      return (
        <span className={`${base} bg-sky-50 text-sky-700`}>
         
          Email
        </span>
      );
    case "PDF":
      return (
        <span className={`${base} bg-violet-50 text-violet-700`}>
        
          PDF
        </span>
      );
    default:
      return (
        <span className={`${base} bg-slate-100 text-slate-700`}>
          {source}
        </span>
      );
  }
};

export default SourceBadge;
