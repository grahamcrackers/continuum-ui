import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const MoneyIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M4 16H2a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2v-2H4Z" />
                <path d="M10 10H8a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h34a2 2 0 0 0 2-2v-2H10Z" />
                <path d="M45.789 6H14.211A2.211 2.211 0 0 0 12 8.211v19.578A2.211 2.211 0 0 0 14.211 30h31.578A2.211 2.211 0 0 0 48 27.789V8.211A2.211 2.211 0 0 0 45.789 6ZM20 26a4 4 0 0 0-4-4v-8a4 4 0 0 0 4-4h20a4 4 0 0 0 4 4v8a4 4 0 0 0-4 4Z" />
                <circle cx="30" cy="18" r="6" />
            </svg>
        );
    },
);
