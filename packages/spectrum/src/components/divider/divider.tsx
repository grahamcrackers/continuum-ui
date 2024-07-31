import * as React from "react";
import { cn } from "@continuum-ui/utils";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import type { VariantProps } from "class-variance-authority";

import { dividerVariants } from "./variants";

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

// --spectrum-corner-triangle-icon-size-75: 5px; /* original: 5px */
// --spectrum-corner-triangle-icon-size-100: 5px; /* original: 5px */
// --spectrum-corner-triangle-icon-size-200: 6px; /* original: 6px */
// --spectrum-corner-triangle-icon-size-300: 7px; /* original: 7px */
