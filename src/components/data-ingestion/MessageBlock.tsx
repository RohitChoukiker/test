import React from "react";
import ActionButton from "./ActionButton";
import Field from "./Field";
import SourceBadge from "./SourceBadge";
import { MessageBlockProps } from "./types";

import {
  IoCubeOutline,
  IoPricetagOutline,
  IoCashOutline,
  IoLayersOutline,
  IoCardOutline,
  IoLocationOutline,
  IoPersonOutline,
  IoTimeOutline,
  IoStatsChartOutline,
} from "react-icons/io5";

const MessageBlock: React.FC<MessageBlockProps> = ({
  source,
  time,
  rawMessage,
  extracted,
}) => {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm space-y-6">

      {/* TITLE + SUBTITLE */}
      <div className="space-y-1">
        <h1 className="text-xl font-semibold text-slate-900">
          Real-Time Data Ingestion
        </h1>
        <p className="text-base text-slate-500">
          AI-powered parsing extracts structured data from unstructured messages
        </p>
      </div>

      <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm space-y-4">
        {/* HEADER ROW: source, time, status */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <SourceBadge source={source} />
            <span className="text-slate-400">•</span>
            <span className="text-slate-500">{time}</span>
          </div>

          <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Ingested
          </span>
        </div>

        {/* RAW MESSAGE */}
        <section className="space-y-1">
          <p className="text-xs font-medium  tracking-wide text-slate-500">
            Raw Message
          </p>
          <div className="whitespace-pre-line rounded-xl border border-slate-100 bg-slate-50 px-3 py-2.5 text-sm text-slate-800">
            {rawMessage}
          </div>
        </section>

        {/* AI EXTRACTED */}
        <section className="space-y-2">
          <p className="text-xs font-medium  tracking-wide text-slate-500">
            AI-Extracted Intelligence
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
            <Field label="Product" value={extracted.product} icon={<IoCubeOutline />} />
            <Field label="Quantity" value={extracted.quantity} icon={<IoLayersOutline />} />

            {extracted.price && (
              <Field label="Price" value={extracted.price} icon={<IoPricetagOutline />} />
            )}

            <Field
              label="Cash Flow Impact"
              value={extracted.cashFlow}
              icon={<IoCashOutline />}
            />

            <Field
              label="Working Capital"
              value={extracted.workingCapital}
              icon={<IoStatsChartOutline />}
            />

            {extracted.paymentTerms && (
              <Field
                label="Payment Terms"
                value={extracted.paymentTerms}
                icon={<IoCardOutline />}
              />
            )}

            <Field label="Location" value={extracted.location} icon={<IoLocationOutline />} />
            <Field label="Customer" value={extracted.customer} icon={<IoPersonOutline />} />
            <Field label="Urgency" value={extracted.urgency} highlight icon={<IoTimeOutline />} />
          </div>
        </section>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-3 pt-2">
          <ActionButton>View in CRM</ActionButton>
          <ActionButton>Create Deal</ActionButton>
          <ActionButton variant="secondary">Generate Quote</ActionButton>
        </div>
      </div>
    </div>
  );
};

export default MessageBlock;
