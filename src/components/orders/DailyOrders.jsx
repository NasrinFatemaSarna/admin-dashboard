
import { motion } from "framer-motion";
import { ResponsiveContainer,LineChart,XAxis, YAxis, CartesianGrid,Tooltip, Legend,Line } from "recharts";


// Example data for daily orders
const dailyOrdersData = [
  { day: "Monday", orders: 50 },
  { day: "Tuesday", orders: 80 },
  { day: "Wednesday", orders: 45 },
  { day: "Thursday", orders: 70 },
  { day: "Friday", orders: 90 },
  { day: "Saturday", orders: 60 },
  { day: "Sunday", orders: 30 },
];

const DailyOrders = () => {
  return (
    <motion.div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 mb-8 border border-gray-700"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}>
      <h2 className="text-lg font-medium mb-4 text-gray-100">Daily Orders</h2>
      <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={dailyOrdersData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
          <XAxis dataKey="day" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip
              contentStyle={{ backgroundColor: "rgba(31, 41, 55, 0.8)" }}
              borderColor="rgba(255, 255, 255, 0.5)"
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend/>
            <Line type="monotone" dataKey="orders" stroke="#6366F1" />
        </LineChart>
      </ResponsiveContainer>
     </div>
     </motion.div>
  );
};

export default DailyOrders;


