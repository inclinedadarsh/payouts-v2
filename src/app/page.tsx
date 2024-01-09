import Overview from "@/components/Overview";
import Transactions from "@/components/Transactions";

export default function Home() {
    return (
        <main className='text-text bg-background space-y-8 px-8 pb-8'>
            <Overview className='mt-8' />
            <Transactions className='' />
        </main>
    );
}
