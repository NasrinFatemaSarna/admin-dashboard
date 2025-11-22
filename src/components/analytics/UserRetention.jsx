
import { motion } from "framer-motion";
import { LineChart,Line, XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer, Legend } from "recharts";


const userRetentionData = [
    {name: "Week-1", retention:100},
    {name: "Week-2", retention:92},
    {name: "Week-3", retention:84},
    {name: "Week-4", retention:66},
    {name: "Week-5", retention:48},
    {name: "Week-6", retention:20},
    {name: "Week-7", retention:40},
    {name: "Week-8", retention:35},
    ];


const   UserRetention = () => {
  return (
    <motion.div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
    initial={{ opacity: 0, y:20 }}
    animate={{ opacity: 1, y:0 }}
    transition={{delay:0.5}}>

        <h2 className=" text-lg font-medium mb-4 text-gray-100">User Retention</h2>
        <div style={{width:"100%", height:300} }>
          <ResponsiveContainer>
                <LineChart data={userRetentionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#4B5563"/>
                    <XAxis dataKey="name" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                   <Tooltip contentStyle={{backgroundColor:"rgba(31,41,55,0.8)",
                    borderColor:"#4B5563",
                   }}
                   itemStyle={{color:"#E5E7EB"}} />
                   <Legend/>

                    <Line type="monotone"
                    dataKey="retention"
                    stroke="#A3D8FF" 
                    strokeWidth={3}
                    dot={{ fill: "#FFC100", strokeWidth: 2, r:6 }}
                    activeDot={{r:8,  strokeWidth:2}} />
                    </LineChart>
            </ResponsiveContainer>

        </div>
      
    </motion.div>
  )
}



export default UserRetention