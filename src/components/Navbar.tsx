import {
    helpIcon,
    menuDropdown,
    menuMessage,
    searchIcon,
} from "@/assets/icons";
import { cn } from "@/lib/utils";
import { NavbarProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ className, ...props }: NavbarProps) => {
    return (
        <nav
            className={cn(
                className,
                "px-8 py-3 flex justify-between gap-4 border-b-2 border-border"
            )}
            {...props}
        >
            <div className='flex gap-4 items-center grow'>
                <h1 className=''>Payments</h1>
                <span className='flex gap-1.5 text-text-2 text-[13px]'>
                    <Image src={helpIcon} alt='Help icon' /> How it works
                </span>
            </div>
            <div className='flex px-4 py-[9px] gap-2 max-w-[400px] bg-background-2 rounded-md outline-2 focus-within:outline focus-within:outline-primary hover:bg-background-3 items-center grow'>
                <Image src={searchIcon} alt='Search Icon' />
                <input
                    type='text'
                    placeholder='Search features, tutorials, etc.'
                    className='placeholder:text-text-3 placeholder:text-sm grow bg-transparent outline-none'
                />
            </div>
            <div className='flex gap-3 grow justify-end'>
                <Link href='#'>
                    <Image src={menuMessage} alt='Message Icon' />
                </Link>
                <Link href='#'>
                    <Image src={menuDropdown} alt='Dropdown Icon' />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
