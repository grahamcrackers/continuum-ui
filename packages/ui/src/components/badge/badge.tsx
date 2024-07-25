import type * as React from "react";
import { cn } from "@continuum-ui/utils";
import { cva, type VariantProps } from "class-variance-authority";

// const badgeVariants = cva(
//     "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
//     {
//         variants: {
//             variant: {
//                 default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
//                 secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
//                 destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
//                 outline: "text-foreground",
//             },
//         },
//         defaultVariants: {
//             variant: "default",
//         },
//     },
// );

// export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

// function Badge({ className, variant, ...props }: BadgeProps) {
//     return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
// }

// need to come back to support cjk
/**
 * TODO:
 *
 * - fix these styles to support cjk
 *      min-block-size: var(--mod-badge-height, var(--spectrum-badge-height));
 *      padding-inline-start => ps-[var]
 *      padding-inline-end => pe-[var]
 * - support icons inside of badge
 * - allow for color names?
 * - move badge label variants to inside span
 * - move badge icon variants to inside span
 *
 * - standardize all variables through tailwind config
 */

const badgeVariants = cva(
    [
        "inline-flex align-middle relative items-center rounded py-0.5 font-medium transition-colors",
        "subpixel-antialiased select-none border-transparent text-white text-sm",
    ],
    {
        variants: {
            variant: {
                default: "bg-neutral-subdued",
                accent: "bg-accent",
                informative: "bg-informative",
                negative: "bg-negative",
                positive: "bg-positive",
                notice: "bg-notice",
            },
            size: {
                sm: "min-h-[var(--component-height-75)] text-xs px-[var(--component-edge-to-text-75)]",
                md: "min-h-[var(--component-height-100)] text-sm px-[var(--component-edge-to-text-100)]",
                lg: "min-h-[var(--component-height-200)] text-md px-[var(--component-edge-to-text-200)]",
                xl: "min-h-[var(--component-height-300)] text-lg px-[var(--component-edge-to-text-300)]",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "md",
        },
    },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant, size }), className)} {...props} tabIndex={-1}>
            {typeof props.children === "string" ? <span>{props.children}</span> : props.children}
        </div>
    );
}

export { Badge, badgeVariants };
