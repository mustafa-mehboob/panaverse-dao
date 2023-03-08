import Image from 'next/image'
import { Inter } from '@next/font/google'
import './nav.css'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Header() {
  return (
    <div className=' nav-container h-shadow backdrop-blur w-full h-16 flex items-center justify-around'>
      <div className=' md:w-full lg:w-full 2xl:w-11/12 max-[799 px]:w-screen fixed flex items-center justify-around'>
        <Image className='panaverse-img '
          src="/../public/panaverse.png"
          alt="Panaverse Dao"
          width={100}
          height={1}
        />

        <div className="r-tb  w-5/12 flex items-center justify-between lg:justify-between ">
          <div className=''>
            <Link className='h-t ' href="#">How It Works </Link>
          </div>
          <div className="">
            <Link className='h-t ' href="#">Apply </Link>
          </div>
          <div className="">
            <Link className='h-t ' href="#">Available Programs </Link>
          </div>
          <div className="">
            <Link className='h-t ' href="#">About </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
