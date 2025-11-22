

import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const DEMOGRAPHICS_DATA = [
  { name: "18-24", value: 400 },
  { name: "25-34", value: 300 },
  { name: "35-44", value: 300 },
  { name: "45-54", value: 200 },
  { name: "55-64", value: 150 },
  { name: "65+", value: 100 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF", "#FF4567"];

const DemographicsChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border lg:col-span-2  border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">User Demographics Chart</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={DEMOGRAPHICS_DATA }
              cx="50%"
              cy="50%"
              labelLine="false"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({name, percent}) =>  `${name} ${(percent * 100).toFixed(0)}%`}>
              {DEMOGRAPHICS_DATA .map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor: "#4B5563",
                color: "#E5E7EB",
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
        </div>
    </motion.div>
  );
};

export default DemographicsChart;
