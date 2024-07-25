import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SelectionCheckedIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M14 4h8v4h-8zM26 4h8v4h-8zM40 10h4V6a2 2 0 0 0-2-2h-4v4h2ZM40 14v6.506a15.928 15.928 0 0 1 4 1.642V14ZM20.506 40H14v4h8.148a15.928 15.928 0 0 1-1.642-4ZM4 6v4h4V8h2V4H6a2 2 0 0 0-2 2ZM4 14h4v8H4zM8 38H4v4a2 2 0 0 0 2 2h4v-4H8ZM4 26h4v8H4zM36 24a12 12 0 1 0 12 12 12 12 0 0 0-12-12Zm7.791 8.561L35.534 42.67a1 1 0 0 1-1.474.081l-5.86-5.746a1 1 0 0 1-.014-1.415l1.541-1.572A1 1 0 0 1 31.136 34l3.364 3.3 6.039-7.394a1 1 0 0 1 1.407-.142l1.7 1.391a1 1 0 0 1 .145 1.406Z" />
            </svg>
        );
    },
);
