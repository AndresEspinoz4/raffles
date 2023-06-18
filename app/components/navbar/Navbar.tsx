"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { OpenMenu, CloseMenu, Buy } from "@/public/svgIcons";
export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className='py-3 min-w-[270px]'>

                <div className='flex flex-nowrap items-center justify-between relative px-5 md:px-24'>

                    <div className="px-2 md:px-0">
                        <Image className="block h-8 w-auto max-w-full" width={100} height={100} src="https://th.bing.com/th/id/R.fd063f4916dce76e7a17f96f19e99e55?rik=Yj%2bDN4iD%2btU0jA&riu=http%3a%2f%2fscripts.mit.edu%2f~schull%2fnds%2fwp-content%2fuploads%2f2017%2f02%2faddiction.png&ehk=K6C0AMyZ%2fvLjHrAprAvAfas%2f6AuxZxfKhHX4%2fJ4tjaQ%3d&risl=&pid=ImgRaw&r=0" alt="Dado logo" />
                    </div>

                    <div className="hidden sm:flex justify-center flex-1 px-2 md:ml-3">
                        <div className="flex items-center gap-5">
                            <Link href="#" className="text-black hover:text-gray-300 rounded-md px-3 py-1.5 text-base font-medium">Registrase</Link>
                            <Link href="#" className="text-black hover:text-gray-300 rounded-md px-3 py-1.5 text-base font-medium">Iniciar</Link>
                            <Link href="#" className="text-black hover:text-gray-300 rounded-md px-3 py-1.5 text-base font-medium">Iniciar</Link>
                            <Link href="#" className="text-black hover:text-gray-300 rounded-md px-3 py-1.5 text-base font-medium">Iniciar</Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-5">
                        <Link href="#" className="p-1"><Buy /></Link>
                        <button type="button" className="sm:hidden p-1" aria-controls="mobile-menu" aria-expanded="false" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <CloseMenu />
                            ) : (
                                <OpenMenu />
                            )}
                        </button>
                    </div>

                </div>

                {isMenuOpen &&
                    <div className="w-full md:hidden">
                        <div className="flex flex-col items-center pt-5 px-5">
                            <Link href="#" className="text-black hover:text-gray-300 rounded-md px-3 py-1.5 text-base font-medium">Registrase</Link>
                            <Link href="#" className="text-black hover:text-gray-300 rounded-md px-3 py-1.5 text-base font-medium">Iniciar</Link>
                            <Link href="#" className="text-black hover:text-gray-300 rounded-md px-3 py-1.5 text-base font-medium">Iniciar</Link>
                            <Link href="#" className="text-black hover:text-gray-300 rounded-md px-3 py-1.5 text-base font-medium">Iniciar</Link>
                        </div>
                    </div>
                }
            </nav>
        </>
    )
}