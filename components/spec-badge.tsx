import Image from "next/image";
import { ReactNode } from "react";

interface SpecBadgeProps {
  icon: ReactNode;
  label: string;
  borderColor?: string; 
  textColor?: string;   
  bgColor?: string;     
}

export function SpecBadge({
  icon,
  label,
  borderColor = "border-white/20",
  textColor = "text-white/70",
  bgColor = "bg-white/5",
}: SpecBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs sm:text-sm font-medium tracking-wide ${bgColor} ${borderColor} ${textColor}`}
    >
      {icon}
      {label}
    </span>
  );
}