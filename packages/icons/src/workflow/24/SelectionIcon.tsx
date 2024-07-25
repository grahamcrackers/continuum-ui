import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SelectionIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M14 4h8v4h-8zM14 40h8v4h-8zM26 4h8v4h-8zM26 40h8v4h-8zM6 4a2 2 0 0 0-2 2v4h4V8h2V4ZM4 14h4v8H4zM4 26h4v8H4zM8 40v-2H4v4a2 2 0 0 0 2 2h4v-4ZM42 4h-4v4h2v2h4V6a2 2 0 0 0-2-2ZM40 14h4v8h-4zM40 40h-2v4h4a2 2 0 0 0 2-2v-4h-4ZM40 26h4v8h-4z" />
            </svg>
        );
    },
);
