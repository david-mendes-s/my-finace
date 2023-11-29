import dynamic from 'next/dynamic';
import 'apexcharts/dist/apexcharts.css';
import { useState } from 'react';
import { NextFont } from 'next/dist/compiled/@next/font';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface IFont {
    font:NextFont;
}

export default function PieChart({font}:IFont){

    const [chartData, setChartData] = useState({
        options: {
          chart: {
            type: 'donut',
          },
          colors: ['#9333EA', '#1e3799', '#4cd137'],
          labels: ['Categoria 1', 'Categoria 2', 'Categoria 3'],
          dataLabels: {
            enabled: true,
            style: {
              fontFamily: `${font}`, // Define a fonte como Arial
            },
          },
        },
        series: [44, 55, 13],
    });

    return(
        <div className='max-[780px]:w-full w-1/2 bg-slate-200 dark:bg-[--box-background] rounded-lg p-6'>
            <h3 className='dark:text-[--font-color] font-extrabold text-xl'>Principais Gastos do Mês</h3>
            <div className='flex items-center justify-center mt-8'>
            <Chart options={chartData} series={chartData.series} type='donut' width={380}/>
            </div>
        </div>
    );
}