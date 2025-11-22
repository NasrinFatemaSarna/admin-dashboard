
import Header from "../components/common/Header"
import { motion } from "framer-motion"
import { AlertTriangle,  DollarSign, Package,TrendingUp} from "lucide-react";
import ProductsTable from "../components/products/ProductsTable";
import StatCard from "../components/common/StatCard";
import SalesTrendChart from "../components/products/SalesTrendChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";


const ProductsPage = () => {
  return (
   <div className="flex-1 overflow-auto relative z-10">
    <Header title="Products" />

    <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-4 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 1 }}
        >
          <StatCard name="Total Products" icon={Package} value="5345" color="#179BAE" />
          <StatCard name="Top Selling" icon={TrendingUp} value="89" color="#34D399" />
          <StatCard name="Law Stock" icon={AlertTriangle} value="35" color="#F42F50" />
          <StatCard name="Total Revenue" icon={DollarSign} value={"$43,567"} color="#FF5F00" />
        </motion.div>
        <ProductsTable/>
         {/* Charts */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesTrendChart />
         <CategoryDistributionChart />
          
        </div>
    </main>
   </div>

  )
}

export default ProductsPage
