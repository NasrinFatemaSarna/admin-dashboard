
import { motion } from "framer-motion";
import { useState } from "react";
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";

const salesData = [
  { month: 'Mar', sales: 4000 },
  { month: 'Apr', sales: 5000 },
  { month: 'May', sales: 4500 },
  { month: 'Jun', sales: 3500 },
  { month: 'Jul', sales: 4200 },
  { month: 'Aug', sales: 3500 },
  { month: 'Sep', sales: 3000 },
  { month: 'Oct', sales: 4500 },
  { month: 'Nov', sales: 5000 },
  { month: 'Dec', sales: 4000 },
  { month: 'Jan', sales: 5000 },
  { month: 'Feb', sales: 7000 },
];

const SalesOverviewChart = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState("This Month");

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 mb-8 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-medium mb-4 text-gray-100">Sales Overview</h2>
        <select
          className="bg-gray-700 text-white rounded-md mx-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedTimeRange}
          onChange={(e) => setSelectedTimeRange(e.target.value)}
        >
          <option value="This Month">This Week</option>
          <option value="Last Month">This Month</option>
          <option value="Last 3 Months">This Quarter</option>
          <option value="Last 6 Months">This Year</option>
          <option value="All Time">All Time</option>
        </select>
      </div>

      <div className="w-full h-100">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{ backgroundColor: "rgba(31, 41, 55, 0.8)" }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Area
              type="monotone"
              dataKey="sales"
              stroke="#885CF6"
              fillOpacity={0.3}
              fill="#885CF6"
              activeDot={{ r: 8 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesOverviewChart;
