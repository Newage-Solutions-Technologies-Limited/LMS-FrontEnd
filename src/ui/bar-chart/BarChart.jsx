import { Bar } from "react-chartjs-2";
// import PropTypes from "prop-types";

// BarChart.propTypes = {
//   data: PropTypes.string,
//   options: PropTypes.string,
// };

export default function BarChart() {
  return <Bar data={data} options={options} />;
}

const data = {
  labels: ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"],
  datasets: [
    {
      label: "My Bar Chart",
      data: [20, 35, 25, 10, 15],
      backgroundColor: "rgba(75,192,192,0.6)", // Customize the bar color
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    x: {
      type: "category",
      title: {
        display: true,
        text: "X Axis Label", // Your X-axis label
      },
    },
    y: {
      title: {
        display: true,
        text: "Y Axis Label", // Your Y-axis label
      },
    },
  },
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
  },
};
