import { cn } from "@/lib/utils";
import { ButtonProps } from "@/types";
import Image from "next/image";

const Button = ({
    children,
    className,
    variant = "primary",
    size = "normal",
    icon,
    iconPosition = "left",
    stretch = false,
    ...props
}: ButtonProps) => {
    return (
        <button
            className={cn(
                "py-1.5 px-3 rounded text-sm font-medium flex items-center justify-center gap-1.5",
                variant === "outline" &&
                    "border border-border hover:bg-background focus-visible:bg-background text-text-2",
                variant === "primary" && "bg-primary text-white",
                variant === "ghost" &&
                    "bg-transparent hover:bg-background-2 font-normal",
                size === "icon" && "h-9 w-9 p-0",
                size === "sm" && "h-7 w-7",
                stretch && "w-full",
                className
            )}
            {...props}
        >
            {icon && iconPosition === "left" && (
                <Image src={icon} alt='Button icon' />
            )}
            {children}
            {icon && iconPosition === "right" && (
                <Image src={icon} alt='Button icon' />
            )}
        </button>
    );
};

export default Button;
