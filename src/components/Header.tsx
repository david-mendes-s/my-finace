import { BsCloudMoon, BsCloudSun, BsWallet2 } from "react-icons/bs";

interface ITheme {
  theme: string;
  setTheme: (t:string) => void;
}

export default function Header({theme, setTheme}:ITheme){
    return(
        <div className=' flex items-center justify-between mb-2'>
              
              <div className='flex items-center'>
                <div className='w-10 h-10 bg-purple-600 rounded-md' />
                <h2 className='max-[780px]:hidden sm:visible ml-4 text-xl dark:text-[--font-color] font-semibold'>Bem Vindo, David Mendes</h2>
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
    )
}