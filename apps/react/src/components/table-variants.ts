import { cva } from "class-variance-authority";

export const tableVariants = cva("spectrum-Table", {
    variants: {
        variant: {
            compact: "spectrum-Table--compact",
            spacious: "spectrum-Table--spacious",
        },
        emphasized: {
            true: "spectrum-Table--emphasized",
        },
        scrollable: {
            true: "spectrum-Table-scroller",
        },
        quiet: {
            true: "spectrum-Table--quiet",
        },
        size: {
            sm: "spectrum-Table--sizeS",
            md: "spectrum-Table--sizeM",
            lg: "spectrum-Table--sizeL",
            xl: "spectrum-Table--sizeXL",
        },
    },
    defaultVariants: {
        size: "md",
        emphasized: true,
    },
});
