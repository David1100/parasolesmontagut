"use client"
import Image from "next/image";
import { useState } from "react";
import { RiWhatsappLine, RiMenu3Line, RiCloseLargeFill } from "react-icons/ri";

export default function Header() {

    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = (data) => {
        setShowMenu(data)
    }

    return (
        <nav className="fixed top-0 bg-[#00000099] w-full px-5 lg:px-20 py-6 flex justify-between items-center z-10">
            <div className="w-40 lg:w-full">
                <Image src='/l_respaldo.png' width={200} height={0} alt="Logo" />
            </div>
            <ul className="lg:flex gap-6 text-lg items-center hidden">
                <li className="hover:border-b-[2px] cursor-pointer px-1 py-1">Inicio</li>
                <li className="hover:border-b-[2px] cursor-pointer px-1 py-1">Parasoles</li>
                <li className="hover:border-b-[2px] cursor-pointer px-1 py-1">Productos</li>
                <li className="bg-green-800 py-2 px-3 rounded-lg flex items-center gap-1 shadow-md shadow-gray-900 hover:scale-105 transition-all cursor-pointer"><RiWhatsappLine className="text-2xl" /> Contactanos</li>
            </ul>
            <button className="border-2 p-1 rounded-lg lg:hidden hover:bg-[#00000099]" onClick={() => toggleMenu(true)}>
                <RiMenu3Line className="text-2xl " />
            </button>
            {/* menu movil */}
            <div className={`w-full h-full bg-[#000000f5] fixed left-0 top-0 transition-transform duration-300 ease-in-out ${showMenu ? 'transform translate-x-0' : 'transform -translate-x-full'} `} >
                <div className="relative w-full bg-red-600">
                    <button className="absolute right-0 mt-7 mr-8 text-3xl" onClick={() => toggleMenu(false)}><RiCloseLargeFill /></button>
                </div>
                <div className="w-full h-full flex justify-center flex-col gap-20 items-center">
                    <ul className="text-center text-2xl cursor-pointer">
                        <li className="p-3 hover:border-b-[2px]">Inicio</li>
                        <li className="p-3 hover:border-b-[2px]">Parasoles</li>
                        <li className="p-3 hover:border-b-[2px]">Productos</li>
                    </ul>
                    <div>
                <Image src='/l_respaldo.png' width={120} height={0} alt="Logo" />

                    </div>
                </div>
            </div>
        </nav>
    )
}