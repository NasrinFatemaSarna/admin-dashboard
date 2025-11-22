import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const channelData = [
  { name: "Organic Search", value: 2300 },
  { name: "Paid Search", value: 3200 },
  { name: "Direct", value: 2100 },
  { name: "Social Media", value: 2500 },
  { name: "Email", value: 3000 },
];

const COLORS = ["#8884d8", "#06D001", "#FC4100", "#ff8042", "#009FBD"];

const ChannelPerformance = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // মোট sales হিসাব
  const total = useMemo(
    () => channelData.reduce((sum, item) => sum + item.value, 0),
    []
  );

  const activeItem = channelData[activeIndex];

  const handlePieEnter = (_data, index) => {
    setActiveIndex(index);
  };

  return (
    <motion.div
      className="bg-gray-800/60 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 flex flex-col lg:flex-row gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      {/* Left: Chart */}
      <div className="lg:w-2/3 h-80">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-lg font-semibold text-gray-100">
              Sales By Category
            </h2>
            <p className="text-xs text-gray-400">
              Channel contribution for the current period
            </p>
          </div>

          <div className="text-right">
            <p className="text-[11px] text-gray-400 uppercase tracking-wide">
              Total Sales
            </p>
            <p className="text-xl font-semibold text-emerald-300">
              {total.toLocaleString()}
            </p>
          </div>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={channelData}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={90}
              paddingAngle={2}
              dataKey="value"
              activeIndex={activeIndex}
              onMouseEnter={handlePieEnter}
              labelLine={false}
              label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
            >
              {channelData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  stroke="#0f172a"
                  strokeWidth={activeIndex === index ? 3 : 1}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(15,23,42,0.95)",
                borderColor: "#4b5563",
                color: "#E5E7EB",
                borderRadius: 8,
                fontSize: 12,
              }}
            />
            <Legend
              verticalAlign="bottom"
              height={24}
              wrapperStyle={{ fontSize: 11, color: "#9CA3AF" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Right: Detail list + active info */}
      <div className="lg:w-1/3 space-y-4">
        {/* Active channel summary */}
        <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-4">
          <p className="text-xs text-gray-400 mb-1">Active Channel</p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-100">
                {activeItem.name}
              </p>
              <p className="text-xs text-gray-400">
                {((activeItem.value / total) * 100).toFixed(1)}% of total sales
              </p>
            </div>
            <p className="text-lg font-semibold text-blue-300">
              {activeItem.value.toLocaleString()}
            </p>
          </div>
        </div>

        {/* List of all channels */}
        <div className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar">
          {channelData.map((item, index) => {
            const percent = ((item.value / total) * 100).toFixed(1);
            return (
              <button
                key={item.name}
                onClick={() => setActiveIndex(index)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-left transition-colors ${
                  activeIndex === index
                    ? "bg-gray-900/80 border border-blue-500/60"
                    : "bg-gray-900/40 border border-gray-800 hover:bg-gray-900/70"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <div>
                    <p className="text-xs font-medium text-gray-100">
                      {item.name}
                    </p>
                    <p className="text-[11px] text-gray-400">
                      {percent}% of total
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-100">
                    {item.value.toLocaleString()}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ChannelPerformance;
