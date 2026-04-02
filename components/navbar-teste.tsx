"use client"

import Image from "next/image";
import Link from "next/link";
import { MenuToggle } from "./menu-toggle";

const NavbarTeste = () => {
  return (
    <div className="w-full">

      <div className="relative w-full overflow-hidden h-36 sm:h-64 md:h-72">
        <div className="absolute inset-0 flex">
          <div className="relative w-1/2 h-full">
            <Image
              src="/torcida-gremio-enorme.jpg"
              alt="Torcida Grêmio"
              fill
              sizes="50vw"
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0093dd]/10 via-[#0093dd]/20 to-transparent" />
            <div className="absolute right-0 top-0 h-full w-24 sm:w-2/3 bg-gradient-to-r from-transparent to-black/85" />
          </div>
          <div className="relative w-1/2 h-full">
            <Image
              src="/torcida-internacional.jpg"
              alt="Torcida Inter"
              fill
              sizes="50vw"
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#e30513]/10 via-[#e30513]/20 to-transparent" />
            <div className="absolute left-0 top-0 h-full w-24 sm:w-2/3 bg-gradient-to-l from-transparent to-black/85" />
          </div>
          <div className="absolute bottom-0 left-0 w-full h-16 sm:h-24 bg-gradient-to-t from-black/10 to-transparent" />
        </div>
      </div>

      {/* BARRA DE NAVEGAÇÃO */}
      <div className="w-full  ">

        {/* DESKTOP */}
        <div className="hidden sm:flex items-center px-6 lg:px-8">
          {[
            { label: "Início", href: "/" },
            { label: "Imortal Tricolor", href: "/gremio" },
            { label: "Colorado", href: "/inter" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="
                relative px-5 py-4 text-sm font-medium tracking-wide text-white/70
                transition-all duration-200 ease-out
                hover:text-white hover:bg-white/5
                active:bg-white/10 active:scale-95
                after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white
                after:transition-all after:duration-200
                hover:after:w-full
              "
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex sm:hidden items-center justify-between px-4 py-3">
          <span className="text-white/50 text-xs tracking-widest uppercase">Menu</span>
          <MenuToggle />
        </div>

      </div>

    </div>
  );
};

export default NavbarTeste;