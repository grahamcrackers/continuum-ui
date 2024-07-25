import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const StampIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M48 8V4h-6c0 2.209-.9 2-2 2s-2 .209-2-2h-4c0 2.209-.9 2.4-2 2.4s-2-.191-2-2.4h-4c0 2.209-.9 2.4-2 2.4s-2-.191-2-2.4h-4c0 2.209-.9 2.4-2 2.4s-2-.191-2-2.4h-4c0 2.209-.9 2.4-2 2.4S6 6.209 6 4H0v4c2.209 0 2.4.9 2.4 2s-.191 2-2.4 2v4c2.209 0 2.4.9 2.4 2s-.191 2-2.4 2v4c2.209 0 2.4.9 2.4 2s-.191 2-2.4 2v4c2.209 0 2.4.9 2.4 2s-.191 2-2.4 2v4h6c0-2.209.9-2.4 2-2.4s2 .191 2 2.4h4c0-2.209.9-2.4 2-2.4s2 .191 2 2.4h4c0-2.209.9-2.4 2-2.4s2 .191 2 2.4h4c0-2.209.9-2.4 2-2.4s2 .191 2 2.4h4c0-2.209.9-2.4 2-2.4s2 .191 2 2.4h6v-4c-2.209 0-2-.9-2-2s-.209-2 2-2v-4c-2.209 0-2.4-.9-2.4-2s.191-2 2.4-2v-4c-2.209 0-2.4-.9-2.4-2s.191-2 2.4-2v-4c-2.209 0-2.4-.9-2.4-2s.191-2 2.4-2ZM18 32h-4V16h-2v-4h6Zm18-7a7 7 0 0 1-14 0v-6a7 7 0 0 1 14 0Z" />
                <path d="M32 19a3 3 0 0 0-6 0v6a3 3 0 0 0 6 0Z" />
                <path d="M32 19a3 3 0 0 0-6 0v6a3 3 0 0 0 6 0Z" />
            </svg>
        );
    },
);
