import Link from "next/link";
import { MdConstruction } from "react-icons/md";


export default function Redirect() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-6 bg-black">
			<MdConstruction className="text-zinc-400 h-16 w-16"/>
      <p className="text-white/50 text-lg tracking-widest">Em Construção...</p>
      <Link href="/">
        <button className="cursor-pointer px-6 py-2.5 bg-[#222F3F] hover:bg-[#2e3f54] text-white/70 hover:text-white text-sm font-medium tracking-wide rounded-lg transition-colors duration-200">
          Retornar à tela inicial
        </button>
      </Link>
    </div>
  )
}