"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";

interface NavItemProps {
  label: string;
	href?: string;
};

const NavItem: React.FC<NavItemProps> = ({
  label,
	href
}) => {
  const pathname = usePathname();

	const isActive = href ? pathname === `/${href}` : pathname === "/";

  return ( 
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
			<Link
				key={label}
				href={href? href: '/'}  
				className={cn(
					"text-lg font-bold transition-colors hover:text-[#201F53]",
					isActive ? "text-[#201F53]" : "text-[#494883]"
				)}
			>
				{label}
			</Link>
    </nav>
   );
}
 
export default NavItem;