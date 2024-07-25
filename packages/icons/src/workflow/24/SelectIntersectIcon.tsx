import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SelectIntersectIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M4 14h4v8H4zM40 26h4v8h-4zM32 6a2 2 0 0 0-2-2h-4v4h2v4h4ZM44 18a2 2 0 0 0-2-2h-6v4h4v2h4ZM14 4h8v4h-8zM16 28h4v4h-4zM16 22h4v4h-4zM20 20v-4h-2a2 2 0 0 0-2 2v2ZM22 16h4v4h-4zM22 22h4v4h-4zM22 28h4v4h-4zM32 30v-2h-4v4h2a2 2 0 0 0 2-2ZM28 22h4v4h-4zM28 16h4v4h-4zM26 40h8v4h-8zM8 8h2V4H6a2 2 0 0 0-2 2v4h4ZM8 28v-2H4v4a2 2 0 0 0 2 2h6v-4ZM20 40v-4h-4v6a2 2 0 0 0 2 2h4v-4ZM40 40v-2h4v4a2 2 0 0 1-2 2h-4v-4Z" />
            </svg>
        );
    },
);
