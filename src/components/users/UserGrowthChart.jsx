import { LineChart,Line, XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer, Legend } from "recharts";
import { motion } from "framer-motion";


const salesData = [

    {name: "Jul", sales:4200},
    {name: "Aug", sales:3500},
    {name: "Sep", sales:3000},
    {name: "Oct", sales:4500},
    {name: "Nov", sales:5000},
    {name: "Dec", sales:3800},
    {name: "Jan", sales:3500},
    {name: "Feb", sales:4200},
    {name: "Mar", sales:3500},
    {name: "Apr", sales:4800},
    {name: "May", sales:4500},
    {name: "Jun", sales:3000},
];


const  UserGrowthChart = () => {
  return (
    <motion.div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
    initial={{ opacity: 0, y:20 }}
    animate={{ opacity: 1, y:0 }}
    transition={{delay:0.3}}>

        <h2 className=" text-lg font-medium mb-4 text-gray-100">User Growth</h2>
        <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#4B5563"/>
                    <XAxis dataKey="name" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                   <Tooltip contentStyle={{backgroundColor:"rgba(31,41,55,0.8)",
                    borderColor:"#4B5563",
                   }}
                   itemStyle={{color:"#E5E7EB"}} />
                   <Legend/>

                    <Line type="monotone"
                    dataKey="sales"
                    stroke="#6366F1" 
                    strokeWidth={3}
                    dot={{ fill: "#6366f1", strokeWidth: 2, r:6 }}
                    activeDot={{r:8,  strokeWidth:2}} />
                    </LineChart>
            </ResponsiveContainer>
            </div>
        </motion.div>
  )
}


export default UserGrowthChart
