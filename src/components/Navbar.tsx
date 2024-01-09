"use client";

import { helpIcon, menuDropdown, menuMessage } from "@/assets/icons";
import { cn } from "@/lib/utils";
import { NavbarProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import Search from "./ui/Search";
import { useState } from "react";

const Navbar = ({ className, ...props }: NavbarProps) => {
    const [searchValue, setSearchValue] = useState<string>("");

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    return (
        <nav
            className={cn(
                className,
                "px-8 py-[10px] flex justify-between gap-4 border-b-2 border-border"
            )}
            {...props}
        >
            <div className='flex gap-4 items-center grow'>
                <h1 className=''>Payments</h1>
                <span className='flex gap-1.5 text-text-2 text-[13px]'>
                    <Image src={helpIcon} alt='Help icon' /> How it works
                </span>
            </div>
            <Search
                placeholder='Search features, tutorials, etc.'
                variant='nav'
                searchValue={searchValue}
                handleSearchValue={handleSearch}
            />
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
