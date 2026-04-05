"use client"

import Image from "next/image";
import Link from "next/link";
import { MenuToggle } from "./menu-toggle";

type NavbarVariant = "grenal" | "gremio" | "inter";

interface NavbarProps {
  variant?: NavbarVariant;
}

const Navbar = ({ variant = "grenal" }: NavbarProps) => {
  return (
    <div className="w-full">

      <div className="relative w-full overflow-hidden h-24 sm:h-44 md:h-52">
        <div className="absolute inset-0 flex">

          {variant !== "inter" && (
            <div className={`relative h-full ${variant === "gremio" ? "w-full" : "w-1/2"}`}>
              <Image
                src="/torcida-gremio-enorme.jpg"
                alt="Torcida Grêmio"
                fill
                sizes={variant === "gremio" ? "100vw" : "50vw"}
                className="object-cover object-top opacity-50"
                priority
              />
              {variant === "grenal" && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0093dd]/10 via-[#0093dd]/20 to-transparent" />
                  <div className="absolute right-0 top-0 h-full w-24 sm:w-2/3 bg-gradient-to-r from-transparent to-black/85" />
                </>
              )}
            </div>
          )}

          {variant !== "gremio" && (
            <div className={`relative h-full ${variant === "inter" ? "w-full" : "w-1/2"}`}>
              <Image
                src="/torcida-internacional.jpg"
                alt="Torcida Inter"
                fill
                sizes={variant === "inter" ? "100vw" : "50vw"}
                className="object-cover object-[center_31%] opacity-50"
                priority
              />
              {variant === "grenal" && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-l from-[#e30513]/10 via-[#e30513]/20 to-transparent" />
                  <div className="absolute left-0 top-0 h-full w-24 sm:w-2/3 bg-gradient-to-l from-transparent to-black/85" />
                </>
              )}
            </div>
          )}

          <div className="absolute bottom-0 left-0 w-full h-16 sm:h-24 bg-gradient-to-t from-black/10 to-transparent" />
        </div>
      </div>

      {/* BARRA DE NAVEGAÇÃO */}
      <div className="w-full">

        {/* DESKTOP */}
        <div className="hidden sm:flex items-center px-6 lg:px-8">

          <Link
            href="/"
            className="
              relative px-5 py-3 text-sm font-medium tracking-wide text-white/70
              transition-all duration-200 ease-out
              hover:text-white hover:bg-white/5
              active:bg-white/10 active:scale-95
              after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white
              after:transition-all after:duration-200
              hover:after:w-full
            "
          >
            Início
          </Link>

          <Link
            href="/gremio"
            className="
              relative px-5 py-3 text-sm font-medium tracking-wide text-white/70
              transition-all duration-200 ease-out
              hover:text-white hover:bg-white/5
              active:bg-white/10 active:scale-95
              after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#0093dd]
              after:transition-all after:duration-200
              hover:after:w-full
            "
          >
            Imortal Tricolor
          </Link>

          <Link
            href="/inter"
            className="
              relative px-5 py-3 text-sm font-medium tracking-wide text-white/70
              transition-all duration-200 ease-out
              hover:text-white hover:bg-white/5
              active:bg-white/10 active:scale-95
              after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#e30513]
              after:transition-all after:duration-200
              hover:after:w-full
            "
          >
            Colorado
          </Link>

        </div>

        <div className="flex sm:hidden items-center justify-end px-4 py-2">
          <MenuToggle />
        </div>

      </div>

    </div>
  );
};

export default Navbar;