import { cva } from "class-variance-authority";

export const actionButtonVariants = cva("spectrum-ActionButton", {
    variants: {
        variant: {
            quiet: "spectrum-ActionButton--quiet",
        },
        emphasized: {
            true: "spectrum-ActionButton--emphasized",
        },
        size: {
            sm: "spectrum-ActionButton--sizeS",
            md: "spectrum-ActionButton--sizeM",
            lg: "spectrum-ActionButton--sizeL",
            xl: "spectrum-ActionButton--sizeXL",
        },
    },
    defaultVariants: {
        size: "md",
    },
});

