'use client'

import Image from "next/image";
import { NavbarItem } from "../atoms/NarbarItem";
import { BsBell, BsSearch } from "react-icons/bs";

export const Navbar = () => {
    return (
        <div className="w-full fixed z-40">
            <div className="flex flex-row items-center px-16 py-6 bg-zinc-900 bg-opacity-10">

                <Image src={"/Images/logo.png"} alt="logo" height={12} width={150} />

                <div className="flex flex-row ml-8 gap-7">
                    <NavbarItem label="Home"/>
                    <NavbarItem label="TV Shows"/>
                    <NavbarItem label="Movies"/>
                    <NavbarItem label="New & Popular"/>
                    <NavbarItem label="My List"/>
                    <NavbarItem label="Browse by Languages"/>
                </div>

                <div className="flex flex-row ml-auto gap-7 items-center">
                    <div className="text-gray-300 hover:text-gray-300 cursor-pointer transition">
                        <BsSearch />
                    </div>

                    <div className="text-gray-300 hover:text-gray-300 cursor-pointer transition">
                        <BsBell />
                    </div>

                    <div className="w-10 h-10 rounded-md overflow-hidden cursor-pointer">
                        <Image src={"/Images/1.png"} alt="pf-icon" height={12} width={150} />
                    </div>
                </div>
            </div>
        </div>
    );
}