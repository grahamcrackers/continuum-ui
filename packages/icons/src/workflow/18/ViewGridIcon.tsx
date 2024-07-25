import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ViewGridIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M10 10H2V3a1 1 0 0 1 1-1h7ZM14 2h8v8h-8zM34 10h-8V2h7a1 1 0 0 1 1 1ZM2 14h8v8H2zM14 14h8v8h-8zM26 14h8v8h-8zM10 34H3a1 1 0 0 1-1-1v-7h8ZM14 26h8v8h-8zM33 34h-7v-8h8v7a1 1 0 0 1-1 1Z" />
            </svg>
        );
    },
);
