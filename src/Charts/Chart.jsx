import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ResultData = [
  {
    name: "Emon Hossain",
    nickname: "emon-101",
    roll: 101,
    class: "12",
    section: "A",
    physics: 85,
    chemistry: 78,
    math: 92,
    totalMarks: 255,
    averageMarks: 85,
    result: "Passed",
  },
  {
    name: "Samiul Islam",
    nickname: "samiul-102",
    roll: 102,
    class: "12",
    section: "A",
    physics: 72,
    chemistry: 69,
    math: 80,
    totalMarks: 221,
    averageMarks: 73.67,
    result: "Passed",
  },
  {
    name: "Nusrat Jahan",
    nickname: "nusrat-103",
    roll: 103,
    class: "12",
    section: "A",
    physics: 90,
    chemistry: 88,
    math: 95,
    totalMarks: 273,
    averageMarks: 91,
    result: "Passed",
  },
  {
    name: "Rakib Hasan",
    nickname: "rakib-104",
    roll: 104,
    class: "12",
    section: "A",
    physics: 55,
    chemistry: 48,
    math: 60,
    totalMarks: 163,
    averageMarks: 54.33,
    result: "Passed",
  },
  {
    name: "Tanisha Akter",
    nickname: "tanisha-105",
    roll: 105,
    class: "12",
    section: "A",
    physics: 30,
    chemistry: 25,
    math: 40,
    totalMarks: 95,
    averageMarks: 31.67,
    result: "Failed",
  },
  {
    name: "Ayesha Siddiqua",
    nickname: "ayesha-106",
    roll: 106,
    class: "12",
    section: "A",
    physics: 45,
    chemistry: 50,
    math: 42,
    totalMarks: 137,
    averageMarks: 45.67,
    result: "Passed",
  },
  {
    name: "Mahmudul Hasan",
    nickname: "mahmudul-107",
    roll: 107,
    class: "12",
    section: "A",
    physics: 60,
    chemistry: 35,
    math: 58,
    totalMarks: 153,
    averageMarks: 51,
    result: "Passed",
  },
  {
    name: "Sumaiya Rahman",
    nickname: "sumaiya-108",
    roll: 108,
    class: "12",
    section: "A",
    physics: 25,
    chemistry: 20,
    math: 30,
    totalMarks: 75,
    averageMarks: 25,
    result: "Failed",
  },
  {
    name: "Fahim Chowdhury",
    nickname: "fahim-109",
    roll: 109,
    class: "12",
    section: "A",
    physics: 48,
    chemistry: 39,
    math: 50,
    totalMarks: 137,
    averageMarks: 45.67,
    result: "Passed",
  },
];
const CustomTooltip = ({active, payload}) => {
  if (active && payload && payload.length) {
    const student = payload[0].payload;

    return (
      <div className="bg-[rgba(96,165,250,0.3)]  border p-3  rounded-md ">
        <h1 className="font-bold text-center">{student.name}</h1>
        <p>
          <span className="font-semibold text-start">Result:</span>{" "}
          {student.result}
        </p>
        <p>
          <span className="font-semibold text-start">Physics:</span>
          {student.physics}
        </p>
        <p>
          <span className="font-semibold text-start">Chemistry:</span>{" "}
          {student.chemistry}
        </p>
        <p>
          <span className="font-semibold  text-start">Math:</span>{" "}
          {student.math}
        </p>
        <p>
          <span className="font-semibold text-start">Total Marks:</span>{" "}
          {student.totalMarks}
        </p>
        <h1>
          <span className="font-semibold text-start">Average Marks:</span>{" "}
          {student.averageMarks}
        </h1>
        {student.averageMarks < 33 ? (
          <h1 className="font-bold   text-center underline italic mt-2">
            {" "}
            Grade: <span className="text-red-600 ">N/A </span>
          </h1>
        ) : student.averageMarks <= 40 ? (
          <h1 className=" font-bold text-center underline italic mt-2">
            Grade: D
          </h1>
        ) : student.averageMarks <= 49 ? (
          <h1 className=" font-bold text-center underline italic mt-2">
            Grade: C
          </h1>
        ) : student.averageMarks <= 59 ? (
          <h1 className=" font-bold text-center underline italic mt-2">
            Grade: B
          </h1>
        ) : student.averageMarks <= 69 ? (
          <h1 className=" font-bold text-center underline italic mt-2">
            Grade: A-
          </h1>
        ) : student.averageMarks <= 79 ? (
          <h1 className=" font-bold text-center underline italic mt-2">
            Grade: A
          </h1>
        ) : (
          <h1 className=" font-bold text-center underline italic mt-2">
            Grade: A+
          </h1>
        )}
      </div>
    );
  }

  return null;
};

const Chart = () => {
  return (
    <div className="mx-[5%] my-10">
      <div className="my-auto w-full">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={ResultData} className="my-auto">
            <Line dataKey={"math"} stroke="red" />
            <Line dataKey={"chemistry"} stroke="blue" />
            <Line dataKey={"averageMarks"} stroke="green" />
            <XAxis dataKey={"nickname"} />
            <YAxis
              label={{value: "Marks", angle: -90, position: "insideLeft"}}
            />

            {/* for customised tooltip  */}
            <Tooltip content={CustomTooltip} />

            {/* for default tooltip  */}
            {/* <Tooltip/> */}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
