import { cva } from "class-variance-authority";

export const tableVariants = cva("spectrum-Table", {
    variants: {
        // variant: {
        //     accent: "spectrum-Button--accent",
        //     outline: "spectrum-Button--outline",
        //     negative: "spectrum-Button--negative",
        //     primary: "spectrum-Button--primary",
        //     secondary: "spectrum-Button--secondary",
        //     white: "spectrum-Button--staticWhite",
        //     black: "spectrum-Button--staticBlack",
        //     link: "text-primary underline-offset-4 hover:underline",
        //     icon: "spectrum-Button--iconOnly",
        // },
        // fill: {
        //     fill: "spectrum-Button--fill",
        //     outline: "spectrum-Button--outline",
        // },
        spacing: {
            compact: "spectrum-Table--compact",
            spacious: "spectrum-Table--spacious"
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
    },
});

export const tableHeadVariants = cva("spectrum-Table-headCell", {
    variants: {
        sortable: {
            true: "is-sortable"
        },
        direction: {
            asc: "is-sorted-asc",
            desc: "is-sorted-desc"
        }
    },
    defaultVariants: {
        sortable: false
    },
});
