import React, {use} from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const student = payload[0].payload;
  
      return (
        <div className="bg-[rgba(96,165,250,0.5)] border p-3 rounded-md">
          <h1 className="font-bold text-center">{student.name}</h1>
          <p><span className="font-semibold">Roll:</span> {student.roll}</p>
          <p><span className="font-semibold">Chemistry:</span> {student.math}</p>
          <p><span className="font-semibold">Chemistry:</span> {student.chemistry}</p>
          <p><span className="font-semibold">Math:</span> {student.math}</p>

        
        </div>
      );
    }
  
    return null;
  };
const Chart2 = ({MarksChart}) => {
  const MarkschartPromise = use(MarksChart);
  const MarksChartPromiseData = MarkschartPromise.data;

  const FinalData = MarksChartPromiseData.map((singleMarksChartPromiseData) => {
    const student = {
      roll: singleMarksChartPromiseData.roll,
      name: singleMarksChartPromiseData.name,
      Phy: singleMarksChartPromiseData.physics,
      chemistry: singleMarksChartPromiseData.chemistry,
      math: singleMarksChartPromiseData.math,
    };
    const Avg = (student.Phy + student.chemistry + student.math) / 3;
    student.AvgMark = Avg.toFixed(2);

    return student;
  });

  return (
    <div className="mx-[5%]">
      <div className="w-full ">
        <ResponsiveContainer width="100%" height={500}>
          <BarChart
            data={FinalData}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}
          >
            <CartesianGrid strokeDasharray="3 3"> </CartesianGrid>
            <XAxis dataKey="roll" />
            <YAxis
              label={{value: "Marks", angle: -90, position: "insideLeft"}}
            />
            <Tooltip content={CustomTooltip} />
            <Legend />
            <Bar dataKey="Phy" fill="#8884d8" />
            <Bar dataKey="math" fill="#82ca9d" />
            <Bar dataKey="chemistry" fill="steelBlue" />
            {/* <Bar dataKey="AvgMark" fill="steelBlue" /> */}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart2;
