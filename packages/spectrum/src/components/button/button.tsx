import { cn } from "@continuum-ui/utils";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps } from "class-variance-authority";
import * as React from "react";
import "./button-theme.css";
import "./button.css";
import { buttonVariants } from "./variants";


export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, fill, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp className={cn(buttonVariants({ variant, fill, size, className }))} ref={ref} {...props}>
                {typeof props.children === "string" ? <span>{props.children}</span> : props.children}
            </Comp>
        );
    },
);
Button.displayName = "Button";

export { Button, buttonVariants };
