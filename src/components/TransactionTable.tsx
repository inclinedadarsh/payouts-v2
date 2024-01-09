import { TransactionTableProps } from "@/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { infoIcon, triangleDown } from "@/assets/icons";

const TransactionTable = ({
    className,
    transactions,
    isSearching,
    searchValue,
    ...props
}: TransactionTableProps) => {
    return (
        <table className={cn(className, "block")} {...props}>
            <thead className='bg-background-2 rounded px-3 py-[10px] block'>
                <tr className='grid grid-cols-4 gap-10'>
                    <th className='font-medium text-left text-sm text-text-2'>
                        Order ID
                    </th>
                    <th className='font-medium text-sm text-text-2 flex items-center gap-1'>
                        Order date{" "}
                        <Image src={triangleDown} alt='Triangle Down' />
                    </th>
                    <th className='font-medium text-right text-sm text-text-2 '>
                        Order amount
                    </th>
                    <th className='font-medium text-sm text-text-2 flex gap-1 items-center justify-end'>
                        Transaction fees{" "}
                        <Image src={infoIcon} alt='Info icon' />
                    </th>
                </tr>
            </thead>
            <tbody className='block'>
                {!isSearching &&
                    transactions.map((transaction, index) => (
                        <tr
                            key={index}
                            className={`grid grid-cols-4 gap-10 px-3 py-[10px] text-text text-sm hover:bg-background-2/50 ${
                                index !== transactions.length - 1 &&
                                "border-b border-background-3"
                            }`}
                        >
                            <td className='text-left text-primary font-medium'>
                                #{transaction.id}
                            </td>
                            <td className='text-left'>
                                {new Date(transaction.orderDate).toLocaleString(
                                    "en-US",
                                    {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    }
                                )}
                            </td>
                            <td className='text-right'>
                                ₹{transaction.orderAmount.toLocaleString()}
                            </td>
                            <td className='text-right'>
                                ₹{transaction.transactionFees.toLocaleString()}
                            </td>
                        </tr>
                    ))}
                {isSearching &&
                    searchValue &&
                    transactions
                        .filter((transaction) =>
                            transaction.id
                                .toString()
                                .includes(searchValue?.toString())
                        )
                        .map((transaction, index) => (
                            <tr
                                key={index}
                                className={`grid grid-cols-4 gap-10 px-3 py-[10px] text-text text-sm hover:bg-background-2/50 ${
                                    index !== transactions.length - 1 &&
                                    "border-b border-background-3"
                                }`}
                            >
                                <td className='text-left text-primary font-medium'>
                                    #{transaction.id}
                                </td>
                                <td className='text-left'>
                                    {new Date(
                                        transaction.orderDate
                                    ).toLocaleString("en-US", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </td>
                                <td className='text-right'>
                                    ₹{transaction.orderAmount.toLocaleString()}
                                </td>
                                <td className='text-right'>
                                    ₹
                                    {transaction.transactionFees.toLocaleString()}
                                </td>
                            </tr>
                        ))}
            </tbody>
        </table>
    );
};

export default TransactionTable;
