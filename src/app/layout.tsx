import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Payouts V2 - Assignement",
    description: "This is assignment code for My Dukaan App.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body
                className={`${inter.className} grid grid-rows-2 grid-cols-layout`}
            >
                <Sidebar className='hover:bg-[#0f0] row-span-2 w-[224px] col-span-1' />
                <Navbar />
                {children}
            </body>
        </html>
    );
}
