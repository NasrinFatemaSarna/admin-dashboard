
import { motion } from "framer-motion";
import { Tooltip, ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend } from "recharts";

const customerSegmentationData = [
  { subject: "Engagement", A: 120, B: 110, fullMark: 150 },
  { subject: "Reach", A: 98, B: 130, fullMark: 150 },
  { subject: "Conversions", A: 86, B: 90, fullMark: 150 },
  { subject: "Bounce Rate", A: 99, B: 100, fullMark: 150 },
  { subject: "Session Duration", A: 85, B: 95, fullMark: 150 },
  { subject: "Page Views", A: 90, B: 80, fullMark: 150 },
];

const CustomerSegmentation = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">Customer Segmentation</h2>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <RadarChart cx="50%" outerRadius="80%" data={customerSegmentationData}>
            <PolarGrid stroke="#4B5563" />
            <PolarAngleAxis dataKey="subject" stroke="#A3D8FF" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} stroke="#A3D8FF" />
            <Radar
              name="Segment A"
              dataKey="A"
              stroke="#59B4C3"
              fill="#59B4C3"
              fillOpacity={0.6}
            />
            <Radar
              name="Segment B"
              dataKey="B"
              stroke="#FF5630"
              fill="#FF5630"
              fillOpacity={0.6}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default CustomerSegmentation;
