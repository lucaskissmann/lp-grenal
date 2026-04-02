import Image from "next/image";
import { ReactNode } from "react";

interface SpecBadgeProps {
  iconSrc: string;
  label: string;
  borderColor?: string; 
  textColor?: string;   
  bgColor?: string;     
}

export function SpecBadge({
  iconSrc,
  label,
  borderColor = "border-white/20",
  textColor = "text-white/70",
  bgColor = "bg-white/5",
}: SpecBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs sm:text-sm font-medium tracking-wide ${bgColor} ${borderColor} ${textColor}`}
    >
      <Image src={iconSrc} width={28} height={28} alt={label}/>
      {label}
    </span>
  );
}