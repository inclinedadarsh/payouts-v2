import { cn } from "@/lib/utils";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

const Sidebar = ({ className, ...props }: SidebarProps) => {
    return <div className={cn(className, "")}>Sidebar</div>;
};

export default Sidebar;
