import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ChevronDoubleRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="36"
                viewBox="0 0 36 36"
                width="36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M30 18a1.988 1.988 0 0 1-.585 1.409l-7.983 7.98a2 2 0 1 1-2.871-2.772l.049-.049L25.181 18l-6.572-6.57a2 2 0 0 1 2.773-2.87l.049.049 7.983 7.98A1.988 1.988 0 0 1 30 18Z" />
                <path d="M18 18a1.988 1.988 0 0 1-.585 1.409l-7.983 7.98a2 2 0 1 1-2.872-2.77l.049-.049L13.181 18l-6.572-6.57a2 2 0 0 1 2.774-2.87l.049.049 7.983 7.98A1.988 1.988 0 0 1 18 18Z" />
            </svg>
        );
    },
);
