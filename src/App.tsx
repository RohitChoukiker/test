import React, { useState } from "react";
import Header from "./components/Header";
import HeaderSlider from "./components/HeaderSlider";
import DataIngestionContent from "./components/DataIngestionContent";
import OverviewContent from "./components/OverviewContent";


const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "dataIngestion">(
    "overview"
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <div className="mx-auto max-w-7xl px-4 pt-28 pb-6 lg:px-8 space-y-6">
        {/* Tabs */}
        <HeaderSlider activeTab={activeTab} onChange={setActiveTab} />

        {/* Content based on tab */}
        {activeTab === "overview" ? (
          <OverviewContent />
        ) : (
          <DataIngestionContent />
        )}
      </div>
    </div>
  );
};

export default App;
