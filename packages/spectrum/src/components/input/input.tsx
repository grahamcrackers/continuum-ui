import * as React from "react";
import { cn } from "@continuum-ui/utils";
import type { VariantProps } from "class-variance-authority";

import { inputVariants } from "./variants";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & VariantProps<typeof inputVariants>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, size, type, ...props }, ref) => {
    return <input type={type} className={cn(inputVariants({ size, className }))} ref={ref} {...props} />;
});
Input.displayName = "Input";

export { Input };
