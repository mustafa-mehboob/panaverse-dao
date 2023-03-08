import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Header from './navbar/page'
import Navbar from './header/page'
import HomePage from './home/pages'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <div>
      {/* <Header/> */}
      <HomePage />
      <Navbar />

    </div>
  )
}
