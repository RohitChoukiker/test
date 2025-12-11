import React from "react";
import StatCardComponent, { StatCard } from "./StatCard";
import SignalsSection, { Signal } from "./overview/SignalsSection";
import ActivitySection, { Activity } from "./overview/ActivitySection";
import ChartSection from "./overview/ChartSection";
import DealsSection, { Deal } from "./overview/DealsSection";

const statCards: StatCard[] = [
  { label: "Active Opportunities", value: "12", delta: "+3", deltaTone: "up" },
  {
    label: "Potential Margin",
    value: "$847K",
    delta: "+12.4%",
    deltaTone: "up",
  },
  {
    label: "Avg. Confidence",
    value: "89%",
    delta: "+5%",
    deltaTone: "up",
  },
  { label: "Open Deals", value: "28", delta: "-2", deltaTone: "down" },
];

const signals: Signal[] = [
  {
    name: "Copper Wire (Grade A)",
    route: "Shanghai → Rotterdam",
    buyPrice: "$8,250",
    sellPrice: "$9,180",
    confidence: "94%",
    window: "4h window",
    margin: "+11.3% margin",
  },
  {
    name: "Steel Coils (HRC)",
    route: "Mumbai → Dubai",
    buyPrice: "$650",
    sellPrice: "$705",
    confidence: "87%",
    window: "6h window",
    margin: "+8.5% margin",
  },
  {
    name: "Steel Coils (HRC)",
    route: "Mumbai → Dubai",
    buyPrice: "$650",
    sellPrice: "$705",
    confidence: "87%",
    window: "6h window",
    margin: "+8.5% margin",
  },
  {
    name: "Steel Coils (HRC)",
    route: "Mumbai → Dubai",
    buyPrice: "$650",
    sellPrice: "$705",
    confidence: "87%",
    window: "6h window",
    margin: "+8.5% margin",
  },
  {
    name: "Aluminum Ingots",
    route: "Singapore → Jakarta",
    buyPrice: "$2,340",
    sellPrice: "$2,540",
    confidence: "91%",
    window: "3h window",
    margin: "+8.6% margin",
  },
];

const activities: Activity[] = [
  {
    label: "Freight rate optimization available",
    time: "Just now",
    color: "bg-indigo-500",
  },
  {
    label: "Customer engagement spike detected",
    time: "Just now",
    color: "bg-amber-500",
  },
  {
    label: "Freight rate optimization available",
    time: "Just now",
    color: "bg-indigo-500",
  },
  {
    label: "Customer engagement spike detected",
    time: "Just now",
    color: "bg-amber-500",
  },

  // ⭐ NEW SAMPLE ACTIVITIES ⭐
  {
    label: "New high-value lead captured",
    time: "2 min ago",
    color: "bg-emerald-500",
  },
  {
    label: "Payment delay risk flagged",
    time: "5 min ago",
    color: "bg-red-500",
  },
  {
    label: "Bulk order opportunity identified",
    time: "7 min ago",
    color: "bg-blue-500",
  },
  {
    label: "Supplier price variance detected",
    time: "10 min ago",
    color: "bg-purple-500",
  },
  {
    label: "Customer sentiment shift observed",
    time: "12 min ago",
    color: "bg-rose-500",
  },
  {
    label: "Inventory shortfall risk predicted",
    time: "14 min ago",
    color: "bg-orange-500",
  },
  {
    label: "New vendor match recommendation",
    time: "18 min ago",
    color: "bg-teal-500",
  },
  {
    label: "Logistics bottleneck probability increased",
    time: "20 min ago",
    color: "bg-pink-500",
  },
  {
    label: "Price optimization event triggered",
    time: "22 min ago",
    color: "bg-cyan-500",
  },
  {
    label: "Cross-sell opportunity surfaced",
    time: "25 min ago",
    color: "bg-lime-500",
  },
];


const deals: Deal[] = [
  {
    company: "Meridian Industries",
    product: "Copper Wire (5MT)",
    likelihood: "78% likely",
    suggestedPrice: "$9,180",
    expectedMargin: "+11.3%",
    tags: ["Recent inquiry", "Price drop opportunity"],
  },
  {
    company: "Atlas Trading Co.",
    product: "Steel Coils (12MT)",
    likelihood: "82% likely",
    suggestedPrice: "$705",
    expectedMargin: "+8.5%",
    tags: ["Recurring customer", "Favorable freight rates"],
  },
];

const OverviewContent: React.FC = () => {
  return (
    <>
      {/* Top stat cards */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {statCards.map((card) => (
          <StatCardComponent key={card.label} card={card} />
        ))}
      </div>

      {/* Middle row */}
      <div className="grid gap-4" style={{ gridTemplateColumns: "2fr 1fr" }}>
        <div className="h-2/3 overflow-y-auto">
          <SignalsSection signals={signals} />
        </div>
        <div className="h-2/3 overflow-y-auto">
          <ActivitySection activities={activities} />
        </div>
      </div>

      {/* Chart area */}
      <ChartSection />

      {/* Deal recommendations */}
      <DealsSection deals={deals} />
    </>
  );
};

export default OverviewContent;
