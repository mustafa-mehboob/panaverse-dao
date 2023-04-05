import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import PanaverseLogo from '../images/panaverse-logo.png'

const inter = Inter({ subsets: ['latin'] })

export default function Footer() {
    return (
        <div>
            <div className="relative isolate overflow-hidden bg-gray-900 pt-24 sm:pt-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className=" flex flex-wrap mx-auto  lg:mx-0">
                        <div>
                            <div
                                className=" flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
                                <div className="text-violet-200 mr-12 hidden lg:block">
                                    <span>Get connected with us on social networks:</span>
                                </div>
                                <div className="flex justify-center">
                                    <a href="https://www.facebook.com/groups/798034500288384" className="mr-6 text-neutral-600 dark:text-neutral-200">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 fill-white"
                                            fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                        </svg>
                                    </a>
                                    <a href="https://twitter.com/Panaverse_edu" className="mr-6 text-neutral-600 dark:text-neutral-200">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 fill-white"
                                            fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                        </svg>
                                    </a>
                                    <a href="https://github.com/panaverse" className="text-neutral-600 dark:text-neutral-200">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 fill-white"
                                            fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="mx-6 py-10 text-center md:text-left">
                                <div className="grid-1 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                                    <div className="">
                                        <h6
                                            className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                                            <Link
                                                href="/"
                                                className="flex items-center">
                                                <Image className='panaverse-img text-2xl text-gray font-bold '
                                                    src={PanaverseLogo}
                                                    // src="https://pbs.twimg.com/profile_images/1573936081082482688/5xc_Zr67_400x400.jpg"
                                                    alt="Panaverse Dao"
                                                    width={40}
                                                    height={1}
                                                />

                                                <span className='ml-2 text-gray-300 m-0 text-[120%] font-black'>Panaverse DAO</span>
                                            </Link>

                                        </h6>
                                        <p className='text-violet-200'>
                                            Certified Web 3.0 and Metaverse Developer A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet
                                        </p>
                                    </div>
                                    <div className="">
                                        <h6
                                            className=" text-violet-200 mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                            Programs
                                        </h6>
                                        <p className="text-violet-200 mb-4">
                                            <a href="#!" className="text-violet-200 text-neutral-600 dark:text-neutral-200"
                                            >Web 3.0 and Metaverse Developer</a
                                            >
                                        </p>
                                        <p className="text-violet-200 mb-4">
                                            <a href="#!" className="text-violet-200 text-neutral-600 dark:text-neutral-200"
                                            >Cloud Native Computing</a
                                            >
                                        </p>
                                        <p className="text-violet-200 mb-4">
                                            <a href="#!" className=" text-violet-200 text-neutral-600 dark:text-neutral-200"
                                            >Artifical Intelligence</a
                                            >
                                        </p>
                                        <p className='text-violet-200'>
                                            <a href="#!" className="text-violet-200 text-neutral-600 dark:text-neutral-200"
                                            >Bloack Chain</a
                                            >
                                        </p>
                                        <p className='text-violet-200'>
                                            <a href="#!" className="text-violet-200 text-neutral-600 dark:text-neutral-200"
                                            >Internet of Things</a
                                            >
                                        </p>
                                    </div>

                                    <div>
                                        <h6
                                            className="text-violet-200 text-violet-200 mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                            Contact
                                        </h6>
                                        <p className="text-violet-200 mb-4 flex items-center justify-center md:justify-start">
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
                                        <p className="text-violet-200 mb-4 flex items-center justify-center md:justify-start">
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
                                            +92-308-2220203
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}