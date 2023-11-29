'use client'
import { useState } from 'react';

import { BsPlusSquare } from 'react-icons/bs';
import { Inter } from 'next/font/google'; 

import NavBar from '@/components/NavBar';
import HeaderResponsive from '@/components/HeaderResponsive';
import Header from '@/components/Header';
import Balance from '@/components/Balance';
import BarCharts from '@/components/charts/BarCharts';
import Account from '@/components/Account';
import PieChart from '@/components/charts/PieChart';
import Transactions from '@/components/Transactions';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [theme, setTheme] = useState('dark');
  
  return (
    <div className={theme}>
      <div className='w-full  dark:bg-[--background] flex'>
        <NavBar />        

        <div className='w-full h-screen overflow-auto'>
          <main className='flex flex-col p-12 w-full h-screen max-[639px]:p-5'>
            <HeaderResponsive />
            
            <Header theme={theme} setTheme={setTheme}/>
            
            {/*Balanço total*/}
            <div className='max-[1200px]:flex-col flex items-start justify-start w-full gap-4 my-8'>
              <Balance font={inter}/>
              <BarCharts />
            </div>
            
            {/* Contas Bancarias */}       
            <div className='grid grid-cols-6 grid-rows-1 max-[1200px]:grid-cols-3 max-[1200px]:grid-rows-2 max-[600px]:grid-rows-3 max-[600px]:grid-cols-2  gap-4 mb-8'>
              <Account font={inter} name={'Nubank'} value={15000} porcent={-5}/>
              <Account font={inter} name={'Bradesco'} value={23001} porcent={8}/>
              <div className=' flex items-center justify-center   p-[27px] border border-dashed border-[--box-background] dark:border-[--font-color] rounded-lg'>
                <button>
                  <BsPlusSquare size={28} className='fill-[--box-background] dark:fill-[--font-color]'/>
                </button>
              </div>
            </div>  

            {/* Transações e Gráfico Pizza */} 
            <div className='max-[780px]:flex-col flex w-full gap-4'>
                <Transactions font={inter} />           
                <PieChart font={inter}/>
            </div>  

            <div className='max-[639px]:mt-14 mt-5'>
              .
            </div>
          </main>
        </div>
      </div>
    </div>
    
  )
}
