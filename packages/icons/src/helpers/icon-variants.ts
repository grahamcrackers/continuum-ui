import { cva } from "class-variance-authority";

export const iconVariants = cva("spectrum-Icon", {
    variants: {
        size: {
            sm: "spectrum-Icon--sizeS",
            md: "spectrum-Icon--sizeM",
            lg: "spectrum-Icon--sizeL",
            xl: "spectrum-Icon--sizeXL",
        },
    },
    defaultVariants: {
        size: "md",
    },
});
