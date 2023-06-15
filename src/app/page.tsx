'use client'
import { useState } from 'react';
import Chart from 'react-apexcharts';
import Link from 'next/link';
import { BsFilterLeft, BsBoxArrowInRight, BsCloudMoon, 
  BsCloudSun, BsFillArrowUpCircleFill, BsFillArrowDownCircleFill,
  BsFillEyeFill, BsFillEyeSlashFill, BsWallet2, BsGraphUpArrow, BsPlusSquare, BsBag, BsThreeDots, BsCarFront
} from 'react-icons/bs';
import {SlReload} from 'react-icons/sl';
import {MdOutlineTrendingDown, MdOutlineTrendingUp, MdAttachMoney} from 'react-icons/md'
import { Inter } from 'next/font/google'; 
import 'apexcharts/dist/apexcharts.css';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [theme, setTheme] = useState('dark');

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
          fontFamily: `${inter}`, // Define a fonte como Arial
        },
      },
    },
    series: [44, 55, 13],
  });

  return (
    <div className={theme}>
      <div className='w-full  dark:bg-[--background] flex'>
        <header className='hidden h-screen w-20 py-6 bg-green-500 dark:bg-[--box-background] sm:flex flex-col items-center'>
          <BsFilterLeft size={35} className='text-[--font-white]' />

          <ul className='list-none my-16'>
            <li className='py-6'>
              <Link href="#">
              
                <BsWallet2 size={24} className='text-[--font-white] dark:text-purple-600' />
              </Link>
            </li>
            <li className='py-6'>
              <Link href="#">
                <BsGraphUpArrow size={24} className='text-[--font-color]' />
              </Link>
            </li>
            
          </ul>
          
          <Link href="#" className='py-5 absolute bottom-[0]'>
            <BsBoxArrowInRight size={24} className='text-white' />
          </Link>
           
        </header>
        <header className='min-[639px]:hidden absolute flex flex-row w-screen bottom-[0] z-50 dark:bg-[--box-background]'>
          <ul className='list-none my-4 mx-4 flex items-center justify-between w-screen'>
              <li className='py-1'>
                <Link href="#">
                
                  <BsWallet2 size={24} className='text-[--font-white] dark:text-purple-600' />
                </Link>
              </li>
              <li className='py-1'>
                <Link href="#">
                  <BsGraphUpArrow size={24} className='text-[--font-color]' />
                </Link>
              </li>
              <li className='py-1'>
                <Link href="#">
                <BsBoxArrowInRight size={24} className='text-white' />
                </Link>
              </li>
            </ul>
        </header>

        <div className='w-full h-screen overflow-auto'>
          <main className='flex flex-col p-12 w-full h-screen max-[639px]:p-5'>
            {/* perfil && button dark/light */}
            <div className=' flex items-center justify-between mb-2'>
              
              <div className='flex items-center'>
                <div className='w-10 h-10 bg-purple-600 rounded-md' />
                <h2 className='hidden sm:visible ml-4 text-xl dark:text-[--font-color] font-semibold'>Bem Vindo, David Mendes</h2>
              </div>

              <div className='flex items-center'>
                <button className='flex items-center bg-green-500 text-white dark:bg-[--box-background] py-2 px-3 dark:text-[--font-color] mr-2 font-semibold rounded-md'>
                  <BsWallet2 size={16} className='text-[--font-white] dark:text-purple-600 mr-3' />
                  Nova Transação
                </button>
                
                <button
                  onClick={() => theme === 'dark' ? setTheme('') : setTheme('dark')
                  } 
                  className='flex items-center justify-center rounded-md w-10 h-10 border-solid border-white'>
                    {
                        theme === 'dark' ? 
                        <BsCloudMoon size={28} className='text-[--background] dark:text-[--font-color]' />:
                        <BsCloudSun size={28} className='text-[--background] dark:text-[--font-color]' />
                    }
                </button>
              </div>
            </div>

            <div className='max-[980px]:flex-col flex items-start justify-start w-full gap-4 my-8'>
              
              <div className='w-1/2 py-4 max-[980px]:w-full'>
                  {/*balanço total */} 
                  <div className='flex justify-between bg-slate-200 dark:bg-[--box-background] w-full h-52 rounded-2xl'>
                    <div className='flex flex-col items-start justify-center p-7 max-[639px]:p-4'>
                      <h2 className='max-[639px]:text-[20px] text-2xl font-bold dark:text-[--font-color]'>Balanço Total</h2>
                      <strong className='text-[--font-color-sucess] font-extrabold text-xl mt-3'>+ R$ 20,00</strong> 
                      <small className='mb-3 text-base text-[#A1A0BD]'>Ultima Transação</small>
                      <div className='flex '>
                        <button className='py-3 px-6 max-[639px]:p-3 bg-purple-600 rounded-2xl text-xs text-slate-200 font-black'>Entradas</button>
                        <button className='ml-2 py-3 px-6 max-[639px]:p-3 text-purple-600 rounded-2xl text-xs bg-slate-200 font-black'>Saídas</button>
                      </div>
                    </div>
                    
                    <div className='w-[58%] bg-green-500 dark:bg-purple-600 h-auto rounded-2xl flex flex-col items-center justify-center p-7 max-[639px]:p-4'>
                      <h2 className={`${inter.className} text-[45px] font-extrabold max-[639px]:text-[28px] max-[980px]:text-[32px] max-[1064px]:text-[30px] text-slate-200 `}>R$ 210
                      <small className='text-[--font-color] text-base'>,58</small>
                      </h2>
                      <p className='text-slate-200 max-[639px]:text-[10px] max-[980px]:text-[12px] max-[1170px]:text-[12px] text-sm -tracking-tighter'>MONTANTE ACUMULADO</p>
                    </div>

                  </div>
              </div>

              <div className='max-[639px]:w-full w-1/2 flex flex-col pr-3 py-4'>
                  <div className='flex items-center justify-between '>
                    <h3 className='text-lg dark:text-slate-200 font-bold tracking-tighter ml-5 mt-1'>Análise Mensal</h3>
                    {/* <button>
                      <SlReload size={22} className='dark:text-slate-200'/>
                    </button> */}
                  </div>
                  <div className='max-[639px]:overflow-hidden   w-full h-[180px]'>
                    <ul className='flex items-end'>
                      <li className='flex flex-col items-center mr-5 '>
                        <div className='flex items-end'>
                          <div className='w-6 h-28 bg-green-500 dark:bg-purple-600 rounded-t-[5px] mr-[2px]'></div>
                          <div className='w-6 h-6 bg-slate-200 rounded-t-[5px]'></div>
                        </div>
                        <small className='mt-[10px] text-xs text-[--font-color]'>JAN</small>
                      </li>

                      <li className='flex flex-col items-center mr-5'>
                        <div className='flex items-end'>
                          <div className='w-6 h-28 bg-green-500 dark:bg-purple-600 rounded-t-[5px] mr-[2px]'></div>
                          <div className='w-6 h-24 bg-slate-200 rounded-t-[5px]'></div>
                        </div>
                        <small className='mt-[10px] text-xs text-slate-200'>FEV</small>
                      </li>

                      <li className='flex flex-col items-center mr-5'>
                        <div className='flex items-end'>
                          <div className='w-6 h-16 bg-green-500 dark:bg-purple-600 rounded-t-[5px] mr-[2px]'></div>
                          <div className='w-6 h-32 bg-slate-200 rounded-t-[5px]'></div>
                        </div>
                        <small className='mt-[10px] text-xs text-[--font-color]'>MAR</small>
                      </li>

                      <li className='flex flex-col items-center mr-5'>
                        <div className='flex items-end'>
                          <div className='w-6 h-28 bg-green-500 dark:bg-purple-600 rounded-t-[5px] mr-[2px]'></div>
                          <div className='w-6 h-12 bg-slate-200 rounded-t-[5px]'></div>
                        </div>
                        <small className='mt-[10px] text-xs text-[--font-color]'>ABR</small>
                      </li>

                      <li className='flex flex-col items-center mr-5'>
                        <div className='flex items-end'>
                          <div className='w-6 h-28 bg-green-500 dark:bg-purple-600 rounded-t-[5px] mr-[2px]'></div>
                          <div className='w-6 h-12 bg-slate-200 rounded-t-[5px]'></div>
                        </div>
                        <small className='mt-[10px] text-xs text-[--font-color]'>MAI</small>
                      </li>

                      <li className='flex flex-col items-center mr-5 justify-end'>
                        <div className='flex items-end'>
                          <div className='w-6 h-9 bg-green-500 dark:bg-purple-600 rounded-t-[5px] mr-[2px]'></div>
                          <div className='w-6 h-36 bg-slate-200 rounded-t-[5px]'></div>
                        </div>
                        <small className='mt-[10px] text-xs text-[--font-color]'>JUN</small>
                      </li>

                      <li className='flex flex-col items-center mr-5'>
                        <div className='flex items-end'>
                          <div className='w-6 h-28 bg-green-500 dark:bg-purple-600 rounded-t-[5px] mr-[2px]'></div>
                          <div className='w-6 h-24 bg-slate-200 rounded-t-[5px]'></div>
                        </div>
                        <small className='mt-[10px] text-xs text-[--font-color]'>JUL</small>
                      </li>
                    </ul>
                  </div>
              </div>

            </div>
            {/* Contas Bancarias */}       
            <div className='max-[1200px]:flex-wrap max-[639px]:flex-row max-[639px]:flex-wrap mb-8 flex gap-4'>
              <div className='max-[1150px]:w-[31%] max-[639px]:w-[47%] w-1/6 bg-slate-200 dark:bg-[--box-background] p-[27px] rounded-lg'>
                <small className='text-sm text-[--background] dark:text-[--font-color]'>Nubank</small>
                <h3 className={`${inter.className} 
                  font-extrabold text-[--background] dark:text-[--font-color] text-2xl`}>R$ 150
                  <small className='text-[--background] dark:text-[--font-color] text-[10px]'>,00</small>
                </h3>
                <button className='flex items-center justify-start bg-[#DCF5E8] rounded-md py-1 px-2 mt-[14px]'>
                  <MdOutlineTrendingUp size={16} className='fill-[--font-color-sucess] mr-1'/>
                  <p className='text-[--font-color-sucess] text-sm font-semibold'>+ 8%</p>
                </button>
              </div>

              <div className='max-[1150px]:w-[31%] max-[639px]:w-[47%] w-1/6 bg-slate-200 dark:bg-[--box-background] p-[27px] rounded-lg'>
                <small className='text-sm text-[--background] dark:text-[--font-color]'>Bb</small>
                <h3 className={`${inter.className} 
                  font-extrabold text-[--background] dark:text-[--font-color] text-2xl`}>R$ 150
                  <small className='text-[--background] dark:text-[--font-color] text-[10px]'>,00</small>
                </h3>
                <button className='flex items-center justify-start bg-[#DCF5E8] rounded-md py-1 px-2 mt-[14px]'>
                  <MdOutlineTrendingUp size={16} className='fill-[--font-color-sucess] mr-1'/>
                  <p className='text-[--font-color-sucess] text-sm font-semibold'>+ 8%</p>
                </button>
              </div>

              <div className='max-[1150px]:w-[31%] max-[639px]:w-[47%] w-1/6 bg-slate-200 dark:bg-[--box-background] p-[27px] rounded-lg'>
                <small className='text-sm text-[--background] dark:text-[--font-color]'>Bradesco</small>
                <h3 className={`${inter.className} 
                  font-extrabold text-[--background] dark:text-[--font-color] text-2xl`}>R$ 150
                  <small className='text-[--background] dark:text-[--font-color] text-[10px]'>,00</small>
                </h3>
                <button className='flex items-center justify-start bg-[#F5DCDC] rounded-md py-1 px-2 mt-[14px]'>
                  <MdOutlineTrendingDown size={16} className='fill-[--font-color-failed] mr-1'/>
                  <p className='text-[--font-color-failed] text-sm font-semibold'>- 12%</p>
                </button>
              </div>

              <div className='max-[1150px]:w-[31%] max-[639px]:w-[47%] w-1/6 bg-slate-200 dark:bg-[--box-background] p-[27px] rounded-lg'>
                <small className='text-sm text-[--background] dark:text-[--font-color]'>Minha Poupança</small>
                <h3 className={`${inter.className} 
                  font-extrabold text-[--background] dark:text-[--font-color] text-2xl`}>R$ 150
                  <small className='text-[--background] dark:text-[--font-color] text-[10px]'>,00</small>
                </h3>
                <button className='flex items-center justify-start bg-[#DCF5E8] rounded-md py-1 px-2 mt-[14px]'>
                  <MdOutlineTrendingUp size={16} className='fill-[--font-color-sucess] mr-1'/>
                  <p className='text-[--font-color-sucess] text-sm font-semibold'>+ 8%</p>
                </button>
              </div>

              <div className='max-[1150px]:w-[31%] max-[639px]:w-[47%] w-1/6 bg-slate-200 dark:bg-[--box-background] p-[27px] rounded-lg'>
                <small className='text-sm text-[--background] dark:text-[--font-color]'>Caixa</small>
                <h3 className={`${inter.className} 
                  font-extrabold text-[--background] dark:text-[--font-color] text-2xl`}>R$ 150
                  <small className='text-[--background] dark:text-[--font-color] text-[10px]'>,00</small>
                </h3>
                <button className='flex items-center justify-start bg-[#F5DCDC] rounded-md py-1 px-2 mt-[14px]'>
                  <MdOutlineTrendingDown size={16} className='fill-[--font-color-failed] mr-1'/>
                  <p className='text-[--font-color-failed] text-sm font-semibold'>- 5%</p>
                </button>
              </div>

              <div className='max-[1150px]:w-[31%] max-[639px]:w-[47%] flex items-center justify-center w-1/6  p-[27px] border border-dashed border-[--box-background] dark:border-[--font-color] rounded-lg'>
                <button>
                  <BsPlusSquare size={28} className='fill-[--box-background] dark:fill-[--font-color]'/>
                </button>
              </div>
            </div>  
            {/* Transações e Gráfico Pizza */} 

            <div className='max-[780px]:flex-col flex w-full gap-4'>
                <div className='max-[780px]:w-full w-1/2 bg-slate-200 dark:bg-[--box-background] rounded-lg p-6'>
                  <div>
                    <h3 className='dark:text-[--font-color] font-extrabold text-xl'>Transações Recentes</h3>
                  </div>
                  
                  <table className='w-full border-spacing-2 mt-3 '>
                    <tbody>
                      <tr >
                        <td>
                          <div className='flex items-center justify-start py-2'>
                            <div className='bg-purple-600 h-min p-3 rounded-lg mr-2'>
                              <BsBag size={20} className='text-[--font-color] '/>
                            </div>
                            <div className='flex flex-col items-start justify-start'>
                              <p className='text-[15px] dark:text-[--font-color] font-extrabold'>Compras Shooping</p>
                              <small className='dark:text-[#A29EBC]'>Lazer</small>
                            </div>
                          </div>
                        </td>
                        <td className='text-right'>
                          <p className={`${inter.className} font-extrabold text-[--font-color-failed] text-base`}>- R$ 100
                          <small className='text-[8px]'>,00</small> </p>
                        </td>
                        
                      </tr>

                      <tr >
                        <td>
                          <div className='flex items-center justify-start py-2'>
                            <div className='bg-purple-600 h-min p-3 rounded-lg mr-2'>
                              <BsCarFront size={20} className='text-[--font-color] '/>
                            </div>
                            <div className='flex flex-col items-start justify-start'>
                              <p className='text-[15px] dark:text-[--font-color] font-extrabold'>Uber</p>
                              <small className='dark:text-[#A29EBC]'>Transporte</small>
                            </div>
                          </div>
                        </td>
                        <td className='text-right'>
                          <p className={`${inter.className} font-extrabold text-[--font-color-failed] text-base`}>- R$ 20
                          <small className='text-[8px]'>,00</small></p>
                        </td>
                        
                      </tr>

                      <tr >
                        <td>
                          <div className='flex items-center justify-start py-2'>
                            <div className='bg-purple-600 h-min p-3 rounded-lg mr-2'>
                              <MdAttachMoney size={22} className='text-[--font-color] '/>
                            </div>
                            <div className='flex flex-col items-start justify-start'>
                              <p className='text-[15px] dark:text-[--font-color] font-extrabold'>Recebimento do Mês</p>
                              <small className='dark:text-[#A29EBC]'>Salário</small>
                            </div>
                          </div>
                        </td>
                        <td className='text-right'>
                          <p className={`${inter.className} font-extrabold text-[--font-color-sucess] text-base`}>+ R$ 2500
                          <small className='text-[8px]'>,00</small></p>
                        </td>
                        
                      </tr>
                    </tbody>
                  </table>

                </div>
                
                <div className='max-[780px]:w-full w-1/2 bg-slate-200 dark:bg-[--box-background] rounded-lg p-6'>
                  <h3 className='dark:text-[--font-color] font-extrabold text-xl'>Principais Gastos do Mês</h3>
                  <div className='flex items-center justify-center mt-8'>
                    <Chart options={chartData} series={chartData.series} type='donut' width={380}/>
                  </div>

                </div>
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
