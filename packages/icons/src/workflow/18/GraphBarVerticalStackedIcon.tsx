import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GraphBarVerticalStackedIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="2" rx=".5" ry=".5" width="34" y="32" />
                <path d="M10 24h6v6h-6zM26 16h6v14h-6zM2 26h6v4H2zM18 20h6v10h-6zM24 11v7h-6v-7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1ZM32 3v11h-6V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1ZM16 19v3h-6v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1ZM8 21v3H2v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1Z" />
            </svg>
        );
    },
);
