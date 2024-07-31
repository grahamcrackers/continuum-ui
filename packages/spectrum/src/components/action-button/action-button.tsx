
import { cn } from "@continuum-ui/utils";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps } from "class-variance-authority";
import * as React from "react";

import { actionButtonVariants } from "./variants";
import { CornerTriangle100Icon } from "@continuum-ui/icons/ui/medium";

export interface ActionButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof actionButtonVariants> {
    asChild?: boolean;
    hold?: boolean;
}

const ActionButton = React.forwardRef<HTMLButtonElement, ActionButtonProps>(
    ({ className, variant, size, emphasized, asChild = false, hold = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp className={cn(actionButtonVariants({ variant, size, emphasized, className }))} ref={ref} {...props}>
                {typeof props.children === "string" ? <span className="spectrum-ActionButton-label">{props.children}</span> : props.children}
                {hold && <CornerTriangle100Icon className="spectrum-UIIcon-CornerTriangle100 spectrum-ActionButton-hold" />}
            </Comp>
        );
    },
);
ActionButton.displayName = "ActionButton";

export { ActionButton };
