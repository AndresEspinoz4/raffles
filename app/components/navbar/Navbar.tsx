"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconBars, IconMark, IconBuy, IconDark, IconSun } from "@/public/svgIcons";
export default function Navbar() {

    const [openMenu, setOpenMenu] = useState(false);
    const [theme, setTheme] = useState(false);

    return (
        <>
            <nav aria-label="Top" className="min-w-[270px] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center">

                        <div className="ml-4 flex md:ml-0">
                            <a href="#">
                                <span className="sr-only">Your Company</span>
                                <img className="h-8 w-auto" src="https://th.bing.com/th/id/R.fd063f4916dce76e7a17f96f19e99e55?rik=Yj%2bDN4iD%2btU0jA&riu=http%3a%2f%2fscripts.mit.edu%2f~schull%2fnds%2fwp-content%2fuploads%2f2017%2f02%2faddiction.png&ehk=K6C0AMyZ%2fvLjHrAprAvAfas%2f6AuxZxfKhHX4%2fJ4tjaQ%3d&risl=&pid=ImgRaw&r=0" alt="" />
                            </a>
                        </div>

                        <div className="ml-auto flex items-center">
                            <div className="hidden md:flex md:flex-1 md:items-center md:justify-end md:space-x-6">
                                <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">Sign in</a>
                                <span className="h-6 w-px bg-gray-200" aria-hidden="true"></span>
                                <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">Create unt</a>
                                <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">Create</a>
                                <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">Crea account</a>
                            </div>

                            <div className="hidden md:ml-8 md:flex">
                                <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                                    <img src="https://tailwindui.com/img/flags/flag-canada.svg" alt="" className="block h-auto w-5 flex-shrink-0" />
                                    <span className="ml-3 block text-sm font-medium">CO</span>
                                    <span className="sr-only">, change currency</span>
                                </a>
                            </div>

                            <div className="ml-6">
                                <button onClick={() => setTheme(!theme)} type="button" className="p-2" aria-expanded="false">
                                    <span className="sr-only">change theme</span>
                                    {theme ? (
                                        <IconSun />
                                    ) : (
                                        <IconDark />
                                    )}
                                </button>
                            </div>

                            <div className="ml-6">
                                <Link href="#" className="p-2">
                                    <IconBuy />
                                    <span className="sr-only">items in cart, view bag</span>
                                </Link>
                            </div>

                            <div className="md:hidden ml-6">
                                <button onClick={() => setOpenMenu(!openMenu)} type="button" className="p-2" aria-controls="mobile-menu" aria-expanded="false">
                                    <span className="sr-only">Open menu</span>
                                    <IconBars />
                                </button>
                            </div>

                        </div>
                    </div>
            </nav>


            {openMenu &&
                <div className="md:hidden relative z-40" role="dialog" aria-modal="true">

                    <div className="top-0 right-0 bottom-0 w-72 fixed z-40 flex">

                        <div className="w-full max-w-full bg-white">

                            <div className="flex justify-end px-5 pb-2 pt-3">
                                <button onClick={() => setOpenMenu(!openMenu)} type="button" className="p-2" aria-controls="mobile-menu" aria-expanded="false">
                                    <span className="sr-only">Open menu</span>
                                    <IconMark />
                                </button>
                            </div>

                            <div className="mt-2">
                                <div className="-mb-px flex space-x-8 px-4" aria-orientation="horizontal" role="tablist">
                                    <button id="tabs-1-tab-1" className="border-transparent text-gray-900 flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium" aria-controls="tabs-1-panel-1" role="tab" type="button">Women</button>
                                </div>
                            </div>

                            <div className="space-y-6 border-t px-4 py-6">
                                <div className="flex justify-end">
                                    <a href="#" className="-m-2 block p-2 font-medium text-gray-900">Company</a>
                                </div>
                                <div className="flex justify-end">
                                    <a href="#" className="-m-2 block p-2 font-medium text-gray-900">Stores</a>
                                </div>
                                <div className="flex justify-end">
                                    <a href="#" className="-m-2 block p-2 font-medium text-gray-900">Sign in</a>
                                </div>
                                <div className="flex justify-end">
                                    <a href="#" className="-m-2 block p-2 font-medium text-gray-900">Create account</a>
                                </div>
                            </div>

                            <div className="flex w-full justify-end absolute bottom-0 px-4 py-6">
                                <a href="#" className="flex items-center p-2">
                                    <img src="https://tailwindui.com/img/flags/flag-canada.svg" alt="" className="block h-auto w-5 flex-shrink-0" />
                                    <span className="ml-3 block text-base font-medium text-gray-900">CO</span>
                                    <span className="sr-only">, change currency</span>
                                </a>
                            </div>

                        </div>

                    </div>

                    <div className="fixed right-0 top-0 w-full h-full bg-black bg-opacity-25"></div>
                </div>
            }

            {/* <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">Get free delivery on orders over $100</p> */}
        </>

    )
}