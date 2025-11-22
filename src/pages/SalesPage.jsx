import Header from "../components/common/Header";
import { motion } from "framer-motion";
import StatCard from "../components/common/StatCard";
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";
import SalesOverviewChart from "../components/sales/SalesOverviewChart";
import SalesByCategoryChart from "../components/sales/SalesByCategoryChart";
import DailySalesTrendChart from "../components/sales/DailySalesTrendChart";



const salesStats = {
  totalRevenue: "$12,345",
  averageOrderValue: "$567.89",
  conversationRate: "3.5%",
  salesGrowth: "8.4%",
};

const SalesPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Sales Dashboard" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* Sales Stats */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard name="Total Revenue" icon={DollarSign} value={salesStats.totalRevenue} color="#9C27B0" />
          <StatCard name="Avg. Order Value" icon={ShoppingCart} value={salesStats.averageOrderValue} color="#FFB900" />
          <StatCard name="Conversion Rate" icon={TrendingUp} value={salesStats.conversationRate} color="#FF3860" />
          <StatCard name="Sales Growth" icon={CreditCard} value={salesStats.salesGrowth} color="#2196F3" />
        </motion.div>
        <SalesOverviewChart/>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 mb-8">
          <SalesByCategoryChart/>
          <DailySalesTrendChart/>

        </div>
      </main>
    </div>
  );
};

export default SalesPage;

