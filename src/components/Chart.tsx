import axios from 'axios';
import { useContext, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

import { Spin } from 'antd';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import MyContext from '../context/context';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

interface LineChartProps {
    xData:number[] | undefined,
    yData:number[] | undefined
};
interface Salary {
  work_year: number;
  salary: number;
  no_of_jobs: number;
  job_title: string;
}



const BarChart = ( ) => {


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Salary[]>("https://script.googleusercontent.com/macros/echo?user_content_key=1m-VYBEmpW9a2yd5-PUbwOpXAEhSsQmi1lNKSovJlpcu_U8NGKRMSjkW_2oLJ2Af9Ke7D-wDir-bXEehbLTC2in0jMSEPZXpm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDYdI3Ic54TtQ0dA-9IhGGPldTS1lP9GKRKbhpm5HuUGityrtvGL8GK4q7qRRGkbe5yzPJH-B7t8m0j2qd9QR8UUKufpUXtSMw&lib=M8WiUXEatz1TgLIex5GctuCUOZ8ec8_J3");
        const arr = Object.entries(response.data);
        const newarr = arr[0][1];
        setData(newarr);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  const context:any = useContext(MyContext)

  const {isLoading, setIsLoading ,data, setData ,calculation, setCalculation} = context
  if (isLoading) {
    return <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"15%"}}><Spin size='large'/></div>;
  }
 

const xData = calculation?.year;
const yData = calculation?.ctr;

    const Totaldata = {
      labels: xData,
      datasets: [
        {
          label: 'Dataset',
          data: yData,
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
          text: 'Bar Chart Example',
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };
  
    return <Bar  data={Totaldata} options={options} />;
  };

export default BarChart