import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GraphBarVerticalStackedIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="4" rx="1" ry="1" width="44" y="40" />
                <path d="M14 32h8v6h-8zM34 20h8v18h-8zM24 30h8v8h-8zM4 34h8v4H4zM32 22v6h-8v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2ZM12 30v2H4v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2ZM42 6v12h-8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2ZM22 26v4h-8v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z" />
            </svg>
        );
    },
);
