import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TableRowMergeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M2 3v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1Zm30 21v8h-8v-8Zm-10 0v8h-8v-8Zm-10 0v8H4v-8Zm0-10v8H4v-8ZM32 4v8h-8V4ZM22 4v8h-8V4ZM12 4v8H4V4Z" />
            </svg>
        );
    },
);
