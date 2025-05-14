import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const radarData = [
  { subject: "Cloud", A: 80, fullMark: 100 },
  { subject: "Containers", A: 90, fullMark: 100 },
  { subject: "CI/CD", A: 85, fullMark: 100 },
  { subject: "Monitoring", A: 80, fullMark: 100 },
  { subject: "Security", A: 75, fullMark: 100 },
  { subject: "Scripting", A: 90, fullMark: 100 },
];

const pieData = [
  { name: "AWS", value: 50 },
  { name: "Azure", value: 23 },
  { name: "Digital Ocean", value: 8 },
  { name: "GCP", value: 19 },
];

const COLORS = ["#f59e0b", "#3b82f6", "#10b981", "#fde047"];

export default function Charts() {
  return (
    <div className="flex flex-col items-center gap-12 mt-10 w-full max-w-4xl mx-auto">
      <div className="flex flex-wrap justify-center gap-8 w-full">
        {/* Radar Chart */}
        <div className="flex flex-col items-center w-full sm:w-[45%]">
          <RadarChart outerRadius={100} width={300} height={250} data={radarData}>
            <PolarGrid />
             <PolarAngleAxis
              dataKey="subject"
              stroke="#ddd"
              tickLine={false}
              axisLine={false}
             />
            {/* Hide ticks completely */}
            <PolarRadiusAxis tick={false} axisLine={false} />
            <Radar
              name="Skills"
              dataKey="A"
              stroke="#f59e0b"
              fill="#f59e0b"
              fillOpacity={0.6}
              dot={false} // No dots on radar points
              isAnimationActive={false}
            />
          </RadarChart>
        </div>

        {/* Pie (Donut) Chart */}
        <div className="flex flex-col items-center w-full sm:w-[45%]">
          <PieChart width={300} height={250}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={90}
              innerRadius={40}
              fill="#8884d8"
              fillOpacity={0.6}
              dataKey="value"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
              labelLine={false}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>
    </div>
  );
}
