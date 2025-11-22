
import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useState } from "react";

const PRODUCTS = [
  { id: 1, name: "Wireless Earbuds", category: "Electronics", price: 95.99, stock: 143, sales: 1200, profilePic: "https://plus.unsplash.com/premium_photo-1661889099855-b44dc39e88c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" },
  { id: 2, name: "Bluetooth Speaker", category: "Electronics", price: 79.99, stock: 200, sales: 950, profilePic: "https://plus.unsplash.com/premium_photo-1661889099855-b44dc39e88c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" },
  { id: 3, name: "Smartwatch", category: "Wearables", price: 149.99, stock: 85, sales: 1100, profilePic: "https://plus.unsplash.com/premium_photo-1661889099855-b44dc39e88c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" },
  { id: 4, name: "Fitness Tracker", category: "Wearables", price: 59.99, stock: 180, sales: 1350, profilePic: "https://plus.unsplash.com/premium_photo-1661889099855-b44dc39e88c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" },
  { id: 5, name: "Noise Cancelling Headphones", category: "Electronics", price: 199.99, stock: 65, sales: 800, profilePic: "https://plus.unsplash.com/premium_photo-1661889099855-b44dc39e88c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" },
  { id: 6, name: "Portable Charger", category: "Accessories", price: 29.99, stock: 300, sales: 1500, profilePic: "https://plus.unsplash.com/premium_photo-1661889099855-b44dc39e88c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" },
];

const ProductsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = PRODUCTS.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Product List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Products..."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="text-left uppercase tracking-wider px-6 py-3 text-sm font-medium text-gray-400">Profile</th>
              <th className="text-left uppercase tracking-wider px-6 py-3 text-sm font-medium text-gray-400">Name</th>
              <th className="text-left uppercase tracking-wider px-6 py-3 text-sm font-medium text-gray-400">Category</th>
              <th className="text-left uppercase tracking-wider px-6 py-3 text-sm font-medium text-gray-400">Price</th>
              <th className="text-left uppercase tracking-wider px-6 py-3 text-sm font-medium text-gray-400">Stock</th>
              <th className="text-left uppercase tracking-wider px-6 py-3 text-sm font-medium text-gray-400">Sales</th>
              <th className="text-left uppercase tracking-wider px-6 py-3 text-sm font-medium text-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-200 flex items-center">
                  <img
                    src={product.profilePic}
                    alt={product.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">{product.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{product.category}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">${product.price.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{product.stock}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{product.sales}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-4">
                    <button className="text-blue-500 hover:text-blue-700">
                      <Edit size={18} />
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default ProductsTable;
