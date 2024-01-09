import { TransactionsProps } from "@/types";
import { cn } from "@/lib/utils";
import { downloadIcon, searchIcon, sortIcon } from "@/assets/icons";

import Image from "next/image";
import TransactionTable from "./TransactionTable";
import { ORDERS } from "@/constants";
import Pagination from "./Pagination";
import Button from "./ui/Button";
import Search from "./ui/Search";

const Transactions = ({ className, ...props }: TransactionsProps) => {
    return (
        <div className={cn(className, "space-y-5")} {...props}>
            <h2 className='text-xl font-medium'>Transactions | This Month</h2>
            <div className='p-3 bg-white rounded-lg pb-6 shadow-overview-card'>
                <div className='flex justify-between items-center'>
                    <Search placeholder='Search by order ID...' size='sm' />
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
                        S
                    </div>
                </div>
                <TransactionTable transactions={ORDERS} className='mt-3' />
                <Pagination />
            </div>
        </div>
    );
};

export default Transactions;
