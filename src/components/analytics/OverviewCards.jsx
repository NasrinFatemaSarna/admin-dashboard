import { motion } from "framer-motion";
import { DollarSign, ShoppingBag, Users, Eye, ArrowUpRight } from "lucide-react";

const overviewData = [
  {
    name: "Revenue",
    icon: DollarSign,
    value: "$1,142,345",
    change: 12.5,
    subtitle: "Total revenue this month",
    progress: 78, // target progress %
  },
  {
    name: "Users",
    icon: Users,
    value: "30,789",
    change: -3.5,
    subtitle: "Active users this week",
    progress: 42,
  },
  {
    name: "Orders",
    icon: ShoppingBag,
    value: "2,456",
    change: 2.5,
    subtitle: "New orders this week",
    progress: 63,
  },
  {
    name: "Page View",
    icon: Eye,
    value: "1,812,345",
    change: -2.5,
    subtitle: "Views in the last 24h",
    progress: 55,
  },
];

const OverviewCards = () => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
      {overviewData.map((item, index) => (
        <motion.div
          key={item.name}
          className="bg-gray-800/60 backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700/80 hover:border-blue-500/60 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -4, scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Top section: title, value, icon */}
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xs font-semibold tracking-wide text-gray-400 uppercase">
                {item.name}
              </h3>
              <p className="text-xl font-semibold text-gray-100 mt-1">
                {item.value}
              </p>
              <p className="text-xs text-gray-500 mt-1">{item.subtitle}</p>
            </div>

            <div
              className={`p-3 rounded-full bg-opacity-20 ${
                item.change >= 0 ? "bg-green-500/30" : "bg-red-500/30"
              }`}
            >
              <item.icon className="w-4 h-4 text-gray-100" />
            </div>
          </div>

          {/* Change row */}
          <div className="mt-4 flex items-center text-sm">
            <ArrowUpRight
              size={18}
              className={`mr-1 ${
                item.change >= 0 ? "text-green-400" : "text-red-400 rotate-180"
              }`}
            />
            <span
              className={`font-medium ${
                item.change >= 0 ? "text-green-400" : "text-red-400"
              }`}
            >
              {item.change >= 0
                ? `+${item.change}%`
                : `-${Math.abs(item.change)}%`}
            </span>
            <span className="text-gray-400 ml-2 text-xs">
              vs last period
            </span>

            <span
              className={`ml-auto px-2 py-0.5 rounded-full text-[11px] font-medium ${
                item.change >= 0
                  ? "bg-green-500/10 text-green-300"
                  : "bg-red-500/10 text-red-300"
              }`}
            >
              {item.change >= 0 ? "Trending up" : "Trending down"}
            </span>
          </div>

          {/* Progress bar */}
          <div className="mt-4">
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>Target progress</span>
              <span>{item.progress}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-gray-700 overflow-hidden">
              <div
                className={`h-full rounded-full ${
                  item.change >= 0 ? "bg-green-500" : "bg-red-500"
                }`}
                style={{ width: `${item.progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default OverviewCards;
