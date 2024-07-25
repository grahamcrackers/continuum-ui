import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SelectAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M4 14h4v8H4zM40 26h4v8h-4zM32 6a2 2 0 0 0-2-2h-4v4h2v2h4ZM44 18a2 2 0 0 0-2-2h-4v4h2v2h4ZM20 30a2 2 0 0 0-2-2h-4v4h2v2h4ZM14 4h8v4h-8zM26 40h8v4h-8zM8 8h2V4H6a2 2 0 0 0-2 2v4h4ZM8 28v-2H4v4a2 2 0 0 0 2 2h4v-4ZM20 40v-2h-4v4a2 2 0 0 0 2 2h4v-4ZM32 16v-2h-4v4a2 2 0 0 0 2 2h4v-4ZM40 40v-2h4v4a2 2 0 0 1-2 2h-4v-4Z" />
            </svg>
        );
    },
);
