import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import Navbar from '@/app/header/page'
import Footer from '@/app/footer/page'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
    return (
        <div>
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                {/* <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"> */}
                <svg viewBox="0 0 1097 845" aria-hidden="true" className="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]">
                    <path fill="url(#10724532-9d81-43d2-bb94-866e98dd6e42)" fill-opacity=".2" d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z" />
                    <defs>
                        <linearGradient id="10724532-9d81-43d2-bb94-866e98dd6e42" x1="1097.04" x2="-141.165" y1=".22" y2="363.075" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#776FFF" />
                            <stop offset="1" stop-color="#FF4694" />
                        </linearGradient>
                    </defs>
                </svg>
                <svg viewBox="0 0 1097 845" aria-hidden="true" className="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0">
                    <path fill="url(#8ddc7edb-8983-4cd7-bccb-79ad21097d70)" fill-opacity=".2" d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z" />
                    <defs>
                        <linearGradient id="8ddc7edb-8983-4cd7-bccb-79ad21097d70" x1="1097.04" x2="-141.165" y1=".22" y2="363.075" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#776FFF" />
                            <stop offset="1" stop-color="#FF4694" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className=" mt-6 flex flex-wrap mx-auto  lg:mx-0">
                        <div className='max-w-2xl'>
                            <h2 className="mt-6 text-4xl font-bold tracking-tight text-violet-200  sm:text-6xl">Quarter I (Core)</h2>
                            <p className="mt-6 text-xl  text-violet-200  sm:text-2xl">CS-101: Object-Oriented Programming using TypeScript</p>
                            <p className="mt-6 text-lg leading-8 text-gray-300">Duration: 13 Weeks</p>
                            <h1 className='mt-6   text-[3vw]  max-[600px]:text-[3.1vw]  font-bold text-slate-100'>
                                Course Description:</h1>
                            <p className="mt-6 text-lg leading-8 text-gray-300">We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users. </p>
                        </div>
                        <div className='mt-4 ml-10 lg:w-1/4 w-3/4  flex justify-center items-center '>
                        </div>
                    </div>
                    <div className="">
                        <div className="   flex flex-wrap mx-auto  lg:mx-0">
                            <div className='max-w-4xl'>
                                <p className="mt-6 text-3xl  text-violet-200  sm:text-4xl">1. HTML and CSS (Homework) </p>
                                <p className='mt-3 text-[1.2vw]  max-[600px]:text-[1.2vw] text-slate-100'>Learn HTML by Hira Khan (Link Recorded Videos)</p>
                                <Link
                                    href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
                                    className="mt-4 w-1/5 custom-animation bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 px-8 py-3 bg-violet-900 rounded-md text-white outline-none focus:ring-4 shadow-lg transform  transition-transform flex"
                                ><span className="">Link</span>
                                </Link>
                                <p className='mt-3 text-[1.2vw]  max-[600px]:text-[1.2vw] text-slate-100'>Learn CSS Intro by Hira Khan (Link Recorded Videos)</p>
                                <Link
                                    href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob"
                                    className="mt-4 w-1/5 custom-animation bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 px-8 py-3 bg-violet-900 rounded-md text-white outline-none focus:ring-4 shadow-lg transform  transition-transform flex"
                                ><span className="">Link</span>
                                </Link>
                                <p className="mt-6 text-3xl  text-violet-200  sm:text-4xl">2. Web 3.0 and Metaverse Theory</p>
                                <p className='mt-3 text-[1.2vw]  max-[600px]:text-[1.2vw] text-slate-100'>Introduction to Panaverse DAO</p>
                                <Link
                                    href="https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing"
                                    className="mt-4 w-1/5 custom-animation bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 px-8 py-3 bg-violet-900 rounded-md text-white outline-none focus:ring-4 shadow-lg transform  transition-transform flex"
                                ><span className="">Link</span>
                                </Link>
                                <p className='mt-3 text-[1.2vw]  max-[600px]:text-[1.2vw] text-slate-100'>Web 3.0 User Guide</p>
                                <Link
                                    href="https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing "
                                    className="mt-4 w-1/5 custom-animation bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 px-8 py-3 bg-violet-900 rounded-md text-white outline-none focus:ring-4 shadow-lg transform  transition-transform flex"
                                ><span className="">Link</span>
                                </Link>
                                <p className="mt-6 text-3xl  text-violet-200  sm:text-4xl">Complete Web 3 Assignments included in the Web 3 User Guide</p>
                                <p className='mt-3 text-[1.2vw]  max-[600px]:text-[1.2vw] text-slate-100'>Virtual and Augmented  Metaverse User Guide</p>
                                <Link
                                    href="https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing"
                                    className="mt-4 w-1/5 custom-animation bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 px-8 py-3 bg-violet-900 rounded-md text-white outline-none focus:ring-4 shadow-lg transform  transition-transform flex"
                                ><span className="">Link</span>
                                </Link>
                                <p className="mt-6 text-3xl  text-violet-200  sm:text-4xl">3D E-commerce</p>
                                <p className='mt-3 text-[1.2vw]  max-[600px]:text-[1.2vw] text-slate-100'>First, in our Web 3 and Metaverse program, we are learning to develop Web 1, and Web 2 websites and apps. Later we will learn to develop Web 3 and 3D Commerce templates and experiences. </p>
                                <p className='mt-3 text-[1.2vw]  max-[600px]:text-[1.2vw] text-slate-100'>But we have to start thinking right now. Let's understand what one virtual store builder company is doing the company name is Emperia. </p>
                                <Link
                                    href="https://emperiavr.com/ "
                                    className="mt-4 w-1/5 custom-animation bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 px-8 py-3 bg-violet-900 rounded-md text-white outline-none focus:ring-4 shadow-lg transform  transition-transform flex"
                                ><span className="">Link</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
                <Navbar />
            </div>

        </div>
    )
}