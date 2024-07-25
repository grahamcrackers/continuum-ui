import { cva } from "class-variance-authority";

/** 
    @reference https://github.com/adobe/spectrum-css/blob/main/components/button/index.css
*/
export const buttonVariants = cva("spectrum-Button", {
    variants: {
        variant: {
            accent: "spectrum-Button--accent",
            outline: "spectrum-Button--outline",
            negative: "spectrum-Button--negative",
            primary: "spectrum-Button--primary",
            secondary: "spectrum-Button--secondary",
            white: "spectrum-Button--staticWhite",
            black: "spectrum-Button--staticBlack",
            link: "text-primary underline-offset-4 hover:underline",
            icon: "spectrum-Button--iconOnly",
        },
        fill: {
            fill: "spectrum-Button--fill",
            outline: "spectrum-Button--outline",
        },
        size: {
            sm: "spectrum-Button--sizeS",
            md: "spectrum-Button--sizeM",
            lg: "spectrum-Button--sizeL",
            xl: "spectrum-Button--sizeXL",
        },
    },
    defaultVariants: {
        variant: "accent",
        fill: "fill",
        size: "md",
    },
});
