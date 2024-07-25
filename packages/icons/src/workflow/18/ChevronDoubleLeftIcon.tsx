import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ChevronDoubleLeftIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M6 18a1.988 1.988 0 0 0 .585 1.409l7.983 7.98a2 2 0 1 0 2.871-2.772l-.049-.049L10.819 18l6.572-6.57a2 2 0 0 0-2.773-2.87l-.049.049-7.983 7.98A1.988 1.988 0 0 0 6 18Z" />
                <path d="M18 18a1.988 1.988 0 0 0 .585 1.409l7.983 7.98a2 2 0 1 0 2.871-2.772l-.049-.049L22.819 18l6.572-6.57a2 2 0 0 0-2.773-2.87l-.049.049-7.983 7.98A1.988 1.988 0 0 0 18 18Z" />
            </svg>
        );
    },
);
