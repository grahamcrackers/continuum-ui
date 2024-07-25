import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SelectSubtractIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M4 14h4v8H4zM4 26h4v8H4zM16 26h4v8h-4zM44 6a2 2 0 0 0-2-2h-4v4h2v2h4ZM26 4h8v4h-8zM26 16h8v4h-8zM14 4h8v4h-8zM8 8h2V4H6a2 2 0 0 0-2 2v4h4ZM20 20h2v-4h-4a2 2 0 0 0-2 2v4h4ZM8 40v-2H4v4a2 2 0 0 0 2 2h4v-4ZM16 40v-2h4v4a2 2 0 0 1-2 2h-4v-4ZM40 16v-2h4v4a2 2 0 0 1-2 2h-4v-4Z" />
            </svg>
        );
    },
);
