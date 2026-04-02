"use client"

import Image from "next/image";
import Link from "next/link"
import NavItem from "./nav-item";
import { MenuToggle } from "./menu-toggle";

const Navbar = () => {
	return (
		<div className="border-b bg-[#222F3F]">
        <div className="relative w-full px-4 pr-0 sm:px-6 lg:px-8 flex h-20 items-center justify-between">
          <div className="flex items-center gap-x-6">
            <div className="hidden sm:flex">
              <NavItem label="Início"/>
              <NavItem label="Imortal Tricolor" href="gremio" />
              <NavItem label="Colorado" href="inter" />
            </div>
          </div>
          <div className="hidden sm:flex ml-auto items-center gap-x-4 p-4">
            <Link href="https://forla.com.br/" target="_blank" rel="noopener noreferrer">
              <Image src="/forla-branco.png" height={50} width={124} alt="Icone forla" />
            </Link>
          </div>
          <div className="sm:hidden ml-auto pr-6">
            <MenuToggle />            
          </div>
        </div>
    </div>
	)
}

export default Navbar;