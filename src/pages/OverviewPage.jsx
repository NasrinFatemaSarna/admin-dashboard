

import { motion } from "framer-motion";
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";

import StatCard from "../components/common/StatCard";
import Header from "../components/common/Header";
import SalesOverviewChart from "../components/overview/SalesOverviewChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesChannelChart from "../components/overview/SalesChannelChart";

const OverviewPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Overview" />
      {/* Framer Motion Animation */}
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-4 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 1 }}
        >
         <StatCard name="Total Sales" icon={Zap} value="$12,345" color="#179BAE" />
          <StatCard name="New Users" icon={Users} value="5,789" color="#34D399" />
          <StatCard name="Total Products" icon={ShoppingBag} value="12,345" color="#F42F50" />
          <StatCard name="Conversion Rate" icon={BarChart2} value="30%" color="#FF5F00" />
          
        </motion.div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesOverviewChart />
          <CategoryDistributionChart />
          <SalesChannelChart />
        </div>
      </main>
    </div>
  );
}

export default OverviewPage;
