import { cva } from "class-variance-authority";
import Arrow100Icon from "./Arrow100Icon";
import { cn } from "@continuum-ui/utils";


interface SortIconProps {
    direction: "asc" | "desc";
}

export const sortIconVariants = cva("spectrum-Icon spectrum-Table-sortedIcon", {
    variants: {
        sortable: {
            true: "is-sortable"
        }
    },
    defaultVariants: {},
});

export const SortIcon = () => {
    
    return <Arrow100Icon className={cn("spectrum-Icon spectrum-UIIcon-ArrowDown300 spectrum-Table-sortedIcon")}/>
}
