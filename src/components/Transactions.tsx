import { NextFont } from "next/dist/compiled/@next/font";
import { BsBag, BsCarFront } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";

interface IFont {
    font:NextFont;
}

export default function Transactions({font}:IFont){
    return(
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
                    <div className='flex items-center justify-end '>
                    <div className='flex flex-col items-end justify-end'>
                        <p className={`${font.className} font-extrabold text-[--font-color-failed] text-base`}>- R$ 20
                        <small className='text-[8px]'>,00</small></p>
                        <small className='dark:text-[#A29EBC] text-right'>Saída</small>
                    </div>
                    </div>
                </td>
                
                </tr>

                <tr >
                <td>
                    <div className='flex items-center justify-start'>
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
                    <div className='flex items-center justify-end'>
                    <div className='flex flex-col items-end justify-end'>
                        <p className={`${font.className} font-extrabold text-[--font-color-failed] text-base`}>- R$ 20
                        <small className='text-[8px]'>,00</small></p>
                        <small className='dark:text-[#A29EBC] text-right'>Saída</small>
                    </div>
                    </div>
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
                    <div className='flex items-center justify-end py-2'>
                    <div className='flex flex-col items-end justify-end'>
                        <p className={`${font.className} font-extrabold text-[--font-color-sucess] text-base`}>+ R$ 20
                        <small className='text-[8px]'>,00</small></p>
                        <small className='dark:text-[#A29EBC] text-right'>Entrada</small>
                    </div>
                    </div>
                </td>
                
                </tr>
            </tbody>
            </table>

        </div>
    );
}