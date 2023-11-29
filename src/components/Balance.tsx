import { NextFont } from "next/dist/compiled/@next/font";

interface IFont {
    font:NextFont;
}

export default function Balance({font}:IFont){
    return (
        <div className='w-1/2 py-4 max-[1200px]:w-full'> 
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
                    <h2 className={`${font.className} text-[45px] font-extrabold max-[639px]:text-[28px] max-[980px]:text-[32px] max-[1064px]:text-[30px] text-slate-200 `}>R$ 210
                    <small className='text-[--font-color] text-base'>,58</small>
                    </h2>
                    <p className='text-slate-200 max-[639px]:text-[10px] max-[980px]:text-[12px] max-[1170px]:text-[12px] text-sm -tracking-tighter'>MONTANTE ACUMULADO</p>
                </div>
            </div>
        </div>
    );
}