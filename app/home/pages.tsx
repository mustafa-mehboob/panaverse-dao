import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {

    // const img = ("https://tazefikirmetaverse.com/assets/gfx/metaverse.png");
    // const styling = {
    //     backgroundImage: `url('${img}')`,
    // }

    return (
        <div className='flex justify-center items-center '>
            {/* <div className=" bg-img team bg-fixed w-screen h-screen" style={styling}> */}
            <div className=" bg-img team bg-fixed w-screen lg:max-w-screen-xl h-screen " >

                <div className='mt-28 flex flex-wrap  sm:flex-row justify-evenly items-center flex-col'>
                    <Image className='w-2/5 h-2/4 animate-pulse animate-bounce'
                        src="/../public/mstudyimg.png"
                        alt="Metaverse Image"
                        width={300}
                        height={50}
                    />

                    <div className='mt-8'>
                        <h3 className='text-center text-[1.5vw] min-[640px]:text-center max-[600px]:text-[2.5vw]  '>Presidential Initiative for Artificial Intelligence & Computing (PIAIC)</h3> <br />
                        <h1 className='text-center text-[4vw] min-[640px]:text-center max-[600px]:text-[6.5vw]  font-bold text-red-900'>Certified Web 3.0 and <br /> Metaverse Developer</h1> <br />
                        <p className='text-center text-[1.5vw] min-[640px]:text-center max-[600px]:text-[2.5vw]'>A One and Quarter Years Panaverse DAO Earn as you Learn Program
                            <br /> Getting Ready for the Next Generation of the Internet</p> <br />
                        <p className='text-center text-[1.2vw] min-[640px]:text-center max-[600px]:text-[2vw]'>Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient
                            <br /> omputing/IoT, Network Automation, and Bioinformatics Technologies</p>
                    </div>

                </div>

                <div className='mt-10 p-6  bg-red-900 max-w-screen-2xl  h-fit'>
                    <div>
                        <h1 className='m-12 text-center text-[3vw] min-[640px]:text-center max-[600px]:text-[3.1vw]  font-bold text-slate-100'>
                            Core Courses (Common in All Specializations)
                            <p className='text-center text-[1.2vw] min-[640px]:text-center max-[600px]:text-[1.2vw] text-slate-100'>Every participant of the program will start by completing the following three core courses</p>
                        </h1>
                    </div>

                    <div className='flex   max-[1208px]:flex-col justify-evenly items-center '>

                        <div className="flex flex-col  justify-between max-w-sm  h-72 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div>
                                <a href="#">
                                    <h5 className="mb-2 text-red-900 text-center text-[1.5vw] max-[600px]:text-[3vw] font-bold tracking-tight text-gray-900 dark:text-white">Quarter I</h5>
                                </a>
                                <p className="mb-3 text-[1.5vw] max-[600px]:text-[3.5vw] dark:text-gray-400">CS-101: Object-Oriented Programming using TypeScript.</p>
                            </div>
                            <a href="#" className="w-fit inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-900 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-red-900 dark:focus:ring-blue-800">
                                Read more
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div><br />

                        <div className="flex flex-col  justify-between max-w-sm h-72 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div>
                                <a href="#">
                                    <h5 className="mb-2 text-red-900 text-center text-[1.5vw] max-[600px]:text-[3vw] font-bold tracking-tight text-gray-900 dark:text-white">Quarter II</h5>
                                </a>
                                <p className="mb-3 text-[1.2vw] max-[600px]:text-[3vw] dark:text-gray-400">W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform.</p>
                            </div>
                            <a href="#" className="w-fit inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-900 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-red-900 dark:focus:ring-blue-800">
                                Read more
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div><br />

                        <div className="flex flex-col  justify-between max-w-sm h-72 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div>
                                <a href="#">
                                    <h5 className="mb-2 text-red-900 text-center text-[1.5vw] max-[600px]:text-[3vw] font-bold tracking-tight text-gray-900 dark:text-white">Quarter III</h5>
                                </a>
                                <p className="mb-3 text-[1.2vw] max-[600px]:text-[3vw] dark:text-gray-400">$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development.</p>
                            </div>
                            <a href="#" className="w-fit inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-900 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-red-900 dark:focus:ring-blue-800">
                                Read more
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div><br />


                    </div>


                </div>

                <div className='mt-10 p-6 from-yellow-400  max-w-screen-2xl  h-fit'>
                    <div >
                        <h1 className='text-center text-[4vw] min-[640px]:text-center max-[600px]:text-[6.5vw]  font-bold text-red-900'>Specialized Tracks</h1><br /> <br />
                        <div className='flex max-[789px]:flex-col max-[789px]:items-center justify-around'>
                            <div className='  w-2/5'>
                                <p className=' text-[1.5vw]  max-[600px]:text-[3vw]'>After completing the first three quarters the participants will select one or more specializations consisting of two courses each.</p> <br />
                                <a href="#" className="w-fit inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-900 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-red-900 dark:focus:ring-blue-800">
                                    Read more
                                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </a>
                            </div>

                            <br />

                            <div>

                                <div className="flex flex-col  justify-between max-w-sm h-52 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <div>
                                        <a href="#">
                                            <h5 className="mb-2 text-red-900 text-center text-[1.5vw] max-[600px]:text-[3vw] font-bold tracking-tight text-gray-900 dark:text-white">Quarter IV</h5>
                                        </a>
                                        <p className="mb-3 text-[1.2vw] max-[600px]:text-[3vw] dark:text-gray-400">$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development.</p>
                                    </div>
                                    <a href="#" className="w-fit inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-900 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-red-900 dark:focus:ring-blue-800">
                                        Read more
                                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>

                                <br />

                                <div className="flex flex-col  justify-between max-w-sm h-52 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <div>
                                        <a href="#">
                                            <h5 className="mb-2 text-red-900 text-center text-[1.5vw] max-[600px]:text-[3vw] font-bold tracking-tight text-gray-900 dark:text-white">Quarter V</h5>
                                        </a>
                                        <p className="mb-3 text-[1.2vw] max-[600px]:text-[3vw] dark:text-gray-400">$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development.</p>
                                    </div>
                                    <a href="#" className="w-fit inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-900 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-red-900 dark:focus:ring-blue-800">
                                        Read more
                                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div></div>
                        <div className='mt-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                            <div className="bg-white py-24 sm:py-32">
                                <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
                                    <div className="max-w-2xl">
                                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">The Outcome for Participants of the Program</h2>
                                        <p className="mt-6 text-lg leading-8 text-gray-600">The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs) that are marketed globally by the Panaverse DAO and, if they like, will also be able to start off by offering services at a rate of $50 per hour ($96,000 per year). This would give Pakistani professionals and students a fantastic opportunity to better their financial situation while also giving the economy a much-needed boost by expanding software exports.</p>
                                    </div>
                                    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                                        <li>
                                            <div className="flex items-center gap-x-6">
                                                {/* <Image className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
                                                <div>
                                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Top 5 'Metaverse' jobs that will rule the future of tech industry</h3>
                                                    <a href="https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms " className="w-fit inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-900 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-red-900 dark:focus:ring-blue-800">
                                                        Read more
                                                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-center gap-x-6">
                                                {/* <Image className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
                                                <div>
                                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Blockchain Developer Salary - Jun 2022</h3>
                                                    <a href="https://web3.career/web3-salaries/blockchain-developer " className="w-fit inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-900 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-red-900 dark:focus:ring-blue-800">
                                                        Read more
                                                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-center gap-x-6">
                                                {/* <Image className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
                                                <div>
                                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Web3 Salaries Soar to $750,000 for Rank-and-File Devs</h3>
                                                    <a href="https://thedefiant.io/web3-soaring-salaries/ " className="w-fit inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-900 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-red-900 dark:focus:ring-blue-800">
                                                        Read more
                                                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-center gap-x-6">
                                                {/* <Image className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
                                                <div>
                                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">The Metaverse, Blockchain Gaming, and NFTs: Navigating the Internet’s Uncharted Waters</h3>
                                                    <a href="https://newzoo.com/insights/trend-reports/newzoo-report-on-metaverse-blockchain-gaming-nft-2022 " className="w-fit inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-900 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-red-900 dark:focus:ring-blue-800">
                                                        Read more
                                                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-center gap-x-6">
                                                {/* <Image className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
                                                <div>
                                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">How To Become Metaverse Developer: Scope, Skills, and Salary</h3>
                                                    <a href="https://www.blockchain-council.org/metaverse/how-to-become-metaverse-developer/  " className="w-fit inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-900 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-red-900 dark:focus:ring-blue-800">
                                                        Read more
                                                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>

                                        {/* <!-- More people... --> */}
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <footer
                    className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
                    <div
                        className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
                        <div className="mr-12 hidden lg:block">
                            <span>Get connected with us on social networks:</span>
                        </div>
                        <div className="flex justify-center">
                            <a href="https://www.facebook.com/groups/798034500288384" className="mr-6 text-neutral-600 dark:text-neutral-200">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </a>
                            <a href="https://twitter.com/Panaverse_edu" className="mr-6 text-neutral-600 dark:text-neutral-200">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                            <a href="https://github.com/panaverse" className="text-neutral-600 dark:text-neutral-200">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="mx-6 py-10 text-center md:text-left">
                        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            <div className="">
                                <h6
                                    className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">

                                    <Image className='panaverse-img text-2xl text-gray font-bold '
                                        src="/../public/panaverse.png"
                                        alt="Panaverse Dao"
                                        width={90}
                                        height={1}
                                    />
                                </h6>
                                <p>
                                    Certified Web 3.0 and Metaverse Developer A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet
                                </p>
                            </div>
                            <div className="">
                                <h6
                                    className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                    Programs
                                </h6>
                                <p className="mb-4">
                                    <a href="#!" className="text-neutral-600 dark:text-neutral-200"
                                    >Web 3.0 and Metaverse Developer</a
                                    >
                                </p>
                                <p className="mb-4">
                                    <a href="#!" className="text-neutral-600 dark:text-neutral-200"
                                    >Cloud Native Computing</a
                                    >
                                </p>
                                <p className="mb-4">
                                    <a href="#!" className="text-neutral-600 dark:text-neutral-200"
                                    >Artifical Intelligence</a
                                    >
                                </p>
                                <p>
                                    <a href="#!" className="text-neutral-600 dark:text-neutral-200"
                                    >Bloack Chain</a
                                    >
                                </p>
                                <p>
                                    <a href="#!" className="text-neutral-600 dark:text-neutral-200"
                                    >Internet of Things</a
                                    >
                                </p>
                            </div>

                            <div>
                                <h6
                                    className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                    Contact
                                </h6>
                                <p className="mb-4 flex items-center justify-center md:justify-start">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="mr-3 h-5 w-5">
                                        <path
                                            d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                        <path
                                            d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                    </svg>
                                    education@piaic.org
                                </p>
                                <p className="mb-4 flex items-center justify-center md:justify-start">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="mr-3 h-5 w-5">
                                        <path
                                            fill-rule="evenodd"
                                            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    +92-308-2220203 (WhatsApp as well)
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
                        <span>© 2023 Copyright:</span>
                        <a
                            className="font-semibold text-neutral-600 dark:text-neutral-400"
                            href="https://tailwind-elements.com/"
                        ></a
                        >
                    </div> */}
                </footer>
                {/* <div className='h-1 w-screen bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'></div> */}
            </div>

        </div>
    )
}
