import * as React from "react";
import { cn } from "@continuum-ui/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import "./button-theme.css";

/* 
    questionable decisions...
    vertical-align: top ???
*/
const baseButtonStyles =
    "spectrum-Button cursor-pointer select-none relative overflow-visible inline-flex items-center justify-center align-top ease-out focus-visible:outline-none rounded-";

/*
    @reference https://github.com/adobe/spectrum-css/blob/main/components/button/index.css
*/
const buttonVariants = cva(
    [
        baseButtonStyles,
        "rounded-full whitespace-nowrap text-white text-md ring-offset-background transition-colors leading-[1.2]",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-30 transition active:scale-90 ease-in-out duration-100",
    ],
    {
        variants: {
            variant: {
                accent: "bg-accent hover:bg-accent-hover focus-visible:bg-accent-focus spectrum-",
                destructive: "bg-negative text-destructive-foreground hover:bg-destructive/90",
                outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                sm: "h-9 px-3 min-w-btn-sm",
                md: "h-10 px-4 py-2 min-w-btn-md",
                lg: "h-11 px-8 min-w-btn-lg",
                xl: "min-w-btn-xl",
                icon: "",
            },
            hasIcon: {},
        },
        defaultVariants: {
            variant: "accent",
            size: "md",
        },
    },
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
                {typeof props.children === "string" ? (
                    <span className="self-center justify-self-center">{props.children}</span>
                ) : (
                    props.children
                )}
            </Comp>
        );
    },
);
Button.displayName = "Button";

export { Button, buttonVariants };
