import { SpecBadge } from "./spec-badge";
import { BenefitItem } from "./benefit-item";
import {
  Sun,
  Droplets,
  Shield,
  Monitor,
  Zap,
  Layers,
} from "lucide-react";

interface ProductSpecsProps {
  accentColor: string;       
  badgeBorderColor: string;  
  badgeBgColor: string;      
  badgeTextColor: string;    
  pillBorderColor: string;   
  pillBgColor: string;       
  pillTextColor: string;     
  residualLabel: string;     
}

const specs = [
  { iconSrc: "/icons/reflexivo.png", label: "Reflexos" },
  { iconSrc: "/icons/cocar-arranhao.png", label: "Arranhões" },
  { iconSrc: "/icons/mancha-dedo.png", label: "Manchas" },
  { iconSrc: "/icons/gotas-de-agua.png", label: "Água" },
  { iconSrc: "/icons/raios.png", label: "Raios UV" },
  { iconSrc: "/icons/monitorar-tablet-e-smartphone.png", label: "Proteção de Telas" },
];

const benefits = [
  "Marca d'água na lente",
  "15 camadas de antirreflexo",
  "Muito mais transparência",
  "Lente hidrofóbica",
  "Muito mais fácil de limpar",
  "Residual colorido inovador",
  "Proteção UVA e UVB",
  "Altamente resistente a arranhões",
  "Maior resistência térmica",
];

export function ProductSpecs({
  accentColor,
  badgeBorderColor,
  badgeBgColor,
  badgeTextColor,
  pillBorderColor,
  pillBgColor,
  pillTextColor,
  residualLabel,
}: ProductSpecsProps) {
  return (
    <div className="space-y-6">

      {/* Pill de destaque */}
      <span
        className={`inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border text-xs font-semibold tracking-widest uppercase ${pillBgColor} ${pillBorderColor} ${pillTextColor}`}
      >
        <span className={`w-2 h-2 rounded-full ${accentColor.replace("text-", "bg-")}`} />
        {residualLabel}
      </span>

      {/* Badges de especificação */}
      <div className="flex flex-wrap gap-x-2 gap-y-4">
        {specs.map((s) => (
          <SpecBadge
            key={s.label}
            iconSrc={s.iconSrc}
            label={s.label}
            borderColor={badgeBorderColor}
            bgColor={badgeBgColor}
            textColor={badgeTextColor}
          />
        ))}
      </div>

      {/* Separador */}
      <div className="border-t border-white/10 pt-4">
        <p className="text-xs sm:text-md text-white/40 uppercase tracking-widest mb-3">Benefícios</p>
        <ul className="space-y-2.5">
          {benefits.map((b) => (
            <BenefitItem key={b} label={b} checkColor={accentColor} />
          ))}
        </ul>
      </div>

    </div>
  );
}