import { cva } from "class-variance-authority";

/*
    @reference https://github.com/adobe/spectrum-css/blob/main/components/button/index.css
*/
export const inputVariants = cva("spectrum-Textfield-input", {
    variants: {
        // variant: {
        //     accent: "bg-accent hover:bg-accent-hover focus-visible:bg-accent-focus spectrum-",
        //     destructive: "bg-negative text-destructive-foreground hover:bg-destructive/90",
        //     outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        //     secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        //     ghost: "hover:bg-accent hover:text-accent-foreground",
        //     link: "text-primary underline-offset-4 hover:underline",
        // },
        size: {
            sm: "spectrum-Textfield--sizeS",
            md: "spectrum-Textfield--sizeM",
            lg: "spectrum-Textfield--sizeL",
            xl: "spectrum-Textfield--sizeXL",
        },
    },
    defaultVariants: {
        // variant: "accent",
        size: "md",
    },
});
