

import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts";


// Example data for order distribution
const orderDistributionData = [
  { name: "Pending", value: 1234 },
  { name: "Completed", value: 10900 },
  { name: "Cancelled", value: 300 },
];

const COLORS = ["#FFB900", "#2196F3", "#FF3860"]; // Colors for the pie chart

const OrderDistribution = () => {
  return (
    <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700">
      <h2 className="text-lg font-medium mb-4 text-gray-100">Order Distribution</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={orderDistributionData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {orderDistributionData.map((entry, index) => (
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
    </div>
  );
};

export default OrderDistribution;
