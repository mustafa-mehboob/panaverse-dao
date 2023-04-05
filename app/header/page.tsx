import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Panaverse from '../images/panaverse-logo.png'

export default function Navbar() {
    let navbar = false;
    let setNavbar = false;
    return (
        <div>
            <nav className=" backdrop-blur-xl fixed w-full bg-white-800 shadow-lg  top-px">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <Link href="/" className='flex items-center'>
                                {/* <h2 className="text-2xl text-white font-bold">NEXT JS</h2> */}
                                <Image className='panaverse-img text-2xl text-gray font-bold '
                                    src={Panaverse}
                                    // src="https://pbs.twimg.com/profile_images/1573936081082482688/5xc_Zr67_400x400.jpg"
                                    alt="Panaverse Dao"
                                    width={40}
                                    height={1}
                                />
                                <div className='flex flex-col ml-1'>
                                <span className='text-gray-300 m-0 text-[120%] font-black'>Panaverse DAO</span>
                                {/* <span className='text-gray-300 m-0'>Dao</span> */}
                                </div>
                            </Link>
                            <div className="md:hidden">
                                <button                >
                                    {navbar ? (
                                        <Link
                                        href="https://www.piaic.org"
                                        className="transition duration-300 ease-in-out	 px-8 py-3 bg-violet-900 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform flex"
                                    ><span className="text-gray-300">APPLY</span>
                                    </Link>
                                    ) : (
                                        <Link
                                        href="https://www.piaic.org"
                                        className="transition duration-300 ease-in-out	 px-8 py-3 bg-violet-900 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform flex"
                                    ><span className="text-gray-300">APPLY</span>
                                    </Link>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
                                }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <li className="text-gray-300">
                                    <Link
                                        href="https://www.piaic.org"
                                        className="custom-animation bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 px-8 py-3 bg-violet-900 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform flex"
                                    ><span className="">APPLY</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}