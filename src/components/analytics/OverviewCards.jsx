import { motion } from "framer-motion";
import { DollarSign, ShoppingBag, Users, Eye, ArrowUpRight } from "lucide-react";

const overviewData = [
  { name: "Revenue", icon: DollarSign, value: "$1,142,345", change: 12.5 },
  { name: "Users", icon: Users, value: "30,789", change: -3.5 },
  { name: "Orders", icon: ShoppingBag, value: "2,456", change: 2.5 },
  { name: "Page View", icon: Eye, value: "1,812,345", change: -2.5 },
];

const OverviewCards = () => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
      {overviewData.map((item, index) => (
        <motion.div
          className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700"
          key={item.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-400">{item.name}</h3>
              <p className="text-xl font-semibold text-gray-100 mt-1">{item.value}</p>
            </div>
            <div
              className={`p-3 rounded-full bg-opacity-20 ${
                item.change >= 0 ? "bg-green-500" : "bg-red-500"
              }`}
            >
              <item.icon className="w-4 h-4 text-gray-100" />
            </div>
          </div>

          <div className="mt-4 flex items-center">
            <ArrowUpRight
              size={20}
              className={`mr-2 ${item.change >= 0 ? "text-green-500" : "text-red-500"} ${
                item.change < 0 ? "rotate-180" : ""
              }`}
            />
            <span
              className={`text-sm ml-2 font-medium ${
                item.change >= 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {item.change >= 0 ? `${item.change}%` : `${Math.abs(item.change)}%`}
            </span>
            <span className="text-sm ml-2 font-medium text-gray-400">vs last period</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default OverviewCards;
