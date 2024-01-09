"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { SidebarProps, activeLink } from "@/types";
import Image from "next/image";

import { userImage } from "@/assets";
import { chevronDown, walletIcon } from "@/assets/icons";
import { SIDEBAR_LINKS } from "@/constants";
import Link from "next/link";

const Sidebar = ({ className, ...props }: SidebarProps) => {
    const [activeLink, setActiveLink] = useState<activeLink>("Payments");

    const handleActiveLink = (link: activeLink) => {
        setActiveLink(link);
    };

    return (
        <div
            className={cn(
                className,
                "min-h-screen bg-sidebar px-2.5 py-4 text-white flex flex-col justify-between"
            )}
            {...props}
        >
            <div className='space-y-6'>
                <div className='flex gap-3 items-center px-2 hover:bg-white/10 py-1 rounded-md'>
                    <Image src={userImage} alt='User Image' />
                    <div className='grow'>
                        <h2 className='font-medium'>Nishyan</h2>
                        <Link
                            href='#'
                            className='underline opacity-80 text-sm underline-offset-2 hover:no-underline'
                        >
                            Visit store
                        </Link>
                    </div>
                    <Image
                        src={chevronDown}
                        alt='chevron down icon'
                        className='hover:cursor-pointer'
                    />
                </div>
                <div className='space-y-1'>
                    {SIDEBAR_LINKS.map((link, index) => (
                        <button
                            key={index}
                            className={`flex px-4 py-2 rounded text-sm text-white/80 font-medium gap-3 hover:bg-white/10 w-full ${
                                activeLink === link.name && "bg-white/10"
                            }`}
                            onClick={() => handleActiveLink(link.name)}
                        >
                            <Image
                                src={
                                    activeLink === link.name
                                        ? link.icon.solid
                                        : link.icon.outline
                                }
                                alt={link.name}
                            />
                            <span>{link.name}</span>
                        </button>
                    ))}
                </div>
            </div>
            <div className='bg-sidebar-2 px-3 py-1.5 flex gap-3 items-center rounded hover:cursor-pointer'>
                <div className='flex items-center justify-center p-1.5 bg-white/10 rounded'>
                    <Image src={walletIcon} alt='Wallet' />
                </div>
                <div className='flex flex-col gap-0.5'>
                    <span className='text-white/80 text-[13px]'>
                        Available credits
                    </span>
                    <span className='font-medium'>222.10</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
