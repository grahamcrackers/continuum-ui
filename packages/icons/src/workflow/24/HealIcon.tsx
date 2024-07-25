import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const HealIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 0 48 48"
                width="48"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M43.637 4.363a8 8 0 0 0-11.313 0l-8.609 8.608L4.363 32.324a8 8 0 1 0 11.313 11.313l7.93-7.93 20.031-20.031a8 8 0 0 0 0-11.313ZM29.625 20.508a2.934 2.934 0 1 1-2.933 2.934 2.934 2.934 0 0 1 2.933-2.934Zm-5.063-5.062a2.933 2.933 0 1 1-2.933 2.933 2.934 2.934 0 0 1 2.933-2.933ZM24 26.133a2.934 2.934 0 1 1-2.934 2.934A2.934 2.934 0 0 1 24 26.133Zm-5.063-5.062A2.934 2.934 0 1 1 16 24a2.934 2.934 0 0 1 2.933-2.929Z" />
            </svg>
        );
    },
);
