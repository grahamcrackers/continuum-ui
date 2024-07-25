import { cva } from "class-variance-authority";

/*
    @reference https://github.com/adobe/spectrum-css/blob/main/components/button/index.css
*/
export const dividerVariants = cva("spectrum-Divider", {
    variants: {
        variant: {
            white: "spectrum-Divider--staticWhite",
            black: "spectrum-Divider--staticBlack",
        },
        orientation: {
            horizontal: "",
            vertical: "spectrum-Divider--vertical",
        },
        size: {
            sm: "spectrum-Divider--sizeS",
            md: "spectrum-Divider--sizeM",
            lg: "spectrum-Divider--sizeL",
        },
    },
    defaultVariants: {
        orientation: "horizontal",
        size: "md",
    },
});
