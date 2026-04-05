interface BenefitItemProps {
  label: string;
  checkColor?: string;
  checkColorHex?: string;
}

export function BenefitItem({
  label,
  checkColor = "text-white",
}: BenefitItemProps) {
  return (
    <li className="flex items-center gap-3 text-sm sm:text-base text-white/75">
      <svg
        className={`w-5 h-5 shrink-0 ${checkColor}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
      {label}
    </li>
  );
}