import { SearchProps } from "@/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { searchIcon, searchSmallIcon } from "@/assets/icons";

const Search = ({
    className,
    placeholder,
    size = "normal",
    variant = "default",
}: SearchProps) => {
    return (
        <div
            className={cn(
                "flex px-4 py-[9px] gap-2 rounded-md outline-1 focus-within:outline focus-within:outline-primary grow items-center",
                size === "normal" && "max-w-[400px]",
                size === "sm" && "max-w-[248px]",
                variant === "default" &&
                    "bg-transparent hover:bg-background-2 border border-border",
                variant === "nav" && "bg-background-2 hover:bg-background-3",
                variant === className
            )}
        >
            <Image
                src={size === "normal" ? searchIcon : searchSmallIcon}
                alt='Search Icon'
            />
            <input
                type='text'
                placeholder={placeholder}
                className={cn(
                    "placeholder:text-sm grow bg-transparent outline-none",
                    variant === "nav" && "placeholder:text-text-3",
                    variant === "default" && "placeholder:text-text-4"
                )}
            />
        </div>
    );
};

export default Search;
