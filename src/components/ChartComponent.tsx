import React, { useEffect } from "react";
import Chart from "chart.js/auto";

interface ChartComponentProps {
  dataPoints: { lat: number; lng: number; temp: number }[];
}

const ChartComponent: React.FC<ChartComponentProps> = ({ dataPoints }) => {
  const chartRef = React.createRef<HTMLCanvasElement>();
  const chartInstanceRef = React.useRef<Chart | null>(null);

  useEffect(() => {
    if (dataPoints.length > 0 && chartRef.current) {
      const ctx = chartRef.current.getContext("2d")!;

      // Destroy the existing chart before creating a new one
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      // Create a new chart instance with all data points
      chartInstanceRef.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: dataPoints.map(
            (point) => `${point.lat.toFixed(2)}, ${point.lng.toFixed(2)}`
          ),
          datasets: [
            {
              label: "Temperature (°C)",
              data: dataPoints.map((point) => point.temp),
              borderColor: "#3e95cd",
              fill: false,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [dataPoints]);

  return (
    <div className="chart-comp">
      <h2>Chart Component</h2>
      <canvas ref={chartRef} />
    </div>
  );
};

export default ChartComponent;
