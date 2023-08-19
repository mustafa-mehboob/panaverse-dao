import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Navbar from './header/page'
import HomePage from './home/page'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <div>
      <HomePage />
      <Navbar />
    </div>
  )
}
