import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TableSelectRowIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M33 2H3a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM22 4v6h-8V4ZM4 4h8v6H4Zm0 28v-6h8v6Zm10 0v-6h8v6Zm18 0h-8v-6h8Zm-2-10H6v-8h24Zm2-12h-8V4h8Z" />
            </svg>
        );
    },
);
