export default function BarCharts(){
    return(
        <div className='max-[1200px]:w-full w-1/2 flex flex-col pr-3 py-4'>
            <div className='flex items-center justify-between '>
                <h3 className='text-lg dark:text-slate-200 font-bold tracking-tighter  mt-1'>Análise Mensal</h3>
                {/* <button>
                    <SlReload size={22} className='dark:text-slate-200'/>
                </button> */}
            </div>
            <div className='overflow-y-hidden overflow-x-scroll w-full h-[180px]'>
                <ul className='flex items-end'>
                    <li className='flex flex-col items-center mr-5 '>
                    <div className='flex items-end'>
                        <div className='w-6 h-28 bg-green-500 dark:bg-purple-600 rounded-t-[5px] mr-[2px]'></div>
                        <div className='w-6 h-6 bg-slate-200 rounded-t-[5px]'></div>
                    </div>
                    <small className='mt-[10px] text-xs text-[--background] dark:text-[--font-color]'>JAN</small>
                    </li>

                    <li className='flex flex-col items-center mr-5'>
                    <div className='flex items-end'>
                        <div className='w-6 h-28 bg-green-500 dark:bg-purple-600 rounded-t-[5px] mr-[2px]'></div>
                        <div className='w-6 h-24 bg-slate-200 rounded-t-[5px]'></div>
                    </div>
                    <small className='mt-[10px] text-xs text-[--background] dark:text-[--font-color]'>FEV</small>
                    </li>

                    <li className='flex flex-col items-center mr-5'>
                    <div className='flex items-end'>
                        <div className='w-6 h-16 bg-green-500 dark:bg-purple-600 rounded-t-[5px] mr-[2px]'></div>
                        <div className='w-6 h-32 bg-slate-200 rounded-t-[5px]'></div>
                    </div>
                    <small className='mt-[10px] text-xs text-[--background] dark:text-[--font-color]'>MAR</small>
                    </li>

                    <li className='flex flex-col items-center mr-5'>
                    <div className='flex items-end'>
                        <div className='w-6 h-28 bg-green-500 dark:bg-purple-600 rounded-t-[5px] mr-[2px]'></div>
                        <div className='w-6 h-12 bg-slate-200 rounded-t-[5px]'></div>
                    </div>
                    <small className='mt-[10px] text-xs text-[--background] dark:text-[--font-color]'>ABR</small>
                    </li>

                    <li className='flex flex-col items-center mr-5'>
                    <div className='flex items-end'>
                        <div className='w-6 h-28 bg-green-500 dark:bg-purple-600 rounded-t-[5px] mr-[2px]'></div>
                        <div className='w-6 h-12 bg-slate-200 rounded-t-[5px]'></div>
                    </div>
                    <small className='mt-[10px] text-xs text-[--background] dark:text-[--font-color]'>MAI</small>
                    </li>

                    <li className='flex flex-col items-center mr-5 justify-end'>
                    <div className='flex items-end'>
                        <div className='w-6 h-9 bg-green-500 dark:bg-purple-600 rounded-t-[5px] mr-[2px]'></div>
                        <div className='w-6 h-36 bg-slate-200 rounded-t-[5px]'></div>
                    </div>
                    <small className='mt-[10px] text-xs text-[--background] dark:text-[--font-color]'>JUN</small>
                    </li>

                    <li className='flex flex-col items-center mr-5'>
                    <div className='flex items-end'>
                        <div className='w-6 h-28 bg-green-500 dark:bg-purple-600 rounded-t-[5px] mr-[2px]'></div>
                        <div className='w-6 h-24 bg-slate-200 rounded-t-[5px]'></div>
                    </div>
                    <small className='mt-[10px] text-xs text-[--background] dark:text-[--font-color]'>JUL</small>
                    </li>

                    <li className='flex flex-col items-center mr-5'>
                    <div className='flex items-end'>
                        <div className='w-6 h-28 bg-green-500 dark:bg-purple-600 rounded-t-[5px] mr-[2px]'></div>
                        <div className='w-6 h-24 bg-slate-200 rounded-t-[5px]'></div>
                    </div>
                    <small className='mt-[10px] text-xs text-[--background] dark:text-[--font-color]'>AGO</small>
                    </li>

                    <li className='flex flex-col items-center mr-5'>
                    <div className='flex items-end'>
                        <div className='w-6 h-28 bg-green-500 dark:bg-purple-600 rounded-t-[5px] mr-[2px]'></div>
                        <div className='w-6 h-24 bg-slate-200 rounded-t-[5px]'></div>
                    </div>
                    <small className='mt-[10px] text-xs text-[--background] dark:text-[--font-color]'>SET</small>
                    </li>

                    <li className='flex flex-col items-center mr-5'>
                    <div className='flex items-end'>
                        <div className='w-6 h-28 bg-green-500 dark:bg-purple-600 rounded-t-[5px] mr-[2px]'></div>
                        <div className='w-6 h-24 bg-slate-200 rounded-t-[5px]'></div>
                    </div>
                    <small className='mt-[10px] text-xs text-[--background] dark:text-[--font-color]'>OUT</small>
                    </li>

                    <li className='flex flex-col items-center mr-5'>
                    <div className='flex items-end'>
                        <div className='w-6 h-28 bg-green-500 dark:bg-purple-600 rounded-t-[5px] mr-[2px]'></div>
                        <div className='w-6 h-24 bg-slate-200 rounded-t-[5px]'></div>
                    </div>
                    <small className='mt-[10px] text-xs text-[--background] dark:text-[--font-color]'>NOV</small>
                    </li>

                    <li className='flex flex-col items-center mr-5'>
                    <div className='flex items-end'>
                        <div className='w-6 h-28 bg-green-500 dark:bg-purple-600 rounded-t-[5px] mr-[2px]'></div>
                        <div className='w-6 h-24 bg-slate-200 rounded-t-[5px]'></div>
                    </div>
                    <small className='mt-[10px] text-xs text-[--background] dark:text-[--font-color]'>DEZ</small>
                    </li>
                </ul>
            </div>
        </div>
    );
}