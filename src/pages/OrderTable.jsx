
import { motion } from "framer-motion";
import { useState } from "react";
import { Search } from "lucide-react";

const orderData = [
  { id: "ORD001", customer: "John Doe", total: 234.4, status: "Delivered", date: "2023-01-23" },
  { id: "ORD002", customer: "Jane Doe", total: 123.4, status: "Pending", date: "2023-02-15" },
  { id: "ORD003", customer: "Mike Doe", total: 567.8, status: "Canceled", date: "2023-03-01" },
  { id: "ORD004", customer: "Sarah Doe", total: 789.0, status: "Shipped", date: "2023-04-10" },
  { id: "ORD005", customer: "Emily Doe", total: 345.6, status: "Delivered", date: "2023-05-20" },
  { id: "ORD006", customer: "Oliver Doe", total: 987.6, status: "Shipped", date: "2023-06-05" },
  { id: "ORD007", customer: "Charlie Doe", total: 123.4, status: "Canceled", date: "2023-07-15" },
  { id: "ORD008", customer: "Bob Doe", total: 567.8, status: "Delivered", date: "2023-08-01" },
  { id: "ORD009", customer: "Jessica Doe", total: 789.0, status: "Shipped", date: "2023-09-10" },
  { id: "ORD010", customer: "Lucy Doe", total: 345.6, status: "Delivered", date: "2023-10-20" },
];

const OrderTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOrders, setFilteredOrders] = useState(orderData);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = orderData.filter(
      (order) =>
        order.customer.toLowerCase().includes(term) ||
        order.status.toLowerCase().includes(term) ||
        order.id.toLowerCase().includes(term)
    );
    setFilteredOrders(filtered);
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border lg:col-span-2 border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Order List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Orders..."
            className="pr-4 py-2 pl-10 rounded-lg bg-gray-700 text-white focus:outline-none placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={handleSearch}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Total</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {filteredOrders.map((order) => (
              <motion.tr
                key={order.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100 font-medium">{order.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100 font-medium">{order.customer}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100 font-medium">${order.total.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100 font-medium">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-800"
                        : order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : order.status === "Shipped"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100 font-medium">{order.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100 font-medium">
                  <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    View Details
                  </button>
                </td>
               </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default OrderTable;
