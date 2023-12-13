import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

export default function DoughnutChart() {
  return <Doughnut data={data} options={options} />;
}

const data = {
  labels: ["Files", "Audio", "Video", "Live Classes"],
  datasets: [
    {
      label: "My Dataset",
      data: [35.5, 15.5, 13.5, 35.5],
      backgroundColor: [
        "rgba(14, 116, 144, 1)",
        "rgba(162, 28, 175, 1)",
        "rgba(237, 233, 254, 1)",
        "rgba(249, 115, 22, 1)",
      ],
      borderColor: [
        "rgba(14, 116, 144, 1)",
        "rgba(162, 28, 175, 1)",
        "rgba(237, 233, 254, 1)",
        "rgba(249, 115, 22, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  plugins: {
    tooltip: {
      callbacks: {
        label: function (context) {
          const label = context.dataset.label || "";
          if (label) {
            return `${context.formattedValue}%`;
          }
          return "";
        },
      },
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  // animation: {
  //   animateRotate: false,
  //   animateScale: true,
  // },
  // width: "100px",
  // height: "100px",
};
