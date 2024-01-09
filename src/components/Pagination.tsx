import { chevronLeft, chevronRight } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";

const Pagination = () => {
    return (
        <div className='flex items-center gap-6 justify-center mt-6'>
            <button className='p-1.5 pr-3 border border-border rounded text-sm font-medium text-text-2 flex items-center hover:bg-background focus-visible:bg-background gap-1.5'>
                <Image src={chevronLeft} alt='Left Chevron' />
                Previous
            </button>
            <div className='flex gap-2'>
                <Link
                    className='text-sm w-7 h-7 flex justify-center items-center rounded hover:bg-background-2'
                    href='#'
                >
                    1
                </Link>
                <span className='w-7 h-7 flex justify-center items-center'>
                    ...
                </span>
                <Link
                    className='text-sm w-7 h-7 flex justify-center items-center rounded bg-primary text-white'
                    href='#'
                >
                    10
                </Link>
                <Link
                    className='text-sm w-7 h-7 flex justify-center items-center rounded hover:bg-background-2'
                    href='#'
                >
                    11
                </Link>
                <Link
                    className='text-sm w-7 h-7 flex justify-center items-center rounded hover:bg-background-2'
                    href='#'
                >
                    12
                </Link>
                <Link
                    className='text-sm w-7 h-7 flex justify-center items-center rounded hover:bg-background-2'
                    href='#'
                >
                    13
                </Link>
                <Link
                    className='text-sm w-7 h-7 flex justify-center items-center rounded hover:bg-background-2'
                    href='#'
                >
                    14
                </Link>
                <Link
                    className='text-sm w-7 h-7 flex justify-center items-center rounded hover:bg-background-2'
                    href='#'
                >
                    15
                </Link>
                <Link
                    className='text-sm w-7 h-7 flex justify-center items-center rounded hover:bg-background-2'
                    href='#'
                >
                    16
                </Link>
                <Link
                    className='text-sm w-7 h-7 flex justify-center items-center rounded hover:bg-background-2'
                    href='#'
                >
                    17
                </Link>
                <Link
                    className='text-sm w-7 h-7 flex justify-center items-center rounded hover:bg-background-2'
                    href='#'
                >
                    18
                </Link>
            </div>
            <button className='p-1.5 pl-3 border border-border rounded text-sm font-medium text-text-2 flex items-center hover:bg-background focus-visible:bg-background gap-1.5'>
                Next
                <Image src={chevronRight} alt='Right Chevron' />
            </button>
        </div>
    );
};

export default Pagination;
