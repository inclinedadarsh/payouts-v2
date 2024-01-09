import { StaticImageData } from "next/image";

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
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
