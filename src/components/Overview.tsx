import { cn } from "@/lib/utils";
import { OverviewProps } from "@/types";
import { arrowDown } from "@/assets/icons";

const Overview = ({ className, ...props }: OverviewProps) => {
    return (
        <div className={cn(className, "space-y-8")} {...props}>
            <div className='flex justify-between'>
                <h2 className='text-xl font-medium'>Overview</h2>
                <select className='appearance-none px-[14px] py-1.5 bg-white border border-border rounded text-text-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary'>
                    <option>Last week</option>
                    <option>Lasy month</option>
                    <option>Last year</option>
                </select>
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
