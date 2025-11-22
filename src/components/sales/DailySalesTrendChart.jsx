
import { motion } from "framer-motion";
import { BarChart, Bar, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const dailySalesData = [
  { day: "Monday", sales: 1000 },
  { day: "Tuesday", sales: 1200 },
  { day: "Wednesday", sales: 900 },
  { day: "Thursday", sales: 1100 },
  { day: "Friday", sales: 1300 },
  { day: "Saturday", sales: 1600 },
  { day: "Sunday", sales: 1400 },
  // Add more data points as needed
];

const DailySalesTrendChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">Daily Sales Trend</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={dailySalesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="day" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)", // Tooltip background color
                borderColor: "#4B5563",
                color: "#E5E7EB",
              }}
            />
            <Bar dataKey="sales" fill="#108981" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default DailySalesTrendChart;
