
import { motion } from "framer-motion";
import { TrendingUp, Users, ShoppingBag, DollarSign } from "lucide-react";

const INSIGHTS = [
  {
    icon: TrendingUp,
    color: "yellow",
    title: "Trend Analysis",
    insights: "Our AI models predict a 15% increase in sales this quarter.",
  },
  {
    icon: Users,
    color: "blue",
    title: "User Growth",
    insights: "User growth has increased by 10% over the last month.",
  },
  {
    icon: ShoppingBag,
    color: "green",
    title: "Product Insights",
    insights: "Top-selling product this week is the 'AI Smart Speaker'.",
  },
  {
    icon: DollarSign,
    color: "purple",
    title: "Revenue Projection",
    insights: "Expected revenue for next month is $500,000.",
  },
];

const AIPoweredInsights = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-2xl font-semibold text-gray-100 mb-6">AI-Powered Insights</h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {INSIGHTS.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-5 rounded-lg shadow-lg flex items-start space-x-4 border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Icon Section */}
            <div
              className={`p-3 rounded-full bg-${item.color}-500 bg-opacity-20 flex justify-center items-center`}
            >
              <item.icon className={`w-6 h-6 text-${item.color}-500`} />
            </div>

            {/* Insights Content */}
            <div>
              <h3 className="text-lg font-medium text-gray-100">{item.title}</h3>
              <p className="text-sm text-gray-400 mt-1">{item.insights}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AIPoweredInsights;
