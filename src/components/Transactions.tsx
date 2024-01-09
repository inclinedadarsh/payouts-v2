import { TransactionsProps } from "@/types";
import { cn } from "@/lib/utils";
import { downloadIcon, searchIcon, sortIcon } from "@/assets/icons";

import Image from "next/image";
import TransactionTable from "./TransactionTable";
import { ORDERS } from "@/constants";
import Pagination from "./Pagination";
import Button from "./ui/Button";

const Transactions = ({ className, ...props }: TransactionsProps) => {
    return (
        <div className={cn(className, "space-y-5")} {...props}>
            <h2 className='text-xl font-medium'>Transactions | This Month</h2>
            <div className='p-3 bg-white rounded-lg pb-6 shadow-overview-card'>
                <div className='flex justify-between items-center'>
                    <div className='flex px-4 py-[10px] gap-2 max-w-[248px] rounded border border-border focus-within:border-primary items-center grow'>
                        <Image src={searchIcon} alt='Search Icon' />
                        <input
                            type='text'
                            placeholder='Search by order ID...'
                            className='placeholder:text-text-3 placeholder:text-sm grow bg-transparent outline-none'
                        />
                    </div>
                    <div className='flex gap-3'>
                        <Button
                            icon={sortIcon}
                            iconPosition='right'
                            variant='outline'
                            className='text-base h-9 font-medium'
                        >
                            Sort
                        </Button>
                        <Button variant='outline' size='icon'>
                            <Image src={downloadIcon} alt='Download Icon' />
                        </Button>
                    </div>
                </div>
                <TransactionTable transactions={ORDERS} className='mt-3' />
                <Pagination />
            </div>
        </div>
    );
};

export default Transactions;
