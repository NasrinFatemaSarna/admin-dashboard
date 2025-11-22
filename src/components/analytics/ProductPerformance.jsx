
import { motion } from "framer-motion";
import { BarChart, Bar, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts";

const productPerformanceData = [
  { name: "Product A", sales: 4000, revenue: 2400, profit: 2400 },
  { name: "Product B", sales: 3000, revenue: 1800, profit: 1800 },
  { name: "Product C", sales: 2000, revenue: 9200, profit: 1200 },
  { name: "Product D", sales: 2780, revenue: 3900, profit: 1900 },
  { name: "Product E", sales: 1500, revenue: 4900, profit: 2100 }
  // Add more data points as needed
];

const ProductPerformance = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-lg font-medium  mb-4 text-gray-100">Product Performance</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={productPerformanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)", // Tooltip background color
                borderColor: "#4B5563",
                color: "#E5E7EB",
              }}
            />
            <Legend />
            <Bar dataKey="sales" fill="#108981" />
            <Bar dataKey="revenue" fill="#FF6347" />
            <Bar dataKey="profit" fill="#FFD700" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default ProductPerformance;
