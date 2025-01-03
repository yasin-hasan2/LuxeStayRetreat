/* eslint-disable react/prop-types */
// This example shows you how to set up React Stripe.js and use Elements.
import { Chart } from "react-google-charts";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { ImSpinner9 } from "react-icons/im";

// const data = [
//   ["Day", "Sales"],
//   ["9", 1000],
//   ["10", 1170],
//   ["11", 660],
//   ["12", 1030],
// ];

const options = {
  title: "Sales Over Time",
  curveType: "function",
  legend: { position: "bottom" },
  series: [{ color: "#F43F5E" }],
};
const SalesLineChart = ({ data }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  });

  // use loading spinner for 2 seconds before rendering the chart and also for better user experience
  // if (loading) {
  //   return (
  //     <div className="h-96 flex items-center justify-center">
  //       <ImSpinner9 className="animate-spin h-10 w-10 text-blue-500" />
  //     </div>
  //   );
  // }
  return (
    <>
      {loading ? (
        <div className="h-96 flex items-center justify-center">
          <ImSpinner9 className="animate-spin h-10 w-10 text-blue-500" />
        </div>
      ) : data.length > 1 ? (
        <Chart
          chartType="LineChart"
          width="100%"
          data={data}
          options={options}
        />
      ) : (
        <>
          <div className="h-96 flex items-center justify-center">
            <ImSpinner9 className="animate-spin h-10 w-10 text-blue-500" />
          </div>
          <p className="text-center  mb-5">
            Not enough data available for this section!
          </p>
        </>
      )}
    </>
  );
};

SalesLineChart.propTypes = {
  data: PropTypes.array,
};

export default SalesLineChart;
