import Header from "../components/common/Header";
import { motion } from "framer-motion";
import StatCard from "../components/common/StatCard";
import { CheckCircle, Clock, DollarSign, ShoppingBag } from "lucide-react";
import DailyOrders from "../components/orders/DailyOrders";
import OrderDistribution from "../components/orders/OrderDistribution";
import OrderTable from "./OrderTable";

const orderStates = {
  totalOrders: "12,134",
  pendingOrders: "1,234",
  completedOrders: "10,900",
  totalRevenue: "$98,555",
};

const OrdersPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Orders" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Orders"
            icon={ShoppingBag}
            value={orderStates.totalOrders} // Corrected the variable name
            color="#9C27B0"
          />
          <StatCard
            name="Pending Orders"
            icon={Clock}
            value={orderStates.pendingOrders} // Corrected the variable name
            color="#FFB900"
          />
          <StatCard
            name="Completed Orders"
            icon={CheckCircle}
            value={orderStates.completedOrders} // Corrected the variable name
            color="#2196F3"
          />
          <StatCard
            name="Total Revenue"
            icon={DollarSign}
            value={orderStates.totalRevenue} // Corrected the variable name
            color="#FF5F00"
            />
        </motion.div>
       <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 mb-8">
        <DailyOrders/>
        <OrderDistribution/>
       </div>
       <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 mb-8">
        <OrderTable/>
        </div>
       </main>
    </div>
  );
};

export default OrdersPage;
