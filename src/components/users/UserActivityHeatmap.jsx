

import { motion } from "framer-motion";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const COLORS = ["#880023", "#06D001", "#3FA2F6", "#4A249D", "#ff7300"];  // Custom colors for each bar

const USER_ACTIVITY_DATA = [
  { name: "Monday", "0-4": 20, "4-8": 40, "8-12": 60, "12-16": 80, "16-20": 80, "20-24": 20 },
  { name: "Tuesday", "0-4": 30, "4-8": 60, "8-12": 40, "12-16": 70, "16-20": 90, "20-24": 30 },
  { name: "Wednesday", "0-4": 40, "4-8": 80, "8-12": 20, "12-16": 60, "16-20": 100, "20-24": 40 },
  { name: "Thursday", "0-4": 50, "4-8": 90, "8-12": 30, "12-16": 50, "16-20": 110, "20-24": 60 },
  { name: "Friday", "0-4": 60, "4-8": 100, "8-12": 40, "12-16": 60, "16-20": 120, "20-24": 70 },
  { name: "Saturday", "0-4": 70, "4-8": 110, "8-12": 50, "12-16": 70, "16-20": 130, "20-24": 80 },
  { name: "Sunday", "0-4": 80, "4-8": 120, "8-12": 60, "12-16": 23, "16-20": 154, "20-24": 100 },
];

const UserActivityHeatmap = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">User Heatmap</h2>
      <div className="h-80">
        <ResponsiveContainer>
          <BarChart data={USER_ACTIVITY_DATA}>
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
            <Legend />
            <Bar dataKey="0-4" stackId="a">
              {USER_ACTIVITY_DATA.map((entry, index) => (
                <Cell key={`cell-0-4-${index}`} fill={COLORS[0]} />
              ))}
            </Bar>
            <Bar dataKey="4-8" stackId="a">
              {USER_ACTIVITY_DATA.map((entry, index) => (
                <Cell key={`cell-4-8-${index}`} fill={COLORS[1]} />
              ))}
            </Bar>
            <Bar dataKey="8-12" stackId="a">
              {USER_ACTIVITY_DATA.map((entry, index) => (
                <Cell key={`cell-8-12-${index}`} fill={COLORS[2]} />
              ))}
            </Bar>
            <Bar dataKey="12-16" stackId="a">
              {USER_ACTIVITY_DATA.map((entry, index) => (
                <Cell key={`cell-12-16-${index}`} fill={COLORS[3]} />
              ))}
            </Bar>
            <Bar dataKey="16-20" stackId="a">
              {USER_ACTIVITY_DATA.map((entry, index) => (
                <Cell key={`cell-16-20-${index}`} fill={COLORS[4]} />
              ))}
            </Bar>
            <Bar dataKey="20-24" stackId="a">
              {USER_ACTIVITY_DATA.map((entry, index) => (
                <Cell key={`cell-20-24-${index}`} fill={COLORS[5 % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default UserActivityHeatmap;
