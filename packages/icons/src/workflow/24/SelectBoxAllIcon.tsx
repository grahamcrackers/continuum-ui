import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SelectBoxAllIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M39.5 14h-21a4.5 4.5 0 0 0-4.5 4.5v21a4.5 4.5 0 0 0 4.5 4.5h21a4.5 4.5 0 0 0 4.5-4.5v-21a4.5 4.5 0 0 0-4.5-4.5Zm1.542 10.82-14.82 14.819a1 1 0 0 1-1.414 0l-7.85-7.848a1 1 0 0 1 0-1.414l3.113-3.113a1 1 0 0 1 1.414 0l4.03 4.036 11-11a1 1 0 0 1 1.414 0l3.113 3.113a1 1 0 0 1 0 1.407Z" />
                <path d="M10 10h26V8.8A4.8 4.8 0 0 0 31.2 4H8.8A4.8 4.8 0 0 0 4 8.8v22.4A4.8 4.8 0 0 0 8.8 36H10Z" />
            </svg>
        );
    },
);
