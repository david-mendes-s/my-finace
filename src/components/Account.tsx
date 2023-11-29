import { NextFont } from "next/dist/compiled/@next/font";
import {MdOutlineTrendingDown, MdOutlineTrendingUp} from 'react-icons/md'

interface IAccount {
    font:NextFont;
    name: string;
    value: number;
    porcent: number;
}

function formatValue(value:number){
    const transformValue = (value/100);

    const parseValueString = String(transformValue);

    const values = parseValueString.split('.');

    return values;
}

export default function Account({font, name, porcent, value}:IAccount){
    return(
        <div className=' bg-slate-200 dark:bg-[--box-background] p-[27px] rounded-lg'>
            <small className='text-sm text-[--background] dark:text-[--font-color]'>{name}</small>
            <h3 className={`${font.className} 
                font-extrabold text-[--background] dark:text-[--font-color] text-2xl`}>R$ {formatValue(value)[0]}
                <small className='text-[--background] dark:text-[--font-color] text-[10px]'>, 
                    {formatValue(value).length > 1 ? formatValue(value)[1] : '00'
                }</small>
            </h3>
            <button className={`
                flex items-center justify-start bg-[${porcent >= 0 ? '#DCF5E8': '#F5DCDC'}] 
                rounded-md py-1 px-2 mt-[14px]`
            }>
                {
                    porcent >= 0 ? 
                    <MdOutlineTrendingUp size={16} className='fill-[--font-color-sucess] mr-1'/>
                    :
                    <MdOutlineTrendingDown size={16} className='fill-[--font-color-failed] mr-1'/>
                }
                
                <p className={`text-[${porcent >= 0 ? '--font-color-sucess' : '--font-color-failed'}] text-sm font-semibold`}>
                    {porcent > 0 ? `+${porcent}%`: `${porcent}%`}
                </p>
            </button>
        </div>
    );
}