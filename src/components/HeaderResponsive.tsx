import Link from "next/link";
import { BsBoxArrowInRight, BsGraphUpArrow, BsWallet2 } from "react-icons/bs";

export default function HeaderResponsive(){
    return(
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
    );
}