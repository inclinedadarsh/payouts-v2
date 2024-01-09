import { StaticImageData } from "next/image";

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export interface OverviewProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export interface TransactionsProps
    extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export interface TransactionTableProps
    extends React.HTMLAttributes<HTMLTableElement> {
    className?: string;
    transactions: OrderType[];
}

export type SidebarLinks = {
    name: activeLink;
    icon: {
        outline: StaticImageData;
        solid: StaticImageData;
    };
};

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: React.ReactNode;
    variant?: "primary" | "outline" | "ghost";
    size?: "normal" | "icon" | "sm";
    icon?: StaticImageData;
    iconPosition?: "left" | "right";
    stretch?: boolean;
}

export type activeLink =
    | "Home"
    | "Orders"
    | "Products"
    | "Delivery"
    | "Marketing"
    | "Analytics"
    | "Payments"
    | "Tools"
    | "Discount"
    | "Audience"
    | "Appearance"
    | "Plugins";

export type OrderType = {
    id: number;
    orderDate: string;
    orderAmount: number;
    transactionFees: number;
};
