
import { motion } from "framer-motion";
import { BarChart, Bar,Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#880023", "#06D001", "#3FA2F6", "#4A249D", "#ff7300"];  // Define custom colors for each bar

const SALES_CHANNEL_DATA = [
  { name: "Website", value: 55000 },
  { name: "Mobile App", value: 45000 },
  { name: "Email Marketing", value: 35000 },
  { name: "Social Media", value: 25000 },
  { name: "Other", value: 20000 },
];

const SalesChannelChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border lg:col-span-2 border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">Sales By Channel</h2>
      <div className="h-80">
        <ResponsiveContainer>
          <BarChart data={SALES_CHANNEL_DATA}>
            <CartesianGrid strokeDasharray="3 3" stroke="#06D001" />
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)", // Corrected to provide a background color
                borderColor: "#4B5563",
                color: "#E5E7EB",
              }}
            />
            <Bar dataKey="value">
              {SALES_CHANNEL_DATA.map((entry, index) => (
                <Cell key={`bar-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesChannelChart;

