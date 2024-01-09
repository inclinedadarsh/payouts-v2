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
