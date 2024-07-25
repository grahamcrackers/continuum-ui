import * as React from "react";
import { cn } from "@continuum-ui/utils";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import type { VariantProps } from "class-variance-authority";

import { dividerVariants } from "./variants";

import "./divider.css";

export const Divider = React.forwardRef<
    React.ElementRef<typeof SeparatorPrimitive.Root> & VariantProps<typeof dividerVariants>,
    React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> & VariantProps<typeof dividerVariants>
>(({ className, variant, size, orientation = "horizontal", decorative = true, ...props }, ref) => (
    <SeparatorPrimitive.Root
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        className={cn(dividerVariants({ className, variant, size, orientation }))}
        {...props}
    />
));
Divider.displayName = SeparatorPrimitive.Root.displayName;
