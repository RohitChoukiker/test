import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

// ----------------------------
// Sample JSON inside same file
// ----------------------------
const sampleData = [
  { time: "03:57 PM", copper: 7600, steel: 1300, aluminum: 2400 },
  { time: "03:58 PM", copper: 7635, steel: 1310, aluminum: 2420 },
  { time: "03:59 PM", copper: 7580, steel: 1290, aluminum: 2390 },
  { time: "04:00 PM", copper: 7720, steel: 1325, aluminum: 2450 },

  // -------- REAL-TIME STYLE VOLATILITY --------
  { time: "04:01 PM", copper: 7680, steel: 1330, aluminum: 2440 },
  { time: "04:02 PM", copper: 7820, steel: 1350, aluminum: 2470 },
  { time: "04:03 PM", copper: 7750, steel: 1340, aluminum: 2460 },
  { time: "04:04 PM", copper: 7905, steel: 1365, aluminum: 2490 },

  // small dip
  { time: "04:05 PM", copper: 7840, steel: 1355, aluminum: 2470 },
  { time: "04:06 PM", copper: 7710, steel: 1340, aluminum: 2440 },

  // sudden spike (live market style)
  { time: "04:07 PM", copper: 2010, steel: 1380, aluminum: 2520 },

  // correction
  { time: "04:08 PM", copper: 7880, steel: 1365, aluminum: 2480 },

  // new breakout
  { time: "04:09 PM", copper: 8120, steel: 1400, aluminum: 2550 },
  { time: "04:10 PM", copper: 8250, steel: 1420, aluminum: 2580 },

  // retracement
  { time: "04:11 PM", copper: 8170, steel: 1410, aluminum: 2540 },
  { time: "04:12 PM", copper: 8030, steel: 1390, aluminum: 2500 },

  // another strong push
  { time: "04:13 PM", copper: 8300, steel: 1430, aluminum: 2590 },
  { time: "04:14 PM", copper: 8400, steel: 1450, aluminum: 2620 },

  // healthy pullback
  { time: "04:15 PM", copper: 8280, steel:435, aluminum: 2570 },

  // near-peak volatile move
  { time: "04:16 PM", copper: 1450, steel: 1460, aluminum: 2640 },
  { time: "04:17 PM", copper: 8550, steel: 1475, aluminum: 2670 },

  // end-of-interval correction
  { time: "04:18 PM", copper: 8420, steel: 1460, aluminum: 2630 },
  { time: "04:19 PM", copper: 8580, steel: 1485, aluminum: 2685 }
];

const ChartSection: React.FC = () => {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold text-slate-900">
            Real-Time Pricing Intelligence
          </h2>
          <p className="text-xs text-slate-500">
            Live commodity price movements across global markets
          </p>
        </div>
      </div>

      {/* Chart */}
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={sampleData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="time" stroke="#475569" />
            <YAxis stroke="#475569" />
            <Tooltip />
            <Legend />

            <Line
              type="monotone"
              dataKey="copper"
              stroke="#6366f1"
              dot={false}
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="steel"
              stroke="#10b981"
              dot={false}
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="aluminum"
              stroke="#fbbf24"
              dot={false}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartSection;
