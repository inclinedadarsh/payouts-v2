import { chevronLeft, chevronRight } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";

const Pagination = () => {
    return (
        <div className='flex items-center gap-6 justify-center mt-6'>
            <Button
                variant='outline'
                icon={chevronLeft}
                iconPosition='left'
                className='pl-1.5'
            >
                Previous
            </Button>
            <div className='flex gap-2'>
                <Button variant='ghost' size='sm'>
                    1
                </Button>
                <span className='w-7 h-7 flex justify-center items-center'>
                    ...
                </span>
                <Button size='sm'>10</Button>
                <Button variant='ghost' size='sm'>
                    11
                </Button>
                <Button variant='ghost' size='sm'>
                    12
                </Button>
                <Button variant='ghost' size='sm'>
                    13
                </Button>
                <Button variant='ghost' size='sm'>
                    14
                </Button>
                <Button variant='ghost' size='sm'>
                    15
                </Button>
                <Button variant='ghost' size='sm'>
                    16
                </Button>
                <Button variant='ghost' size='sm'>
                    17
                </Button>
                <Button variant='ghost' size='sm'>
                    18
                </Button>
            </div>
            <Button
                variant='outline'
                icon={chevronRight}
                iconPosition='right'
                className='pr-1.5'
            >
                Next
            </Button>
        </div>
    );
};

export default Pagination;
