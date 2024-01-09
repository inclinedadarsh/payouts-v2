import { cn } from "@/lib/utils";
import { OverviewProps } from "@/types";
import { arrowDown } from "@/assets/icons";
import Button from "./ui/Button";

const Overview = ({ className, ...props }: OverviewProps) => {
    return (
        <div className={cn(className, "space-y-6")} {...props}>
            <div className='flex justify-between'>
                <h2 className='text-xl font-medium'>Overview</h2>
                <Button
                    variant='outline'
                    icon={arrowDown}
                    iconPosition='right'
                    className='bg-white hover:bg-white/60 text-base font-normal'
                >
                    Last Month
                </Button>
            </div>
            <div className='flex gap-5'>
                <div className='bg-white rounded-lg space-y-4 p-5 flex-1 shadow-overview-card'>
                    <p className='text-text-2'>Online orders</p>
                    <p className='text-[32px] font-medium'>231</p>
                </div>
                <div className='bg-white rounded-lg space-y-4 p-5 flex-1 shadow-overview-card'>
                    <p className='text-text-2'>Amount received</p>
                    <p className='text-[32px] font-medium'>₹23,92,312.19</p>
                </div>
            </div>
        </div>
    );
};

export default Overview;
