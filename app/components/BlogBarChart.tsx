"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

type Props = {
  data: {
    technology: number;
    cooking: number;
    travelling: number;
    coding: number;
    trading: number;
  };
};

export default function BlogBarChart({ data }: Props) {
  const chartData = {
    labels: ["Technology", "Cooking", "Travelling", "Coding", "Trading"],
    datasets: [
      {
        label: "Blogs per Category",
        data: [
          data.technology,
          data.cooking,
          data.travelling,
          data.coding,
          data.trading,
        ],
        backgroundColor: [
          "#3b82f6",
          "#10b981",
          "#f59e0b",
          "#8b5cf6",
          "#ef4444",
        ],
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <Bar data={chartData} options={options} />
    </div>
  );
}
