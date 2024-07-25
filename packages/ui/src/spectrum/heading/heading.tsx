import React from "react";
import { cn } from "@continuum-ui/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import "./heading.css";

const headingVariants = cva("spectrum-Heading", {
    variants: {
        size: {
            xxs: "spectrum-Heading--sizeXXS",
            xs: "spectrum-Heading--sizeXS",
            sm: "spectrum-Heading--sizeS",
            md: "spectrum-Heading--sizeM",
            lg: "spectrum-Heading--sizeL",
            xl: "spectrum-Heading--sizeXL",
            xxl: "spectrum-Heading--sizeXXL",
            xxxl: "spectrum-Heading--sizeXXL",
        },
        italic: { true: "italic" },
        heavy: { true: "spectrum-Heading--heavy" },
    },
    defaultVariants: {
        size: "md",
        italic: false,
    },
});

const getHeadingSlot = ({ size }: HeadingProps) => {
    if (!size) return "h3";
    if (size === "xxs") return "h6";
    if (size === "xs") return "h5";
    if (size === "sm") return "h4";
    if (size === "md") return "h3";
    if (size === "lg") return "h2";
    return "h1";
};

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
    asChild?: boolean;
}

// react-aria-components defaults to h3
const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
    ({ className, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : getHeadingSlot({ size });
        return <Comp className={cn(headingVariants({ size, className }))} ref={ref} {...props} />;
    },
);
Heading.displayName = "Heading";

export { Heading, headingVariants };
