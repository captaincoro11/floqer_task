import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Spin } from 'antd';
import {
  LineElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import MyContext from '../context/context';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

interface Salary {
  work_year: number;
  salary: number;
  no_of_jobs: number;
  job_title: string;
}

const BarChart = () => {
  const { isLoading, setIsLoading, setData, calculation } = useContext<any>(MyContext);
  const [fetchedData, setFetchedData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://script.googleusercontent.com/macros/echo?user_content_key=1m-VYBEmpW9a2yd5-PUbwOpXAEhSsQmi1lNKSovJlpcu_U8NGKRMSjkW_2oLJ2Af9Ke7D-wDir-bXEehbLTC2in0jMSEPZXpm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDYdI3Ic54TtQ0dA-9IhGGPldTS1lP9GKRKbhpm5HuUGityrtvGL8GK4q7qRRGkbe5yzPJH-B7t8m0j2qd9QR8UUKufpUXtSMw&lib=M8WiUXEatz1TgLIex5GctuCUOZ8ec8_J3"
        );
        const arr = Object.entries(response.data);
        const newarr = arr[0][1];
        setFetchedData(newarr);
        setData(newarr);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [setData, setIsLoading]);

  if (isLoading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "15%" }}>
        <Spin size='large' />
      </div>
    );
  }

  const xData = calculation?.year;
  const yData = calculation?.ctr;

  const data = {
    labels: xData,
    datasets: [
      {
        label: 'Dataset',
        data: yData,
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Line Chart Example',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default BarChart;
