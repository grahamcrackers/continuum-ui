import { cva } from "class-variance-authority";

/*
    There's some weird padding calculations that push everything up.... in order to combat this for now,
    we can override the padding calculation with
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
            sm: "spectrum-Textfield--sizeS py-1",
            md: "spectrum-Textfield--sizeM py-2",
            lg: "spectrum-Textfield--sizeL py-2",
            xl: "spectrum-Textfield--sizeXL py-3",
        },
    },
    defaultVariants: {
        // variant: "accent",
        size: "md",
    },
});
