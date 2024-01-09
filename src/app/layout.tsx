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
                className={`${inter.className} text-text grid grid-rows-layout grid-cols-layout`}
            >
                <Sidebar className='row-span-2' />
                <Navbar className='' />
                {children}
            </body>
        </html>
    );
}
