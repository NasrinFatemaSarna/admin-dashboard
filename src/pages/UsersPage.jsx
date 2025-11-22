
import { motion } from "framer-motion";
import { UserCheck, UserPlus, UsersIcon, UserX } from "lucide-react";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import UsersTable from "../components/users/UsersTable";
import UserGrowthChart from "../components/users/UserGrowthChart";
import UserActivityHeatmap from "../components/users/UserActivityHeatmap";
import UserDemographicsChart from "../components/users/UserDemographicsChart";

const UsersPage = () => {
  // Assuming these values are coming from some state or props
  const userStats = {
    totalUsers: 5345,
    newUsersToday: 89,
    activeUsers: 4230,
    churnRate: "1.5%",
  };

  return (
    <div className="flex-1 overflow-auto relative z-10">
      {/* Page Header */}
      <Header title="Users" />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-4 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring" }}
        >
          {/* Stat Cards */}
          <StatCard
            name="Total Users"
            icon={UsersIcon}
            value={userStats.totalUsers.toLocaleString()}
            color="#179BAE"
          />
          <StatCard
            name="New Users Today"
            icon={UserPlus}
            value={userStats.newUsersToday.toLocaleString()}
            color="#34D399"
          />
          <StatCard
            name="Active Users"
            icon={UserCheck}
            value={userStats.activeUsers.toLocaleString()}
            color="#F42F50"
          />
          <StatCard
            name="Churn Rate"
            icon={UserX}
            value={userStats.churnRate}
            color="#FF5F00"
          />
        </motion.div>
        <UsersTable/>

        {/* Additional Content Can Be Added Here */}
        {/* user charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <UserGrowthChart/>
          <UserActivityHeatmap/>
          <UserDemographicsChart/>
          </div>
          </main>
    </div>
  );
};

export default UsersPage;
